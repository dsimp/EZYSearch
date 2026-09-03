import React, { useState } from 'react';
import { FURNITURE_PIECES } from '../data/furniture';
import FurnitureViewer3D from './FurnitureViewer3D';
import { 
  Armchair, 
  Search, 
  Leaf, 
  DollarSign, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  Box, 
  Feather, 
  Scale, 
  Layers,
  Eye
} from 'lucide-react';
import { playTactileClick, playConfirmTone, playSelectTone } from '../utils/audio';

export default function FurnitureCatalog() {
  const [selectedPiece, setSelectedPiece] = useState(FURNITURE_PIECES[0]);
  const [activeFinish, setActiveFinish] = useState('raw_earth');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const categories = ['ALL', 'LIVING & SEATING', 'OFFICE & STUDIO', 'ACOUSTICS & ACCESSORIES', 'KITCHEN & SANITARY'];

  const filteredFurniture = FURNITURE_PIECES.filter((item) => {
    const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.supplier.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopySupplier = (item) => {
    playConfirmTone();
    const text = `PIECE: ${item.name}\nMATERIAL: ${item.material}\nPRICE: ${item.retailPrice}\nSUPPLIER: ${item.supplier.name} (${item.supplier.location})\nCONTACT: ${item.supplier.contact}\nWEBSITE: ${item.supplier.website}`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleSelectPiece = (piece) => {
    playSelectTone();
    setSelectedPiece(piece);
    // Auto scroll up smoothly to 3D studio on mobile
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            06 // 3D SUSTAINABLE INTERIOR ARCHITECTURE & FURNITURE STUDIO
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone">
            ECO-FRIENDLY BRUTALIST FURNITURE & STUDIO PIECES
          </h2>
        </div>
        <p className="font-mono text-xs text-yzy-ash max-w-md">
          Interactive 3D preview of circular bio-composite furniture matching the YEEZY aesthetic.
        </p>
      </div>

      {/* 3D Interactive Furniture Studio Hero */}
      <div className="flex flex-col gap-2">
        <FurnitureViewer3D
          selectedPiece={selectedPiece}
          activeFinish={activeFinish}
          onSelectFinish={setActiveFinish}
        />

        {/* Selected Furniture Live Telemetry */}
        <div className="bg-yzy-obsidian border border-yzy-slate p-3.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          <div>
            <span className="text-[9px] text-yzy-ash uppercase block">ACTIVE 3D MODEL</span>
            <span className="font-bold text-white truncate block">{selectedPiece.name}</span>
          </div>
          <div>
            <span className="text-[9px] text-yzy-ash uppercase block">EST. PRICE</span>
            <span className="font-bold text-yzy-neon">{selectedPiece.retailPrice.split('/')[0]}</span>
          </div>
          <div>
            <span className="text-[9px] text-yzy-ash uppercase block">CARBON OFFSET</span>
            <span className="font-bold text-yzy-neon">{selectedPiece.carbonImpact} kg CO2</span>
          </div>
          <div>
            <span className="text-[9px] text-yzy-ash uppercase block">WEIGHT & DIMS</span>
            <span className="font-bold text-yzy-bone">{selectedPiece.weight}</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash" />
          <input
            type="text"
            placeholder="Search furniture, desks, seating, sinks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playTactileClick();
                setSelectedCategory(cat);
              }}
              className={`shrink-0 px-2.5 py-1.5 font-mono text-[10px] tracking-wider transition-all border ${
                selectedCategory === cat
                  ? 'bg-yzy-bone text-yzy-black font-bold border-yzy-bone shadow-sm'
                  : 'bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Furniture Catalog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFurniture.map((item) => {
          const isInspecting = selectedPiece.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => handleSelectPiece(item)}
              className={`cursor-pointer p-5 border transition-all flex flex-col justify-between group relative ${
                isInspecting
                  ? 'bg-yzy-obsidian border-yzy-bone ring-2 ring-yzy-bone/40 shadow-xl'
                  : 'bg-yzy-obsidian/60 border-yzy-slate hover:border-yzy-ash hover:bg-yzy-obsidian/90'
              }`}
            >
              <div>
                {/* Header Badges */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase">
                    {item.category}
                  </span>
                  {isInspecting ? (
                    <span className="flex items-center gap-1 bg-yzy-bone text-yzy-black font-mono text-[9px] font-bold px-2 py-0.5">
                      <Eye className="w-3 h-3" /> INSPECTING IN 3D
                    </span>
                  ) : (
                    <span className="font-mono text-[9px] text-yzy-neon font-bold flex items-center gap-1">
                      <Leaf className="w-3 h-3" /> {item.carbonImpact} kg CO2
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display text-base font-bold text-white mb-1 group-hover:text-yzy-bone transition-colors">
                  {item.name}
                </h3>
                <p className="font-mono text-[10px] text-yzy-ash uppercase tracking-wider mb-2">
                  {item.aestheticStyle}
                </p>
                <p className="text-xs text-yzy-chalk/90 mb-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Specs Matrix */}
                <div className="grid grid-cols-2 gap-1.5 bg-yzy-black/80 p-2.5 border border-yzy-slate/60 text-[10px] font-mono mb-3">
                  <div>
                    <span className="text-yzy-ash text-[9px] block">MATERIAL</span>
                    <span className="text-yzy-bone font-bold truncate block">{item.material}</span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">DIMENSIONS</span>
                    <span className="text-yzy-bone font-bold truncate block">{item.dimensions.split('(')[0]}</span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">EST. PRICE</span>
                    <span className="text-yzy-neon font-bold">{item.retailPrice.split('/')[0]}</span>
                  </div>
                  <div>
                    <span className="text-yzy-ash text-[9px] block">DIY FEASIBILITY</span>
                    <span className="text-yzy-bone font-bold">{item.diyFeasibility.split(' ')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Exact Supplier Card */}
              <div className="pt-3 border-t border-yzy-slate/60 flex flex-col gap-2 font-mono">
                <div className="bg-yzy-black/90 p-3 border border-yzy-slate/60 flex flex-col gap-1 text-[10px]">
                  <div className="flex items-center justify-between">
                    <span className="text-yzy-ash font-bold uppercase tracking-wider text-[9px]">EXACT ORDER SOURCE:</span>
                    <span className="text-yzy-chalk font-bold">{item.supplier.location.split('/')[0]}</span>
                  </div>
                  <span className="font-bold text-white text-xs">{item.supplier.name}</span>
                  <span className="text-yzy-ash text-[10px]">{item.supplier.contact}</span>
                  <div className="flex justify-between items-center text-[9px] text-yzy-neon pt-1 border-t border-yzy-slate/40 mt-1">
                    <span>PRICE: {item.supplier.exactPrice.split('or')[0]}</span>
                    <span>LEAD: {item.supplier.leadTime}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPiece(item);
                    }}
                    className="flex-1 py-2 bg-yzy-charcoal hover:bg-yzy-slate border border-yzy-slate text-xs font-mono text-white tracking-wider flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-yzy-neon" />
                    <span>VIEW IN 3D</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopySupplier(item);
                    }}
                    className="py-2 px-3 bg-yzy-obsidian hover:bg-yzy-charcoal border border-yzy-slate text-xs font-mono text-yzy-bone tracking-wider"
                    title="Copy Supplier Details"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-yzy-neon" /> : <Copy className="w-3.5 h-3.5 text-yzy-ash" />}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
