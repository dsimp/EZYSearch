import React from 'react';
import { 
  LAYERS_META, 
  UTILITY_PACKAGES 
} from '../data/materials';
import { 
  Shield, 
  Layers, 
  Flame, 
  Leaf, 
  DollarSign, 
  Cpu, 
  Check, 
  Info, 
  Sparkles,
  Zap,
  Hammer
} from 'lucide-react';
import { playTactileClick, playSelectTone, playLayerSwitch } from '../utils/audio';

export default function MaterialConfigurator({
  selectedMaterials,
  onSelectMaterial,
  activeLayer,
  setActiveLayer,
  materialsList,
  onApplyPreset,
  infrastructure
}) {
  const currentLayerMeta = LAYERS_META.find((l) => l.id === activeLayer) || LAYERS_META[0];

  // Filter materials suitable for this layer
  const layerMaterials = activeLayer === 'utilities' 
    ? [] 
    : materialsList.filter((m) => m.compatibleLayers.includes(activeLayer));

  const activeMaterialId = selectedMaterials[activeLayer];
  const activeMaterialData = materialsList.find((m) => m.id === activeMaterialId);

  return (
    <div className="flex flex-col gap-4">
      {/* Top Section Header with Presets Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            02 // CUSTOMIZABLE ECOSYSTEM
          </span>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-yzy-bone">
            LAYER-BY-LAYER MATERIAL SPECIFICATION
          </h2>
        </div>

        {/* Quick Architectural Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          <span className="font-mono text-[9px] text-yzy-ash tracking-widest uppercase shrink-0 mr-1">
            PRESETS:
          </span>
          <button
            onClick={() => onApplyPreset('cheapest')}
            className="shrink-0 px-2 py-1 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-[10px] font-mono text-yzy-chalk hover:text-yzy-bone tracking-wider transition-all flex items-center gap-1"
          >
            <DollarSign className="w-3 h-3 text-yzy-neon" />
            <span>LOWEST COST DIY</span>
          </button>
          <button
            onClick={() => onApplyPreset('eco')}
            className="shrink-0 px-2 py-1 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-[10px] font-mono text-yzy-chalk hover:text-yzy-bone tracking-wider transition-all flex items-center gap-1"
          >
            <Leaf className="w-3 h-3 text-yzy-hemp" />
            <span>NET CARBON SINK</span>
          </button>
          <button
            onClick={() => onApplyPreset('disaster')}
            className="shrink-0 px-2 py-1 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-[10px] font-mono text-yzy-chalk hover:text-yzy-bone tracking-wider transition-all flex items-center gap-1"
          >
            <Shield className="w-3 h-3 text-yzy-chalk" />
            <span>DISASTER RESILIENT</span>
          </button>
          <button
            onClick={() => onApplyPreset('brutalist')}
            className="shrink-0 px-2 py-1 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-[10px] font-mono text-yzy-chalk hover:text-yzy-bone tracking-wider transition-all flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-yzy-earth" />
            <span>RAW EARTH BRUTALISM</span>
          </button>
        </div>
      </div>

      {/* Layer Navigation Tabs (Horizontal Strip) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1.5">
        {LAYERS_META.map((layer) => {
          const isSelected = activeLayer === layer.id;
          const assignedMatId = selectedMaterials[layer.id];
          const assignedMat = layer.id === 'utilities'
            ? UTILITY_PACKAGES.find((u) => u.id === assignedMatId)
            : materialsList.find((m) => m.id === assignedMatId);

          return (
            <button
              key={layer.id}
              onClick={() => {
                playLayerSwitch();
                setActiveLayer(layer.id);
              }}
              className={`p-2.5 text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-yzy-bone text-yzy-black border-yzy-bone shadow-md'
                  : 'bg-yzy-obsidian/70 border-yzy-slate/60 text-yzy-chalk hover:border-yzy-ash hover:bg-yzy-obsidian'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-[9px] font-bold tracking-wider uppercase ${
                  isSelected ? 'text-yzy-black/80' : 'text-yzy-ash'
                }`}>
                  {layer.label.split('.')[0]}
                </span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-yzy-black animate-ping" />}
              </div>
              <div>
                <span className={`font-mono text-[11px] font-bold block leading-tight truncate ${
                  isSelected ? 'text-yzy-black' : 'text-yzy-bone'
                }`}>
                  {layer.label.split('. ')[1]}
                </span>
                <span className={`font-mono text-[9px] truncate block mt-0.5 ${
                  isSelected ? 'text-yzy-black/80 font-bold' : 'text-yzy-ash'
                }`}>
                  {assignedMat?.shortName || assignedMat?.name?.slice(0, 18) || 'SELECT'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Layer Description Banner */}
      <div className="bg-yzy-obsidian/90 p-3 border border-yzy-slate flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-yzy-chalk">
          <span className="font-bold text-yzy-bone">{currentLayerMeta.label}</span>
          <span className="hidden sm:inline text-yzy-ash">— {currentLayerMeta.description}</span>
        </div>
        <span className="text-[10px] text-yzy-ash uppercase tracking-widest shrink-0">
          CHOOSE SPECIFICATION BELOW
        </span>
      </div>

      {/* Layer Material Options Grid */}
      {activeLayer === 'utilities' ? (
        // Utilities Packages
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {UTILITY_PACKAGES.map((pkg) => {
            const isSelected = selectedMaterials.utilities === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => {
                  playSelectTone();
                  onSelectMaterial('utilities', pkg.id);
                }}
                className={`cursor-pointer p-4 border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-yzy-obsidian border-yzy-neon shadow-lg'
                    : 'bg-yzy-obsidian/40 border-yzy-slate hover:border-yzy-ash'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] text-yzy-neon font-bold tracking-widest uppercase">
                      OFF-GRID SYSTEM
                    </span>
                    {isSelected && (
                      <span className="flex items-center gap-1 bg-yzy-neon text-yzy-black font-mono text-[9px] font-bold px-1.5 py-0.5">
                        <Check className="w-3 h-3" /> SELECTED
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-sm font-bold text-yzy-bone mb-2">
                    {pkg.name}
                  </h4>
                  <p className="text-xs text-yzy-chalk/80 leading-relaxed mb-3">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[9px] text-yzy-ash block">SYSTEM COST</span>
                    <span className="text-yzy-bone font-bold">${pkg.cost.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-yzy-ash block">ANNUAL OFFSET</span>
                    <span className="text-yzy-neon font-bold">{pkg.carbonImpact} kg CO2</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Standard Materials for Layer
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {layerMaterials.map((mat) => {
            const isSelected = selectedMaterials[activeLayer] === mat.id;
            return (
              <div
                key={mat.id}
                onClick={() => {
                  playSelectTone();
                  onSelectMaterial(activeLayer, mat.id);
                }}
                className={`group cursor-pointer p-4 border transition-all flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-yzy-obsidian border-yzy-bone ring-1 ring-yzy-bone/40 shadow-xl'
                    : 'bg-yzy-obsidian/40 border-yzy-slate/70 hover:border-yzy-ash hover:bg-yzy-obsidian/80'
                }`}
              >
                {/* Header Badge */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9px] font-bold tracking-wider px-1.5 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk">
                      {mat.category}
                    </span>
                    {isSelected ? (
                      <span className="flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5">
                        <Check className="w-3 h-3" /> ACTIVE SPEC
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] text-yzy-ash">
                        {mat.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-sm font-bold text-yzy-bone group-hover:text-white transition-colors mb-1">
                    {mat.name}
                  </h4>
                  <p className="text-xs text-yzy-chalk/80 line-clamp-2 leading-relaxed mb-3">
                    {mat.tagline}
                  </p>
                </div>

                {/* Technical Metric Pills */}
                <div className="grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2 border border-yzy-slate/60 text-[10px] font-mono mb-3">
                  <div>
                    <span className="text-yzy-ash text-[9px] block">UNIT COST</span>
                    <span className="text-yzy-bone font-bold">{mat.unitCost}</span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">CARBON SCORE</span>
                    <span className={`font-bold ${mat.carbonImpact <= 0 ? 'text-yzy-neon' : 'text-yzy-warning'}`}>
                      {mat.carbonImpact <= 0 ? `${mat.carbonImpact} kg CO2` : `+${mat.carbonImpact} kg`}
                    </span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">THERMAL INSUL.</span>
                    <span className="text-yzy-bone font-bold">R-{mat.thermalRValue}</span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">LOCAL SOURCING</span>
                    <span className="text-yzy-bone font-bold">{mat.localSourcingRate.split(' ')[0]} Local</span>
                  </div>
                </div>

                {/* Sourcing Summary */}
                <div className="pt-2 border-t border-yzy-slate/40 text-[10px] font-mono text-yzy-ash line-clamp-1">
                  <span className="text-yzy-chalk font-semibold">SOURCE: </span>
                  {mat.sourcingMethod}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
