import React from 'react';
import { X, Sparkles, Globe, Heart, Shield, Zap } from 'lucide-react';
import { playTactileClick } from '../utils/audio';

export default function DondaVisionModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-yzy-black border border-yzy-bone/80 w-full max-w-3xl my-auto p-6 sm:p-10 shadow-2xl flex flex-col gap-6 text-yzy-bone font-mono relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-yzy-slate pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-yzy-neon animate-pulse" />
            <span className="text-xs font-bold tracking-widest text-yzy-bone uppercase">
              THE MANIFESTO // YZY + DONDA EARTH INITIATIVE
            </span>
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

        {/* Vision Hero Banner */}
        <div className="flex flex-col gap-3">
          <h2 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
            SHELTER IS A BIRTHRIGHT. <br />
            NOT A 30-YEAR PRISON SENTENCE.
          </h2>
          <p className="text-xs sm:text-sm text-yzy-chalk/90 leading-relaxed font-sans">
            The modern housing machine is broken. It forces human beings into debt slavery for toxic drywall boxes that rot in 40 years. 
            We are returning to ancient monolithic permanence powered by computational engineering, raw subsoil, mycelium, and solar autonomy.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-yzy-bone font-bold text-xs">
              <Globe className="w-4 h-4 text-yzy-neon" />
              <span>01. 90% ON-SITE HARVESTING</span>
            </div>
            <p className="text-xs text-yzy-ash leading-relaxed">
              We build directly with the dirt beneath our feet. Subsoil compressed at 2,000 PSI makes permanent stone blocks for cents per unit. Zero timber destruction. Zero cement emissions.
            </p>
          </div>

          <div className="p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-yzy-bone font-bold text-xs">
              <Zap className="w-4 h-4 text-yzy-electric" />
              <span>02. DECENTRALIZED SOVEREIGNTY</span>
            </div>
            <p className="text-xs text-yzy-ash leading-relaxed">
              Every dome and village features closed-loop solar generation, atmospheric rainwater harvesting, and bio-gas digestion. Zero utility bills for life.
            </p>
          </div>

          <div className="p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-yzy-bone font-bold text-xs">
              <Shield className="w-4 h-4 text-yzy-earth" />
              <span>03. 200+ YEAR BRUTALIST LIFE</span>
            </div>
            <p className="text-xs text-yzy-ash leading-relaxed">
              Catenary arches and thick monolithic earth walls cannot catch fire, cannot rot, and withstand Category 5 hurricanes and earthquakes. Built for generations.
            </p>
          </div>

          <div className="p-4 bg-yzy-obsidian border border-yzy-slate flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-yzy-bone font-bold text-xs">
              <Heart className="w-4 h-4 text-yzy-clay" />
              <span>04. OPEN-SOURCE COMMUNITY POWER</span>
            </div>
            <p className="text-xs text-yzy-ash leading-relaxed">
              Every blueprint, mix formula, and CAD file is free and open-source. Anyone with a shovel, manual block press, and community willpower can build a sanctuary.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-yzy-slate flex items-center justify-between">
          <span className="text-[10px] text-yzy-ash tracking-widest uppercase">
            DESIGNED FOR HUMANITY // POWERED BY EZY INFRA
          </span>
          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            className="px-5 py-2 bg-yzy-bone text-yzy-black font-bold text-xs hover:bg-white tracking-wider"
          >
            ENTER THE ECOSYSTEM
          </button>
        </div>
      </div>
    </div>
  );
}
