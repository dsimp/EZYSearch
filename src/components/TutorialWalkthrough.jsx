import React, { useState } from 'react';
import { TUTORIAL_PHASES, RECIPE_CALCULATORS } from '../data/tutorials';
import { 
  CheckCircle2, 
  FlaskConical, 
  Calculator, 
  Wrench, 
  Hammer, 
  ChevronRight, 
  Layers, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';

export default function TutorialWalkthrough() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [activeRecipeId, setActiveRecipeId] = useState('ceb_mix');

  // Interactive Mason Jar Soil Test Sandbox State
  const [sandPercent, setSandPercent] = useState(70);
  const [clayPercent, setClayPercent] = useState(20);
  const [siltPercent, setSiltPercent] = useState(10);

  const activePhase = TUTORIAL_PHASES[activePhaseIndex];
  const activeRecipe = RECIPE_CALCULATORS.find((r) => r.id === activeRecipeId) || RECIPE_CALCULATORS[0];

  // Soil assessment logic
  const getSoilSuitability = () => {
    const total = sandPercent + clayPercent + siltPercent;
    if (sandPercent >= 60 && sandPercent <= 80 && clayPercent >= 15 && clayPercent <= 28) {
      return {
        status: 'EXCELLENT FOR CEB & RAMMED EARTH',
        color: 'text-yzy-neon',
        border: 'border-yzy-neon',
        feedback: 'Your soil composition is optimal! High structural compressive strength with minimal shrinkage.'
      };
    } else if (clayPercent > 30) {
      return {
        status: 'HIGH CLAY CONTENT (EXCESSIVE SHRINKAGE)',
        color: 'text-yzy-warning',
        border: 'border-yzy-warning',
        feedback: 'Add 15-20% coarse washed quarry sand to stabilize before pressing blocks or tamping.'
      };
    } else if (sandPercent > 80) {
      return {
        status: 'TOO SANDY (LOW BINDING CLAY)',
        color: 'text-yzy-warning',
        border: 'border-yzy-warning',
        feedback: 'Add 10-15% natural clay slurry or increase hydraulic lime stabilizer to 10%.'
      };
    } else {
      return {
        status: 'ACCEPTABLE WITH 8% LIME STABILIZER',
        color: 'text-yzy-chalk',
        border: 'border-yzy-slate',
        feedback: 'Suitable for stabilized compressed earth blocks with standard curing.'
      };
    }
  };

  const soilResult = getSoilSuitability();

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            03 // NOVICE-TO-MASTER CONSTRUCTION PROTOCOLS
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone">
            STEP-BY-STEP COMMUNITY BUILD MANUAL
          </h2>
        </div>
        <p className="font-mono text-xs text-yzy-ash max-w-md">
          Zero prior construction experience required. Modular visual instructions for self-reliance.
        </p>
      </div>

      {/* Interactive Soil Testing Sandbox (Mason Jar Test) */}
      <div className="bg-yzy-obsidian border border-yzy-bone/40 p-4 sm:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-yzy-slate pb-3">
          <div className="flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-yzy-neon" />
            <h3 className="font-display text-base font-bold text-yzy-bone uppercase tracking-tight">
              INTERACTIVE SOIL TEST SANDBOX (MASON JAR SIMULATOR)
            </h3>
          </div>
          <span className="font-mono text-[10px] text-yzy-ash uppercase">
            CALCULATE YOUR LOCAL SOIL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Jar Graphic / Visualizer */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center bg-yzy-black p-4 border border-yzy-slate">
            <span className="font-mono text-[10px] text-yzy-ash uppercase tracking-widest mb-2">
              SEDIMENT STRATA TUBE
            </span>
            <div className="w-24 h-48 border-2 border-yzy-chalk/60 rounded-b-lg relative overflow-hidden flex flex-col-reverse bg-yzy-obsidian">
              {/* Sand Layer */}
              <div 
                style={{ height: `${sandPercent}%` }} 
                className="w-full bg-[#C2B280] flex items-center justify-center text-[9px] font-mono font-bold text-black border-t border-black/30"
              >
                SAND ({sandPercent}%)
              </div>
              {/* Silt Layer */}
              <div 
                style={{ height: `${siltPercent}%` }} 
                className="w-full bg-[#8E8065] flex items-center justify-center text-[9px] font-mono font-bold text-white border-t border-black/30"
              >
                SILT ({siltPercent}%)
              </div>
              {/* Clay Layer */}
              <div 
                style={{ height: `${clayPercent}%` }} 
                className="w-full bg-[#B85D38] flex items-center justify-center text-[9px] font-mono font-bold text-white"
              >
                CLAY ({clayPercent}%)
              </div>
            </div>
            <span className="font-mono text-[9px] text-yzy-ash mt-2">
              WATER & SALT SOLUTION (TOP)
            </span>
          </div>

          {/* Sliders & Assessment Result */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Sand Slider */}
              <div className="bg-yzy-black/60 p-3 border border-yzy-slate">
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-[#C2B280] font-bold">SAND LAYER</span>
                  <span className="text-yzy-bone font-bold">{sandPercent}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="90"
                  value={sandPercent}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSandPercent(val);
                    const rem = 100 - val;
                    setClayPercent(Math.round(rem * 0.65));
                    setSiltPercent(rem - Math.round(rem * 0.65));
                  }}
                  className="w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#C2B280]"
                />
                <span className="text-[9px] font-mono text-yzy-ash block mt-1">Settles in 1 minute</span>
              </div>

              {/* Clay Slider */}
              <div className="bg-yzy-black/60 p-3 border border-yzy-slate">
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-[#B85D38] font-bold">CLAY LAYER</span>
                  <span className="text-yzy-bone font-bold">{clayPercent}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="60"
                  value={clayPercent}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setClayPercent(val);
                    const rem = 100 - val;
                    setSandPercent(Math.round(rem * 0.85));
                    setSiltPercent(rem - Math.round(rem * 0.85));
                  }}
                  className="w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#B85D38]"
                />
                <span className="text-[9px] font-mono text-yzy-ash block mt-1">Settles in 48 hours</span>
              </div>

              {/* Silt Slider */}
              <div className="bg-yzy-black/60 p-3 border border-yzy-slate">
                <div className="flex justify-between font-mono text-xs mb-1">
                  <span className="text-[#8E8065] font-bold">SILT LAYER</span>
                  <span className="text-yzy-bone font-bold">{siltPercent}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="40"
                  value={siltPercent}
                  onChange={(e) => setSiltPercent(Number(e.target.value))}
                  className="w-full bg-yzy-slate h-1.5 cursor-pointer accent-[#8E8065]"
                />
                <span className="text-[9px] font-mono text-yzy-ash block mt-1">Settles in 2 hours</span>
              </div>
            </div>

            {/* Suitability Output Callout */}
            <div className={`p-3.5 border ${soilResult.border} bg-yzy-black/90 flex flex-col gap-1`}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-yzy-ash tracking-widest uppercase font-bold">
                  DIAGNOSTIC SUITABILITY VERDICT:
                </span>
                <span className={`font-mono text-xs font-bold ${soilResult.color}`}>
                  {soilResult.status}
                </span>
              </div>
              <p className="text-xs text-yzy-bone font-mono leading-relaxed">
                {soilResult.feedback}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Phase Roadmap Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {TUTORIAL_PHASES.map((phase, idx) => {
          const isSelected = activePhaseIndex === idx;
          return (
            <button
              key={phase.phaseNumber}
              onClick={() => {
                playTactileClick();
                setActivePhaseIndex(idx);
              }}
              className={`p-3 text-left border transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-yzy-bone text-yzy-black border-yzy-bone shadow-lg'
                  : 'bg-yzy-obsidian/60 border-yzy-slate text-yzy-chalk hover:border-yzy-ash'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-mono text-[9px] font-bold ${isSelected ? 'text-yzy-black/80' : 'text-yzy-ash'}`}>
                  PHASE {phase.phaseNumber}
                </span>
                <span className={`font-mono text-[9px] ${isSelected ? 'text-yzy-black/80 font-bold' : 'text-yzy-ash'}`}>
                  {phase.duration}
                </span>
              </div>
              <span className={`font-display text-xs font-bold leading-tight ${isSelected ? 'text-yzy-black' : 'text-yzy-bone'}`}>
                {phase.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Phase Details */}
      <div className="bg-yzy-obsidian/80 border border-yzy-slate p-5 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-yzy-slate pb-3">
          <div>
            <span className="font-mono text-[9px] text-yzy-ash uppercase tracking-widest block">
              PHASE {activePhase.phaseNumber} PROTOCOL
            </span>
            <h3 className="font-display text-lg font-bold text-yzy-bone">
              {activePhase.title}
            </h3>
            <p className="font-mono text-xs text-yzy-chalk/80 mt-0.5">
              {activePhase.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-bone font-bold uppercase">
              SKILL: {activePhase.skillLevel}
            </span>
          </div>
        </div>

        {/* Steps List */}
        <div className="flex flex-col gap-4">
          {activePhase.steps.map((st) => (
            <div key={st.stepNum} className="p-4 bg-yzy-black/70 border border-yzy-slate/70 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-yzy-bone bg-yzy-charcoal px-2 py-0.5 border border-yzy-slate">
                  {st.stepNum}
                </span>
                <h4 className="font-display text-sm font-bold text-yzy-bone uppercase">
                  {st.name}
                </h4>
              </div>

              <p className="text-xs text-yzy-chalk/90 leading-relaxed font-mono">
                {st.instruction}
              </p>

              {st.timeline && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 bg-yzy-obsidian p-2 border border-yzy-slate/40 text-[10px] font-mono">
                  {st.timeline.map((t, ti) => (
                    <div key={ti} className="flex flex-col">
                      <span className="text-yzy-ash font-bold">{t.time}:</span>
                      <span className="text-yzy-bone">{t.note}</span>
                    </div>
                  ))}
                </div>
              )}

              {st.idealRatio && (
                <div className="text-[11px] font-mono text-yzy-neon bg-yzy-neon/10 border border-yzy-neon/30 p-2 mt-1">
                  <strong>FORMULA: </strong>{st.idealRatio}
                </div>
              )}

              {st.proTip && (
                <div className="text-[10px] font-mono text-yzy-ash bg-yzy-charcoal/40 p-2 border-l-2 border-yzy-bone">
                  <span className="text-yzy-bone font-bold">PRO-TIP: </span>{st.proTip}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tool Checklist */}
        <div className="pt-3 border-t border-yzy-slate/60 flex flex-wrap items-center gap-2 text-xs font-mono">
          <span className="text-yzy-ash font-bold uppercase text-[10px] mr-2">REQUIRED TOOLS:</span>
          {activePhase.requiredTools.map((tool, ti) => (
            <span key={ti} className="px-2 py-1 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk text-[10px]">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Mix Ratio Calculators */}
      <div className="bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-yzy-slate pb-3">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-yzy-bone" />
            <h3 className="font-display text-base font-bold text-yzy-bone uppercase">
              BATCH RECIPE CALCULATORS
            </h3>
          </div>
          <div className="flex gap-1">
            {RECIPE_CALCULATORS.map((rec) => (
              <button
                key={rec.id}
                onClick={() => {
                  playTactileClick();
                  setActiveRecipeId(rec.id);
                }}
                className={`px-2.5 py-1 text-[10px] font-mono tracking-wider border transition-all ${
                  activeRecipeId === rec.id
                    ? 'bg-yzy-bone text-yzy-black font-bold border-yzy-bone'
                    : 'bg-yzy-black text-yzy-chalk border-yzy-slate hover:border-yzy-ash'
                }`}
              >
                {rec.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 font-mono">
          <div className="flex justify-between items-center text-xs">
            <span className="text-yzy-bone font-bold">{activeRecipe.name}</span>
            <span className="text-yzy-ash">YIELD: {activeRecipe.yieldUnit}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {activeRecipe.ingredients.map((ing, idx) => (
              <div key={idx} className="bg-yzy-black p-3 border border-yzy-slate flex flex-col justify-between">
                <div>
                  <span className="text-yzy-ash text-[9px] uppercase block mb-0.5">INGREDIENT {idx + 1}</span>
                  <span className="text-yzy-bone font-bold text-xs">{ing.name}</span>
                </div>
                <div className="flex justify-between text-[11px] pt-2 mt-2 border-t border-yzy-slate/40">
                  <span className="text-yzy-chalk">{ing.amount}</span>
                  <span className="text-yzy-neon font-bold">{ing.cost}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-yzy-chalk/90 bg-yzy-black/60 p-3 border border-yzy-slate leading-relaxed">
            <strong className="text-yzy-bone">MIXING PROTOCOL: </strong>
            {activeRecipe.instructions}
          </p>
        </div>
      </div>
    </div>
  );
}
