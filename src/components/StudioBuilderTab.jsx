import React, { useState, useEffect, useMemo } from 'react';
import { 
  STUDIO_CATEGORIES, 
  STUDIO_PIECES, 
  STARTER_BLUEPRINTS 
} from '../data/studioCatalog';
import { MATERIALS } from '../data/materials';
import { APERTURE_MATERIALS } from '../data/partCatalog';
import { analyzeInfrastructure } from '../utils/structuralValidator';
import Studio3DWorkspace from './Studio3DWorkspace';
import { 
  Plus, 
  Trash2, 
  Copy, 
  Save, 
  FolderOpen, 
  Download, 
  RotateCcw, 
  Check, 
  AlertTriangle, 
  Sparkles, 
  Layers, 
  Box, 
  Cpu, 
  Sliders, 
  Sun, 
  ShieldCheck, 
  DollarSign, 
  Leaf, 
  ChevronRight, 
  ChevronDown, 
  Move,
  Info,
  CheckCircle2,
  XCircle,
  FileCode,
  Share2
} from 'lucide-react';
import { playTactileClick, playSelectTone, playConfirmTone } from '../utils/audio';

const ALL_MATERIALS = [...MATERIALS, ...APERTURE_MATERIALS];
const STORAGE_KEY = 'ezy_studio_saved_blueprints_v1';

export default function StudioBuilderTab() {
  // Master Studio State
  const [placedItems, setPlacedItems] = useState(() => {
    return STARTER_BLUEPRINTS[1]?.items || [];
  });
  const [selectedInstanceId, setSelectedInstanceId] = useState(null);
  const [blueprintName, setBlueprintName] = useState('YZY MONOLITHIC SANCTUARY');
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'inspector' | 'layers' | 'intel' | 'blueprints'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [studioTheme, setStudioTheme] = useState('white'); // 'white' | 'dark'
  const [showWireframe, setShowWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [sunAzimuth, setSunAzimuth] = useState(45);

  // Saved Blueprints LocalStorage
  const [savedBlueprints, setSavedBlueprints] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [saveSuccessNotice, setSaveSuccessNotice] = useState(false);

  // Real-Time Structural & Living Intelligence Analysis
  const analysis = useMemo(() => {
    return analyzeInfrastructure(placedItems);
  }, [placedItems]);

  // Currently Selected Piece Instance
  const selectedInstance = useMemo(() => {
    return placedItems.find((i) => i.instanceId === selectedInstanceId) || null;
  }, [placedItems, selectedInstanceId]);

  const selectedPieceDef = useMemo(() => {
    if (!selectedInstance) return null;
    return STUDIO_PIECES.find((p) => p.id === selectedInstance.pieceId) || null;
  }, [selectedInstance]);

  // Filtered Catalog Pieces
  const filteredPieces = useMemo(() => {
    if (selectedCategory === 'all') return STUDIO_PIECES;
    return STUDIO_PIECES.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  // Spawning a New Piece into 3D Workspace
  const handleAddPiece = (piece) => {
    playSelectTone();
    const newInstanceId = `inst_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;

    // Smart placement positioning based on existing count
    const existingCount = placedItems.filter((p) => p.pieceId === piece.id).length;
    const offsetX = (existingCount % 3) * 1.5 - 1.5;
    const offsetZ = Math.floor(existingCount / 3) * 1.5;

    const newItem = {
      instanceId: newInstanceId,
      pieceId: piece.id,
      materialId: piece.defaultMaterial,
      position: { 
        x: offsetX, 
        y: piece.defaultY || 0.5, 
        z: offsetZ 
      },
      rotation: { x: 0, y: 0, z: 0 }
    };

    setPlacedItems((prev) => [...prev, newItem]);
    setSelectedInstanceId(newInstanceId);
    setActiveTab('inspector');
  };

  // Update Instance Properties (Material, Position, Rotation)
  const handleUpdateInstance = (instanceId, updates) => {
    setPlacedItems((prev) =>
      prev.map((item) => (item.instanceId === instanceId ? { ...item, ...updates } : item))
    );
  };

  // Duplicate an Instance
  const handleDuplicateInstance = (instanceId) => {
    playConfirmTone();
    const target = placedItems.find((i) => i.instanceId === instanceId);
    if (!target) return;

    const newInstanceId = `inst_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`;
    const clonedItem = {
      ...target,
      instanceId: newInstanceId,
      position: {
        x: (target.position?.x || 0) + 1.2,
        y: target.position?.y || 0.5,
        z: (target.position?.z || 0) + 1.2
      }
    };

    setPlacedItems((prev) => [...prev, clonedItem]);
    setSelectedInstanceId(newInstanceId);
  };

  // Delete an Instance
  const handleDeleteInstance = (instanceId) => {
    playTactileClick();
    setPlacedItems((prev) => prev.filter((i) => i.instanceId !== instanceId));
    if (selectedInstanceId === instanceId) {
      setSelectedInstanceId(null);
    }
  };

  // Change Material for Active Instance
  const handleChangeMaterial = (materialId) => {
    if (!selectedInstanceId) return;
    playSelectTone();
    handleUpdateInstance(selectedInstanceId, { materialId });
  };

  // Save Blueprint to LocalStorage
  const handleSaveBlueprint = () => {
    playConfirmTone();
    const newBlueprint = {
      id: `bp_${Date.now()}`,
      name: blueprintName.trim() || 'CUSTOM SOVEREIGN INFRASTRUCTURE',
      timestamp: new Date().toISOString(),
      itemCount: placedItems.length,
      totalCost: analysis.financials.totalCost,
      totalCarbon: analysis.financials.totalCarbon,
      items: placedItems
    };

    const updated = [newBlueprint, ...savedBlueprints.filter((b) => b.name !== newBlueprint.name)];
    setSavedBlueprints(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save blueprint:', err);
    }

    setSaveSuccessNotice(true);
    setTimeout(() => setSaveSuccessNotice(false), 3000);
  };

  // Load a Blueprint
  const handleLoadBlueprint = (blueprint) => {
    playConfirmTone();
    setBlueprintName(blueprint.name);
    setPlacedItems(blueprint.items || []);
    setSelectedInstanceId(null);
    setActiveTab('catalog');
  };

  // Delete a Saved Blueprint
  const handleDeleteSavedBlueprint = (bpId) => {
    playTactileClick();
    const updated = savedBlueprints.filter((b) => b.id !== bpId);
    setSavedBlueprints(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to update blueprints:', err);
    }
  };

  // Export Blueprint JSON
  const handleExportJSON = () => {
    playConfirmTone();
    const exportData = {
      blueprintName,
      createdAt: new Date().toISOString(),
      analysis: {
        financials: analysis.financials,
        livingBenefits: analysis.livingBenefits
      },
      items: placedItems
    };
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${blueprintName.toLowerCase().replace(/\s+/g, '_')}_blueprint.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Clear Canvas
  const handleClearCanvas = () => {
    playTactileClick();
    if (placedItems.length === 0) return;
    if (window.confirm('Reset 3D Canvas? All unsaved pieces will be cleared.')) {
      setPlacedItems([]);
      setSelectedInstanceId(null);
    }
  };

  return (
    <div className="flex flex-col gap-3 font-mono">
      {/* 1. Top Studio Master Control Bar */}
      <div className="bg-yzy-obsidian border border-yzy-bone/40 p-2.5 sm:p-3 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xl">
        {/* Left: Blueprint Name & Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yzy-neon animate-pulse" />
            <input
              type="text"
              value={blueprintName}
              onChange={(e) => setBlueprintName(e.target.value)}
              className="bg-yzy-black border border-yzy-slate px-2.5 py-1 text-xs sm:text-sm font-bold text-white uppercase focus:border-yzy-bone outline-none min-w-[220px] sm:min-w-[280px]"
              placeholder="NAME INFRASTRUCTURE..."
            />
          </div>

          <div className="flex items-center gap-2 text-[10px] text-yzy-ash">
            <span className="px-2 py-0.5 bg-yzy-black border border-yzy-slate text-yzy-neon font-bold">
              ${analysis.financials.totalCost.toLocaleString()}
            </span>
            <span className="px-2 py-0.5 bg-yzy-black border border-yzy-slate text-yzy-bone">
              {analysis.financials.totalCarbon} kg CO2
            </span>
            <span className="px-2 py-0.5 bg-yzy-black border border-yzy-slate text-yzy-chalk">
              {placedItems.length} PIECES
            </span>
          </div>
        </div>

        {/* Right: Quick Studio Action Buttons */}
        <div className="flex items-center flex-wrap gap-1.5 text-[10px]">
          <button
            onClick={handleSaveBlueprint}
            className="flex items-center gap-1 bg-yzy-bone hover:bg-white text-yzy-black px-2.5 py-1.5 font-bold transition-all"
            title="Save Blueprint to Local Storage"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{saveSuccessNotice ? 'SAVED!' : 'SAVE'}</span>
          </button>

          <button
            onClick={() => {
              playTactileClick();
              setActiveTab('blueprints');
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 border transition-all ${
              activeTab === 'blueprints'
                ? 'bg-yzy-neon text-black font-bold border-yzy-neon'
                : 'bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash'
            }`}
          >
            <FolderOpen className="w-3.5 h-3.5" />
            <span>PRESETS</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1 bg-yzy-black hover:bg-yzy-charcoal text-yzy-chalk hover:text-white px-2.5 py-1.5 border border-yzy-slate"
            title="Export Blueprint JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">EXPORT</span>
          </button>

          <button
            onClick={handleClearCanvas}
            className="flex items-center gap-1 bg-yzy-black hover:bg-red-950 text-yzy-ash hover:text-red-400 px-2.5 py-1.5 border border-yzy-slate"
            title="Clear all pieces"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>CLEAR</span>
          </button>
        </div>
      </div>

      {/* 2. Main Studio Split Grid (3D Center Stage Left + Multi-Tab Inspector Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start">
        {/* LEFT / CENTER: 3D Workspace Canvas */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-2">
          <Studio3DWorkspace
            placedItems={placedItems}
            selectedInstanceId={selectedInstanceId}
            onSelectInstance={(id) => {
              if (id) {
                setSelectedInstanceId(id);
                setActiveTab('inspector');
              }
            }}
            onUpdateInstance={handleUpdateInstance}
            onDeleteInstance={handleDeleteInstance}
            onDuplicateInstance={handleDuplicateInstance}
            theme={studioTheme}
            onToggleTheme={() => setStudioTheme((t) => (t === 'white' ? 'dark' : 'white'))}
            showWireframe={showWireframe}
            onToggleWireframe={() => setShowWireframe(!showWireframe)}
            autoRotate={autoRotate}
            onToggleAutoRotate={() => setAutoRotate(!autoRotate)}
            sunAzimuth={sunAzimuth}
            onChangeSunAzimuth={setSunAzimuth}
          />

          {/* Real-time Structural Alert Strip */}
          {analysis.structuralIssues.length > 0 && (
            <div className="flex flex-col gap-1.5">
              {analysis.structuralIssues.slice(0, 2).map((issue) => (
                <div
                  key={issue.id}
                  className={`p-2 border flex items-start gap-2 text-[10px] ${
                    issue.type === 'error'
                      ? 'bg-red-950/80 border-red-500/80 text-red-200'
                      : issue.type === 'warning'
                      ? 'bg-amber-950/80 border-amber-500/80 text-amber-200'
                      : issue.type === 'success'
                      ? 'bg-emerald-950/80 border-emerald-500/80 text-emerald-200'
                      : 'bg-yzy-obsidian border-yzy-slate text-yzy-chalk'
                  }`}
                >
                  {issue.type === 'error' && <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />}
                  {issue.type === 'warning' && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />}
                  {issue.type === 'success' && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />}
                  {issue.type === 'info' && <Info className="w-3.5 h-3.5 text-yzy-neon shrink-0 mt-0.5" />}
                  <div className="flex-1">
                    <span className="font-bold uppercase block">{issue.title}</span>
                    <span className="opacity-90">{issue.message}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Multi-Tab Studio Control Panel */}
        <div className="lg:col-span-5 xl:col-span-4 bg-yzy-obsidian border border-yzy-bone/40 flex flex-col shadow-2xl overflow-hidden">
          {/* Panel Tab Navigation Bar */}
          <div className="flex items-center border-b border-yzy-slate bg-yzy-black text-[10px] overflow-x-auto no-scrollbar">
            <button
              onClick={() => {
                playTactileClick();
                setActiveTab('catalog');
              }}
              className={`flex-1 min-w-[75px] py-2.5 px-2 text-center border-r border-yzy-slate font-bold transition-colors ${
                activeTab === 'catalog' ? 'bg-yzy-bone text-yzy-black' : 'text-yzy-chalk hover:text-white'
              }`}
            >
              + CATALOG
            </button>

            <button
              onClick={() => {
                playTactileClick();
                setActiveTab('inspector');
              }}
              className={`flex-1 min-w-[75px] py-2.5 px-2 text-center border-r border-yzy-slate font-bold transition-colors ${
                activeTab === 'inspector' ? 'bg-yzy-bone text-yzy-black' : 'text-yzy-chalk hover:text-white'
              }`}
            >
              INSPECTOR
            </button>

            <button
              onClick={() => {
                playTactileClick();
                setActiveTab('layers');
              }}
              className={`flex-1 min-w-[65px] py-2.5 px-2 text-center border-r border-yzy-slate font-bold transition-colors ${
                activeTab === 'layers' ? 'bg-yzy-bone text-yzy-black' : 'text-yzy-chalk hover:text-white'
              }`}
            >
              LAYERS ({placedItems.length})
            </button>

            <button
              onClick={() => {
                playTactileClick();
                setActiveTab('intel');
              }}
              className={`flex-1 min-w-[75px] py-2.5 px-2 text-center font-bold transition-colors ${
                activeTab === 'intel' ? 'bg-yzy-bone text-yzy-black' : 'text-yzy-chalk hover:text-white'
              }`}
            >
              BENEFITS
            </button>
          </div>

          {/* TAB 1: COMPONENT CATALOG */}
          {activeTab === 'catalog' && (
            <div className="p-3 sm:p-4 flex flex-col gap-3 max-h-[540px] overflow-y-auto">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 no-scrollbar">
                {STUDIO_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      playTactileClick();
                      setSelectedCategory(cat.id);
                    }}
                    className={`shrink-0 px-2 py-1 text-[9px] uppercase border transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-yzy-bone text-yzy-black font-bold border-yzy-bone'
                        : 'bg-yzy-black text-yzy-ash border-yzy-slate hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Pieces Grid */}
              <div className="grid grid-cols-1 gap-2">
                {filteredPieces.map((piece) => {
                  const defaultMat = ALL_MATERIALS.find((m) => m.id === piece.defaultMaterial);

                  return (
                    <div
                      key={piece.id}
                      onClick={() => handleAddPiece(piece)}
                      className="cursor-pointer bg-yzy-black/80 hover:bg-yzy-black border border-yzy-slate hover:border-yzy-bone p-2.5 flex items-start justify-between gap-2 group transition-all"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className="text-[8px] text-yzy-neon uppercase font-bold tracking-wider">
                            {piece.category}
                          </span>
                          <span className="text-[8px] text-yzy-ash">|</span>
                          <span className="text-[8px] text-yzy-ash">
                            {defaultMat?.shortName || 'Material'}
                          </span>
                        </div>

                        <h4 className="font-display text-xs font-bold text-white group-hover:text-yzy-bone leading-tight">
                          {piece.name}
                        </h4>

                        <p className="text-[9px] text-yzy-ash line-clamp-1 mt-0.5">
                          {piece.tagline}
                        </p>
                      </div>

                      <button
                        className="shrink-0 bg-yzy-charcoal group-hover:bg-yzy-bone text-yzy-chalk group-hover:text-yzy-black p-1.5 border border-yzy-slate group-hover:border-yzy-bone transition-all mt-1"
                        title="Add to 3D Space"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: ACTIVE PIECE INSPECTOR & MATERIAL SWAPPER */}
          {activeTab === 'inspector' && (
            <div className="p-3 sm:p-4 flex flex-col gap-3 max-h-[540px] overflow-y-auto text-xs">
              {selectedInstance && selectedPieceDef ? (
                <>
                  {/* Selected Piece Header */}
                  <div className="bg-yzy-black p-2.5 border border-yzy-bone/50 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-yzy-neon uppercase font-bold">
                        {selectedPieceDef.category} // ACTIVE COMPONENT
                      </span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleDuplicateInstance(selectedInstance.instanceId)}
                          className="p-1 bg-yzy-charcoal hover:bg-yzy-bone hover:text-black border border-yzy-slate text-yzy-chalk"
                          title="Clone"
                        >
                          <Copy className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => handleDeleteInstance(selectedInstance.instanceId)}
                          className="p-1 bg-red-950 hover:bg-red-800 border border-red-600/50 text-red-200"
                          title="Delete"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-display text-sm font-bold text-white">
                      {selectedPieceDef.name}
                    </h3>
                    <p className="text-[10px] text-yzy-ash">
                      {selectedPieceDef.description}
                    </p>
                  </div>

                  {/* Material Swapper Grid for this Piece */}
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-[10px] text-yzy-ash">
                      <span className="uppercase font-bold">SELECT MATERIAL:</span>
                      <span className="text-yzy-neon font-bold">
                        {ALL_MATERIALS.find((m) => m.id === selectedInstance.materialId)?.shortName || 'Custom'}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {selectedPieceDef.allowedMaterials.map((matId) => {
                        const mat = ALL_MATERIALS.find((m) => m.id === matId);
                        if (!mat) return null;
                        const isAssigned = selectedInstance.materialId === mat.id;

                        return (
                          <div
                            key={mat.id}
                            onClick={() => handleChangeMaterial(mat.id)}
                            className={`cursor-pointer p-2 border transition-all flex flex-col justify-between ${
                              isAssigned
                                ? 'bg-yzy-black border-yzy-bone ring-1 ring-yzy-bone shadow-md'
                                : 'bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/50"
                                style={{ backgroundColor: mat.colorHex }}
                              />
                              {isAssigned && (
                                <span className="text-[8px] font-bold bg-yzy-bone text-yzy-black px-1">
                                  ACTIVE
                                </span>
                              )}
                            </div>
                            <span className="font-bold text-white text-[11px] truncate block">
                              {mat.shortName || mat.name}
                            </span>
                            <span className="text-[9px] text-yzy-neon font-mono mt-0.5">
                              {mat.unitCost.split('(')[0]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Selected Material Environmental Intel */}
                  {(() => {
                    const activeMat = ALL_MATERIALS.find((m) => m.id === selectedInstance.materialId);
                    if (!activeMat) return null;

                    return (
                      <div className="bg-yzy-black border border-yzy-slate p-2.5 flex flex-col gap-1.5 text-[10px]">
                        <span className="text-yzy-neon font-bold uppercase flex items-center gap-1">
                          <Sparkles className="w-3 h-3" /> MATERIAL BENEFITS:
                        </span>
                        <ul className="flex flex-col gap-0.5 text-yzy-chalk">
                          {activeMat.pros?.slice(0, 2).map((p, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-yzy-neon">✓</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })()}
                </>
              ) : (
                <div className="py-12 px-4 text-center flex flex-col items-center justify-center gap-2 text-yzy-ash">
                  <Box className="w-8 h-8 text-yzy-slate" />
                  <span className="font-bold uppercase text-white">NO PIECE SELECTED</span>
                  <span className="text-[10px] max-w-xs">
                    Tap any 3D object in the workspace or pick a component from the Catalog tab.
                  </span>
                  <button
                    onClick={() => setActiveTab('catalog')}
                    className="mt-2 px-3 py-1 bg-yzy-bone text-black font-bold text-[10px]"
                  >
                    OPEN CATALOG
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: ACTIVE LAYERS LIST */}
          {activeTab === 'layers' && (
            <div className="p-3 sm:p-4 flex flex-col gap-2 max-h-[540px] overflow-y-auto text-xs">
              <div className="flex items-center justify-between text-[10px] text-yzy-ash pb-1 border-b border-yzy-slate">
                <span>SCENE HIERARCHY ({placedItems.length} ITEMS)</span>
                <span>ACTIONS</span>
              </div>

              {placedItems.length === 0 ? (
                <div className="py-8 text-center text-yzy-ash text-[10px]">
                  Scene is empty. Add pieces from the catalog.
                </div>
              ) : (
                placedItems.map((item, idx) => {
                  const pieceDef = STUDIO_PIECES.find((p) => p.id === item.pieceId) || STUDIO_PIECES[0];
                  const matDef = ALL_MATERIALS.find((m) => m.id === item.materialId) || ALL_MATERIALS[0];
                  const isSelected = item.instanceId === selectedInstanceId;

                  return (
                    <div
                      key={item.instanceId}
                      onClick={() => {
                        playSelectTone();
                        setSelectedInstanceId(item.instanceId);
                        setActiveTab('inspector');
                      }}
                      className={`cursor-pointer p-2 border transition-all flex items-center justify-between gap-2 ${
                        isSelected
                          ? 'bg-yzy-black border-yzy-bone ring-1 ring-yzy-bone'
                          : 'bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-[9px] text-yzy-ash w-4">{idx + 1}</span>
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: matDef.colorHex }}
                        />
                        <div className="min-w-0">
                          <span className="font-bold text-white text-[11px] truncate block">
                            {pieceDef.name}
                          </span>
                          <span className="text-[9px] text-yzy-neon truncate block">
                            {matDef.shortName} | Y: {item.position?.y || 0}m
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDuplicateInstance(item.instanceId);
                          }}
                          className="p-1 bg-yzy-charcoal hover:bg-yzy-bone hover:text-black text-yzy-ash"
                          title="Clone"
                        >
                          <Copy className="w-2.5 h-2.5" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteInstance(item.instanceId);
                          }}
                          className="p-1 bg-red-950 hover:bg-red-800 text-red-300"
                          title="Delete"
                        >
                          <Trash2 className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}

          {/* TAB 4: ARCHITECTURAL INTEL & LIVING BENEFITS */}
          {activeTab === 'intel' && (
            <div className="p-3 sm:p-4 flex flex-col gap-3 max-h-[540px] overflow-y-auto text-xs">
              {/* Overall Living Score */}
              <div className="bg-yzy-black border border-yzy-bone p-3 flex items-center justify-between">
                <div>
                  <span className="text-[9px] text-yzy-ash uppercase block">HUMAN HABITATION SCORE</span>
                  <span className="font-display text-lg font-bold text-white">
                    {analysis.livingBenefits.overallScore} / 100
                  </span>
                  <span className="text-[9px] text-yzy-neon block">REGENERATIVE & SOVEREIGN</span>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-yzy-neon flex items-center justify-center font-mono font-bold text-sm text-yzy-neon">
                  {analysis.livingBenefits.overallScore}%
                </div>
              </div>

              {/* 5 Key Living Benefits Gauges */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] text-yzy-ash uppercase font-bold">
                  HUMAN HEALTH & WELL-BEING METRICS:
                </span>

                {/* 1. Circadian Daylight */}
                <div className="p-2 bg-yzy-black border border-yzy-slate flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold">CIRCADIAN DAYLIGHT & SUNLIGHT</span>
                    <span className="text-yzy-neon font-bold">{analysis.livingBenefits.circadianDaylight}%</span>
                  </div>
                  <div className="w-full bg-yzy-slate h-1.5 overflow-hidden">
                    <div className="bg-yzy-neon h-full transition-all duration-500" style={{ width: `${analysis.livingBenefits.circadianDaylight}%` }} />
                  </div>
                  <span className="text-[8px] text-yzy-ash">Natural light regulates melatonin and sleep cycles.</span>
                </div>

                {/* 2. Thermal Inertia */}
                <div className="p-2 bg-yzy-black border border-yzy-slate flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold">THERMAL MASS & PASSIVE FLYWHEEL</span>
                    <span className="text-yzy-bone font-bold">{analysis.livingBenefits.thermalInertia}%</span>
                  </div>
                  <div className="w-full bg-yzy-slate h-1.5 overflow-hidden">
                    <div className="bg-yzy-bone h-full transition-all duration-500" style={{ width: `${analysis.livingBenefits.thermalInertia}%` }} />
                  </div>
                  <span className="text-[8px] text-yzy-ash">Stabilizes indoor temperatures in 0°F to 110°F without HVAC.</span>
                </div>

                {/* 3. Indoor Air Quality */}
                <div className="p-2 bg-yzy-black border border-yzy-slate flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold">INDOOR AIR PURITY (ZERO VOCs)</span>
                    <span className="text-emerald-400 font-bold">{analysis.livingBenefits.indoorAirPurity}%</span>
                  </div>
                  <div className="w-full bg-yzy-slate h-1.5 overflow-hidden">
                    <div className="bg-emerald-400 h-full transition-all duration-500" style={{ width: `${analysis.livingBenefits.indoorAirPurity}%` }} />
                  </div>
                  <span className="text-[8px] text-yzy-ash">Mycelium & hemp filter toxins and regulate humidity.</span>
                </div>

                {/* 4. Sovereign Autonomy */}
                <div className="p-2 bg-yzy-black border border-yzy-slate flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold">OFF-GRID SOVEREIGN POWER & WATER</span>
                    <span className="text-amber-400 font-bold">{analysis.livingBenefits.sovereignAutonomy}%</span>
                  </div>
                  <div className="w-full bg-yzy-slate h-1.5 overflow-hidden">
                    <div className="bg-amber-400 h-full transition-all duration-500" style={{ width: `${analysis.livingBenefits.sovereignAutonomy}%` }} />
                  </div>
                  <span className="text-[8px] text-yzy-ash">Closed-loop energy and water independence.</span>
                </div>

                {/* 5. Acoustic Serenity */}
                <div className="p-2 bg-yzy-black border border-yzy-slate flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-white font-bold">ACOUSTIC PEACE & SOUND DAMPENING</span>
                    <span className="text-sky-400 font-bold">{analysis.livingBenefits.acousticPeace}%</span>
                  </div>
                  <div className="w-full bg-yzy-slate h-1.5 overflow-hidden">
                    <div className="bg-sky-400 h-full transition-all duration-500" style={{ width: `${analysis.livingBenefits.acousticPeace}%` }} />
                  </div>
                  <span className="text-[8px] text-yzy-ash">Eliminates outside city and highway noise frequencies.</span>
                </div>
              </div>

              {/* Material Bill of Quantities Breakdown */}
              {analysis.materialBreakdown.length > 0 && (
                <div className="flex flex-col gap-1.5 pt-2 border-t border-yzy-slate">
                  <span className="text-[9px] text-yzy-ash uppercase font-bold">
                    BILL OF MATERIALS & DIRECT SOURCING:
                  </span>
                  <div className="flex flex-col gap-1">
                    {analysis.materialBreakdown.map((m, mi) => (
                      <div key={mi} className="p-1.5 bg-yzy-black border border-yzy-slate flex items-center justify-between text-[10px]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.colorHex }} />
                          <span className="font-bold text-white">{m.shortName}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yzy-ash">{m.totalSqft} sqft</span>
                          <span className="text-yzy-neon font-bold">${m.totalCost.toLocaleString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 5: SAVED BLUEPRINTS & STARTERS */}
          {activeTab === 'blueprints' && (
            <div className="p-3 sm:p-4 flex flex-col gap-3 max-h-[540px] overflow-y-auto text-xs">
              {/* Starter Presets */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[9px] text-yzy-ash uppercase font-bold">
                  STARTER ARCHETYPAL BLUEPRINTS:
                </span>
                <div className="flex flex-col gap-1.5">
                  {STARTER_BLUEPRINTS.map((bp) => (
                    <div
                      key={bp.id}
                      onClick={() => handleLoadBlueprint(bp)}
                      className="cursor-pointer bg-yzy-black p-2.5 border border-yzy-slate hover:border-yzy-bone flex items-center justify-between gap-2 group transition-all"
                    >
                      <div>
                        <h4 className="font-bold text-white group-hover:text-yzy-bone text-[11px]">
                          {bp.name}
                        </h4>
                        <p className="text-[9px] text-yzy-ash line-clamp-1">{bp.tagline}</p>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 bg-yzy-charcoal group-hover:bg-yzy-bone group-hover:text-black font-bold">
                        LOAD
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* User Saved Blueprints */}
              <div className="flex flex-col gap-1.5 pt-2 border-t border-yzy-slate">
                <span className="text-[9px] text-yzy-ash uppercase font-bold">
                  YOUR SAVED BLUEPRINTS ({savedBlueprints.length}):
                </span>

                {savedBlueprints.length === 0 ? (
                  <div className="py-4 text-center text-yzy-ash text-[10px]">
                    No custom blueprints saved yet. Click SAVE above to store your design.
                  </div>
                ) : (
                  <div className="flex flex-col gap-1.5">
                    {savedBlueprints.map((sb) => (
                      <div
                        key={sb.id}
                        className="bg-yzy-black p-2.5 border border-yzy-slate flex items-center justify-between gap-2"
                      >
                        <div
                          className="cursor-pointer flex-1"
                          onClick={() => handleLoadBlueprint(sb)}
                        >
                          <h4 className="font-bold text-white text-[11px] hover:text-yzy-neon">{sb.name}</h4>
                          <span className="text-[8px] text-yzy-ash">
                            {sb.itemCount} pieces | ${sb.totalCost?.toLocaleString()} | {new Date(sb.timestamp).toLocaleDateString()}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleLoadBlueprint(sb)}
                            className="px-2 py-0.5 bg-yzy-bone text-black text-[9px] font-bold hover:bg-white"
                          >
                            LOAD
                          </button>
                          <button
                            onClick={() => handleDeleteSavedBlueprint(sb.id)}
                            className="p-1 bg-red-950 hover:bg-red-800 text-red-300"
                            title="Delete"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
