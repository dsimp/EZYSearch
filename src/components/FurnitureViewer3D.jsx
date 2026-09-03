import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Box, Sun, Sparkles, Maximize2, Layers, AlertCircle } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function FurnitureViewer3D({
  selectedPiece,
  activeFinish,
  onSelectFinish
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const groupRef = useRef(null);

  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isWireframe, setIsWireframe] = useState(false);
  const [webglError, setWebglError] = useState(false);

  const finishes = [
    { id: 'raw_earth', name: 'RAW EARTH', colorHex: '#A07855', roughness: 0.9, metalness: 0.05 },
    { id: 'bone_chalk', name: 'BONE CHALK', colorHex: '#EAEAE6', roughness: 0.85, metalness: 0.05 },
    { id: 'obsidian_black', name: 'OBSIDIAN', colorHex: '#181818', roughness: 0.6, metalness: 0.2 },
    { id: 'amber_timber', name: 'MASS TIMBER', colorHex: '#C9A066', roughness: 0.7, metalness: 0.1 },
    { id: 'hemp_moss', name: 'HEMP MOSS', colorHex: '#8B9574', roughness: 0.95, metalness: 0.02 },
    { id: 'ocean_poly', name: 'OCEAN POLY', colorHex: '#2E4057', roughness: 0.5, metalness: 0.3 }
  ];

  const currentFinish = finishes.find((f) => f.id === activeFinish) || finishes[0];

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const width = containerRef.current.clientWidth || 340;
      const height = containerRef.current.clientHeight || 340;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);
      scene.fog = new THREE.FogExp2(0x0a0a0a, 0.035);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(4.5, 3.5, 5.0);
      camera.lookAt(0, 1.0, 0);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      containerRef.current.appendChild(renderer.domElement);

      // Studio Pedestal Floor
      const grid = new THREE.GridHelper(16, 16, 0x333333, 0x161616);
      grid.position.y = -0.01;
      scene.add(grid);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xfff7ea, 2.2);
      keyLight.position.set(5, 8, 5);
      keyLight.castShadow = true;
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(0x4466aa, 0.7);
      fillLight.position.set(-5, 4, -4);
      scene.add(fillLight);

      // Furniture Mesh Group
      const rootGroup = new THREE.Group();
      scene.add(rootGroup);
      groupRef.current = rootGroup;

      buildFurnitureGeometry(selectedPiece.id, currentFinish, isWireframe, rootGroup);

      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      const handlePointerDown = (e) => {
        isDragging = true;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        previousMousePosition = { x: clientX, y: clientY };
      };

      const handlePointerMove = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);

        const deltaX = clientX - previousMousePosition.x;
        if (rootGroup) {
          rootGroup.rotation.y += deltaX * 0.01;
        }
        previousMousePosition = { x: clientX, y: clientY };
      };

      const handlePointerUp = () => {
        isDragging = false;
      };

      const domElement = renderer.domElement;
      domElement.addEventListener('mousedown', handlePointerDown);
      domElement.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);

      domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
      domElement.addEventListener('touchmove', handlePointerMove, { passive: true });
      window.addEventListener('touchend', handlePointerUp);

      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        if (isAutoRotate && !isDragging && rootGroup) {
          rootGroup.rotation.y += 0.005;
        }
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight || 340;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mouseup', handlePointerUp);
        window.removeEventListener('touchend', handlePointerUp);
        domElement.removeEventListener('mousedown', handlePointerDown);
        domElement.removeEventListener('mousemove', handlePointerMove);
        domElement.removeEventListener('touchstart', handlePointerDown);
        domElement.removeEventListener('touchmove', handlePointerMove);
        renderer.dispose();
      };
    } catch (err) {
      console.error("Furniture WebGL error:", err);
      setWebglError(true);
    }
  }, [selectedPiece.id]);

  useEffect(() => {
    if (!groupRef.current) return;
    buildFurnitureGeometry(selectedPiece.id, currentFinish, isWireframe, groupRef.current);
  }, [activeFinish, isWireframe, selectedPiece]);

  function buildFurnitureGeometry(pieceId, finish, wireframe, parentGroup) {
    while (parentGroup.children.length > 0) {
      const obj = parentGroup.children[0];
      parentGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }

    const color = parseInt(finish.colorHex.replace('#', '0x'));
    const mat = new THREE.MeshStandardMaterial({
      color: color,
      roughness: finish.roughness,
      metalness: finish.metalness,
      wireframe: wireframe,
      flatShading: true
    });

    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.5,
      metalness: 0.8
    });

    if (pieceId === 'mycelium_lounge_chair') {
      const seatGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.4, 24);
      const seat = new THREE.Mesh(seatGeo, mat);
      seat.position.y = 0.6;
      seat.castShadow = true;
      parentGroup.add(seat);

      const backGeo = new THREE.CylinderGeometry(1.3, 1.3, 1.2, 24, 1, false, 0, Math.PI);
      const back = new THREE.Mesh(backGeo, mat);
      back.position.set(0, 1.2, -0.4);
      back.rotation.y = Math.PI / 2;
      back.castShadow = true;
      parentGroup.add(back);

      const baseGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.4, 16);
      const base = new THREE.Mesh(baseGeo, mat);
      base.position.y = 0.2;
      parentGroup.add(base);

    } else if (pieceId === 'rammed_earth_desk') {
      const topGeo = new THREE.BoxGeometry(3.6, 0.3, 1.8);
      const top = new THREE.Mesh(topGeo, mat);
      top.position.y = 1.4;
      top.castShadow = true;
      parentGroup.add(top);

      const leftLegGeo = new THREE.BoxGeometry(0.4, 1.3, 1.6);
      const leftLeg = new THREE.Mesh(leftLegGeo, mat);
      leftLeg.position.set(-1.5, 0.65, 0);
      leftLeg.castShadow = true;
      parentGroup.add(leftLeg);

      const rightLeg = new THREE.Mesh(leftLegGeo, mat);
      rightLeg.position.set(1.5, 0.65, 0);
      rightLeg.castShadow = true;
      parentGroup.add(rightLeg);

      const padGeo = new THREE.BoxGeometry(0.8, 0.05, 0.8);
      const pad = new THREE.Mesh(padGeo, accentMat);
      pad.position.set(1.0, 1.56, -0.2);
      parentGroup.add(pad);

    } else if (pieceId === 'clt_studio_workbench') {
      const topGeo = new THREE.BoxGeometry(4.0, 0.25, 2.0);
      const top = new THREE.Mesh(topGeo, mat);
      top.position.y = 1.35;
      top.castShadow = true;
      parentGroup.add(top);

      for (let x of [-1.7, 1.7]) {
        for (let z of [-0.8, 0.8]) {
          const legGeo = new THREE.BoxGeometry(0.25, 1.25, 0.25);
          const leg = new THREE.Mesh(legGeo, mat);
          leg.position.set(x, 0.62, z);
          leg.castShadow = true;
          parentGroup.add(leg);
        }
      }

    } else if (pieceId === 'hemp_acoustic_screen') {
      const panelGeo = new THREE.BoxGeometry(2.2, 3.2, 0.15);
      const panel = new THREE.Mesh(panelGeo, mat);
      panel.position.y = 1.65;
      panel.castShadow = true;
      parentGroup.add(panel);

      const baseGeo = new THREE.BoxGeometry(2.4, 0.1, 0.8);
      const base = new THREE.Mesh(baseGeo, accentMat);
      base.position.y = 0.05;
      parentGroup.add(base);

    } else if (pieceId === 'recycled_poly_stool') {
      const stoolGeo = new THREE.CylinderGeometry(0.65, 0.75, 1.1, 16);
      const stool = new THREE.Mesh(stoolGeo, mat);
      stool.position.y = 0.55;
      stool.castShadow = true;
      parentGroup.add(stool);

    } else if (pieceId === 'geopolymer_sink_counter') {
      const blockGeo = new THREE.BoxGeometry(2.6, 0.6, 1.4);
      const block = new THREE.Mesh(blockGeo, mat);
      block.position.y = 1.1;
      block.castShadow = true;
      parentGroup.add(block);

      const basinGeo = new THREE.BoxGeometry(1.4, 0.25, 0.9);
      const basin = new THREE.Mesh(basinGeo, accentMat);
      basin.position.set(0, 1.3, 0);
      parentGroup.add(basin);

      const baseGeo = new THREE.BoxGeometry(2.4, 0.8, 1.2);
      const base = new THREE.Mesh(baseGeo, mat);
      base.position.y = 0.4;
      parentGroup.add(base);

    } else if (pieceId === 'bamboo_daybed') {
      const platGeo = new THREE.BoxGeometry(4.0, 0.3, 2.8);
      const plat = new THREE.Mesh(platGeo, mat);
      plat.position.y = 0.25;
      plat.castShadow = true;
      parentGroup.add(plat);

      const matGeo = new THREE.BoxGeometry(3.6, 0.35, 2.4);
      const matMesh = new THREE.Mesh(matGeo, accentMat);
      matMesh.position.y = 0.55;
      parentGroup.add(matMesh);

    } else {
      const pedGeo = new THREE.CylinderGeometry(0.7, 0.7, 1.2, 6);
      const ped = new THREE.Mesh(pedGeo, mat);
      ped.position.y = 0.6;
      ped.castShadow = true;
      parentGroup.add(ped);
    }
  }

  if (webglError) {
    return (
      <div className="w-full h-64 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono">
        <AlertCircle className="w-8 h-8 text-yzy-warning mb-2" />
        <span className="font-bold text-white text-sm uppercase">3D PREVIEW UNAVAILABLE</span>
        <span className="text-xs text-yzy-ash max-w-sm mt-1">
          Select finishes and review piece specifications below.
        </span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-72 sm:h-80 md:h-96 bg-yzy-obsidian border border-yzy-slate overflow-hidden flex flex-col select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />

      {/* Top HUD */}
      <div className="absolute top-3 left-3 flex flex-col gap-0.5 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-white uppercase font-bold">
            3D STUDIO VIEW // {selectedPiece.name}
          </span>
        </div>
        <span className="font-mono text-[9px] text-yzy-ash">
          DRAG TO ROTATE 360° | FINISH: {currentFinish.name}
        </span>
      </div>

      {/* Finish Swapper Pills at Bottom Right */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md p-1.5 border border-yzy-slate z-10 overflow-x-auto max-w-[70%]">
        <span className="font-mono text-[8px] text-yzy-ash uppercase tracking-wider hidden sm:inline mr-1">
          FINISH:
        </span>
        {finishes.map((f) => (
          <button
            key={f.id}
            onClick={() => {
              playTactileClick();
              onSelectFinish(f.id);
            }}
            style={{ backgroundColor: f.colorHex }}
            className={`w-5 h-5 rounded-none border transition-all ${
              activeFinish === f.id ? 'ring-2 ring-white scale-110 border-white' : 'border-black/50 opacity-80 hover:opacity-100'
            }`}
            title={f.name}
          />
        ))}
      </div>

      {/* Bottom Left Controls */}
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2 py-1 border border-yzy-slate z-10 font-mono text-[10px]">
        <button
          onClick={() => {
            playTactileClick();
            setIsAutoRotate(!isAutoRotate);
          }}
          className={`px-1.5 py-0.5 ${isAutoRotate ? 'text-white' : 'text-yzy-ash'}`}
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
        </button>
        <button
          onClick={() => {
            playTactileClick();
            setIsWireframe(!isWireframe);
          }}
          className={`px-1.5 py-0.5 ${isWireframe ? 'text-yzy-neon font-bold' : 'text-yzy-ash'}`}
        >
          CAD
        </button>
      </div>
    </div>
  );
}
