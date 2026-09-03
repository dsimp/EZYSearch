import React from 'react';
import { Shield, Clock, Users, Maximize, ArrowRight, Check, Flame, Wind, Activity } from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';

export default function InfrastructureSelector({
  infrastructures,
  selectedInfra,
  onSelectInfra
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-1 border-b border-yzy-slate pb-2">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            01 // ARCHETYPE SELECTION
          </span>
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-tight text-yzy-bone">
            SELECT INFRASTRUCTURE MATRIX
          </h2>
        </div>
        <span className="font-mono text-[10px] text-yzy-ash">
          {infrastructures.length} PRODUCTION SCHEMATICS AVAILABLE
        </span>
      </div>

      {/* Horizontal Scroll on Mobile / Grid on Tablet & Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {infrastructures.map((infra) => {
          const isSelected = selectedInfra.id === infra.id;
          return (
            <div
              key={infra.id}
              onClick={() => {
                playSelectTone();
                onSelectInfra(infra);
              }}
              className={`group cursor-pointer p-4 border transition-all duration-200 flex flex-col justify-between relative ${
                isSelected
                  ? 'bg-yzy-obsidian border-yzy-bone shadow-lg ring-1 ring-yzy-bone/40'
                  : 'bg-yzy-obsidian/40 border-yzy-slate/70 hover:border-yzy-ash hover:bg-yzy-obsidian/80'
              }`}
            >
              {/* Top Tag & Selection Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] font-bold tracking-widest text-yzy-ash uppercase">
                  {infra.code}
                </span>
                {isSelected ? (
                  <span className="flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5 tracking-wider">
                    <Check className="w-3 h-3" /> ACTIVE
                  </span>
                ) : (
                  <span className="font-mono text-[9px] text-yzy-ash border border-yzy-slate px-1.5 py-0.5">
                    {infra.difficulty}
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <h3 className="font-display text-base font-bold text-yzy-bone tracking-tight mb-0.5 group-hover:text-white transition-colors">
                  {infra.name}
                </h3>
                <p className="font-mono text-[10px] text-yzy-ash tracking-wide uppercase mb-2">
                  {infra.subtitle}
                </p>
                <p className="text-xs text-yzy-chalk/80 line-clamp-2 leading-relaxed mb-3">
                  {infra.tagline}
                </p>
              </div>

              {/* Specs Matrix */}
              <div className="grid grid-cols-3 gap-1.5 bg-yzy-black/60 p-2 border border-yzy-slate/60 text-[10px] font-mono mb-3">
                <div className="flex flex-col">
                  <span className="text-yzy-ash text-[9px]">AREA</span>
                  <span className="text-yzy-bone font-bold">{infra.sqft} SQFT</span>
                </div>
                <div className="flex flex-col border-l border-yzy-slate/40 pl-2">
                  <span className="text-yzy-ash text-[9px]">TIMELINE</span>
                  <span className="text-yzy-bone font-bold">{infra.buildTimeDays} DAYS</span>
                </div>
                <div className="flex flex-col border-l border-yzy-slate/40 pl-2">
                  <span className="text-yzy-ash text-[9px]">OCCUPANCY</span>
                  <span className="text-yzy-bone font-bold">{infra.occupancy.split(' ')[0]} PPL</span>
                </div>
              </div>

              {/* Resilience Badges */}
              <div className="flex items-center justify-between pt-2 border-t border-yzy-slate/40 text-[10px] font-mono">
                <div className="flex items-center gap-1 text-yzy-chalk">
                  <Wind className="w-3 h-3 text-yzy-ash" />
                  <span>{infra.windResistance.split(' ')[0]} MPH</span>
                </div>
                <div className="text-right">
                  <span className="text-yzy-ash text-[9px] block">EST. BUDGET</span>
                  <span className="text-yzy-bone font-bold">
                    ${infra.estimatedCostMin.toLocaleString()} - ${infra.estimatedCostMax.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
