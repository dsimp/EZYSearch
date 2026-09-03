import React from 'react';
import { X, DollarSign, Download, Check, Shield, Layers, Leaf, Cpu } from 'lucide-react';
import { playTactileClick, playConfirmTone } from '../utils/audio';

export default function CostBreakdownModal({
  isOpen,
  onClose,
  infrastructure,
  selectedMaterials,
  materialsList,
  utilityPackages,
  totalCost,
  totalCarbon
}) {
  if (!isOpen) return null;

  // Calculate detailed line items
  const items = [
    {
      layer: '01. FOUNDATION & SUBGRADE',
      mat: materialsList.find((m) => m.id === selectedMaterials.foundation),
      calc: `$${((infrastructure.sqft * 0.8) * (materialsList.find((m) => m.id === selectedMaterials.foundation)?.costPerSqFt || 3.5)).toFixed(0)}`,
      costNum: Math.round((infrastructure.sqft * 0.8) * (materialsList.find((m) => m.id === selectedMaterials.foundation)?.costPerSqFt || 3.5))
    },
    {
      layer: '02. CORE SUPERSTRUCTURE',
      mat: materialsList.find((m) => m.id === selectedMaterials.superstructure),
      calc: `$${((infrastructure.sqft * 0.6) * (materialsList.find((m) => m.id === selectedMaterials.superstructure)?.costPerSqFt || 4.5)).toFixed(0)}`,
      costNum: Math.round((infrastructure.sqft * 0.6) * (materialsList.find((m) => m.id === selectedMaterials.superstructure)?.costPerSqFt || 4.5))
    },
    {
      layer: '03. THERMAL ENVELOPE / WALLS',
      mat: materialsList.find((m) => m.id === selectedMaterials.walls),
      calc: `$${((infrastructure.sqft * 1.4) * (materialsList.find((m) => m.id === selectedMaterials.walls)?.costPerSqFt || 4.2)).toFixed(0)}`,
      costNum: Math.round((infrastructure.sqft * 1.4) * (materialsList.find((m) => m.id === selectedMaterials.walls)?.costPerSqFt || 4.2))
    },
    {
      layer: '04. ROOF & CANOPY VAULT',
      mat: materialsList.find((m) => m.id === selectedMaterials.roof),
      calc: `$${((infrastructure.sqft * 1.1) * (materialsList.find((m) => m.id === selectedMaterials.roof)?.costPerSqFt || 3.8)).toFixed(0)}`,
      costNum: Math.round((infrastructure.sqft * 1.1) * (materialsList.find((m) => m.id === selectedMaterials.roof)?.costPerSqFt || 3.8))
    },
    {
      layer: '05. BIO-ACOUSTIC INSULATION',
      mat: materialsList.find((m) => m.id === selectedMaterials.insulation),
      calc: `$${((infrastructure.sqft * 1.0) * (materialsList.find((m) => m.id === selectedMaterials.insulation)?.costPerSqFt || 2.9)).toFixed(0)}`,
      costNum: Math.round((infrastructure.sqft * 1.0) * (materialsList.find((m) => m.id === selectedMaterials.insulation)?.costPerSqFt || 2.9))
    },
    {
      layer: '06. OFF-GRID UTILITY SUITE',
      mat: utilityPackages.find((u) => u.id === selectedMaterials.utilities),
      calc: `$${(utilityPackages.find((u) => u.id === selectedMaterials.utilities)?.cost || 2400).toLocaleString()}`,
      costNum: utilityPackages.find((u) => u.id === selectedMaterials.utilities)?.cost || 2400
    }
  ];

  const subtotalMaterials = items.reduce((acc, curr) => acc + curr.costNum, 0);
  const toolEquipmentRental = 650; // Community shared equipment
  const contingencyBuffer = Math.round(subtotalMaterials * 0.08);
  const finalTotal = subtotalMaterials + toolEquipmentRental + contingencyBuffer;

  const costPerSqFt = (finalTotal / infrastructure.sqft).toFixed(2);

  const exportCSV = () => {
    playConfirmTone();
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ARCHITECTURAL COMPONENT,SPECIFIED MATERIAL,UNIT METRIC,ESTIMATED COST\n";
    items.forEach((item) => {
      csvContent += `"${item.layer}","${item.mat?.name || item.mat?.shortName}","${item.mat?.unitCost || 'Package'}","${item.calc}"\n`;
    });
    csvContent += `"TOOLING & EQUIPMENT","Community Press Kit","One-Time Rental","$${toolEquipmentRental}"\n`;
    csvContent += `"CONTINGENCY BUFFER","8% Waste Reserve","Contingency","$${contingencyBuffer}"\n`;
    csvContent += `"TOTAL PROJECT BUDGET","${infrastructure.name}","Turnkey DIY","$${finalTotal}"\n`;

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `EZY_INFRA_BOM_${infrastructure.code}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-yzy-obsidian border border-yzy-bone w-full max-w-3xl my-auto p-5 sm:p-7 shadow-2xl flex flex-col gap-5 text-yzy-bone font-mono">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-yzy-slate pb-4">
          <div>
            <span className="text-[10px] text-yzy-ash tracking-widest uppercase block">
              TRANSPARENT BILL OF MATERIALS (BOM)
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight">
              {infrastructure.name} // COST TELEMETRY
            </h3>
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

        {/* Top Summary Metrics */}
        <div className="grid grid-cols-3 gap-2 bg-yzy-black p-3 border border-yzy-slate text-center">
          <div>
            <span className="text-[9px] text-yzy-ash block uppercase">TOTAL DIY BUDGET</span>
            <span className="text-base sm:text-lg font-bold text-yzy-neon">${finalTotal.toLocaleString()}</span>
          </div>
          <div className="border-l border-yzy-slate">
            <span className="text-[9px] text-yzy-ash block uppercase">COST PER SQ FT</span>
            <span className="text-base sm:text-lg font-bold text-yzy-bone">${costPerSqFt} / sqft</span>
          </div>
          <div className="border-l border-yzy-slate">
            <span className="text-[9px] text-yzy-ash block uppercase">COMMERCIAL COST SAVINGS</span>
            <span className="text-base sm:text-lg font-bold text-yzy-bone">88% - 94%</span>
          </div>
        </div>

        {/* Itemized Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-yzy-slate text-yzy-ash text-[10px] uppercase">
                <th className="py-2 px-2">COMPONENT</th>
                <th className="py-2 px-2">SPECIFIED MATERIAL</th>
                <th className="py-2 px-2 text-right">COST ESTIMATE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-yzy-slate/40">
              {items.map((item, idx) => (
                <tr key={idx} className="hover:bg-yzy-charcoal/30">
                  <td className="py-2.5 px-2 font-bold text-yzy-chalk text-[11px]">{item.layer}</td>
                  <td className="py-2.5 px-2 text-yzy-ash text-[11px]">{item.mat?.name || item.mat?.shortName}</td>
                  <td className="py-2.5 px-2 text-right font-bold text-yzy-bone text-[11px]">{item.calc}</td>
                </tr>
              ))}
              <tr className="bg-yzy-black/40">
                <td className="py-2 px-2 text-yzy-ash text-[11px]">TOOLS & EQUIPMENT LEASE</td>
                <td className="py-2 px-2 text-yzy-ash text-[11px]">Cinva-Ram Press & Mixer</td>
                <td className="py-2 px-2 text-right font-bold text-yzy-bone text-[11px]">${toolEquipmentRental}</td>
              </tr>
              <tr className="bg-yzy-black/40">
                <td className="py-2 px-2 text-yzy-ash text-[11px]">CONTINGENCY & WASTE RESERVE (8%)</td>
                <td className="py-2 px-2 text-yzy-ash text-[11px]">Site Material Buffer</td>
                <td className="py-2 px-2 text-right font-bold text-yzy-bone text-[11px]">${contingencyBuffer}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-yzy-slate">
          <span className="text-[10px] text-yzy-ash">
            * Estimates based on open-source DIY construction without contractor markup.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={exportCSV}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 bg-yzy-bone hover:bg-white text-yzy-black text-xs font-bold tracking-wider"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD BOM (.CSV)</span>
            </button>
            <button
              onClick={() => {
                playTactileClick();
                onClose();
              }}
              className="px-4 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs text-yzy-chalk"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
