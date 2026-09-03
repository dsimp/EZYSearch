import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  BookOpen, 
  Compass, 
  DollarSign, 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X,
  Sparkles,
  Download,
  Share2,
  Cpu
} from 'lucide-react';
import { playTactileClick, playConfirmTone, toggleAudio, isAudioEnabled } from '../utils/audio';

export default function Navigation({
  activeTab,
  setActiveTab,
  totalCost,
  totalCarbon,
  onOpenCostBreakdown,
  onOpenBlueprintExport,
  onOpenVisionModal
}) {
  const [soundOn, setSoundOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleAudioToggle = () => {
    const newState = toggleAudio();
    setSoundOn(newState);
    if (newState) playTactileClick(1000, 0.03);
  };

  const navItems = [
    { id: 'builder', label: '01 // CONFIGURATOR', icon: Building2 },
    { id: 'materials', label: '02 // MATERIALS INDEX', icon: Layers },
    { id: 'furniture', label: '03 // ECO FURNITURE', icon: Cpu },
    { id: 'tutorials', label: '04 // NOVICE BUILD GUIDE', icon: BookOpen },
    { id: 'sourcing', label: '05 // SOURCING RADAR', icon: Compass },
    { id: 'benchmarks', label: '06 // COST BENCHMARKS', icon: DollarSign },
  ];

  const handleTabSelect = (tabId) => {
    playTactileClick();
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-yzy-black/95 backdrop-blur-md border-b border-yzy-slate select-none">
      {/* Top Banner / Ticker Bar */}
      <div className="w-full bg-yzy-obsidian border-b border-yzy-slate/60 px-3 sm:px-6 py-1.5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono tracking-wider">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-yzy-chalk">
            <span className="w-1.5 h-1.5 rounded-full bg-yzy-neon animate-pulse" />
            <span className="font-bold tracking-widest uppercase">EZY.INFRA</span>
            <span className="hidden sm:inline text-yzy-ash">| OPEN-SOURCE REGENERATIVE SHELTER</span>
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Ye / Donda Vision Manifesto Trigger */}
          <button
            onClick={() => {
              playTactileClick(900, 0.03);
              onOpenVisionModal();
            }}
            className="flex items-center gap-1.5 text-yzy-chalk hover:text-yzy-bone font-bold tracking-widest uppercase transition-colors"
          >
            <Sparkles className="w-3 h-3 text-yzy-neon" />
            <span className="underline decoration-yzy-neon/60 underline-offset-2">YE // DONDA MANIFESTO</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            className="flex items-center gap-1 text-yzy-ash hover:text-yzy-bone transition-colors"
            title={soundOn ? 'Mute Haptic Sound' : 'Enable Haptic Sound'}
          >
            {soundOn ? <Volume2 className="w-3.5 h-3.5 text-yzy-chalk" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundOn ? 'AUDIO ON' : 'MUTED'}</span>
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <div 
          onClick={() => handleTabSelect('builder')}
          className="cursor-pointer flex flex-col"
        >
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-yzy-bone">
              EZY <span className="font-mono text-sm tracking-widest text-yzy-ash font-normal">EARTH</span>
            </span>
          </div>
          <span className="font-mono text-[9px] text-yzy-ash tracking-widest uppercase">
            SUSTAINABLE ARCHITECTURAL SYSTEM
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-yzy-obsidian/80 p-1 border border-yzy-slate">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabSelect(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 font-mono text-[11px] tracking-wider transition-all ${
                  isActive
                    ? 'bg-yzy-bone text-yzy-black font-bold shadow-sm'
                    : 'text-yzy-chalk hover:text-white hover:bg-yzy-slate/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Live Telemetry & Actions (Cost + Carbon Ticker) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Live Cost Button */}
          <button
            onClick={() => {
              playTactileClick();
              onOpenCostBreakdown();
            }}
            className="flex items-center gap-2 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate hover:border-yzy-ash px-2.5 sm:px-3.5 py-1.5 text-left transition-all"
          >
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-yzy-ash tracking-widest uppercase">EST. COST</span>
              <span className="font-mono font-bold text-xs sm:text-sm text-yzy-bone tracking-tight">
                ${totalCost.toLocaleString()}
              </span>
            </div>
            <div className="hidden sm:flex flex-col border-l border-yzy-slate pl-2.5">
              <span className="font-mono text-[9px] text-yzy-ash tracking-widest uppercase">CARBON NET</span>
              <span className={`font-mono font-bold text-xs ${totalCarbon <= 0 ? 'text-yzy-neon' : 'text-yzy-warning'}`}>
                {totalCarbon <= 0 ? `${totalCarbon} kg` : `+${totalCarbon} kg`}
              </span>
            </div>
          </button>

          {/* Blueprint Export Button */}
          <button
            onClick={() => {
              playConfirmTone();
              onOpenBlueprintExport();
            }}
            className="hidden sm:flex items-center gap-1.5 bg-yzy-bone hover:bg-white text-yzy-black px-3 py-2 font-mono text-xs font-bold tracking-wider transition-all active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT CAD</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              playTactileClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 text-yzy-bone hover:bg-yzy-slate/50 border border-yzy-slate"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-yzy-obsidian border-b border-yzy-slate px-4 py-4 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabSelect(item.id)}
                className={`flex items-center justify-between w-full px-3 py-2.5 font-mono text-xs tracking-wider border ${
                  isActive
                    ? 'bg-yzy-bone text-yzy-black font-bold border-yzy-bone'
                    : 'text-yzy-chalk hover:bg-yzy-slate/40 border-yzy-slate/60'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {isActive && <span className="text-[10px] uppercase font-mono tracking-widest bg-yzy-black text-yzy-bone px-1.5 py-0.5">ACTIVE</span>}
              </button>
            );
          })}

          <div className="pt-2 flex flex-col gap-2 border-t border-yzy-slate mt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBlueprintExport();
              }}
              className="flex items-center justify-center gap-2 bg-yzy-bone text-yzy-black py-2.5 font-mono text-xs font-bold tracking-widest"
            >
              <Download className="w-4 h-4" />
              <span>EXPORT BLUEPRINT CAD SPEC</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVisionModal();
              }}
              className="flex items-center justify-center gap-2 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk py-2.5 font-mono text-xs font-bold tracking-widest"
            >
              <Sparkles className="w-4 h-4 text-yzy-neon" />
              <span>YE // DONDA ARCHITECTURAL VISION</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
