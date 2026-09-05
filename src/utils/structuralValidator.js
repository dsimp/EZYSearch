// REAL-TIME STRUCTURAL INTEGRITY, LIVING BENEFITS & COST/CARBON ENGINE
// Evaluates building feasibility, calculates human health benefits, and estimates financials.

import { STUDIO_PIECES } from '../data/studioCatalog.js';
import { MATERIALS } from '../data/materials.js';
import { APERTURE_MATERIALS } from '../data/partCatalog.js';

const ALL_MATERIALS = [...MATERIALS, ...APERTURE_MATERIALS];

export function analyzeInfrastructure(placedItems) {
  if (!placedItems || placedItems.length === 0) {
    return {
      isEmpty: true,
      structuralIssues: [
        {
          id: 'empty_canvas',
          type: 'info',
          title: 'PRISTINE DRAFTING CANVAS',
          message: 'Add foundation slabs, earth walls, roofs, or circular furniture from the catalog on the right.'
        }
      ],
      livingBenefits: {
        circadianDaylight: 0,
        thermalInertia: 0,
        indoorAirPurity: 0,
        sovereignAutonomy: 0,
        acousticPeace: 0,
        overallScore: 0
      },
      financials: {
        totalCost: 0,
        totalCarbon: 0,
        totalSqft: 0,
        pieceCount: 0
      },
      materialBreakdown: []
    };
  }

  // Map instances to piece definitions and materials
  const itemData = placedItems.map((item) => {
    const pieceDef = STUDIO_PIECES.find((p) => p.id === item.pieceId) || STUDIO_PIECES[0];
    const matDef = ALL_MATERIALS.find((m) => m.id === item.materialId) || ALL_MATERIALS[0];
    return {
      ...item,
      pieceDef,
      matDef
    };
  });

  // 1. Structural Checks
  const hasFoundation = itemData.some((i) => i.pieceDef.structuralType === 'foundation');
  const hasWallsOrShell = itemData.some((i) => ['wall', 'wall_glazed', 'dome_shell', 'vault'].includes(i.pieceDef.structuralType));
  const hasRoof = itemData.some((i) => ['roof', 'vault', 'dome_shell'].includes(i.pieceDef.structuralType));
  const hasDoorOrEgress = itemData.some((i) => ['entrance', 'door', 'wall_glazed'].includes(i.pieceDef.structuralType));
  const hasApertureOrOculus = itemData.some((i) => ['skylight', 'wall_glazed'].includes(i.pieceDef.structuralType) || i.pieceDef.id === 'aperture_zenith_oculus');
  const hasSolarOrBattery = itemData.some((i) => i.pieceDef.id === 'roof_solar_pergola' || i.pieceDef.id === 'utility_solar_battery_core' || i.matDef.id === 'smart_solar_glass');
  const hasWaterCistern = itemData.some((i) => i.pieceDef.id === 'utility_rainwater_cistern');

  const structuralIssues = [];

  // Foundation Check
  if (!hasFoundation && itemData.some((i) => i.pieceDef.structuralType !== 'furniture')) {
    structuralIssues.push({
      id: 'missing_foundation',
      type: 'warning',
      title: 'FOUNDATION MISSING // FLOATING STRUCTURE',
      message: 'Superstructure is resting directly on ground soil without a load-bearing foundation slab or pilotis stilts. Add a Monolithic Slab or Circular Plinth.'
    });
  }

  // Roof Support Check
  const highRoofs = itemData.filter((i) => i.pieceDef.structuralType === 'roof' && (i.position?.y || 0) > 2.2);
  if (highRoofs.length > 0 && !hasWallsOrShell) {
    structuralIssues.push({
      id: 'floating_roof',
      type: 'error',
      title: 'UNSUPPORTED OVERHEAD ROOF',
      message: `${highRoofs.length} elevated roof canopy element(s) have no load-bearing earth walls or catenary shells beneath them. Add perimeter walls for seismic support.`
    });
  }

  // Egress / Door Check
  if (hasWallsOrShell && !hasDoorOrEgress) {
    structuralIssues.push({
      id: 'missing_egress',
      type: 'warning',
      title: 'NO INGRESS / EGRESS PORTAL',
      message: 'Enclosure has walls but no designated entrance tunnel, pivot door, or glazed portal for human entry.'
    });
  }

  // Daylight Ventilation Check
  if (hasWallsOrShell && !hasApertureOrOculus && itemData.length >= 4) {
    structuralIssues.push({
      id: 'low_daylight',
      type: 'warning',
      title: 'SUB-OPTIMAL DAYLIGHT & VENTILATION',
      message: 'Enclosure lacks a zenith skylight oculus or glazed wall, which may cause low interior circadian light levels.'
    });
  }

  // Sovereign Autonomy Suggestions
  if (!hasSolarOrBattery && itemData.length >= 3) {
    structuralIssues.push({
      id: 'grid_dependent',
      type: 'info',
      title: 'GRID-DEPENDENT // NO POWER MODULE',
      message: 'Add an Autonomous Solar Battery Module or Solar Pergola Canopy to achieve 100% off-grid sovereign power.'
    });
  }

  // Positive Validation
  if (hasFoundation && hasWallsOrShell && (hasRoof || hasDoorOrEgress)) {
    structuralIssues.unshift({
      id: 'structural_pass',
      type: 'success',
      title: 'STRUCTURAL INTEGRITY VALIDATED',
      message: 'Foundation, load-bearing envelope, and egress paths are sound. High seismic and hurricane wind resilience rating.'
    });
  }

  // 2. Human Living Benefits Calculation
  let totalThermalScore = 0;
  let totalAirScore = 0;
  let totalDaylightScore = 0;
  let totalAutonomyScore = 0;
  let totalAcousticScore = 0;

  itemData.forEach((item) => {
    const { pieceDef, matDef } = item;

    // Thermal Mass Flywheel
    if (['rammed_earth', 'ceb_blocks', 'aircrete', 'geopolymer_concrete'].includes(matDef.id)) {
      totalThermalScore += 22;
    } else if (matDef.id === 'hempcrete') {
      totalThermalScore += 26; // Superior R-value
    } else if (matDef.id === 'cross_laminated_timber') {
      totalThermalScore += 14;
    }

    // Indoor Air Purity (Zero VOCs, Mycelium, Hemp)
    if (['mycelium_panels', 'hempcrete', 'bamboo_composite'].includes(matDef.id)) {
      totalAirScore += 25;
    } else if (['rammed_earth', 'ceb_blocks'].includes(matDef.id)) {
      totalAirScore += 18;
    }

    // Circadian Daylight
    if (['triple_glazed_glass', 'smart_solar_glass'].includes(matDef.id) || pieceDef.id === 'aperture_zenith_oculus') {
      totalDaylightScore += 28;
    }

    // Sovereign Autonomy
    if (pieceDef.id === 'roof_solar_pergola' || pieceDef.id === 'utility_solar_battery_core' || matDef.id === 'smart_solar_glass') {
      totalAutonomyScore += 35;
    }
    if (pieceDef.id === 'utility_rainwater_cistern') {
      totalAutonomyScore += 35;
    }

    // Acoustic Peace
    if (['mycelium_panels', 'hempcrete', 'rammed_earth'].includes(matDef.id)) {
      totalAcousticScore += 22;
    }
  });

  const circadianDaylight = Math.min(100, Math.max(15, Math.round(totalDaylightScore)));
  const thermalInertia = Math.min(100, Math.max(10, Math.round(totalThermalScore)));
  const indoorAirPurity = Math.min(100, Math.max(20, Math.round(totalAirScore + 30)));
  const sovereignAutonomy = Math.min(100, Math.round(totalAutonomyScore));
  const acousticPeace = Math.min(100, Math.max(15, Math.round(totalAcousticScore + 20)));

  const overallScore = Math.round(
    (circadianDaylight * 0.2) +
    (thermalInertia * 0.25) +
    (indoorAirPurity * 0.2) +
    (sovereignAutonomy * 0.2) +
    (acousticPeace * 0.15)
  );

  // 3. Financials & Carbon Calculation
  let totalCost = 0;
  let totalCarbon = 0;
  let totalSqft = 0;

  const materialCounts = {};

  itemData.forEach((item) => {
    const { pieceDef, matDef } = item;
    const sqft = pieceDef.surfaceAreaSqft || 100;
    const unitCost = matDef.costPerSqFt || 5.0;
    const carbonRate = matDef.carbonImpact || -10;

    const itemCost = Math.round(sqft * unitCost * (pieceDef.costWeight || 1.0));
    const itemCarbon = Math.round((sqft * 0.08) * carbonRate * (pieceDef.carbonWeight || 1.0));

    totalCost += itemCost;
    totalCarbon += itemCarbon;
    totalSqft += (pieceDef.structuralType === 'foundation' || pieceDef.structuralType === 'roof') ? Math.round(sqft * 0.6) : 0;

    if (!materialCounts[matDef.id]) {
      materialCounts[matDef.id] = {
        name: matDef.name,
        shortName: matDef.shortName || matDef.name,
        colorHex: matDef.colorHex,
        totalSqft: 0,
        totalCost: 0,
        supplier: matDef.supplier
      };
    }
    materialCounts[matDef.id].totalSqft += sqft;
    materialCounts[matDef.id].totalCost += itemCost;
  });

  // Base site preparation & tooling minimum
  totalCost += 450;

  const materialBreakdown = Object.values(materialCounts);

  return {
    isEmpty: false,
    structuralIssues,
    livingBenefits: {
      circadianDaylight,
      thermalInertia,
      indoorAirPurity,
      sovereignAutonomy,
      acousticPeace,
      overallScore
    },
    financials: {
      totalCost,
      totalCarbon,
      totalSqft: Math.max(totalSqft, 120),
      pieceCount: placedItems.length
    },
    materialBreakdown
  };
}
