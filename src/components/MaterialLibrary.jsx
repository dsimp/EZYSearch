import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Flame, 
  Droplet, 
  Clock, 
  Award, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { playTactileClick, playSelectTone } from '../utils/audio';

export default function MaterialLibrary({ materialsList }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeMaterialModal, setActiveMaterialModal] = useState(null);

  const categories = ['ALL', 'EARTH & SOIL', 'BIO-MASS', 'CIRCULAR MINERAL', 'RENEWABLE WOOD', 'FOAMED MINERAL', 'CIRCULAR POLYMER'];

  const filteredMaterials = materialsList.filter((mat) => {
    const matchesSearch = mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          mat.sourcingMethod.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'ALL' || mat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col gap-6 py-2">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-yzy-slate pb-3">
        <div>
          <span className="font-mono text-[10px] tracking-widest-xl text-yzy-ash uppercase block">
            02 // MATERIAL ENCYCLOPEDIA & REPOSITORY
          </span>
          <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-yzy-bone">
            SUSTAINABLE & BIO-CIRCULAR MATERIALS
          </h2>
        </div>
        <p className="font-mono text-xs text-yzy-ash max-w-md">
          Transparent scientific, economic, and regional sourcing telemetry for zero-carbon architecture.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-yzy-ash" />
          <input
            type="text"
            placeholder="Search materials, soil types, binders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-yzy-obsidian border border-yzy-slate pl-9 pr-3 py-2 text-xs font-mono text-yzy-bone placeholder:text-yzy-ash focus:outline-none focus:border-yzy-bone transition-colors"
          />
        </div>

        {/* Category Pills */}
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
                  ? 'bg-yzy-bone text-yzy-black font-bold border-yzy-bone'
                  : 'bg-yzy-obsidian/60 text-yzy-chalk border-yzy-slate hover:border-yzy-ash'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMaterials.map((mat) => (
          <div
            key={mat.id}
            className="p-5 bg-yzy-obsidian/60 border border-yzy-slate hover:border-yzy-ash transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] font-bold tracking-widest px-2 py-0.5 bg-yzy-charcoal border border-yzy-slate text-yzy-chalk uppercase">
                  {mat.category}
                </span>
                <span className="font-mono text-[9px] text-yzy-ash">
                  {mat.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-base font-bold text-yzy-bone mb-1 group-hover:text-white transition-colors">
                {mat.name}
              </h3>
              <p className="text-xs text-yzy-chalk/90 mb-3 leading-relaxed">
                {mat.description}
              </p>
            </div>

            {/* Spec Table */}
            <div className="flex flex-col gap-2 pt-3 border-t border-yzy-slate/60 text-[11px] font-mono">
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">ESTIMATED COST:</span>
                <span className="text-yzy-bone font-bold">{mat.unitCost}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">CARBON OFFSET:</span>
                <span className={`font-bold ${mat.carbonImpact <= 0 ? 'text-yzy-neon' : 'text-yzy-warning'}`}>
                  {mat.carbonImpact <= 0 ? `${mat.carbonImpact} kg CO2/m²` : `+${mat.carbonImpact} kg CO2/m²`}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">THERMAL R-VALUE:</span>
                <span className="text-yzy-bone font-bold">R-{mat.thermalRValue}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">COMPRESSIVE STRENGTH:</span>
                <span className="text-yzy-bone font-bold">{mat.compressiveStrength}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">FIRE RESISTANCE:</span>
                <span className="text-yzy-bone font-bold">{mat.fireRating}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-yzy-ash">EST. LIFESPAN:</span>
                <span className="text-yzy-bone font-bold">{mat.lifespan}</span>
              </div>

              {/* Local Sourcing Protocol */}
              <div className="bg-yzy-black/80 p-2.5 border border-yzy-slate/60 mt-2">
                <span className="text-[9px] text-yzy-ash uppercase font-bold block mb-1">
                  LOCAL HARVESTING PROTOCOL:
                </span>
                <p className="text-[10px] text-yzy-chalk leading-normal">
                  {mat.sourcingMethod}
                </p>
              </div>

              {/* Exact Supplier & Order Channel */}
              {mat.supplier && (
                <div className="bg-yzy-charcoal/80 p-2.5 border border-yzy-slate mt-1 text-[10px] font-mono">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-yzy-neon font-bold text-[9px] uppercase tracking-wider">
                      PRIMARY SUPPLIER ORDER SOURCE:
                    </span>
                    <span className="text-yzy-ash text-[9px]">{mat.supplier.location.split('/')[0]}</span>
                  </div>
                  <span className="font-bold text-yzy-bone text-xs block">{mat.supplier.name}</span>
                  <span className="text-yzy-ash text-[10px] block">{mat.supplier.contact}</span>
                  <div className="flex justify-between items-center text-[9px] pt-1.5 border-t border-yzy-slate/40 mt-1">
                    <span className="text-yzy-chalk font-bold">PRICE: {mat.supplier.exactPrice.split('(')[0]}</span>
                    <span className="text-yzy-ash">LEAD: {mat.supplier.leadTime}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
