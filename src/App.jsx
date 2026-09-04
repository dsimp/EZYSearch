import React, { useState, useMemo, useEffect } from 'react';
import { INFRASTRUCTURES } from './data/infrastructures';
import { MATERIALS, UTILITY_PACKAGES } from './data/materials';
import { ARCHETYPE_PARTS, APERTURE_MATERIALS } from './data/partCatalog';
import Navigation from './components/Navigation';
import ModelViewer3D from './components/ModelViewer3D';
import InfrastructureSelector from './components/InfrastructureSelector';
import InteractiveMatrixHUD from './components/InteractiveMatrixHUD';
import MaterialLibrary from './components/MaterialLibrary';
import FurnitureCatalog from './components/FurnitureCatalog';
import TutorialWalkthrough from './components/TutorialWalkthrough';
import SourcingMap from './components/SourcingMap';
import CostBreakdownModal from './components/CostBreakdownModal';
import ExportBlueprintModal from './components/ExportBlueprintModal';
import DondaVisionModal from './components/DondaVisionModal';
import { 
  Building2, 
  Layers, 
  BookOpen, 
  Compass, 
  DollarSign, 
  Download, 
  Sparkles, 
  Cpu, 
  ChevronRight,
  ShieldCheck,
  MousePointer
} from 'lucide-react';
import { playTactileClick, playSelectTone, playConfirmTone } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [selectedInfra, setSelectedInfra] = useState(INFRASTRUCTURES[0]);

  // Initial part configuration
  const initialParts = ARCHETYPE_PARTS[INFRASTRUCTURES[0].id] || ARCHETYPE_PARTS.yzy_mono_dome;
  const initialPartMap = {};
  initialParts.forEach((p) => {
    initialPartMap[p.id] = p.defaultMaterial;
  });

  const [selectedPartMaterials, setSelectedPartMaterials] = useState(initialPartMap);
  const [activePartId, setActivePartId] = useState(initialParts[1]?.id || initialParts[0].id);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll listener for sticky 3D center stage viewport
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 160);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modals
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);

  // Combine standard and aperture materials
  const allMaterials = useMemo(() => [...MATERIALS, ...APERTURE_MATERIALS], []);

  // When user switches Archetype
  const handleSelectInfra = (infra) => {
    setSelectedInfra(infra);
    const infraParts = ARCHETYPE_PARTS[infra.id] || ARCHETYPE_PARTS.yzy_mono_dome;
    const newPartMap = {};
    infraParts.forEach((p) => {
      newPartMap[p.id] = p.defaultMaterial;
    });
    setSelectedPartMaterials(newPartMap);
    setActivePartId(infraParts[1]?.id || infraParts[0].id);
  };

  // When user selects a material for an individual part
  const handleSelectPartMaterial = (partId, materialId) => {
    setSelectedPartMaterials((prev) => ({
      ...prev,
      [partId]: materialId
    }));
  };

  // Calculate Real-Time Total Cost and Carbon across all customized parts
  const { totalCost, totalCarbon } = useMemo(() => {
    const infraParts = ARCHETYPE_PARTS[selectedInfra.id] || ARCHETYPE_PARTS.yzy_mono_dome;
    let costSum = 0;
    let carbonSum = 0;

    infraParts.forEach((part) => {
      const matId = selectedPartMaterials[part.id] || part.defaultMaterial;
      const mat = allMaterials.find((m) => m.id === matId);
      const utilPkg = UTILITY_PACKAGES.find((u) => u.id === matId);

      if (utilPkg) {
        costSum += utilPkg.cost;
        carbonSum += utilPkg.carbonImpact;
      } else if (mat) {
        const cost = part.surfaceAreaSqft * mat.costPerSqFt;
        const carbon = (part.surfaceAreaSqft * 0.1) * mat.carbonImpact;
        costSum += cost;
        carbonSum += carbon;
      }
    });

    costSum += 650; // Community tooling & press kit

    return {
      totalCost: Math.round(costSum),
      totalCarbon: Math.round(carbonSum)
    };
  }, [selectedInfra, selectedPartMaterials, allMaterials]);

  return (
    <div className="min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black">
      {/* Navigation Header */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalCost={totalCost}
        totalCarbon={totalCarbon}
        onOpenCostBreakdown={() => setIsCostModalOpen(true)}
        onOpenBlueprintExport={() => setIsBlueprintModalOpen(true)}
        onOpenVisionModal={() => setIsVisionModalOpen(true)}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-2.5 sm:px-6 py-2.5 sm:py-5 pb-24 flex flex-col gap-3 sm:gap-5">
        {activeTab === 'builder' && (
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Step 1: Archetype Selection */}
            <InfrastructureSelector
              infrastructures={INFRASTRUCTURES}
              selectedInfra={selectedInfra}
              onSelectInfra={handleSelectInfra}
            />

            {/* Step 2: 3D Pick & Pull Interactive Canvas Viewport (Sticky on Scroll) */}
            <div className={`transition-all duration-300 ${
              isScrolled 
                ? 'sticky top-[42px] z-30 shadow-2xl bg-yzy-black/95 backdrop-blur-md pt-0.5 pb-1.5 border-b border-yzy-bone/40 -mx-2.5 px-2.5 sm:-mx-6 sm:px-6' 
                : 'relative flex flex-col gap-1.5'
            }`}>
              <ModelViewer3D
                infrastructure={selectedInfra}
                selectedPartMaterials={selectedPartMaterials}
                activePartId={activePartId}
                onSelectPart={(partId) => setActivePartId(partId)}
                materialsList={MATERIALS}
                isCompact={isScrolled}
              />
              
              {/* Telemetry Bar Under 3D Viewport */}
              <div className={`bg-yzy-obsidian border border-yzy-slate/60 p-2 sm:p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[10px] sm:text-[11px] font-mono ${
                isScrolled ? 'hidden md:grid' : 'grid'
              }`}>
                <div>
                  <span className="text-yzy-ash text-[8px] sm:text-[9px] uppercase block">ACTIVE MODEL</span>
                  <span className="font-bold text-white truncate block">{selectedInfra.name}</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[8px] sm:text-[9px] uppercase block">FOOTPRINT</span>
                  <span className="font-bold text-white">{selectedInfra.sqft} SQ FT</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[8px] sm:text-[9px] uppercase block">LIVE ESTIMATED COST</span>
                  <span className="font-bold text-yzy-neon">${totalCost.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[8px] sm:text-[9px] uppercase block">NET CARBON IMPACT</span>
                  <span className="font-bold text-yzy-neon">{totalCarbon} kg CO2</span>
                </div>
              </div>
            </div>

            {/* Step 3: Interactive Infrastructure Matrix (Pick & Pull Part Customizer + Pros & Cons) */}
            <InteractiveMatrixHUD
              infrastructure={selectedInfra}
              selectedPartMaterials={selectedPartMaterials}
              onSelectPartMaterial={handleSelectPartMaterial}
              activePartId={activePartId}
              setActivePartId={setActivePartId}
              materialsList={MATERIALS}
            />
          </div>
        )}

        {activeTab === 'materials' && (
          <MaterialLibrary materialsList={MATERIALS} />
        )}

        {activeTab === 'furniture' && (
          <FurnitureCatalog />
        )}

        {activeTab === 'tutorials' && (
          <TutorialWalkthrough />
        )}

        {activeTab === 'sourcing' && (
          <SourcingMap />
        )}

        {activeTab === 'benchmarks' && (
          <div className="flex flex-col gap-6 py-2">
            <SourcingMap />
          </div>
        )}
      </main>

      {/* Mobile Bottom Quick-Dock */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-yzy-obsidian/95 backdrop-blur-md border-t border-yzy-slate/80 p-2 sm:hidden flex items-center justify-around font-mono text-[10px]">
        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('builder');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1.5 ${
            activeTab === 'builder' ? 'text-white font-bold' : 'text-yzy-ash'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>MATRIX</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('materials');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1.5 ${
            activeTab === 'materials' ? 'text-white font-bold' : 'text-yzy-ash'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>MATERIALS</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('furniture');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1.5 ${
            activeTab === 'furniture' ? 'text-white font-bold' : 'text-yzy-ash'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>FURNITURE</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('tutorials');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1.5 ${
            activeTab === 'tutorials' ? 'text-white font-bold' : 'text-yzy-ash'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>GUIDES</span>
        </button>

        <button
          onClick={() => {
            playConfirmTone();
            setIsCostModalOpen(true);
          }}
          className="flex flex-col items-center gap-1 py-1 px-1.5 text-yzy-neon font-bold"
        >
          <DollarSign className="w-4 h-4" />
          <span>${totalCost.toLocaleString()}</span>
        </button>
      </div>

      {/* Modals */}
      <CostBreakdownModal
        isOpen={isCostModalOpen}
        onClose={() => setIsCostModalOpen(false)}
        infrastructure={selectedInfra}
        selectedMaterials={selectedPartMaterials}
        materialsList={allMaterials}
        utilityPackages={UTILITY_PACKAGES}
        totalCost={totalCost}
        totalCarbon={totalCarbon}
      />

      <ExportBlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
        infrastructure={selectedInfra}
        selectedMaterials={selectedPartMaterials}
        materialsList={allMaterials}
        utilityPackages={UTILITY_PACKAGES}
        totalCost={totalCost}
        totalCarbon={totalCarbon}
      />

      <DondaVisionModal
        isOpen={isVisionModalOpen}
        onClose={() => setIsVisionModalOpen(false)}
      />
    </div>
  );
}
