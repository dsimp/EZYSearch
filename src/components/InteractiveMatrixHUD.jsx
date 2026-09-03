import React from 'react';
import { ARCHETYPE_PARTS, APERTURE_MATERIALS } from '../data/partCatalog';
import { 
  Check, 
  Sparkles, 
  DollarSign, 
  Leaf, 
  ShieldCheck, 
  AlertTriangle, 
  Layers, 
  Eye, 
  HelpCircle,
  Truck,
  ArrowRight
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
    <div className="flex flex-col gap-5 bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 shadow-2xl">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            02 // INFRASTRUCTURE MATRIX (PICK & PULL CUSTOMIZER)
          </span>
          <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
            CUSTOMIZE INDIVIDUAL ARCHITECTURAL COMPONENTS
          </h3>
        </div>
        <span className="font-mono text-[10px] text-yzy-neon font-bold uppercase bg-yzy-neon/10 px-2.5 py-1 border border-yzy-neon/30">
          TAP ANY PART IN 3D OR SELECT BELOW
        </span>
      </div>

      {/* Part Navigation Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-yzy-slate/60">
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
              className={`shrink-0 p-2.5 text-left border transition-all flex flex-col justify-between min-w-[140px] sm:min-w-[160px] ${
                isSelected
                  ? 'bg-yzy-bone text-yzy-black border-yzy-bone shadow-md'
                  : 'bg-yzy-black text-yzy-chalk border-yzy-slate/80 hover:border-yzy-ash hover:bg-yzy-charcoal'
              }`}
            >
              <span className={`font-mono text-[9px] font-bold uppercase tracking-wider block mb-0.5 ${
                isSelected ? 'text-yzy-black/70' : 'text-yzy-ash'
              }`}>
                {p.category}
              </span>
              <span className={`font-display text-xs font-bold truncate block ${
                isSelected ? 'text-yzy-black' : 'text-yzy-bone'
              }`}>
                {p.name.split('(')[0]}
              </span>
              <span className={`font-mono text-[10px] truncate block mt-1 font-semibold ${
                isSelected ? 'text-yzy-black/90' : 'text-yzy-neon'
              }`}>
                {assignedMat?.shortName || 'Custom'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Part Overview Banner */}
      <div className="bg-yzy-black p-3.5 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yzy-neon" />
            <span className="font-bold text-white uppercase text-sm">{currentPart.name}</span>
          </div>
          <span className="text-yzy-ash text-[11px] mt-0.5 block">{currentPart.description}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <span className="text-[9px] text-yzy-ash block uppercase">SURFACE AREA</span>
            <span className="font-bold text-yzy-bone">{currentPart.surfaceAreaSqft} SQFT</span>
          </div>
          <div className="text-right border-l border-yzy-slate pl-3">
            <span className="text-[9px] text-yzy-ash block uppercase">CURRENT SPEC</span>
            <span className="font-bold text-yzy-neon">{currentMaterial.shortName}</span>
          </div>
        </div>
      </div>

      {/* Recommended Material Options for this Part */}
      <div className="flex flex-col gap-3">
        <span className="font-mono text-xs text-yzy-ash uppercase font-bold tracking-wider">
          SELECT MATERIAL SPECIFICATION FOR THIS PART:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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
                className={`cursor-pointer p-4 border transition-all flex flex-col justify-between group ${
                  isAssigned
                    ? 'bg-yzy-black border-yzy-bone ring-2 ring-yzy-bone/60 shadow-xl'
                    : 'bg-yzy-black/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-black/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-[9px] font-bold px-1.5 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase">
                      {mat.category}
                    </span>
                    {isAssigned ? (
                      <span className="flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5">
                        <Check className="w-3 h-3" /> ACTIVE SPEC
                      </span>
                    ) : (
                      <span className="font-mono text-[9px] text-yzy-ash">
                        {mat.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="font-display text-sm font-bold text-white mb-1 group-hover:text-yzy-bone">
                    {mat.name}
                  </h4>
                  <p className="text-xs text-yzy-chalk/80 leading-relaxed mb-3">
                    {mat.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-yzy-slate/60 flex items-center justify-between font-mono text-xs">
                  <div>
                    <span className="text-[9px] text-yzy-ash block">PART COST</span>
                    <span className="text-yzy-bone font-bold">${partCost.toLocaleString()}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-yzy-ash block">UNIT RATE</span>
                    <span className="text-yzy-neon font-bold">{mat.unitCost}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Live Architectural Feedback: Pros & Cons Engine */}
      <div className="bg-yzy-black border border-yzy-slate p-4 sm:p-5 flex flex-col gap-4 font-mono">
        <div className="flex items-center justify-between border-b border-yzy-slate pb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yzy-neon" />
            <span className="font-display text-sm font-bold text-white uppercase tracking-tight">
              ARCHITECTURAL IMPACT ANALYSIS // {currentMaterial.name}
            </span>
          </div>
          <span className="text-[10px] text-yzy-ash uppercase hidden sm:inline">
            ENGINEERING FEEDBACK
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pros */}
          <div className="p-3 bg-yzy-obsidian/90 border border-yzy-neon/30 flex flex-col gap-2">
            <span className="text-xs font-bold text-yzy-neon flex items-center gap-1.5 uppercase">
              <Check className="w-3.5 h-3.5" /> ARCHITECTURAL PROS & ADVANTAGES
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-yzy-chalk/90">
              {currentMaterial.pros?.map((pro, pi) => (
                <li key={pi} className="flex items-start gap-1.5">
                  <span className="text-yzy-neon font-bold">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons / Considerations */}
          <div className="p-3 bg-yzy-obsidian/90 border border-yzy-warning/30 flex flex-col gap-2">
            <span className="text-xs font-bold text-yzy-warning flex items-center gap-1.5 uppercase">
              <AlertTriangle className="w-3.5 h-3.5" /> TRADEOFFS & CONSIDERATIONS
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-yzy-chalk/90">
              {currentMaterial.cons?.map((con, ci) => (
                <li key={ci} className="flex items-start gap-1.5">
                  <span className="text-yzy-warning font-bold">!</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Direct Supplier Procurement Summary for this Active Part */}
        {currentMaterial.supplier && (
          <div className="bg-yzy-charcoal/80 p-3 border border-yzy-slate flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div>
              <span className="text-[9px] text-yzy-ash uppercase font-bold block mb-0.5">
                DIRECT PROCUREMENT SOURCE FOR THIS PART:
              </span>
              <span className="font-bold text-white">{currentMaterial.supplier.name}</span>
              <span className="text-yzy-ash text-[11px] block">{currentMaterial.supplier.contact}</span>
            </div>
            <div className="flex items-center gap-4 text-right shrink-0 font-mono">
              <div>
                <span className="text-[9px] text-yzy-ash block uppercase">EXACT PRICE</span>
                <span className="font-bold text-yzy-neon">{currentMaterial.supplier.exactPrice.split('(')[0]}</span>
              </div>
              <div className="border-l border-yzy-slate pl-3">
                <span className="text-[9px] text-yzy-ash block uppercase">LEAD TIME</span>
                <span className="font-bold text-yzy-bone">{currentMaterial.supplier.leadTime}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
