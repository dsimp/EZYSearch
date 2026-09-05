import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { 
  RotateCcw, 
  Box, 
  Sun, 
  Layers, 
  AlertCircle, 
  Eye, 
  Maximize2, 
  Move, 
  Trash2, 
  Copy, 
  Sparkles,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  SunMedium,
  Moon,
  ChevronDown
} from 'lucide-react';
import { STUDIO_PIECES } from '../data/studioCatalog';
import { MATERIALS } from '../data/materials';
import { APERTURE_MATERIALS } from '../data/partCatalog';
import { playTactileClick, playSelectTone, playConfirmTone } from '../utils/audio';

const ALL_MATERIALS = [...MATERIALS, ...APERTURE_MATERIALS];

export default function Studio3DWorkspace({
  placedItems = [],
  selectedInstanceId = null,
  onSelectInstance,
  onUpdateInstance,
  onDeleteInstance,
  onDuplicateInstance,
  theme = 'white', // 'white' | 'dark'
  onToggleTheme,
  showWireframe = false,
  onToggleWireframe,
  autoRotate = false,
  onToggleAutoRotate,
  sunAzimuth = 45,
  onChangeSunAzimuth
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const rootGroupRef = useRef(null);
  const instanceMeshesRef = useRef({});
  const selectionBoxRef = useRef(null);
  const lightsRef = useRef({});

  const [webglError, setWebglError] = useState(false);

  const isWhiteTheme = theme === 'white';

  // Material builder helper
  const getMeshMaterial = (materialId, isSelected = false, isCad = false) => {
    const matDef = ALL_MATERIALS.find((m) => m.id === materialId) || ALL_MATERIALS[0];
    const baseColor = parseInt((matDef.colorHex || '#A07855').replace('#', '0x'));

    let opacity = 1.0;
    let transparent = false;
    let roughness = 0.85;
    let metalness = 0.05;

    if (materialId === 'triple_glazed_glass') {
      opacity = 0.45;
      transparent = true;
      roughness = 0.1;
      metalness = 0.9;
    } else if (materialId === 'smart_solar_glass') {
      opacity = 0.65;
      transparent = true;
      roughness = 0.2;
      metalness = 0.7;
    } else if (materialId === 'cross_laminated_timber' || materialId === 'bamboo_composite') {
      roughness = 0.7;
      metalness = 0.08;
    } else if (materialId === 'geopolymer_concrete') {
      roughness = 0.8;
      metalness = 0.15;
    }

    const material = new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: roughness,
      metalness: metalness,
      transparent: transparent,
      opacity: opacity,
      wireframe: isCad,
      flatShading: !transparent
    });

    if (isSelected) {
      material.emissive = new THREE.Color(isWhiteTheme ? 0x223311 : 0x446622);
      material.emissiveIntensity = 0.35;
    }

    return material;
  };

  // Initialize Three.js WebGL Scene
  useEffect(() => {
    if (!containerRef.current) return;

    try {
      const width = containerRef.current.clientWidth || 800;
      const height = containerRef.current.clientHeight || 500;

      const scene = new THREE.Scene();
      const bgColor = isWhiteTheme ? 0xf5f5f1 : 0x0a0a0a;
      scene.background = new THREE.Color(bgColor);
      scene.fog = new THREE.FogExp2(bgColor, 0.022);
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 150);
      camera.position.set(16, 12, 18);
      camera.lookAt(0, 2.0, 0);
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

      // Studio Floor Grid
      const gridColor1 = isWhiteTheme ? 0xd0d0c8 : 0x333333;
      const gridColor2 = isWhiteTheme ? 0xe4e4dc : 0x181818;
      const grid = new THREE.GridHelper(36, 36, gridColor1, gridColor2);
      grid.position.y = -0.01;
      scene.add(grid);

      // Studio Shadow Catcher Ground Plane
      const planeGeo = new THREE.PlaneGeometry(80, 80);
      const planeMat = new THREE.ShadowMaterial({
        opacity: isWhiteTheme ? 0.18 : 0.45
      });
      const shadowPlane = new THREE.Mesh(planeGeo, planeMat);
      shadowPlane.rotation.x = -Math.PI / 2;
      shadowPlane.position.y = -0.015;
      shadowPlane.receiveShadow = true;
      scene.add(shadowPlane);

      // Lighting Setup
      const ambientLight = new THREE.AmbientLight(0xffffff, isWhiteTheme ? 1.1 : 0.7);
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(0xfff8ee, isWhiteTheme ? 2.4 : 2.0);
      keyLight.position.set(15, 24, 15);
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.width = 2048;
      keyLight.shadow.mapSize.height = 2048;
      keyLight.shadow.camera.near = 0.5;
      keyLight.shadow.camera.far = 60;
      keyLight.shadow.camera.left = -20;
      keyLight.shadow.camera.right = 20;
      keyLight.shadow.camera.top = 20;
      keyLight.shadow.camera.bottom = -20;
      keyLight.shadow.bias = -0.0005;
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(isWhiteTheme ? 0xbed0e8 : 0x4466aa, isWhiteTheme ? 0.9 : 0.6);
      fillLight.position.set(-15, 12, -12);
      scene.add(fillLight);

      lightsRef.current = { ambientLight, keyLight, fillLight };

      // Root Group containing all placed piece instances
      const rootGroup = new THREE.Group();
      scene.add(rootGroup);
      rootGroupRef.current = rootGroup;

      // Selection bounding box outline
      const boxHelper = new THREE.BoxHelper(new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1)), isWhiteTheme ? 0x000000 : 0x77ff00);
      boxHelper.visible = false;
      scene.add(boxHelper);
      selectionBoxRef.current = boxHelper;

      // Mouse & Touch Orbit + Raycaster Interaction
      const raycaster = new THREE.Raycaster();
      const mouse = new THREE.Vector2();

      let isDragging = false;
      let isPointerDownOnCanvas = false;
      let isHorizontalOrbit = false;
      let startPos = { x: 0, y: 0 };
      let previousPos = { x: 0, y: 0 };
      let totalDragDist = 0;

      const handlePointerDown = (e) => {
        // Only initiate 3D drag if pointer started on the WebGL canvas
        if (e.target !== domElement) return;
        isDragging = true;
        isPointerDownOnCanvas = true;
        isHorizontalOrbit = false;
        totalDragDist = 0;
        const touch = e.touches && e.touches.length > 0 ? e.touches[0] : null;
        const clientX = touch ? touch.clientX : e.clientX;
        const clientY = touch ? touch.clientY : e.clientY;
        if (clientX !== undefined && clientY !== undefined) {
          startPos = { x: clientX, y: clientY };
          previousPos = { x: clientX, y: clientY };
        }
      };

      const handlePointerMove = (e) => {
        if (!isDragging || !isPointerDownOnCanvas) return;
        const touch = e.touches && e.touches.length > 0 ? e.touches[0] : null;
        const clientX = touch ? touch.clientX : e.clientX;
        const clientY = touch ? touch.clientY : e.clientY;
        if (clientX === undefined || clientY === undefined) return;

        const deltaX = clientX - previousPos.x;
        const deltaY = clientY - previousPos.y;
        totalDragDist += Math.abs(deltaX) + Math.abs(deltaY);

        const diffX = Math.abs(clientX - startPos.x);
        const diffY = Math.abs(clientY - startPos.y);

        if (diffX > 6 && diffX > diffY * 1.1) {
          isHorizontalOrbit = true;
        }

        if (isHorizontalOrbit && rootGroupRef.current) {
          rootGroupRef.current.rotation.y += deltaX * 0.008;
        }

        previousPos = { x: clientX, y: clientY };
      };

      const handlePointerUp = (e) => {
        // ONLY perform raycasting if the interaction explicitly started on this 3D canvas!
        if (isPointerDownOnCanvas && totalDragDist < 8 && renderer && renderer.domElement && rootGroupRef.current) {
          const touch = e.changedTouches && e.changedTouches.length > 0 ? e.changedTouches[0] : null;
          const clientX = touch ? touch.clientX : e.clientX;
          const clientY = touch ? touch.clientY : e.clientY;

          if (clientX !== undefined && clientY !== undefined) {
            const rect = renderer.domElement.getBoundingClientRect();
            // Verify pointerup occurred directly inside the canvas bounds
            if (
              clientX >= rect.left &&
              clientX <= rect.right &&
              clientY >= rect.top &&
              clientY <= rect.bottom
            ) {
              mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
              mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

              raycaster.setFromCamera(mouse, camera);
              const intersects = raycaster.intersectObjects(rootGroupRef.current.children, true);

              if (intersects.length > 0) {
                let hitObj = intersects[0].object;
                while (hitObj.parent && !hitObj.userData?.instanceId && hitObj.parent !== rootGroupRef.current) {
                  hitObj = hitObj.parent;
                }
                if (hitObj.userData?.instanceId) {
                  playSelectTone();
                  onSelectInstance(hitObj.userData.instanceId);
                }
              }
            }
          }
        }
        isDragging = false;
        isHorizontalOrbit = false;
        isPointerDownOnCanvas = false;
      };

      const domElement = renderer.domElement;
      domElement.addEventListener('mousedown', handlePointerDown);
      domElement.addEventListener('mousemove', handlePointerMove);
      window.addEventListener('mouseup', handlePointerUp);

      domElement.addEventListener('touchstart', handlePointerDown, { passive: true });
      domElement.addEventListener('touchmove', handlePointerMove, { passive: true });
      window.addEventListener('touchend', handlePointerUp);

      // Render Loop
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        if (autoRotate && !isDragging && rootGroupRef.current) {
          rootGroupRef.current.rotation.y += 0.004;
        }

        // Update selection box
        if (selectionBoxRef.current && instanceMeshesRef.current && selectedInstanceId) {
          const selectedMesh = instanceMeshesRef.current[selectedInstanceId];
          if (selectedMesh) {
            selectionBoxRef.current.setFromObject(selectedMesh);
            selectionBoxRef.current.visible = true;
          } else {
            selectionBoxRef.current.visible = false;
          }
        } else if (selectionBoxRef.current) {
          selectionBoxRef.current.visible = false;
        }

        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!containerRef.current || !renderer || !camera) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight || 500;
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
      console.error('Studio 3D initialization error:', err);
      setWebglError(true);
    }
  }, [theme]);

  // Update Sun Azimuth Light Angle
  useEffect(() => {
    if (lightsRef.current.keyLight) {
      const rad = (sunAzimuth * Math.PI) / 180;
      const radius = 24;
      lightsRef.current.keyLight.position.set(
        Math.cos(rad) * radius,
        22,
        Math.sin(rad) * radius
      );
    }
  }, [sunAzimuth]);

  // Build Procedural 3D Meshes for Placed Items
  useEffect(() => {
    const rootGroup = rootGroupRef.current;
    if (!rootGroup) return;

    // Clean old objects
    while (rootGroup.children.length > 0) {
      const obj = rootGroup.children[0];
      rootGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material.dispose();
      }
    }

    const newMeshesMap = {};

    placedItems.forEach((item) => {
      const isSelected = item.instanceId === selectedInstanceId;
      const pieceMeshGroup = buildPieceMesh(item, isSelected, showWireframe);
      pieceMeshGroup.userData = { instanceId: item.instanceId, pieceId: item.pieceId };
      
      const pos = item.position || { x: 0, y: 0, z: 0 };
      const rot = item.rotation || { x: 0, y: 0, z: 0 };
      pieceMeshGroup.position.set(pos.x, pos.y, pos.z);
      pieceMeshGroup.rotation.set(rot.x, rot.y, rot.z);

      rootGroup.add(pieceMeshGroup);
      newMeshesMap[item.instanceId] = pieceMeshGroup;
    });

    instanceMeshesRef.current = newMeshesMap;
  }, [placedItems, selectedInstanceId, showWireframe, theme]);

  // Procedural 3D Geometry Builder for Studio Pieces
  function buildPieceMesh(item, isSelected, isCad) {
    const group = new THREE.Group();
    const pieceDef = STUDIO_PIECES.find((p) => p.id === item.pieceId) || STUDIO_PIECES[0];
    const mat = getMeshMaterial(item.materialId, isSelected, isCad);
    const accentMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.5,
      metalness: 0.8,
      wireframe: isCad
    });

    const pId = pieceDef.id;

    // 1. FOUNDATIONS
    if (pId === 'foundation_monolithic_slab') {
      const slabGeo = new THREE.BoxGeometry(pieceDef.dimensions.w, pieceDef.dimensions.h, pieceDef.dimensions.d);
      const mesh = new THREE.Mesh(slabGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'foundation_circular_plinth') {
      const plinthGeo = new THREE.CylinderGeometry(4.2, 4.5, 0.5, 32);
      const mesh = new THREE.Mesh(plinthGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'foundation_pilotis_stilts') {
      const deckGeo = new THREE.BoxGeometry(10.0, 0.25, 8.0);
      const deck = new THREE.Mesh(deckGeo, mat);
      deck.position.y = 0.5;
      deck.castShadow = true;
      group.add(deck);

      for (let x of [-4.2, 4.2]) {
        for (let z of [-3.2, 3.2]) {
          const pierGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.2, 16);
          const pier = new THREE.Mesh(pierGeo, accentMat);
          pier.position.set(x, 0, z);
          pier.castShadow = true;
          group.add(pier);
        }
      }

    // 2. WALLS
    } else if (pId === 'wall_straight_solid') {
      const wallGeo = new THREE.BoxGeometry(8.0, 3.2, 0.45);
      const mesh = new THREE.Mesh(wallGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'wall_interlocking_ceb') {
      const wallGeo = new THREE.BoxGeometry(6.0, 3.0, 0.35);
      const mesh = new THREE.Mesh(wallGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      // Subtle block segmentation groove
      const grooveGeo = new THREE.BoxGeometry(6.02, 0.05, 0.37);
      for (let gy of [-0.8, 0, 0.8]) {
        const groove = new THREE.Mesh(grooveGeo, accentMat);
        groove.position.y = gy;
        group.add(groove);
      }

    } else if (pId === 'wall_curved_catenary') {
      const curveGeo = new THREE.CylinderGeometry(4.0, 4.0, 3.2, 16, 1, true, 0, Math.PI / 2);
      const mesh = new THREE.Mesh(curveGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'wall_panoramic_glass') {
      const glassGeo = new THREE.BoxGeometry(7.8, 3.0, 0.1);
      const glass = new THREE.Mesh(glassGeo, mat);
      glass.castShadow = true;
      group.add(glass);

      const frameGeo = new THREE.BoxGeometry(8.0, 3.2, 0.18);
      const frameMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5, metalness: 0.8, wireframe: isCad });
      const frame = new THREE.Mesh(frameGeo, frameMat);
      frame.position.z = -0.01;
      group.add(frame);

    } else if (pId === 'wall_interior_partition') {
      const partGeo = new THREE.BoxGeometry(5.0, 2.8, 0.15);
      const mesh = new THREE.Mesh(partGeo, mat);
      mesh.castShadow = true;
      group.add(mesh);

    // 3. DOMES & VAULTS
    } else if (pId === 'dome_catenary_shell') {
      const domeGeo = new THREE.SphereGeometry(4.0, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
      const mesh = new THREE.Mesh(domeGeo, mat);
      mesh.scale.set(1.0, 1.2, 1.0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'dome_barrel_vault') {
      const vaultGeo = new THREE.CylinderGeometry(2.0, 2.0, 6.0, 24, 1, true, 0, Math.PI);
      const mesh = new THREE.Mesh(vaultGeo, mat);
      mesh.rotation.z = Math.PI / 2;
      mesh.rotation.y = Math.PI / 2;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

    } else if (pId === 'dome_geodesic_biodome') {
      const bioGeo = new THREE.IcosahedronGeometry(4.5, 2);
      const mesh = new THREE.Mesh(bioGeo, mat);
      mesh.scale.set(1.0, 0.9, 1.0);
      mesh.castShadow = true;
      group.add(mesh);

    // 4. ROOFS
    } else if (pId === 'roof_cantilever_clt') {
      const slabGeo = new THREE.BoxGeometry(10.0, 0.35, 10.0);
      const mesh = new THREE.Mesh(slabGeo, mat);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      const overhangTrim = new THREE.Mesh(new THREE.BoxGeometry(10.2, 0.1, 10.2), accentMat);
      overhangTrim.position.y = 0.2;
      group.add(overhangTrim);

    } else if (pId === 'roof_cascading_garden') {
      const deckGeo = new THREE.BoxGeometry(9.0, 0.4, 7.0);
      const deck = new THREE.Mesh(deckGeo, mat);
      deck.castShadow = true;
      group.add(deck);

      const plantGeo = new THREE.BoxGeometry(8.4, 0.2, 6.4);
      const plantMat = new THREE.MeshStandardMaterial({ color: 0x4a7c59, roughness: 0.9 });
      const plants = new THREE.Mesh(plantGeo, plantMat);
      plants.position.y = 0.3;
      group.add(plants);

    } else if (pId === 'roof_origami_a_frame') {
      const aGeo = new THREE.ConeGeometry(4.8, 3.5, 4);
      const mesh = new THREE.Mesh(aGeo, mat);
      mesh.rotation.y = Math.PI / 4;
      mesh.castShadow = true;
      group.add(mesh);

    } else if (pId === 'roof_solar_pergola') {
      const canopyGeo = new THREE.BoxGeometry(6.0, 0.15, 5.0);
      const canopy = new THREE.Mesh(canopyGeo, mat);
      canopy.position.y = 1.6;
      canopy.castShadow = true;
      group.add(canopy);

      for (let px of [-2.7, 2.7]) {
        for (let pz of [-2.2, 2.2]) {
          const postGeo = new THREE.BoxGeometry(0.2, 3.2, 0.2);
          const post = new THREE.Mesh(postGeo, accentMat);
          post.position.set(px, 0, pz);
          post.castShadow = true;
          group.add(post);
        }
      }

    // 5. APERTURES & DOORS
    } else if (pId === 'aperture_tunnel_portico') {
      const tunnelGeo = new THREE.BoxGeometry(2.4, 2.6, 3.2);
      const tunnel = new THREE.Mesh(tunnelGeo, mat);
      tunnel.castShadow = true;
      group.add(tunnel);

      const archGeo = new THREE.BoxGeometry(1.6, 2.2, 3.25);
      const arch = new THREE.Mesh(archGeo, accentMat);
      arch.position.y = -0.2;
      group.add(arch);

    } else if (pId === 'aperture_pivot_door') {
      const doorGeo = new THREE.BoxGeometry(1.6, 2.8, 0.1);
      const door = new THREE.Mesh(doorGeo, mat);
      door.castShadow = true;
      group.add(door);

      const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.2, 8);
      const handle = new THREE.Mesh(handleGeo, accentMat);
      handle.position.set(0.6, 0, 0.1);
      group.add(handle);

    } else if (pId === 'aperture_zenith_oculus') {
      const oculusGeo = new THREE.CylinderGeometry(1.1, 1.2, 0.25, 24);
      const oculus = new THREE.Mesh(oculusGeo, mat);
      oculus.castShadow = true;
      group.add(oculus);

    // 6. UTILITIES
    } else if (pId === 'utility_solar_battery_core') {
      const cubeGeo = new THREE.BoxGeometry(1.8, 2.0, 1.2);
      const cube = new THREE.Mesh(cubeGeo, mat);
      cube.castShadow = true;
      group.add(cube);

      const ledGeo = new THREE.BoxGeometry(0.1, 0.1, 1.22);
      const ledMat = new THREE.MeshBasicMaterial({ color: 0x77ff00 });
      const led = new THREE.Mesh(ledGeo, ledMat);
      led.position.set(0.8, 0.5, 0);
      group.add(led);

    } else if (pId === 'utility_rainwater_cistern') {
      const tankGeo = new THREE.CylinderGeometry(1.2, 1.2, 2.2, 24);
      const tank = new THREE.Mesh(tankGeo, mat);
      tank.castShadow = true;
      group.add(tank);

    // 7. FURNITURE
    } else if (pId === 'furniture_mycelium_lounge') {
      const seatGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.2, 16);
      const seat = new THREE.Mesh(seatGeo, mat);
      seat.position.y = 0.2;
      seat.castShadow = true;
      group.add(seat);

      const backGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.5, 16, 1, false, 0, Math.PI);
      const back = new THREE.Mesh(backGeo, mat);
      back.position.set(0, 0.45, -0.15);
      back.rotation.y = Math.PI / 2;
      back.castShadow = true;
      group.add(back);

    } else if (pId === 'furniture_earth_desk') {
      const topGeo = new THREE.BoxGeometry(1.9, 0.15, 0.9);
      const top = new THREE.Mesh(topGeo, mat);
      top.position.y = 0.68;
      top.castShadow = true;
      group.add(top);

      for (let dx of [-0.75, 0.75]) {
        const legGeo = new THREE.BoxGeometry(0.2, 0.65, 0.8);
        const leg = new THREE.Mesh(legGeo, mat);
        leg.position.set(dx, 0.32, 0);
        leg.castShadow = true;
        group.add(leg);
      }

    } else if (pId === 'furniture_clt_workbench') {
      const topGeo = new THREE.BoxGeometry(2.2, 0.15, 1.0);
      const top = new THREE.Mesh(topGeo, mat);
      top.position.y = 0.68;
      top.castShadow = true;
      group.add(top);

      for (let x of [-0.9, 0.9]) {
        for (let z of [-0.4, 0.4]) {
          const legGeo = new THREE.BoxGeometry(0.12, 0.65, 0.12);
          const leg = new THREE.Mesh(legGeo, mat);
          leg.position.set(x, 0.32, z);
          leg.castShadow = true;
          group.add(leg);
        }
      }

    } else if (pId === 'furniture_hemp_screen') {
      const screenGeo = new THREE.BoxGeometry(1.3, 1.8, 0.08);
      const screen = new THREE.Mesh(screenGeo, mat);
      screen.position.y = 0.9;
      screen.castShadow = true;
      group.add(screen);

    } else if (pId === 'furniture_poly_stool') {
      const stoolGeo = new THREE.CylinderGeometry(0.25, 0.28, 0.5, 16);
      const stool = new THREE.Mesh(stoolGeo, mat);
      stool.position.y = 0.25;
      stool.castShadow = true;
      group.add(stool);

    } else if (pId === 'furniture_bamboo_daybed') {
      const bedGeo = new THREE.BoxGeometry(2.1, 0.2, 1.5);
      const bed = new THREE.Mesh(bedGeo, mat);
      bed.position.y = 0.1;
      bed.castShadow = true;
      group.add(bed);

      const tatamiGeo = new THREE.BoxGeometry(1.9, 0.15, 1.3);
      const tatami = new THREE.Mesh(tatamiGeo, accentMat);
      tatami.position.y = 0.25;
      group.add(tatami);

    } else {
      const fallbackGeo = new THREE.BoxGeometry(2, 2, 2);
      const fallback = new THREE.Mesh(fallbackGeo, mat);
      fallback.castShadow = true;
      group.add(fallback);
    }

    return group;
  }

  // Selected Instance Object
  const activeInstance = useMemo(() => {
    return placedItems.find((i) => i.instanceId === selectedInstanceId) || null;
  }, [placedItems, selectedInstanceId]);

  // Position Step Handlers
  const handleShiftPosition = (axis, delta) => {
    if (!activeInstance) return;
    playTactileClick();
    const currentPos = activeInstance.position || { x: 0, y: 0, z: 0 };
    const newPos = {
      ...currentPos,
      [axis]: Math.round((currentPos[axis] + delta) * 10) / 10
    };
    onUpdateInstance(activeInstance.instanceId, { position: newPos });
  };

  const handleRotateY = (angleDegrees) => {
    if (!activeInstance) return;
    playTactileClick();
    const currentRot = activeInstance.rotation || { x: 0, y: 0, z: 0 };
    const radDelta = (angleDegrees * Math.PI) / 180;
    const newRot = {
      ...currentRot,
      y: Math.round((currentRot.y + radDelta) * 100) / 100
    };
    onUpdateInstance(activeInstance.instanceId, { rotation: newRot });
  };

  const handleGroundSnap = () => {
    if (!activeInstance) return;
    playTactileClick();
    const pieceDef = STUDIO_PIECES.find((p) => p.id === activeInstance.pieceId);
    const defaultY = pieceDef?.defaultY || 0.2;
    const currentPos = activeInstance.position || { x: 0, y: 0, z: 0 };
    onUpdateInstance(activeInstance.instanceId, {
      position: { ...currentPos, y: defaultY }
    });
  };

  if (webglError) {
    return (
      <div className="w-full h-96 bg-yzy-obsidian border border-yzy-slate flex flex-col items-center justify-center p-6 text-center font-mono">
        <AlertCircle className="w-8 h-8 text-yzy-warning mb-2" />
        <span className="font-bold text-white text-sm uppercase">3D STUDIO ENGINE ACTIVE</span>
        <span className="text-xs text-yzy-ash max-w-sm mt-1">
          Use the layers and placement inspector to design your infrastructure.
        </span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[600px] border transition-colors overflow-hidden flex flex-col select-none touch-pan-y ${
      isWhiteTheme 
        ? 'bg-[#f6f6f2] border-neutral-300 text-neutral-900' 
        : 'bg-yzy-obsidian border-yzy-slate/70 text-white'
    }`}>
      {/* 3D Canvas Element */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Left Studio HUD Overlay */}
      <div 
        onMouseDown={(e) => e.stopPropagation()} 
        onTouchStart={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none z-10"
      >
        <div className={`flex items-center gap-1.5 backdrop-blur-md px-2.5 py-1 border shadow-lg ${
          isWhiteTheme ? 'bg-white/90 border-neutral-300 text-neutral-900' : 'bg-yzy-black/90 border-yzy-bone/40 text-white'
        }`}>
          <span className="w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[11px] tracking-widest uppercase font-bold truncate max-w-[200px] sm:max-w-none">
            {activeInstance ? `ACTIVE: ${activeInstance.pieceId.toUpperCase().replace(/_/g, ' ')}` : '3D CAD STUDIO // DRAG TO ROTATE 360°'}
          </span>
        </div>
        <span className="font-mono text-[8px] sm:text-[9px] text-yzy-ash">
          {placedItems.length} ELEMENTS PLACED | TAP ANY 3D OBJECT TO SELECT
        </span>
      </div>

      {/* Top Right Studio Viewport Settings */}
      <div 
        onMouseDown={(e) => e.stopPropagation()} 
        onTouchStart={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-2.5 right-2.5 flex items-center gap-1 z-10 font-mono text-[9px]"
      >
        {/* Sun Azimuth */}
        <div className={`flex items-center gap-1 backdrop-blur-md px-2 py-1 border ${
          isWhiteTheme ? 'bg-white/90 border-neutral-300 text-neutral-800' : 'bg-yzy-black/85 border-yzy-slate text-yzy-bone'
        }`}>
          <Sun className="w-3 h-3 text-yzy-warning" />
          <input
            type="range"
            min="0"
            max="360"
            value={sunAzimuth}
            onChange={(e) => onChangeSunAzimuth(Number(e.target.value))}
            className="w-12 sm:w-16 h-1 bg-yzy-slate cursor-pointer accent-yzy-bone"
          />
          <span className="w-5 text-right">{sunAzimuth}°</span>
        </div>

        {/* Gallery White / Obsidian Dark Theme Toggle */}
        <button
          onClick={() => {
            playTactileClick();
            onToggleTheme();
          }}
          className={`flex items-center gap-1 backdrop-blur-md px-2 py-1 border font-bold ${
            isWhiteTheme 
              ? 'bg-neutral-900 text-white border-neutral-700 hover:bg-neutral-800' 
              : 'bg-yzy-bone text-yzy-black border-yzy-bone hover:bg-white'
          }`}
          title="Toggle Studio Theme"
        >
          {isWhiteTheme ? <Moon className="w-3 h-3" /> : <SunMedium className="w-3 h-3" />}
          <span className="hidden sm:inline">{isWhiteTheme ? 'DARK' : 'WHITE'}</span>
        </button>
      </div>

      {/* Floating Active Element Transform Gizmo (When a piece is selected) */}
      {activeInstance && (
        <div 
          onMouseDown={(e) => e.stopPropagation()} 
          onTouchStart={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-1 backdrop-blur-md px-2.5 py-1.5 border shadow-2xl z-20 font-mono text-[9px] sm:text-[10px] ${
            isWhiteTheme ? 'bg-white/95 border-neutral-400 text-neutral-900' : 'bg-yzy-black/95 border-yzy-bone text-white'
          }`}
        >
          <span className="font-bold text-yzy-neon mr-1 flex items-center gap-1">
            <Move className="w-3 h-3" /> SHIFT:
          </span>

          {/* Position X */}
          <div className="flex items-center gap-0.5 border border-neutral-400/40 p-0.5">
            <span className="text-yzy-ash text-[8px] font-bold px-0.5">X</span>
            <button onClick={() => handleShiftPosition('x', -0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">◀</button>
            <span className="w-6 text-center">{activeInstance.position?.x || 0}</span>
            <button onClick={() => handleShiftPosition('x', 0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">▶</button>
          </div>

          {/* Position Y (Elevation) */}
          <div className="flex items-center gap-0.5 border border-neutral-400/40 p-0.5">
            <span className="text-yzy-ash text-[8px] font-bold px-0.5">Y</span>
            <button onClick={() => handleShiftPosition('y', -0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">▼</button>
            <span className="w-6 text-center">{activeInstance.position?.y || 0}</span>
            <button onClick={() => handleShiftPosition('y', 0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">▲</button>
          </div>

          {/* Position Z */}
          <div className="flex items-center gap-0.5 border border-neutral-400/40 p-0.5">
            <span className="text-yzy-ash text-[8px] font-bold px-0.5">Z</span>
            <button onClick={() => handleShiftPosition('z', -0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">◀</button>
            <span className="w-6 text-center">{activeInstance.position?.z || 0}</span>
            <button onClick={() => handleShiftPosition('z', 0.5)} className="px-1 py-0.5 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black">▶</button>
          </div>

          {/* Rotate 45° */}
          <button
            onClick={() => handleRotateY(45)}
            className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black font-bold border border-neutral-400/40"
            title="Rotate 45 degrees"
          >
            ROTATE 45°
          </button>

          {/* Snap to Ground */}
          <button
            onClick={handleGroundSnap}
            className="px-1.5 py-1 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black text-[9px] border border-neutral-400/40"
            title="Snap to ground level"
          >
            GROUND
          </button>

          {/* Duplicate */}
          <button
            onClick={() => onDuplicateInstance(activeInstance.instanceId)}
            className="flex items-center gap-0.5 px-1.5 py-1 bg-neutral-200 dark:bg-neutral-800 hover:bg-yzy-bone hover:text-black font-bold border border-neutral-400/40"
            title="Clone instance"
          >
            <Copy className="w-2.5 h-2.5" />
            <span>CLONE</span>
          </button>

          {/* Delete */}
          <button
            onClick={() => onDeleteInstance(activeInstance.instanceId)}
            className="flex items-center gap-0.5 px-1.5 py-1 bg-red-600/90 text-white hover:bg-red-700 font-bold ml-0.5"
            title="Remove from 3D space"
          >
            <Trash2 className="w-2.5 h-2.5" />
            <span>REMOVE</span>
          </button>
        </div>
      )}

      {/* Bottom Control Bar */}
      <div 
        onMouseDown={(e) => e.stopPropagation()} 
        onTouchStart={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 backdrop-blur-md px-2 py-1 border shadow-2xl z-10 font-mono text-[9px] sm:text-xs ${
          isWhiteTheme ? 'bg-white/90 border-neutral-300 text-neutral-800' : 'bg-yzy-black/90 border-yzy-slate text-yzy-chalk'
        }`}
      >
        <button
          onClick={() => {
            playTactileClick();
            onToggleAutoRotate();
          }}
          className={`flex items-center gap-1 px-2 py-0.5 transition-all ${
            autoRotate ? 'bg-yzy-bone text-black font-bold' : 'hover:text-black dark:hover:text-white'
          }`}
        >
          <RotateCcw className={`w-3 h-3 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
          <span>360° TOUR</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            onToggleWireframe();
          }}
          className={`px-2 py-0.5 transition-all ${
            showWireframe ? 'bg-yzy-neon text-black font-bold' : 'hover:text-black dark:hover:text-white'
          }`}
        >
          CAD MESH
        </button>
      </div>
    </div>
  );
}
