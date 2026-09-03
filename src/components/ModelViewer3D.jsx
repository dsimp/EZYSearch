import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Eye, Sun, Box, RotateCcw, Maximize2, Sparkles } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function ModelViewer3D({
  infrastructure,
  selectedMaterials,
  activeLayer,
  materialsList
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const groupRef = useRef(null);
  const layersMeshGroupRef = useRef({});

  const [isWireframe, setIsWireframe] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [sunAngle, setSunAngle] = useState(45); // Sun azimuth
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  // Helper to find material by ID
  const getMaterialData = (matId) => {
    return materialsList.find((m) => m.id === matId) || materialsList[0];
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight || 420;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.025);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(16, 14, 20);
    camera.lookAt(0, 2, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Clear previous canvas
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    containerRef.current.appendChild(renderer.domElement);

    // Grid Floor / Blueprint Ground
    const gridHelper = new THREE.GridHelper(40, 40, 0x333333, 0x181818);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Polar circular reference rings (YZY aesthetic)
    const circleGeo = new THREE.RingGeometry(11.9, 12, 64);
    const circleMat = new THREE.MeshBasicMaterial({ color: 0x2a2a2a, side: THREE.DoubleSide });
    const circleMesh = new THREE.Mesh(circleGeo, circleMat);
    circleMesh.rotation.x = Math.PI / 2;
    circleMesh.position.y = 0.01;
    scene.add(circleMesh);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Directional Sunlight (Casts soft architectural shadows)
    const sunLight = new THREE.DirectionalLight(0xfff7ea, 1.8);
    sunLight.position.set(15, 25, 15);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 1024;
    sunLight.shadow.mapSize.height = 1024;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 60;
    const d = 15;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    scene.add(sunLight);

    // Subtle blue rim fill
    const rimLight = new THREE.DirectionalLight(0x4466aa, 0.6);
    rimLight.position.set(-15, 10, -15);
    scene.add(rimLight);

    // Main Archetype Model Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);
    groupRef.current = rootGroup;

    // Build Model Meshes
    buildArchetypeGeometry(infrastructure, selectedMaterials, isWireframe, rootGroup, layersMeshGroupRef);

    // Touch & Mouse Drag Rotation Handlers
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
      const deltaY = clientY - previousMousePosition.y;

      if (rootGroup) {
        rootGroup.rotation.y += deltaX * 0.008;
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

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (isAutoRotate && !isDragging && rootGroup) {
        rootGroup.rotation.y += 0.0025;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight || 420;
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

  // Update Geometry / Materials when configuration changes
  useEffect(() => {
    if (!groupRef.current) return;
    buildArchetypeGeometry(infrastructure, selectedMaterials, isWireframe, groupRef.current, layersMeshGroupRef);
  }, [selectedMaterials, isWireframe, infrastructure]);

  // Handle Explode Animation / Offsets
  useEffect(() => {
    const meshes = layersMeshGroupRef.current;
    if (!meshes) return;

    const explodeFactors = {
      foundation: isExploded ? -1.8 : 0,
      superstructure: isExploded ? 0 : 0,
      walls: isExploded ? 1.5 : 0,
      roof: isExploded ? 4.2 : 0,
      insulation: isExploded ? 2.8 : 0,
      utilities: isExploded ? -3.2 : 0
    };

    Object.keys(meshes).forEach((layerKey) => {
      const layerObj = meshes[layerKey];
      if (layerObj) {
        const targetY = explodeFactors[layerKey] || 0;
        layerObj.position.y = targetY;
      }
    });
  }, [isExploded]);

  // Handle Sun Angle
  useEffect(() => {
    if (!sceneRef.current) return;
    const sunLight = sceneRef.current.children.find((c) => c.isDirectionalLight && c.castShadow);
    if (sunLight) {
      const rad = (sunAngle * Math.PI) / 180;
      sunLight.position.x = Math.cos(rad) * 22;
      sunLight.position.z = Math.sin(rad) * 22;
    }
  }, [sunAngle]);

  // Highlight Active Layer
  useEffect(() => {
    const meshes = layersMeshGroupRef.current;
    if (!meshes) return;

    Object.keys(meshes).forEach((layerKey) => {
      const layerObj = meshes[layerKey];
      if (!layerObj) return;

      const isCurrentActive = layerKey === activeLayer;
      layerObj.traverse((child) => {
        if (child.isMesh && child.material) {
          if (isCurrentActive) {
            child.material.emissive = new THREE.Color(0x223322);
            child.material.emissiveIntensity = 0.5;
          } else {
            child.material.emissive = new THREE.Color(0x000000);
            child.material.emissiveIntensity = 0;
          }
        }
      });
    });
  }, [activeLayer]);

  // Geometry Builder for Archetypes
  function buildArchetypeGeometry(infra, matConfig, wireframe, parentGroup, layerMeshRefs) {
    // Clear existing
    while (parentGroup.children.length > 0) {
      const obj = parentGroup.children[0];
      parentGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }

    layerMeshRefs.current = {};

    const getMatColor = (layerKey) => {
      const matId = matConfig[layerKey];
      const mat = materialsList.find((m) => m.id === matId);
      return mat ? parseInt(mat.colorHex.replace('#', '0x')) : 0x888888;
    };

    const makeMat = (colorHex, roughness = 0.85, metalness = 0.1) => {
      return new THREE.MeshStandardMaterial({
        color: colorHex,
        roughness: roughness,
        metalness: metalness,
        wireframe: wireframe,
        flatShading: true
      });
    };

    // 1. FOUNDATION LAYER
    const foundationGroup = new THREE.Group();
    const foundationColor = getMatColor('foundation');
    const fMat = makeMat(foundationColor, 0.9, 0.05);

    const plinthGeo = new THREE.CylinderGeometry(
      infra.modelShape === 'dome' ? 6.2 : 8.5,
      infra.modelShape === 'dome' ? 6.5 : 8.8,
      0.6,
      infra.modelShape === 'dome' ? 32 : 4
    );
    const plinthMesh = new THREE.Mesh(plinthGeo, fMat);
    plinthMesh.position.y = 0.3;
    plinthMesh.receiveShadow = true;
    plinthMesh.castShadow = true;
    foundationGroup.add(plinthMesh);
    parentGroup.add(foundationGroup);
    layerMeshRefs.current.foundation = foundationGroup;

    // 2. SUPERSTRUCTURE & WALLS
    const wallsGroup = new THREE.Group();
    const superGroup = new THREE.Group();
    const wallColor = getMatColor('walls');
    const superColor = getMatColor('superstructure');
    const wMat = makeMat(wallColor, 0.95, 0.05);
    const sMat = makeMat(superColor, 0.7, 0.15);

    // 3. ROOF
    const roofGroup = new THREE.Group();
    const roofColor = getMatColor('roof');
    const rMat = makeMat(roofColor, 0.6, 0.2);

    // 4. UTILITIES
    const utilGroup = new THREE.Group();
    const uMat = makeMat(0x1a237e, 0.3, 0.8); // Solar cell blue

    if (infra.modelShape === 'dome') {
      // DOME SHELL (Catenary hemisphere)
      const domeGeo = new THREE.SphereGeometry(5.8, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
      const domeMesh = new THREE.Mesh(domeGeo, wMat);
      domeMesh.position.y = 0.6;
      domeMesh.castShadow = true;
      domeMesh.receiveShadow = true;
      wallsGroup.add(domeMesh);

      // Oculus Skylight on top (Glass/Steel ring)
      const oculusGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.3, 24);
      const oculusMat = makeMat(0x222222, 0.2, 0.8);
      const oculusMesh = new THREE.Mesh(oculusGeo, oculusMat);
      oculusMesh.position.y = 6.35;
      roofGroup.add(oculusMesh);

      // Entrance Portico (Brutalist Tunnel Entry)
      const portalGeo = new THREE.BoxGeometry(2.2, 3.2, 3.8);
      const portalMesh = new THREE.Mesh(portalGeo, sMat);
      portalMesh.position.set(0, 2.0, 5.0);
      portalMesh.castShadow = true;
      superGroup.add(portalMesh);

      // Solar Pod
      const solarGeo = new THREE.BoxGeometry(2.4, 0.1, 1.6);
      const solarMesh = new THREE.Mesh(solarGeo, uMat);
      solarMesh.position.set(-4.5, 0.65, -3.5);
      solarMesh.rotation.x = 0.3;
      utilGroup.add(solarMesh);

    } else if (infra.modelShape === 'cuboid_villa') {
      // RAMMED EARTH VILLA (Brutalist low-slung residence)
      // Main Mass
      const mainBlockGeo = new THREE.BoxGeometry(9.0, 3.8, 6.5);
      const mainBlockMesh = new THREE.Mesh(mainBlockGeo, wMat);
      mainBlockMesh.position.set(0, 2.5, 0);
      mainBlockMesh.castShadow = true;
      mainBlockMesh.receiveShadow = true;
      wallsGroup.add(mainBlockMesh);

      // Cantilever Overhang Roof Slab (CLT Mass Timber)
      const roofSlabGeo = new THREE.BoxGeometry(11.2, 0.5, 8.5);
      const roofSlabMesh = new THREE.Mesh(roofSlabGeo, rMat);
      roofSlabMesh.position.set(0, 4.65, 0);
      roofSlabMesh.castShadow = true;
      roofGroup.add(roofSlabMesh);

      // Structural Earth Columns / Fins
      for (let i = -4.5; i <= 4.5; i += 3.0) {
        const finGeo = new THREE.BoxGeometry(0.5, 4.4, 1.0);
        const finMesh = new THREE.Mesh(finGeo, sMat);
        finMesh.position.set(i, 2.5, 3.4);
        finMesh.castShadow = true;
        superGroup.add(finMesh);
      }

      // Rooftop Solar Array
      const solarGeo = new THREE.BoxGeometry(4.0, 0.1, 3.0);
      const solarMesh = new THREE.Mesh(solarGeo, uMat);
      solarMesh.position.set(0, 5.0, 0);
      solarMesh.rotation.x = -0.15;
      utilGroup.add(solarMesh);

    } else if (infra.modelShape === 'modular_block') {
      // 3-STORY MODULAR APARTMENT COMPLEX
      for (let level = 0; level < 3; level++) {
        const yOffset = 1.0 + level * 2.8;

        // 4 Interlocking Modules per level
        const moduleGeo = new THREE.BoxGeometry(4.2, 2.5, 4.2);

        const mod1 = new THREE.Mesh(moduleGeo, wMat);
        mod1.position.set(-2.5, yOffset, -2.5);
        mod1.castShadow = true;
        wallsGroup.add(mod1);

        const mod2 = new THREE.Mesh(moduleGeo, wMat);
        mod2.position.set(2.5, yOffset, -2.5);
        mod2.castShadow = true;
        wallsGroup.add(mod2);

        const mod3 = new THREE.Mesh(moduleGeo, wMat);
        mod3.position.set(-2.5, yOffset, 2.5);
        mod3.castShadow = true;
        wallsGroup.add(mod3);

        const mod4 = new THREE.Mesh(moduleGeo, wMat);
        mod4.position.set(2.5, yOffset, 2.5);
        mod4.castShadow = true;
        wallsGroup.add(mod4);

        // Floor / Ceiling CLT Slabs
        const floorGeo = new THREE.BoxGeometry(10.0, 0.3, 10.0);
        const floorMesh = new THREE.Mesh(floorGeo, sMat);
        floorMesh.position.set(0, yOffset + 1.4, 0);
        floorMesh.castShadow = true;
        superGroup.add(floorMesh);
      }

      // Roof Canopy
      const roofGeo = new THREE.BoxGeometry(11.0, 0.4, 11.0);
      const roofMesh = new THREE.Mesh(roofGeo, rMat);
      roofMesh.position.set(0, 9.6, 0);
      roofMesh.castShadow = true;
      roofGroup.add(roofMesh);

      // Micro-grid solar pergola
      const pergolaGeo = new THREE.BoxGeometry(8.0, 0.2, 8.0);
      const pergolaMesh = new THREE.Mesh(pergolaGeo, uMat);
      pergolaMesh.position.set(0, 10.2, 0);
      utilGroup.add(pergolaMesh);

    } else if (infra.modelShape === 'village_compound') {
      // DONDA RESILIENCE COMMONS (Circular Masterplan Micro-City)
      // Central Community Geodesic Hub
      const centralHubGeo = new THREE.SphereGeometry(3.8, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const centralHub = new THREE.Mesh(centralHubGeo, wMat);
      centralHub.position.set(0, 0.6, 0);
      centralHub.castShadow = true;
      wallsGroup.add(centralHub);

      // Satellite Monolithic Domes (6 living pods in circle)
      const numPods = 6;
      const radius = 7.5;
      for (let i = 0; i < numPods; i++) {
        const angle = (i / numPods) * Math.PI * 2;
        const px = Math.cos(angle) * radius;
        const pz = Math.sin(angle) * radius;

        const podGeo = new THREE.SphereGeometry(1.6, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
        const podMesh = new THREE.Mesh(podGeo, sMat);
        podMesh.position.set(px, 0.6, pz);
        podMesh.castShadow = true;
        superGroup.add(podMesh);
      }

      // Circular Ring Canopy & Rain Harvesting
      const ringGeo = new THREE.TorusGeometry(7.5, 0.2, 8, 32);
      const ringMesh = new THREE.Mesh(ringGeo, rMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 2.4;
      roofGroup.add(ringMesh);

      // Central Solar Spire
      const spireGeo = new THREE.CylinderGeometry(0.1, 0.6, 5.5, 8);
      const spireMesh = new THREE.Mesh(spireGeo, uMat);
      spireMesh.position.set(0, 4.8, 0);
      utilGroup.add(spireMesh);

    } else if (infra.modelShape === 'micro_pod') {
      // RAPID EMERGENCY FLATPACK POD
      const podBodyGeo = new THREE.BoxGeometry(4.8, 3.2, 4.0);
      const podBody = new THREE.Mesh(podBodyGeo, wMat);
      podBody.position.set(0, 2.2, 0);
      podBody.castShadow = true;
      wallsGroup.add(podBody);

      // Angled Origami Roof
      const podRoofGeo = new THREE.ConeGeometry(3.6, 1.2, 4);
      const podRoof = new THREE.Mesh(podRoofGeo, rMat);
      podRoof.position.set(0, 4.3, 0);
      podRoof.rotation.y = Math.PI / 4;
      podRoof.castShadow = true;
      roofGroup.add(podRoof);

      // Frame Joints
      const jointGeo = new THREE.BoxGeometry(5.2, 0.3, 4.4);
      const jointMesh = new THREE.Mesh(jointGeo, sMat);
      jointMesh.position.set(0, 0.7, 0);
      superGroup.add(jointMesh);

      // Solar Panel
      const solarGeo = new THREE.BoxGeometry(2.0, 0.05, 1.4);
      const solarMesh = new THREE.Mesh(solarGeo, uMat);
      solarMesh.position.set(0, 4.8, 0.6);
      solarMesh.rotation.x = 0.4;
      utilGroup.add(solarMesh);

    } else {
      // STEPPED TERRACE APARTMENTS
      for (let t = 0; t < 3; t++) {
        const width = 8.5 - t * 2.0;
        const depth = 8.5 - t * 2.0;
        const tierGeo = new THREE.BoxGeometry(width, 2.6, depth);
        const tierMesh = new THREE.Mesh(tierGeo, wMat);
        tierMesh.position.set(0, 1.9 + t * 2.6, -t * 0.8);
        tierMesh.castShadow = true;
        wallsGroup.add(tierMesh);

        // Terrace Roof Garden Slab
        const slabGeo = new THREE.BoxGeometry(width + 0.8, 0.3, depth + 0.8);
        const slabMesh = new THREE.Mesh(slabGeo, rMat);
        slabMesh.position.set(0, 3.3 + t * 2.6, -t * 0.8);
        roofGroup.add(slabMesh);
      }
    }

    parentGroup.add(wallsGroup);
    parentGroup.add(superGroup);
    parentGroup.add(roofGroup);
    parentGroup.add(utilGroup);

    layerMeshRefs.current.walls = wallsGroup;
    layerMeshRefs.current.superstructure = superGroup;
    layerMeshRefs.current.roof = roofGroup;
    layerMeshRefs.current.utilities = utilGroup;
  }

  const resetCamera = () => {
    playTactileClick(600, 0.02);
    if (!cameraRef.current || !groupRef.current) return;
    cameraRef.current.position.set(16, 14, 20);
    cameraRef.current.lookAt(0, 2, 0);
    groupRef.current.rotation.set(0, 0, 0);
  };

  return (
    <div className="relative w-full h-80 sm:h-96 md:h-[480px] bg-yzy-obsidian border border-yzy-slate/60 overflow-hidden flex flex-col select-none rounded-none">
      {/* 3D WebGL Canvas Viewport */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />

      {/* Top HUD Overlay: Coordinate & Telemetry Watermark */}
      <div className="absolute top-3 left-3 pointer-events-none flex flex-col gap-0.5">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs tracking-widest text-yzy-chalk uppercase font-bold">
            {infrastructure.code} // REAL-TIME 3D CAD
          </span>
        </div>
        <span className="font-mono text-[9px] text-yzy-ash tracking-wider">
          DIM: {infrastructure.diameter} | HT: {infrastructure.height}
        </span>
      </div>

      {/* Top Right: Sun Azimuth Simulation Slider */}
      <div className="absolute top-3 right-3 flex items-center gap-2 bg-yzy-black/80 backdrop-blur-md px-2.5 py-1.5 border border-yzy-slate text-[11px] font-mono">
        <Sun className="w-3.5 h-3.5 text-yzy-warning" />
        <span className="hidden sm:inline text-yzy-ash text-[10px]">SOLAR ANGLE:</span>
        <input
          type="range"
          min="0"
          max="360"
          value={sunAngle}
          onChange={(e) => setSunAngle(Number(e.target.value))}
          className="w-16 sm:w-24 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"
        />
        <span className="text-yzy-chalk w-6 text-right text-[10px]">{sunAngle}°</span>
      </div>

      {/* Bottom Floating Control Bar (Touch Friendly) */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 bg-yzy-black/90 backdrop-blur-md px-3 py-2 border border-yzy-slate/80 shadow-2xl z-10">
        {/* Exploded View */}
        <button
          onClick={() => {
            playTactileClick();
            setIsExploded(!isExploded);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${
            isExploded
              ? 'bg-yzy-bone text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white hover:bg-yzy-slate/60'
          }`}
          title="Separate structural layers vertically in space"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{isExploded ? 'COLLAPSE' : 'EXPLODE LAYERS'}</span>
        </button>

        {/* Wireframe CAD Mode */}
        <button
          onClick={() => {
            playTactileClick();
            setIsWireframe(!isWireframe);
          }}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 font-mono text-[10px] sm:text-xs tracking-wider transition-all ${
            isWireframe
              ? 'bg-yzy-neon text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white hover:bg-yzy-slate/60'
          }`}
          title="Toggle blueprint wireframe mesh"
        >
          <Box className="w-3.5 h-3.5" />
          <span>WIREFRAME</span>
        </button>

        {/* Auto Rotate Toggle */}
        <button
          onClick={() => {
            playTactileClick();
            setIsAutoRotate(!isAutoRotate);
          }}
          className={`px-2 py-1.5 font-mono text-[10px] transition-all ${
            isAutoRotate ? 'text-yzy-bone bg-yzy-slate/60' : 'text-yzy-ash hover:text-yzy-bone'
          }`}
          title="Toggle 360 Turntable rotation"
        >
          <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
        </button>

        {/* Reset View */}
        <button
          onClick={resetCamera}
          className="px-2 py-1.5 font-mono text-[10px] text-yzy-ash hover:text-yzy-bone hover:bg-yzy-slate/60 transition-all"
          title="Reset Viewport"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Active Layer Indicator HUD Pill */}
      {activeLayer && (
        <div className="absolute bottom-3 left-3 hidden sm:flex items-center gap-1.5 bg-yzy-black/80 px-2.5 py-1 border border-yzy-slate font-mono text-[10px] text-yzy-bone">
          <span className="w-1.5 h-1.5 rounded-full bg-yzy-neon" />
          <span>INSPECTING: {activeLayer.toUpperCase()}</span>
        </div>
      )}
    </div>
  );
}
