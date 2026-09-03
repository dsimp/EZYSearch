import React, { useState, useMemo } from 'react';
import { INFRASTRUCTURES } from './data/infrastructures';
import { MATERIALS, UTILITY_PACKAGES, LAYERS_META } from './data/materials';
import Navigation from './components/Navigation';
import ModelViewer3D from './components/ModelViewer3D';
import InfrastructureSelector from './components/InfrastructureSelector';
import MaterialConfigurator from './components/MaterialConfigurator';
import MaterialLibrary from './components/MaterialLibrary';
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
  ArrowRight,
  TrendingUp,
  Cpu,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { playTactileClick, playSelectTone, playConfirmTone } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [selectedInfra, setSelectedInfra] = useState(INFRASTRUCTURES[0]);
  const [selectedMaterials, setSelectedMaterials] = useState(INFRASTRUCTURES[0].defaultMaterials);
  const [activeLayer, setActiveLayer] = useState('walls');

  // Modals
  const [isCostModalOpen, setIsCostModalOpen] = useState(false);
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);
  const [isVisionModalOpen, setIsVisionModalOpen] = useState(false);

  // When user selects a different archetype, populate its default materials
  const handleSelectInfra = (infra) => {
    setSelectedInfra(infra);
    setSelectedMaterials(infra.defaultMaterials);
  };

  // Handle Material Selection for a specific layer
  const handleSelectMaterial = (layerKey, materialId) => {
    setSelectedMaterials((prev) => ({
      ...prev,
      [layerKey]: materialId
    }));
  };

  // Calculate Real-Time Total Cost and Total Net Carbon
  const { totalCost, totalCarbon } = useMemo(() => {
    let costSum = 0;
    let carbonSum = 0;

    // Foundation
    const fMat = MATERIALS.find((m) => m.id === selectedMaterials.foundation);
    const fCost = (selectedInfra.sqft * 0.8) * (fMat?.costPerSqFt || 3.5);
    const fCarbon = (selectedInfra.sqft * 0.8) * (fMat?.carbonImpact || -4.0);

    // Superstructure
    const sMat = MATERIALS.find((m) => m.id === selectedMaterials.superstructure);
    const sCost = (selectedInfra.sqft * 0.6) * (sMat?.costPerSqFt || 4.5);
    const sCarbon = (selectedInfra.sqft * 0.6) * (sMat?.carbonImpact || -10.0);

    // Walls
    const wMat = MATERIALS.find((m) => m.id === selectedMaterials.walls);
    const wCost = (selectedInfra.sqft * 1.4) * (wMat?.costPerSqFt || 4.2);
    const wCarbon = (selectedInfra.sqft * 1.4) * (wMat?.carbonImpact || -18.0);

    // Roof
    const rMat = MATERIALS.find((m) => m.id === selectedMaterials.roof);
    const rCost = (selectedInfra.sqft * 1.1) * (rMat?.costPerSqFt || 3.8);
    const rCarbon = (selectedInfra.sqft * 1.1) * (rMat?.carbonImpact || -8.0);

    // Insulation
    const iMat = MATERIALS.find((m) => m.id === selectedMaterials.insulation);
    const iCost = (selectedInfra.sqft * 1.0) * (iMat?.costPerSqFt || 2.9);
    const iCarbon = (selectedInfra.sqft * 1.0) * (iMat?.carbonImpact || -35.0);

    // Utilities
    const uPkg = UTILITY_PACKAGES.find((u) => u.id === selectedMaterials.utilities);
    const uCost = uPkg?.cost || 2400;
    const uCarbon = uPkg?.carbonImpact || -650;

    costSum = fCost + sCost + wCost + rCost + iCost + uCost + 650; // +650 tooling
    carbonSum = fCarbon + sCarbon + wCarbon + rCarbon + iCarbon + uCarbon;

    return {
      totalCost: Math.round(costSum),
      totalCarbon: Math.round(carbonSum)
    };
  }, [selectedInfra, selectedMaterials]);

  // Apply Quick Optimization Presets
  const handleApplyPreset = (presetType) => {
    playConfirmTone();
    if (presetType === 'cheapest') {
      setSelectedMaterials({
        foundation: 'geopolymer_concrete',
        superstructure: 'ceb_blocks',
        walls: 'ceb_blocks',
        roof: 'aircrete',
        insulation: 'aircrete',
        utilities: 'essential_eco_pod'
      });
    } else if (presetType === 'eco') {
      setSelectedMaterials({
        foundation: 'geopolymer_concrete',
        superstructure: 'cross_laminated_timber',
        walls: 'hempcrete',
        roof: 'cross_laminated_timber',
        insulation: 'mycelium_panels',
        utilities: 'offgrid_solar_water'
      });
    } else if (presetType === 'disaster') {
      setSelectedMaterials({
        foundation: 'geopolymer_concrete',
        superstructure: 'ferrocement',
        walls: 'ceb_blocks',
        roof: 'ferrocement',
        insulation: 'mycelium_panels',
        utilities: 'essential_eco_pod'
      });
    } else if (presetType === 'brutalist') {
      setSelectedMaterials({
        foundation: 'geopolymer_concrete',
        superstructure: 'rammed_earth',
        walls: 'rammed_earth',
        roof: 'cross_laminated_timber',
        insulation: 'hempcrete',
        utilities: 'offgrid_solar_water'
      });
    }
  };

  return (
    <div className="min-h-screen bg-yzy-black text-yzy-bone flex flex-col selection:bg-yzy-bone selection:text-yzy-black">
      {/* Navigation Bar */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalCost={totalCost}
        totalCarbon={totalCarbon}
        onOpenCostBreakdown={() => setIsCostModalOpen(true)}
        onOpenBlueprintExport={() => setIsBlueprintModalOpen(true)}
        onOpenVisionModal={() => setIsVisionModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-24 flex flex-col gap-6">
        {activeTab === 'builder' && (
          <div className="flex flex-col gap-6">
            {/* Hero Architectural 3D CAD Canvas Viewport */}
            <div className="flex flex-col gap-2">
              <ModelViewer3D
                infrastructure={selectedInfra}
                selectedMaterials={selectedMaterials}
                activeLayer={activeLayer}
                materialsList={MATERIALS}
              />
              
              {/* Telemetry Bar Under 3D Viewport */}
              <div className="bg-yzy-obsidian border border-yzy-slate/60 p-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono">
                <div>
                  <span className="text-yzy-ash text-[9px] uppercase block">ACTIVE MODEL</span>
                  <span className="font-bold text-yzy-bone">{selectedInfra.name}</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[9px] uppercase block">FOOTPRINT</span>
                  <span className="font-bold text-yzy-bone">{selectedInfra.sqft} SQ FT</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[9px] uppercase block">LIVE ESTIMATED COST</span>
                  <span className="font-bold text-yzy-neon">${totalCost.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-yzy-ash text-[9px] uppercase block">NET CARBON IMPACT</span>
                  <span className="font-bold text-yzy-neon">{totalCarbon} kg CO2</span>
                </div>
              </div>
            </div>

            {/* Step 1: Archetype Matrix Selection */}
            <InfrastructureSelector
              infrastructures={INFRASTRUCTURES}
              selectedInfra={selectedInfra}
              onSelectInfra={handleSelectInfra}
            />

            {/* Step 2: Layer & Material Configurator */}
            <MaterialConfigurator
              selectedMaterials={selectedMaterials}
              onSelectMaterial={handleSelectMaterial}
              activeLayer={activeLayer}
              setActiveLayer={setActiveLayer}
              materialsList={MATERIALS}
              onApplyPreset={handleApplyPreset}
              infrastructure={selectedInfra}
            />
          </div>
        )}

        {activeTab === 'materials' && (
          <MaterialLibrary materialsList={MATERIALS} />
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
          className={`flex flex-col items-center gap-1 py-1 px-2 ${
            activeTab === 'builder' ? 'text-yzy-bone font-bold' : 'text-yzy-ash'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>CONFIG</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('materials');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${
            activeTab === 'materials' ? 'text-yzy-bone font-bold' : 'text-yzy-ash'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>MATERIALS</span>
        </button>

        <button
          onClick={() => {
            playTactileClick();
            setActiveTab('tutorials');
          }}
          className={`flex flex-col items-center gap-1 py-1 px-2 ${
            activeTab === 'tutorials' ? 'text-yzy-bone font-bold' : 'text-yzy-ash'
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
          className="flex flex-col items-center gap-1 py-1 px-2 text-yzy-neon font-bold"
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
        selectedMaterials={selectedMaterials}
        materialsList={MATERIALS}
        utilityPackages={UTILITY_PACKAGES}
        totalCost={totalCost}
        totalCarbon={totalCarbon}
      />

      <ExportBlueprintModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
        infrastructure={selectedInfra}
        selectedMaterials={selectedMaterials}
        materialsList={MATERIALS}
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
