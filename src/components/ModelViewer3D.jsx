import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Sun, Box, RotateCcw, Focus, AlertCircle } from 'lucide-react';
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
  const [isIsolatedFocus, setIsIsolatedFocus] = useState(true);
  const [sunAngle, setSunAngle] = useState(45);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  const [webglError, setWebglError] = useState(false);

  const allMaterials = [...materialsList, ...APERTURE_MATERIALS];

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const width = containerRef.current.clientWidth || 360;
      const height = containerRef.current.clientHeight || 420;

      const scene = new THREE.Scene();
      scene.background = new THREE.Color(0x0a0a0a);
      scene.fog = new THREE.FogExp2(0x0a0a0a, 0.022);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
      camera.position.set(18, 15, 22);
      camera.lookAt(0, 2.5, 0);
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

      // Grid Floor
      const gridHelper = new THREE.GridHelper(40, 40, 0x333333, 0x181818);
      gridHelper.position.y = -0.01;
      scene.add(gridHelper);

      // Polar Rings
      const circleGeo = new THREE.RingGeometry(11.9, 12, 48);
      const circleMat = new THREE.MeshBasicMaterial({ color: 0x2a2a2a, side: THREE.DoubleSide });
      const circleMesh = new THREE.Mesh(circleGeo, circleMat);
      circleMesh.rotation.x = Math.PI / 2;
      circleMesh.position.y = 0.01;
      scene.add(circleMesh);

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xfff7ea, 2.0);
      sunLight.position.set(16, 26, 16);
      sunLight.castShadow = true;
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
        previousMousePosition = { x: clientX, y: clientY };
      };

      const handlePointerUp = (e) => {
        if (dragDistance < 8 && renderer && renderer.domElement) {
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
    } catch (err) {
      console.error("WebGL initialization error:", err);
      setWebglError(true);
    }
  }, [infrastructure.id]);

  useEffect(() => {
    if (!groupRef.current) return;
    buildArchetypeGeometry(infrastructure, selectedPartMaterials, isWireframe, groupRef.current, partMeshesRef);
  }, [selectedPartMaterials, isWireframe, infrastructure]);

  // Center Stage Focus & Explode Controller
  useEffect(() => {
    const meshes = partMeshesRef.current;
    if (!meshes) return;

    Object.keys(meshes).forEach((partId) => {
      const partObj = meshes[partId];
      if (!partObj) return;

      const isSelected = partId === activePartId;

      if (isExploded) {
        const offset = partObj.userData?.explodeOffset || { x: 0, y: 0, z: 0 };
        partObj.position.set(offset.x * 2.2, offset.y * 2.4, offset.z * 2.2);
        partObj.scale.set(1, 1, 1);
        restorePartOpacity(partObj);

      } else if (isIsolatedFocus && activePartId) {
        if (isSelected) {
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

  // 6 UNIQUE ARCHITECTURAL 3D PROCEDURAL GEOMETRIES
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
        const glassMat = new THREE.MeshStandardMaterial({
          color: color,
          transparent: true,
          opacity: matId === 'smart_solar_glass' ? 0.65 : 0.4,
          roughness: 0.1,
          metalness: 0.2,
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
      const fMesh = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.5, 8.0), fMat);
      fMesh.position.set(0, 0.25, 0);
      fGroup.add(fMesh);
      attachPart('villa_foundation', 'FOUNDATION SLAB', fGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. SOUTH WALL
      const sGroup = new THREE.Group();
      const sMat = getPartMat('villa_south_wall', 0xA07855);
      const sMesh = new THREE.Mesh(new THREE.BoxGeometry(9.4, 3.8, 0.8), sMat);
      sMesh.position.set(0, 2.4, 3.2);
      sMesh.castShadow = true;
      sGroup.add(sMesh);
      attachPart('villa_south_wall', 'SOUTH WALL ENVELOPE', sGroup, { x: 0, y: 0.5, z: 3.2 }, { x: 0, y: 0, z: 4.5 });

      // 3. NORTH WALL
      const nGroup = new THREE.Group();
      const nMat = getPartMat('villa_north_wall', 0xA07855);
      const nMesh = new THREE.Mesh(new THREE.BoxGeometry(9.4, 3.8, 0.8), nMat);
      nMesh.position.set(0, 2.4, -3.2);
      nMesh.castShadow = true;
      nGroup.add(nMesh);
      attachPart('villa_north_wall', 'NORTH SHIELD WALL', nGroup, { x: 0, y: 0.5, z: -3.2 }, { x: 0, y: 0, z: -4.5 });

      // 4. SIDE WALLS
      const sideGroup = new THREE.Group();
      const sideMat = getPartMat('villa_side_walls', 0xA07855);
      const eastMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.8, 5.6), sideMat);
      eastMesh.position.set(4.3, 2.4, 0);
      const westMesh = new THREE.Mesh(new THREE.BoxGeometry(0.8, 3.8, 5.6), sideMat);
      westMesh.position.set(-4.3, 2.4, 0);
      sideGroup.add(eastMesh);
      sideGroup.add(westMesh);
      attachPart('villa_side_walls', 'EAST & WEST SIDE WALLS', sideGroup, { x: 3.0, y: 0.5, z: 0 }, { x: 4.5, y: 0, z: 0 });

      // 5. ROOF SLAB
      const rGroup = new THREE.Group();
      const rMat = getPartMat('villa_roof_cantilever', 0xC9A066);
      const rMesh = new THREE.Mesh(new THREE.BoxGeometry(12.4, 0.45, 9.4), rMat);
      rMesh.position.set(0, 4.5, 0);
      rMesh.castShadow = true;
      rGroup.add(rMesh);
      attachPart('villa_roof_cantilever', 'MASS TIMBER ROOF', rGroup, { x: 0, y: 2.8, z: 0 }, { x: 0, y: 4.8, z: 0 });

      // 6. WINDOW PORTAL
      const wGroup = new THREE.Group();
      const wMat = getPartMat('villa_window_portal', 0x68A5BA);
      const wMesh = new THREE.Mesh(new THREE.BoxGeometry(4.5, 3.2, 0.2), wMat);
      wMesh.position.set(0, 2.1, 3.65);
      wGroup.add(wMesh);
      attachPart('villa_window_portal', 'PATIO WINDOW PORTAL', wGroup, { x: 0, y: 0.8, z: 3.5 }, { x: 0, y: 0, z: 5.5 });

      // 7. UTILITIES
      const uGroup = new THREE.Group();
      const uMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8, roughness: 0.2 });
      const sPanels = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.1, 3.4), uMat);
      sPanels.position.set(0, 4.9, 0);
      sPanels.rotation.x = -0.15;
      uGroup.add(sPanels);
      attachPart('villa_utilities', 'SOLAR PERGOLA SUITE', uGroup, { x: 0, y: 3.2, z: 0 }, { x: 0, y: 6.0, z: 0 });

    } else if (infra.id === 'modular_eco_apartments') {
      // 3-STORY MODULAR COMMUNE BLOCK
      // 1. BASE PODIUM
      const baseGroup = new THREE.Group();
      const baseMat = getPartMat('mod_pod_base', 0x777777);
      const podium = new THREE.Mesh(new THREE.BoxGeometry(9.0, 0.8, 9.0), baseMat);
      podium.position.y = 0.4;
      baseGroup.add(podium);
      attachPart('mod_pod_base', 'PODIUM SUBGRADE', baseGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. TIER 1 MODULES
      const t1Group = new THREE.Group();
      const t1Mat = getPartMat('mod_tier1_modules', 0xA07855);
      const m1A = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 7.6), t1Mat);
      m1A.position.set(-2.0, 1.9, 0);
      const m1B = new THREE.Mesh(new THREE.BoxGeometry(3.6, 2.2, 7.6), t1Mat);
      m1B.position.set(2.0, 1.9, 0);
      t1Group.add(m1A);
      t1Group.add(m1B);
      attachPart('mod_tier1_modules', 'LEVEL 01 LIVING MODULES', t1Group, { x: -2.0, y: 0.5, z: 0 }, { x: -3.5, y: 0, z: 0 });

      // 3. TIER 2 MODULES
      const t2Group = new THREE.Group();
      const t2Mat = getPartMat('mod_tier2_modules', 0xC9A066);
      const m2 = new THREE.Mesh(new THREE.BoxGeometry(7.8, 2.2, 3.8), t2Mat);
      m2.position.set(0, 4.1, 1.2);
      t2Group.add(m2);
      attachPart('mod_tier2_modules', 'LEVEL 02 LIVING MODULES', t2Group, { x: 2.0, y: 0.5, z: 0 }, { x: 3.5, y: 0, z: 0 });

      // 4. TIER 3 PENTHOUSE MODULES
      const t3Group = new THREE.Group();
      const t3Mat = getPartMat('mod_tier3_modules', 0xC9A066);
      const m3 = new THREE.Mesh(new THREE.BoxGeometry(4.8, 2.2, 4.8), t3Mat);
      m3.position.set(0, 6.3, -0.6);
      t3Group.add(m3);
      attachPart('mod_tier3_modules', 'LEVEL 03 PENTHOUSE', t3Group, { x: 0, y: 1.8, z: -1.5 }, { x: 0, y: 3.0, z: -3.0 });

      // 5. FACADE GLAZING
      const gGroup = new THREE.Group();
      const gMat = getPartMat('mod_facade_glazing', 0x68A5BA);
      const gMesh = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.4, 0.2), gMat);
      gMesh.position.set(0, 4.1, 3.15);
      gGroup.add(gMesh);
      attachPart('mod_facade_glazing', 'COURTYARD GLAZING', gGroup, { x: 0, y: 0.5, z: 3.0 }, { x: 0, y: 0, z: 4.8 });

      // 6. ROOFTOP CANOPY
      const cGroup = new THREE.Group();
      const cMat = getPartMat('mod_roof_canopy', 0xC9A066);
      const canopy = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.2, 5.6), cMat);
      canopy.position.set(0, 7.6, -0.6);
      cGroup.add(canopy);
      attachPart('mod_roof_canopy', 'COMMUNAL ROOFTOP CANOPY', cGroup, { x: 0, y: 2.5, z: 0 }, { x: 0, y: 4.5, z: 0 });

      // 7. UTILITIES
      const uGroup = new THREE.Group();
      const uMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8 });
      const uMesh = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 2.0), uMat);
      uMesh.position.set(-3.2, 0.8, -3.2);
      uGroup.add(uMesh);
      attachPart('mod_utilities', 'DISTRICT MICROGRID', uGroup, { x: -2.5, y: 0, z: -2.5 }, { x: -4.0, y: 0, z: -4.0 });

    } else if (infra.id === 'donda_resilience_commons') {
      // DONDA VILLAGE ECOSYSTEM (CENTRAL BIODOME + SATELLITE DOMES RING)
      // 1. PLAZA BASE
      const pGroup = new THREE.Group();
      const pMat = getPartMat('donda_base_plaza', 0x777777);
      const plaza = new THREE.Mesh(new THREE.CylinderGeometry(9.2, 9.6, 0.4, 32), pMat);
      plaza.position.y = 0.2;
      pGroup.add(plaza);
      attachPart('donda_base_plaza', 'COMMUNAL PLAZA BASE', pGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. CENTRAL BIODOME
      const cbGroup = new THREE.Group();
      const cbMat = getPartMat('donda_central_dome', 0xDDDDC0);
      const centralDome = new THREE.Mesh(new THREE.SphereGeometry(3.6, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2), cbMat);
      centralDome.position.y = 0.4;
      cbGroup.add(centralDome);
      attachPart('donda_central_dome', 'CENTRAL BIODOME', cbGroup, { x: 0, y: 2.2, z: 0 }, { x: 0, y: 3.5, z: 0 });

      // 3. SATELLITE RESIDENTIAL DOMES (6 Pods Ring)
      const podsGroup = new THREE.Group();
      const podMat = getPartMat('donda_living_pods', 0xA07855);
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const radius = 6.2;
        const px = Math.cos(angle) * radius;
        const pz = Math.sin(angle) * radius;
        const pod = new THREE.Mesh(new THREE.SphereGeometry(1.5, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2), podMat);
        pod.position.set(px, 0.4, pz);
        podsGroup.add(pod);
      }
      attachPart('donda_living_pods', 'SATELLITE DOMES (6 PODS)', podsGroup, { x: 0, y: 1.0, z: 2.5 }, { x: 0, y: 1.5, z: 3.5 });

      // 4. PERGOLA RING
      const rGroup = new THREE.Group();
      const rMat = getPartMat('donda_pergola_ring', 0xC49A45);
      const ringMesh = new THREE.Mesh(new THREE.TorusGeometry(6.2, 0.25, 8, 32), rMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 2.4;
      rGroup.add(ringMesh);
      attachPart('donda_pergola_ring', 'RAIN HARVESTING RING', rGroup, { x: 0, y: 2.8, z: 0 }, { x: 0, y: 4.5, z: 0 });

      // 5. MICROGRID
      const mGroup = new THREE.Group();
      const mMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8 });
      const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 5.5, 8), mMat);
      tower.position.set(0, 2.75, 0);
      mGroup.add(tower);
      attachPart('donda_microgrid', 'CITY MICRO-GRID', mGroup, { x: 0, y: 3.5, z: 0 }, { x: 0, y: 5.5, z: 0 });

    } else if (infra.id === 'rapid_emergency_pod') {
      // RAPID EMERGENCY ORIGAMI POD
      // 1. BASE CHASSIS
      const chGroup = new THREE.Group();
      const chMat = getPartMat('pod_base_chassis', 0x2E4057);
      const chassis = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.5, 4.8), chMat);
      chassis.position.y = 0.25;
      chGroup.add(chassis);
      attachPart('pod_base_chassis', 'ELEVATED BASE PLINTH', chGroup, { x: 0, y: -1.0, z: 0 }, { x: 0, y: -2.0, z: 0 });

      // 2. BIO WALLS
      const wGroup = new THREE.Group();
      const wMat = getPartMat('pod_bio_walls', 0x2E4057);
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(4.2, 2.8, 4.2), wMat);
      cabin.position.y = 1.9;
      wGroup.add(cabin);
      attachPart('pod_bio_walls', 'FLATPACK BIO-WALLS', wGroup, { x: 0, y: 0.8, z: 1.8 }, { x: 0, y: 0, z: 3.5 });

      // 3. ORIGAMI ROOF
      const rfGroup = new THREE.Group();
      const rfMat = getPartMat('pod_origami_roof', 0x8E8E89);
      const roof = new THREE.Mesh(new THREE.ConeGeometry(3.6, 2.0, 4), rfMat);
      roof.position.set(0, 4.3, 0);
      roof.rotation.y = Math.PI / 4;
      rfGroup.add(roof);
      attachPart('pod_origami_roof', 'ANGLED ORIGAMI ROOF', rfGroup, { x: 0, y: 2.2, z: 0 }, { x: 0, y: 4.0, z: 0 });

      // 4. GLAZING PORTS
      const glGroup = new THREE.Group();
      const glMat = getPartMat('pod_glazing', 0x68A5BA);
      const port = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.8, 0.2), glMat);
      port.position.set(0, 2.2, 2.15);
      glGroup.add(port);
      attachPart('pod_glazing', 'LIGHT PORTS', glGroup, { x: 0, y: 0.5, z: 2.5 }, { x: 0, y: 0, z: 4.5 });

      // 5. SOLAR KIT
      const skGroup = new THREE.Group();
      const skMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8 });
      const panel = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 1.4), skMat);
      panel.position.set(0, 4.4, 1.5);
      panel.rotation.x = 0.5;
      skGroup.add(panel);
      attachPart('pod_utility_kit', '12V EMERGENCY SOLAR KIT', skGroup, { x: 0, y: 2.0, z: 2.0 }, { x: 0, y: 3.5, z: 3.5 });

    } else if (infra.id === 'terrace_earth_apartments') {
      // STEPPED EARTH ZIGGURAT TERRACE COMPLEX
      // 1. ZIGGURAT BEDROCK BASE
      const bGroup = new THREE.Group();
      const bMat = getPartMat('terrace_foundation', 0x777777);
      const base = new THREE.Mesh(new THREE.BoxGeometry(11.0, 0.6, 10.0), bMat);
      base.position.y = 0.3;
      bGroup.add(base);
      attachPart('terrace_foundation', 'ZIGGURAT BASE PLINTH', bGroup, { x: 0, y: -1.2, z: 0 }, { x: 0, y: -2.5, z: 0 });

      // 2. STEPPED RESIDENTIAL WALL MATRIX
      const wGroup = new THREE.Group();
      const wMat = getPartMat('terrace_tier_walls', 0x8B9574);
      const tier1 = new THREE.Mesh(new THREE.BoxGeometry(9.6, 2.2, 8.4), wMat);
      tier1.position.set(0, 1.7, 0);
      wGroup.add(tier1);
      const tier2 = new THREE.Mesh(new THREE.BoxGeometry(7.4, 2.0, 6.4), wMat);
      tier2.position.set(0, 3.8, -1.0);
      wGroup.add(tier2);
      const tier3 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 1.8, 4.4), wMat);
      tier3.position.set(0, 5.7, -2.0);
      wGroup.add(tier3);
      attachPart('terrace_tier_walls', 'STEPPED WALL MATRIX', wGroup, { x: 0, y: 0.8, z: 2.5 }, { x: 0, y: 0, z: 4.5 });

      // 3. CASCADING GREEN ROOF TERRACES
      const gGroup = new THREE.Group();
      const gMat = getPartMat('terrace_garden_roofs', 0xC9A066);
      const deck1 = new THREE.Mesh(new THREE.BoxGeometry(9.8, 0.25, 2.4), gMat);
      deck1.position.set(0, 2.85, 3.0);
      gGroup.add(deck1);
      const deck2 = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.25, 2.2), gMat);
      deck2.position.set(0, 4.85, 1.2);
      gGroup.add(deck2);
      attachPart('terrace_garden_roofs', 'CASCADING GARDEN DECKS', gGroup, { x: 0, y: 2.2, z: 0 }, { x: 0, y: 4.0, z: 0 });

      // 4. PANORAMIC TERRACE GLAZING PORTALS
      const pzGroup = new THREE.Group();
      const pzMat = getPartMat('terrace_panoramic_windows', 0x68A5BA);
      const win1 = new THREE.Mesh(new THREE.BoxGeometry(8.0, 1.4, 0.2), pzMat);
      win1.position.set(0, 1.7, 4.25);
      pzGroup.add(win1);
      const win2 = new THREE.Mesh(new THREE.BoxGeometry(6.2, 1.4, 0.2), pzMat);
      win2.position.set(0, 3.8, 2.25);
      pzGroup.add(win2);
      attachPart('terrace_panoramic_windows', 'TERRACE GLAZING PORTALS', pzGroup, { x: 0, y: 0.5, z: 3.5 }, { x: 0, y: 0, z: 5.5 });

      // 5. CENTRALIZED ECO-GRID
      const egGroup = new THREE.Group();
      const egMat = new THREE.MeshStandardMaterial({ color: 0x1a237e, metalness: 0.8 });
      const solarCanopy = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.15, 3.8), egMat);
      solarCanopy.position.set(0, 6.7, -2.0);
      egGroup.add(solarCanopy);
      attachPart('terrace_utilities', 'URBAN ECO-GRID', egGroup, { x: 0, y: 3.0, z: 0 }, { x: 0, y: 5.0, z: 0 });
    }
  }

  useEffect(() => {
    if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
    const newWidth = containerRef.current.clientWidth;
    const newHeight = containerRef.current.clientHeight;
    cameraRef.current.aspect = newWidth / newHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(newWidth, newHeight);
  }, [isCompact]);

  if (webglError) {
    return (
      <div className="w-full h-72 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono">
        <AlertCircle className="w-8 h-8 text-yzy-warning mb-2" />
        <span className="font-bold text-white text-sm uppercase">2D ARCHITECTURAL MODE ACTIVE</span>
        <span className="text-xs text-yzy-ash max-w-sm mt-1">
          Select materials in the matrix below to customize the build.
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full transition-all duration-300 ${isCompact ? 'h-52 sm:h-60 md:h-72 shadow-2xl ring-1 ring-yzy-bone/40' : 'h-80 sm:h-96 md:h-[480px]'} bg-yzy-obsidian border border-yzy-slate/70 overflow-hidden flex flex-col select-none`}>
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing touch-none" />

      {/* Top Left: Active Part Indicator Badge */}
      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none z-10">
        <div className="flex items-center gap-1.5 bg-yzy-black/90 backdrop-blur-md px-2.5 py-1 border border-yzy-bone/40 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
          <span className="font-mono text-[9px] sm:text-xs tracking-widest text-white uppercase font-bold truncate max-w-[200px] sm:max-w-none">
            {activePartId ? activePartId.toUpperCase().replace(/_/g, ' ') : 'TAP 3D TO SELECT'}
          </span>
        </div>
      </div>

      {/* Top Right: Sun Azimuth Slider */}
      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-yzy-black/85 backdrop-blur-md px-2 py-1 border border-yzy-slate text-[10px] font-mono z-10">
        <Sun className="w-3 h-3 text-yzy-warning" />
        <input
          type="range"
          min="0"
          max="360"
          value={sunAngle}
          onChange={(e) => setSunAngle(Number(e.target.value))}
          className="w-14 sm:w-20 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"
        />
        <span className="text-yzy-chalk w-5 text-right text-[9px]">{sunAngle}°</span>
      </div>

      {/* Bottom Floating Control Bar */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-yzy-black/90 backdrop-blur-md px-2 py-1.5 border border-yzy-slate shadow-2xl z-10">
        <button
          onClick={() => {
            playTactileClick();
            setIsIsolatedFocus(!isIsolatedFocus);
          }}
          className={`flex items-center gap-1 px-2 py-1 font-mono text-[9px] sm:text-xs tracking-wider transition-all ${
            isIsolatedFocus
              ? 'bg-yzy-bone text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white'
          }`}
        >
          <Focus className="w-3 h-3" />
          <span>{isIsolatedFocus ? 'FOCUS' : 'FULL'}</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setIsExploded(!isExploded);
          }}
          className={`flex items-center gap-1 px-2 py-1 font-mono text-[9px] sm:text-xs tracking-wider transition-all ${
            isExploded
              ? 'bg-yzy-neon text-yzy-black font-bold'
              : 'text-yzy-chalk hover:text-white'
          }`}
        >
          <Layers className="w-3 h-3" />
          <span>EXPLODE</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setIsWireframe(!isWireframe);
          }}
          className={`px-2 py-1 font-mono text-[9px] sm:text-xs transition-all ${
            isWireframe ? 'text-yzy-neon font-bold bg-yzy-slate/60' : 'text-yzy-ash hover:text-white'
          }`}
        >
          CAD
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setIsAutoRotate(!isAutoRotate);
          }}
          className={`px-1.5 py-1 font-mono text-[9px] transition-all ${
            isAutoRotate ? 'text-white' : 'text-yzy-ash hover:text-white'
          }`}
        >
          <RotateCcw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
        </button>
      </div>
    </div>
  );
}
