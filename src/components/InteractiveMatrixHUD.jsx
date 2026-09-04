import React, { useState } from 'react';
import { ARCHETYPE_PARTS, APERTURE_MATERIALS } from '../data/partCatalog';
import { 
  Check, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  AlertTriangle, 
  Layers, 
  MapPin,
  ExternalLink
} from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';

export default function InteractiveMatrixHUD({
  infrastructure,
  selectedPartMaterials,
  onSelectPartMaterial,
  activePartId,
  setActivePartId,
  materialsList
}) {
  const [showProsCons, setShowProsCons] = useState(false);

  const parts = ARCHETYPE_PARTS[infrastructure.id] || ARCHETYPE_PARTS.yzy_mono_dome;
  const currentPart = parts.find((p) => p.id === activePartId) || parts[0];

  const allMaterials = [...materialsList, ...APERTURE_MATERIALS];

  // Current assigned material
  const currentMaterialId = selectedPartMaterials[currentPart.id] || currentPart.defaultMaterial;
  const currentMaterial = allMaterials.find((m) => m.id === currentMaterialId) || materialsList[0];

  // Available options for this part
  const availableMaterials = allMaterials.filter((m) => 
    currentPart.allowedMaterials.includes(m.id)
  );

  return (
    <div className="flex flex-col gap-3 bg-yzy-obsidian border border-yzy-bone/40 p-3 sm:p-5 shadow-2xl">
      {/* 1. Sleek Part Selector Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {parts.map((p) => {
          const isSelected = p.id === currentPart.id;
          const assignedMatId = selectedPartMaterials[p.id] || p.defaultMaterial;
          const assignedMat = allMaterials.find((m) => m.id === assignedMatId);

          return (
            <button
              key={p.id}
              onClick={() => {
                playSelectTone();
                setActivePartId(p.id);
              }}
              className={`shrink-0 px-3 py-2 text-left border transition-all flex flex-col justify-between min-w-[125px] sm:min-w-[150px] ${
                isSelected
                  ? 'bg-yzy-bone text-yzy-black border-yzy-bone shadow-md font-bold'
                  : 'bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash hover:bg-yzy-charcoal'
              }`}
            >
              <span className={`font-mono text-[8px] sm:text-[9px] uppercase tracking-wider block ${
                isSelected ? 'text-yzy-black/70' : 'text-yzy-ash'
              }`}>
                {p.category}
              </span>
              <span className={`font-display text-xs font-bold truncate block ${
                isSelected ? 'text-yzy-black' : 'text-yzy-bone'
              }`}>
                {p.name.split('(')[0]}
              </span>
              <span className={`font-mono text-[9px] truncate block mt-0.5 font-semibold ${
                isSelected ? 'text-yzy-black/90' : 'text-yzy-neon'
              }`}>
                {assignedMat?.shortName || 'Custom'}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2. Visual Material Swatches Grid */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between font-mono text-[10px] text-yzy-ash uppercase">
          <span>SELECT MATERIAL FOR {currentPart.name.split('(')[0]}:</span>
          <span className="text-yzy-neon font-bold">{currentMaterial.shortName}</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          {availableMaterials.map((mat) => {
            const isAssigned = (selectedPartMaterials[currentPart.id] || currentPart.defaultMaterial) === mat.id;
            const partCost = Math.round(currentPart.surfaceAreaSqft * mat.costPerSqFt);

            return (
              <div
                key={mat.id}
                onClick={() => {
                  playSelectTone();
                  onSelectPartMaterial(currentPart.id, mat.id);
                }}
                className={`cursor-pointer p-2.5 sm:p-3 border transition-all flex flex-col justify-between relative group ${
                  isAssigned
                    ? 'bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-lg'
                    : 'bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span 
                      className="w-3 h-3 rounded-full border border-black/50 shrink-0" 
                      style={{ backgroundColor: mat.colorHex }}
                    />
                    {isAssigned && (
                      <span className="font-mono text-[8px] font-bold bg-yzy-bone text-yzy-black px-1.5 py-0.2">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-xs sm:text-sm font-bold text-white leading-tight mb-1 group-hover:text-yzy-bone">
                    {mat.shortName || mat.name}
                  </h4>
                </div>

                <div className="pt-1.5 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-yzy-ash">${partCost.toLocaleString()}</span>
                  <span className="text-yzy-neon font-bold">{mat.unitCost.split('(')[0]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Collapsible Impact & Engineering Intel (Hidden by default to eliminate clutter) */}
      <div className="pt-1 border-t border-yzy-slate/60 flex flex-col gap-2">
        <button
          onClick={() => {
            playTactileClick();
            setShowProsCons(!showProsCons);
          }}
          className="w-full flex items-center justify-between bg-yzy-black p-2.5 border border-yzy-slate hover:border-yzy-ash text-xs font-mono transition-colors"
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-yzy-neon" />
            <span className="font-bold text-white uppercase">
              {currentMaterial.name} // ARCHITECTURAL INTEL
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-yzy-ash">
            <span>{showProsCons ? 'HIDE DETAILS' : 'VIEW PROS & SOURCING'}</span>
            {showProsCons ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </div>
        </button>

        {showProsCons && (
          <div className="bg-yzy-black border border-yzy-slate p-3 sm:p-4 flex flex-col gap-3 font-mono text-xs animate-fadeIn">
            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="p-2.5 bg-yzy-obsidian border border-yzy-neon/30 flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-yzy-neon flex items-center gap-1 uppercase">
                  <Check className="w-3.5 h-3.5" /> ADVANTAGES (PROS)
                </span>
                <ul className="flex flex-col gap-1 text-[11px] text-yzy-chalk/90">
                  {currentMaterial.pros?.map((pro, pi) => (
                    <li key={pi} className="flex items-start gap-1">
                      <span className="text-yzy-neon font-bold">✓</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 bg-yzy-obsidian border border-yzy-warning/30 flex flex-col gap-1.5">
                <span className="text-[11px] font-bold text-yzy-warning flex items-center gap-1 uppercase">
                  <AlertTriangle className="w-3.5 h-3.5" /> TRADEOFFS & CONSIDERATIONS
                </span>
                <ul className="flex flex-col gap-1 text-[11px] text-yzy-chalk/90">
                  {currentMaterial.cons?.map((con, ci) => (
                    <li key={ci} className="flex items-start gap-1">
                      <span className="text-yzy-warning font-bold">!</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct Sourcing */}
            {currentMaterial.supplier && (
              <div className="bg-yzy-charcoal/80 p-2.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
                <div>
                  <span className="text-[9px] text-yzy-ash uppercase font-bold block">
                    DIRECT SOURCING ORDER:
                  </span>
                  <span className="font-bold text-white">{currentMaterial.supplier.name} ({currentMaterial.supplier.location})</span>
                  <span className="text-yzy-ash text-[10px] block">{currentMaterial.supplier.contact}</span>
                </div>
                <div className="flex items-center gap-3 text-right shrink-0">
                  <div>
                    <span className="text-[8px] text-yzy-ash uppercase block">EXACT PRICE</span>
                    <span className="font-bold text-yzy-neon">{currentMaterial.supplier.exactPrice.split('(')[0]}</span>
                  </div>
                  <div className="border-l border-yzy-slate pl-2.5">
                    <span className="text-[8px] text-yzy-ash uppercase block">LEAD TIME</span>
                    <span className="font-bold text-yzy-bone">{currentMaterial.supplier.leadTime}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
