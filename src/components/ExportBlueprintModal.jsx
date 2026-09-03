import React, { useEffect } from 'react';
import { X, Download, Printer, CheckCircle2, Shield, Layers, Compass, Wind } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playTactileClick, playConfirmTone } from '../utils/audio';

export default function ExportBlueprintModal({
  isOpen,
  onClose,
  infrastructure,
  selectedMaterials,
  materialsList,
  utilityPackages,
  totalCost,
  totalCarbon
}) {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#EAEAE6', '#B8865A', '#00FF66', '#7B8C65']
        });
      } catch (e) {
        // Safe fail
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playConfirmTone();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-yzy-black border-2 border-yzy-bone w-full max-w-4xl my-auto p-6 sm:p-8 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative">
        {/* Top Blueprint Bar */}
        <div className="flex items-center justify-between border-b-2 border-yzy-bone pb-4">
          <div className="flex flex-col">
            <span className="text-[10px] tracking-widest text-yzy-ash uppercase font-bold">
              YZY INFRASTRUCTURE ARCHITECTURAL BLUEPRINT // SPECIFICATION CAD-01
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-black tracking-tight text-white mt-0.5">
              {infrastructure.name} — {infrastructure.subtitle}
            </h2>
          </div>
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="p-1.5 text-yzy-ash hover:text-white border border-yzy-slate hover:bg-yzy-charcoal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Blueprint Schematic Header Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-yzy-obsidian p-3 border border-yzy-slate text-xs">
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">PROJECT CODE</span>
            <span className="font-bold text-white">{infrastructure.code}</span>
          </div>
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">TOTAL FOOTPRINT</span>
            <span className="font-bold text-white">{infrastructure.sqft} SQ FT</span>
          </div>
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">DIMENSIONS</span>
            <span className="font-bold text-white">{infrastructure.diameter}</span>
          </div>
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">OCCUPANCY</span>
            <span className="font-bold text-white">{infrastructure.occupancy}</span>
          </div>
        </div>

        {/* Structural Spec Breakdown */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] text-yzy-ash tracking-widest uppercase font-bold border-b border-yzy-slate pb-1">
            01. MATERIAL & LAYER ARCHITECTURE
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
            {Object.entries(selectedMaterials).map(([layerKey, matId]) => {
              const mat = layerKey === 'utilities'
                ? utilityPackages.find((u) => u.id === matId)
                : materialsList.find((m) => m.id === matId);

              return (
                <div key={layerKey} className="p-2.5 bg-yzy-obsidian border border-yzy-slate/60 flex flex-col justify-between">
                  <span className="text-[9px] text-yzy-ash uppercase font-bold">{layerKey.toUpperCase()}</span>
                  <span className="font-bold text-yzy-bone text-xs mt-0.5">{mat?.name || mat?.shortName}</span>
                  <span className="text-[10px] text-yzy-chalk/80 mt-1 line-clamp-1">{mat?.tagline || mat?.description}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Engineering Performance & Resilience */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-yzy-obsidian p-3 border border-yzy-slate text-xs">
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">WIND RESISTANCE</span>
            <span className="font-bold text-yzy-bone">{infrastructure.windResistance}</span>
          </div>
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">SEISMIC ZONE</span>
            <span className="font-bold text-yzy-bone">{infrastructure.seismicZone}</span>
          </div>
          <div>
            <span className="text-yzy-ash text-[9px] uppercase block">THERMAL STRATEGY</span>
            <span className="font-bold text-yzy-bone">{infrastructure.thermalComfort}</span>
          </div>
        </div>

        {/* Financial & Environmental Telemetry */}
        <div className="bg-yzy-bone text-yzy-black p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
          <div>
            <span className="text-[10px] tracking-widest uppercase font-bold block opacity-80">
              AUTHENTICATED PROJECT ESTIMATE
            </span>
            <span className="text-2xl font-black">
              ${totalCost.toLocaleString()} TOTAL TURNKEY DIY
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] tracking-widest uppercase font-bold block opacity-80">
              NET EMBODIED CARBON
            </span>
            <span className="text-lg font-bold">
              {totalCarbon <= 0 ? `${totalCarbon} kg CO2 (NET SINK)` : `+${totalCarbon} kg CO2`}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate">
          <span className="text-[10px] text-yzy-ash uppercase tracking-wider">
            OPEN-SOURCE COMMUNITY ARCHITECTURE LICENSE // FREE TO DISTRIBUTE
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-white text-black font-bold text-xs hover:bg-yzy-bone transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>PRINT / SAVE PDF</span>
            </button>
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="px-4 py-2.5 bg-yzy-charcoal border border-yzy-slate text-xs text-yzy-chalk"
            >
              DISMISS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
