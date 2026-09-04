import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Info, Wind, Users, Maximize2 } from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';

export default function InfrastructureSelector({
  infrastructures,
  selectedInfra,
  onSelectInfra
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* Sleek Horizontal Archetype Switcher Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar">
        {infrastructures.map((infra) => {
          const isSelected = selectedInfra.id === infra.id;
          return (
            <button
              key={infra.id}
              onClick={() => {
                playSelectTone();
                onSelectInfra(infra);
              }}
              className={`shrink-0 px-3.5 py-2 border transition-all text-left flex flex-col justify-between min-w-[135px] sm:min-w-[160px] ${
                isSelected
                  ? 'bg-yzy-bone text-yzy-black border-yzy-bone shadow-md font-bold'
                  : 'bg-yzy-obsidian/70 text-yzy-chalk border-yzy-slate hover:border-yzy-ash hover:bg-yzy-charcoal'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-0.5">
                <span className={`font-mono text-[9px] uppercase tracking-wider ${
                  isSelected ? 'text-yzy-black/70' : 'text-yzy-ash'
                }`}>
                  {infra.code}
                </span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-yzy-black" />}
              </div>
              <span className="font-display text-xs sm:text-sm font-bold truncate block">
                {infra.name}
              </span>
              <div className="flex items-center justify-between mt-1 font-mono text-[9px]">
                <span className={isSelected ? 'text-yzy-black/80' : 'text-yzy-ash'}>
                  {infra.sqft} SQFT
                </span>
                <span className={`font-bold ${isSelected ? 'text-yzy-black' : 'text-yzy-neon'}`}>
                  ${(infra.estimatedCostMin / 1000).toFixed(0)}k+
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Minimal Active Archetype Bar with Optional Details Dropdown */}
      <div className="bg-yzy-obsidian/90 border border-yzy-slate/70 p-2 sm:p-2.5 flex items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2 truncate">
          <span className="w-2 h-2 rounded-full bg-yzy-neon shrink-0 animate-pulse" />
          <span className="font-display font-bold text-white text-xs sm:text-sm uppercase truncate">
            {selectedInfra.name}
          </span>
          <span className="text-yzy-ash text-[10px] hidden sm:inline truncate">
            // {selectedInfra.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-yzy-neon font-bold text-xs">
            ${selectedInfra.estimatedCostMin.toLocaleString()} - ${selectedInfra.estimatedCostMax.toLocaleString()}
          </span>
          <button
            onClick={() => {
              playTactileClick();
              setShowDetails(!showDetails);
            }}
            className="flex items-center gap-1 text-[10px] text-yzy-ash hover:text-white bg-yzy-black px-2 py-1 border border-yzy-slate transition-colors"
          >
            <span>{showDetails ? 'HIDE' : 'INTEL'}</span>
            {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Collapsible Deep Specs Box (Hidden by default to keep UI ultra-clean) */}
      {showDetails && (
        <div className="bg-yzy-black border border-yzy-slate p-3 sm:p-4 text-xs font-mono flex flex-col gap-2.5 animate-fadeIn">
          <p className="text-yzy-chalk/90 leading-relaxed text-xs">
            {selectedInfra.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-yzy-slate/60 text-[10px]">
            <div>
              <span className="text-yzy-ash block uppercase">FOOTPRINT</span>
              <span className="font-bold text-white">{selectedInfra.sqft} SQFT ({selectedInfra.diameter})</span>
            </div>
            <div>
              <span className="text-yzy-ash block uppercase">TIMELINE</span>
              <span className="font-bold text-white">{selectedInfra.buildTimeDays} DAYS</span>
            </div>
            <div>
              <span className="text-yzy-ash block uppercase">OCCUPANCY</span>
              <span className="font-bold text-white">{selectedInfra.occupancy}</span>
            </div>
            <div>
              <span className="text-yzy-ash block uppercase">WIND / SEISMIC</span>
              <span className="font-bold text-yzy-neon">{selectedInfra.windResistance.split(' ')[0]} MPH / {selectedInfra.seismicZone.split(' ')[0]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
