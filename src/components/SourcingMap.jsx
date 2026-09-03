import React from 'react';
import { SOURCING_CHANNELS, COST_BENCHMARKS } from '../data/suppliers';
import { 
  Compass, 
  MapPin, 
  Truck, 
  DollarSign, 
  Hammer, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  TrendingDown
} from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function SourcingMap() {
  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            04 // SOURCING RADAR & SUPPLY CHAIN
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone">
            MATERIAL PROCUREMENT & TOOL DIRECTORY
          </h2>
        </div>
        <p className="font-mono text-xs text-yzy-ash max-w-md">
          Direct wholesale pathways, open-source equipment plans, and local harvesting guides.
        </p>
      </div>

      {/* Sourcing Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {SOURCING_CHANNELS.map((chan, idx) => (
          <div key={idx} className="bg-yzy-obsidian border border-yzy-slate p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk">
                  {chan.category}
                </span>
                <span className="font-mono text-[9px] text-yzy-neon font-bold">
                  {chan.badge}
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-yzy-bone mb-1">
                {chan.title}
              </h3>
              <p className="text-xs text-yzy-chalk/80 leading-relaxed mb-4">
                {chan.description}
              </p>

              <div className="flex flex-col gap-3">
                {chan.channels.map((c, ci) => (
                  <div key={ci} className="bg-yzy-black/80 p-3 border border-yzy-slate/60 text-xs font-mono">
                    <span className="font-bold text-yzy-bone block mb-1">
                      {c.item}
                    </span>
                    <p className="text-[11px] text-yzy-chalk/90 leading-relaxed mb-2">
                      {c.howToSource}
                    </p>
                    <div className="flex justify-between items-center text-[10px] pt-2 border-t border-yzy-slate/40">
                      <span className="text-yzy-ash">COST:</span>
                      <span className="text-yzy-neon font-bold">{c.estimatedCost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Benchmark Comparison (Conventional vs EZY INFRA) */}
      <div className="bg-yzy-obsidian border border-yzy-slate p-5 sm:p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-yzy-slate pb-3">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-yzy-neon" />
            <h3 className="font-display text-base sm:text-lg font-bold text-yzy-bone uppercase">
              TRANSPARENT COST DISRUPTION INDEX (CONVENTIONAL VS EZY INFRA)
            </h3>
          </div>
          <span className="font-mono text-[10px] text-yzy-ash uppercase hidden sm:inline">
            INDUSTRY BENCHMARKS
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <thead>
              <tr className="border-b border-yzy-slate text-yzy-ash text-[10px] uppercase">
                <th className="py-2.5 px-3">ARCHITECTURAL COMPONENT</th>
                <th className="py-2.5 px-3">CONVENTIONAL COMMERCIAL</th>
                <th className="py-2.5 px-3">EZY INFRA SYSTEM</th>
                <th className="py-2.5 px-3 text-right">COST DISRUPTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-yzy-slate/40">
              {COST_BENCHMARKS.map((bench, bi) => (
                <tr key={bi} className="hover:bg-yzy-charcoal/40 transition-colors">
                  <td className="py-3 px-3 font-bold text-yzy-bone">{bench.metric}</td>
                  <td className="py-3 px-3 text-yzy-ash line-through">{bench.conventional}</td>
                  <td className="py-3 px-3 text-yzy-chalk font-bold">{bench.ezyInfra}</td>
                  <td className="py-3 px-3 text-right">
                    <span className="bg-yzy-neon/10 border border-yzy-neon/30 text-yzy-neon font-bold px-2 py-0.5 text-[10px]">
                      {bench.savings}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
