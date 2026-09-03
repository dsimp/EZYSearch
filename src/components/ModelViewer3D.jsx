import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Eye, Sun, Box, RotateCcw, Maximize2, Sparkles, Check, Info, MousePointer, Focus, Scan } from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';
import { ARCHETYPE_PARTS, APERTURE_MATERIALS } from '../data/partCatalog';

export default function ModelViewer3D({
  infrastructure,
  selectedPartMaterials,
  activePartId,
  onSelectPart,
  materialsList,
  isCompact = false
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const groupRef = useRef(null);
  const partMeshesRef = useRef({});

  const [isWireframe, setIsWireframe] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [isIsolatedFocus, setIsIsolatedFocus] = useState(true); // Center Stage Focus mode
  const [sunAngle, setSunAngle] = useState(45);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  const [hoveredPartName, setHoveredPartName] = useState(null);

  const allMaterials = [...materialsList, ...APERTURE_MATERIALS];

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 460;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.022);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
    camera.position.set(18, 15, 22);
    camera.lookAt(0, 2.5, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Grid Floor
    const gridHelper = new THREE.GridHelper(40, 40, 0x333333, 0x181818);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Polar Rings
    const circleGeo = new THREE.RingGeometry(11.9, 12, 64);
    const circleMat = new THREE.MeshBasicMaterial({ color: 0x2a2a2a, side: THREE.DoubleSide });
    const circleMesh = new THREE.Mesh(circleGeo, circleMat);
    circleMesh.rotation.x = Math.PI / 2;
    circleMesh.position.y = 0.01;
    scene.add(circleMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xfff7ea, 2.0);
    sunLight.position.set(16, 26, 16);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    const d = 16;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x4477bb, 0.6);
    rimLight.position.set(-15, 12, -15);
    scene.add(rimLight);

    // Main Archetype Model Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    groupRef.current = rootGroup;

    buildArchetypeGeometry(infrastructure, selectedPartMaterials, isWireframe, rootGroup, partMeshesRef);

    // Raycasting for direct part clicking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let isDragging = false;
    let dragDistance = 0;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e) => {
      isDragging = true;
      dragDistance = 0;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);

      if (isDragging) {
        const deltaX = clientX - previousMousePosition.x;
        const deltaY = clientY - previousMousePosition.y;
        dragDistance += Math.abs(deltaX) + Math.abs(deltaY);

        if (rootGroup) {
          rootGroup.rotation.y += deltaX * 0.008;
        }
      }

      // Check Hover
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(rootGroup.children, true);

      if (intersects.length > 0) {
        let topMesh = intersects[0].object;
        while (topMesh.parent && !topMesh.userData?.partId && topMesh.parent !== rootGroup) {
          topMesh = topMesh.parent;
        }
        if (topMesh.userData?.partName) {
          setHoveredPartName(topMesh.userData.partName);
        }
      } else {
        setHoveredPartName(null);
      }

      previousMousePosition = { x: clientX, y: clientY };
    };

    const handlePointerUp = (e) => {
      if (dragDistance < 8) {
        const clientX = e.clientX || (e.changedTouches && e.changedTouches[0]?.clientX);
        const clientY = e.clientY || (e.changedTouches && e.changedTouches[0]?.clientY);

        if (clientX !== undefined && clientY !== undefined) {
          const rect = renderer.domElement.getBoundingClientRect();
          mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
          mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects(rootGroup.children, true);

          if (intersects.length > 0) {
            let hitObj = intersects[0].object;
            while (hitObj.parent && !hitObj.userData?.partId && hitObj.parent !== rootGroup) {
              hitObj = hitObj.parent;
            }
            if (hitObj.userData?.partId) {
              playSelectTone();
              onSelectPart(hitObj.userData.partId);
            }
          }
        }
      }
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
        rootGroup.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight || 460;
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
  }, [infrastructure.id]);

  useEffect(() => {
    if (!groupRef.current) return;
    buildArchetypeGeometry(infrastructure, selectedPartMaterials, isWireframe, groupRef.current, partMeshesRef);
  }, [selectedPartMaterials, isWireframe, infrastructure]);

  // Center Stage Focus & Explode Animation Controller
  useEffect(() => {
    const meshes = partMeshesRef.current;
    if (!meshes) return;

    Object.keys(meshes).forEach((partId) => {
      const partObj = meshes[partId];
      if (!partObj) return;

      const isSelected = partId === activePartId;

      if (isExploded) {
        // Explode Mode: All pieces expand outward
        const offset = partObj.userData?.explodeOffset || { x: 0, y: 0, z: 0 };
        partObj.position.set(offset.x * 2.2, offset.y * 2.4, offset.z * 2.2);
        partObj.scale.set(1, 1, 1);
        restorePartOpacity(partObj);

      } else if (isIsolatedFocus && activePartId) {
        // CENTER STAGE FOCUS MODE
        if (isSelected) {
          // Selected part floats forward to center stage and scales slightly up
          const pullDir = partObj.userData?.pullDirection || { x: 0, y: 1.2, z: 1.5 };
          partObj.position.set(pullDir.x * 1.8, pullDir.y * 1.6, pullDir.z * 1.8);
          partObj.scale.set(1.08, 1.08, 1.08);

          partObj.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.transparent = false;
              child.material.opacity = 1.0;
              child.material.emissive = new THREE.Color(0x334422);
              child.material.emissiveIntensity = 0.5;
            }
          });
        } else {
          // Other parts fade into subtle blueprint ghost
          partObj.position.set(0, 0, 0);
          partObj.scale.set(0.98, 0.98, 0.98);

          partObj.traverse((child) => {
            if (child.isMesh && child.material) {
              child.material.transparent = true;
              child.material.opacity = 0.18;
              child.material.emissive = new THREE.Color(0x000000);
              child.material.emissiveIntensity = 0;
            }
          });
        }
      } else {
        // Standard Full Building View
        partObj.position.set(0, 0, 0);
        partObj.scale.set(1, 1, 1);
        restorePartOpacity(partObj);
      }
    });
  }, [activePartId, isExploded, isIsolatedFocus]);

  function restorePartOpacity(partObj) {
    partObj.traverse((child) => {
      if (child.isMesh && child.material) {
        const isGlass = child.userData?.isGlass;
        child.material.transparent = isGlass ? true : false;
        child.material.opacity = isGlass ? 0.45 : 1.0;
        child.material.emissive = new THREE.Color(0x000000);
        child.material.emissiveIntensity = 0;
      }
    });
  }

  function buildArchetypeGeometry(infra, partConfig, wireframe, parentGroup, partMeshMap) {
    while (parentGroup.children.length > 0) {
      const obj = parentGroup.children[0];
      parentGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }

    partMeshMap.current = {};

    const getPartMat = (partId, fallbackColor = 0x888888) => {
      const matId = partConfig[partId];
      const mat = allMaterials.find((m) => m.id === matId);
      
      const isGlass = matId === 'triple_glazed_glass' || matId === 'smart_solar_glass';
      const color = mat ? parseInt(mat.colorHex.replace('#', '0x')) : fallbackColor;

      if (isGlass) {
        const glassMat = new THREE.MeshPhysicalMaterial({
          color: color,
          transparent: true,
          opacity: matId === 'smart_solar_glass' ? 0.65 : 0.4,
          roughness: 0.1,
          metalness: 0.1,
          transmission: 0.85,
          ior: 1.5,
          wireframe: wireframe
        });
        glassMat.userData = { isGlass: true };
        return glassMat;
      }

      return new THREE.MeshStandardMaterial({
        color: color,
        roughness: 0.85,
        metalness: 0.1,
        wireframe: wireframe,
        flatShading: true
      });
    };

    const attachPart = (partId, partName, group, pullDir = { x: 0, y: 1.0, z: 1.0 }, explodeOffset = { x: 0, y: 0, z: 0 }) => {
      group.userData = { partId, partName, pullDirection: pullDir, explodeOffset: explodeOffset };
      group.traverse((child) => {
        child.userData = { ...child.userData, partId, partName };
      });
      parentGroup.add(group);
      partMeshMap.current[partId] = group;
    };

    if (infra.id === 'yzy_mono_dome') {
      // 1. DOME BASE
      const baseGroup = new THREE.Group();
      const baseMat = getPartMat('dome_base', 0x777777);
      const plinthMesh = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.7, 0.6, 32), baseMat);
      plinthMesh.position.y = 0.3;
      plinthMesh.receiveShadow = true;
      baseGroup.add(plinthMesh);
      attachPart('dome_base', 'SUBGRADE PLINTH', baseGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. DOME SHELL
      const shellGroup = new THREE.Group();
      const shellMat = getPartMat('dome_shell', 0xDDDDC0);
      const domeMesh = new THREE.Mesh(new THREE.SphereGeometry(5.8, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2), shellMat);
      domeMesh.position.y = 0.6;
      domeMesh.castShadow = true;
      domeMesh.receiveShadow = true;
      shellGroup.add(domeMesh);
      attachPart('dome_shell', 'DOME ENVELOPE SHELL', shellGroup, { x: 0, y: 1.8, z: 0 }, { x: 0, y: 2.0, z: 0 });

      // 3. SKYLIGHT OCULUS
      const oculusGroup = new THREE.Group();
      const oculusMat = getPartMat('dome_window_oculus', 0x68A5BA);
      const oculusMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 0.35, 24), oculusMat);
      oculusMesh.position.y = 6.35;
      oculusGroup.add(oculusMesh);
      attachPart('dome_window_oculus', 'SKYLIGHT OCULUS', oculusGroup, { x: 0, y: 3.0, z: 0 }, { x: 0, y: 5.5, z: 0 });

      // 4. PORTAL TUNNEL
      const portalGroup = new THREE.Group();
      const portalMat = getPartMat('dome_portal_tunnel', 0xA07855);
      const portalMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.2, 3.8), portalMat);
      portalMesh.position.set(0, 2.0, 5.2);
      portalMesh.castShadow = true;
      portalGroup.add(portalMesh);
      attachPart('dome_portal_tunnel', 'ENTRANCE TUNNEL', portalGroup, { x: 0, y: 0.5, z: 3.5 }, { x: 0, y: 0, z: 4.8 });

      // 5. UTILITIES
      const utilGroup = new THREE.Group();
      const utilMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8, roughness: 0.2 });
      const solarMesh = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.1, 1.8), utilMat);
      solarMesh.position.set(-4.8, 0.65, -3.8);
      solarMesh.rotation.x = 0.3;
      utilGroup.add(solarMesh);
      attachPart('dome_utilities', 'OFF-GRID UTILITY POD', utilGroup, { x: -2.5, y: 0, z: -2.5 }, { x: -4.5, y: 0, z: -4.5 });

    } else if (infra.id === 'rammed_earth_villa') {
      // 1. FOUNDATION
      const fGroup = new THREE.Group();
      const fMat = getPartMat('villa_foundation', 0x7A7A78);
      const fMesh = new THREE.Mesh(new THREE.BoxGeometry(10.5, 0.5, 7.5), fMat);
      fMesh.position.set(0, 0.25, 0);
      fGroup.add(fMesh);
      attachPart('villa_foundation', 'FOUNDATION SLAB', fGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. SOUTH WALL
      const sGroup = new THREE.Group();
      const sMat = getPartMat('villa_south_wall', 0xA07855);
      const sMesh = new THREE.Mesh(new THREE.BoxGeometry(9.0, 3.8, 0.8), sMat);
      sMesh.position.set(0, 2.4, 3.0);
      sMesh.castShadow = true;
      sGroup.add(sMesh);
      attachPart('villa_south_wall', 'SOUTH WALL ENVELOPE', sGroup, { x: 0, y: 0.5, z: 3.2 }, { x: 0, y: 0, z: 4.5 });

      // 3. NORTH WALL
      const nGroup = new THREE.Group();
      const nMat = getPartMat('villa_north_wall', 0xA07855);
      const nMesh = new THREE.Mesh(new THREE.BoxGeometry(9.0, 3.8, 0.8), nMat);
      nMesh.position.set(0, 2.4, -3.0);
      nMesh.castShadow = true;
      nGroup.add(nMesh);
      attachPart('villa_north_wall', 'NORTH SHIELD WALL', nGroup, { x: 0, y: 0.5, z: -3.2 }, { x: 0, y: 0, z: -4.5 });

      // 4. SIDE WALLS
      const sideGroup = new THREE.Group();
      const sideMat = getPartMat('villa_side_walls', 0xA07855);
      const eastMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.8, 5.2), sideMat);
      eastMesh.position.set(4.1, 2.4, 0);
      const westMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.8, 5.2), sideMat);
      westMesh.position.set(-4.1, 2.4, 0);
      sideGroup.add(eastMesh);
      sideGroup.add(westMesh);
      attachPart('villa_side_walls', 'EAST & WEST SIDE WALLS', sideGroup, { x: 3.0, y: 0.5, z: 0 }, { x: 4.5, y: 0, z: 0 });

      // 5. ROOF SLAB
      const rGroup = new THREE.Group();
      const rMat = getPartMat('villa_roof_cantilever', 0xC9A066);
      const rMesh = new THREE.Mesh(new THREE.BoxGeometry(11.8, 0.45, 9.0), rMat);
      rMesh.position.set(0, 4.5, 0);
      rMesh.castShadow = true;
      rGroup.add(rMesh);
      attachPart('villa_roof_cantilever', 'MASS TIMBER ROOF', rGroup, { x: 0, y: 2.8, z: 0 }, { x: 0, y: 4.8, z: 0 });

      // 6. WINDOW PORTAL
      const wGroup = new THREE.Group();
      const wMat = getPartMat('villa_window_portal', 0x68A5BA);
      const wMesh = new THREE.Mesh(new THREE.BoxGeometry(4.0, 3.2, 0.2), wMat);
      wMesh.position.set(0, 2.1, 3.45);
      wGroup.add(wMesh);
      attachPart('villa_window_portal', 'PATIO WINDOW PORTAL', wGroup, { x: 0, y: 0.8, z: 3.5 }, { x: 0, y: 0, z: 5.5 });

      // 7. UTILITIES
      const uGroup = new THREE.Group();
      const uMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8, roughness: 0.2 });
      const sPanels = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.1, 3.2), uMat);
      sPanels.position.set(0, 4.9, 0);
      sPanels.rotation.x = -0.15;
      uGroup.add(sPanels);
      attachPart('villa_utilities', 'SOLAR PERGOLA SUITE', uGroup, { x: 0, y: 3.2, z: 0 }, { x: 0, y: 6.0, z: 0 });

    } else {
      const parts = ARCHETYPE_PARTS[infra.id] || ARCHETYPE_PARTS.yzy_mono_dome;
      parts.forEach((p, idx) => {
        const pGroup = new THREE.Group();
        const pMat = getPartMat(p.id, 0x888888);
        const yPos = 1.2 + idx * 1.6;
        const mesh = new THREE.Mesh(new THREE.BoxGeometry(7.0 - idx * 0.6, 1.4, 7.0 - idx * 0.6), pMat);
        mesh.position.y = yPos;
        mesh.castShadow = true;
        pGroup.add(mesh);
        attachPart(p.id, p.name, pGroup, { x: 0, y: 1.2, z: 1.5 }, { x: 0, y: idx * 1.8, z: 0 });
      });
    }
  }

  // Resize on isCompact change
  useEffect(() => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
    const newWidth = containerRef.current.clientWidth;
    const newHeight = containerRef.current.clientHeight;
    cameraRef.current.aspect = newWidth / newHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(newWidth, newHeight);
  }, [isCompact]);

  return (
    <div className={`relative w-full transition-all duration-300 ${isCompact ? 'h-52 sm:h-60 md:h-72 shadow-2xl ring-1 ring-yzy-bone/40' : 'h-80 sm:h-96 md:h-[480px]'} bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />

      {/* Top Left: Active Part Indicator Badge */}
      <div className="absolute top-3 left-3 flex flex-col gap-1 pointer-events-none">
        <div className="flex items-center gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-1.5 border border-yzy-bone/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-white uppercase font-bold">
            {activePartId ? `CENTER STAGE: ${activePartId.toUpperCase().replace(/_/g, ' ')}` : 'TAP ANY PART IN 3D TO PULL & INSPECT'}
          </span>
        </div>
        {hoveredPartName && (
          <span className="font-mono text-[9px] text-yzy-ash bg-yzy-black/80 px-2 py-0.5 border border-yzy-slate/60 w-fit">
            HOVER: {hoveredPartName}
          </span>
        )}
      </div>

      {/* Top Right: Sun Azimuth Slider */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-yzy-black/85 backdrop-blur-md px-2.5 py-1.5 border border-yzy-slate text-[11px] font-mono">
        <Sun className="w-3.5 h-3.5 text-yzy-warning" />
        <span className="hidden sm:inline text-yzy-ash text-[10px]">SUN:</span>
        <input
          type="range"
          min="0"
          max="360"
          value={sunAngle}
          onChange={(e) => setSunAngle(Number(e.target.value))}
          className="w-16 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"
        />
        <span className="text-yzy-chalk w-6 text-right text-[10px]">{sunAngle}°</span>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-2 border border-yzy-slate shadow-2xl z-10">
        {/* Toggle Center Stage Focus Mode */}
        <button
          onClick={() => {
            playTactileClick();
            setIsIsolatedFocus(!isIsolatedFocus);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${
            isIsolatedFocus
              ? 'bg-yzy-bone text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white hover:bg-yzy-slate/60'
          }`}
          title="Pull and isolate the selected part in the center of the screen"
        >
          <Focus className="w-3.5 h-3.5" />
          <span>{isIsolatedFocus ? 'CENTER STAGE ACTIVE' : 'FULL BUILDING VIEW'}</span>
        </button>

        {/* Explode Mode */}
        <button
          onClick={() => {
            playTactileClick();
            setIsExploded(!isExploded);
          }}
          className={`flex items-center gap-1.5 px-2 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${
            isExploded
              ? 'bg-yzy-neon text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white hover:bg-yzy-slate/60'
          }`}
        >
          <Layers className="w-3.5 h-3.5" />
          <span>EXPLODE</span>
        </button>

        {/* Wireframe */}
        <button
          onClick={() => {
            playTactileClick();
            setIsWireframe(!isWireframe);
          }}
          className={`px-2 py-1.5 font-mono text-[10px] transition-all ${
            isWireframe ? 'text-yzy-neon font-bold bg-yzy-slate/60' : 'text-yzy-ash hover:text-white'
          }`}
        >
          CAD
        </button>

        {/* Turntable */}
        <button
          onClick={() => {
            playTactileClick();
            setIsAutoRotate(!isAutoRotate);
          }}
          className={`px-2 py-1.5 font-mono text-[10px] transition-all ${
            isAutoRotate ? 'text-white' : 'text-yzy-ash hover:text-white'
          }`}
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
        </button>
      </div>
    </div>
  );
}
