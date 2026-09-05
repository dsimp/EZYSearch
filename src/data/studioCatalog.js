// MODULAR 3D COMPONENT CATALOG FOR BUILD-FROM-SCRATCH STUDIO
// Real-world engineering metrics, dimensional bounding envelopes, compatible materials, and living benefit weights.

export const STUDIO_CATEGORIES = [
  { id: 'all', name: 'ALL PIECES' },
  { id: 'foundations', name: 'FOUNDATIONS' },
  { id: 'walls', name: 'WALLS & SHELLS' },
  { id: 'domes', name: 'DOMES & VAULTS' },
  { id: 'roofs', name: 'ROOFS & CANOPIES' },
  { id: 'apertures', name: 'APERTURES & DOORS' },
  { id: 'utilities', name: 'OFF-GRID UTILITIES' },
  { id: 'furniture', name: 'ECO FURNITURE' }
];

export const STUDIO_PIECES = [
  // ==========================================
  // 1. FOUNDATIONS & SUBSTRUCTURES
  // ==========================================
  {
    id: 'foundation_monolithic_slab',
    name: 'MONOLITHIC EARTH/CONCRETE SLAB',
    category: 'foundations',
    tagline: 'High-density load-bearing foundation slab (12m x 12m x 0.4m).',
    description: 'Engineered ground slab cast with low-carbon geopolymer or rammed earth. Provides massive structural ballast and frost protection.',
    dimensions: { w: 12.0, h: 0.4, d: 12.0 },
    defaultMaterial: 'geopolymer_concrete',
    allowedMaterials: ['geopolymer_concrete', 'ceb_blocks', 'recycled_poly_bricks', 'rammed_earth'],
    structuralType: 'foundation',
    surfaceAreaSqft: 1550,
    costWeight: 1.0,
    carbonWeight: 1.0,
    livingBenefits: {
      thermalMass: 95,
      seismicStability: 90,
      indoorAirQuality: 85
    },
    defaultY: 0.2
  },
  {
    id: 'foundation_circular_plinth',
    name: 'CIRCULAR DOME SUBGRADE PLINTH',
    category: 'foundations',
    tagline: 'Radial compressive foundation ring for domes & circular pods (Diameter 8m).',
    description: 'Circular reinforced plinth designed to absorb radial outward thrust from catenary domes and arches.',
    dimensions: { radiusTop: 4.2, radiusBottom: 4.5, h: 0.5, segments: 32 },
    defaultMaterial: 'geopolymer_concrete',
    allowedMaterials: ['geopolymer_concrete', 'rammed_earth', 'ceb_blocks', 'ferrocement'],
    structuralType: 'foundation',
    surfaceAreaSqft: 600,
    costWeight: 0.6,
    carbonWeight: 0.5,
    livingBenefits: {
      thermalMass: 90,
      seismicStability: 95,
      indoorAirQuality: 80
    },
    defaultY: 0.25
  },
  {
    id: 'foundation_pilotis_stilts',
    name: 'ELEVATED PILOTIS / STILT PIERS',
    category: 'foundations',
    tagline: 'Quad-pier elevated stilts for flood zones and sloped terrain (10m x 8m x 1.2m).',
    description: 'Elevates structure above ground for maximum natural under-floor ventilation and zero terrain disruption.',
    dimensions: { w: 10.0, h: 1.2, d: 8.0 },
    defaultMaterial: 'cross_laminated_timber',
    allowedMaterials: ['cross_laminated_timber', 'geopolymer_concrete', 'bamboo_composite'],
    structuralType: 'foundation',
    surfaceAreaSqft: 450,
    costWeight: 0.7,
    carbonWeight: -1.2,
    livingBenefits: {
      ventilationDraft: 95,
      floodResilience: 100,
      ecologicalFootprint: 98
    },
    defaultY: 0.6
  },

  // ==========================================
  // 2. WALLS & ENVELOPES
  // ==========================================
  {
    id: 'wall_straight_solid',
    name: 'MONOLITHIC SOLID STRUCTURAL WALL',
    category: 'walls',
    tagline: 'Massive straight load-bearing wall (8m L x 3.2m H x 0.45m T).',
    description: 'High-inertia exterior wall providing maximum thermal storage and sound dampening against extreme ambient weather.',
    dimensions: { w: 8.0, h: 3.2, d: 0.45 },
    defaultMaterial: 'rammed_earth',
    allowedMaterials: ['rammed_earth', 'ceb_blocks', 'hempcrete', 'aircrete', 'cross_laminated_timber'],
    structuralType: 'wall',
    surfaceAreaSqft: 280,
    costWeight: 1.0,
    carbonWeight: 1.0,
    livingBenefits: {
      thermalMass: 98,
      acousticIsolation: 95,
      indoorAirQuality: 92
    },
    defaultY: 1.6
  },
  {
    id: 'wall_interlocking_ceb',
    name: 'INTERLOCKING CEB MODULAR WALL',
    category: 'walls',
    tagline: 'Standard interlocking Compressed Earth Block wall section (6m L x 3m H x 0.35m T).',
    description: 'Dry-stacked precision blocks with zero mortar. Quick community assembly with excellent fire rating.',
    dimensions: { w: 6.0, h: 3.0, d: 0.35 },
    defaultMaterial: 'ceb_blocks',
    allowedMaterials: ['ceb_blocks', 'recycled_poly_bricks', 'rammed_earth', 'hempcrete'],
    structuralType: 'wall',
    surfaceAreaSqft: 195,
    costWeight: 0.65,
    carbonWeight: -0.9,
    livingBenefits: {
      thermalMass: 90,
      fireProofRating: 100,
      diyFeasibility: 95
    },
    defaultY: 1.5
  },
  {
    id: 'wall_curved_catenary',
    name: 'CURVED CATENARY EARTH SEGMENT',
    category: 'walls',
    tagline: 'Aerodynamic curved wall quadrant (Radius 4m, 3.2m H).',
    description: 'Aerodynamic curved earthen envelope that deflects hurricane-force winds and creates organic acoustics.',
    dimensions: { radius: 4.0, h: 3.2, arc: Math.PI / 2 },
    defaultMaterial: 'aircrete',
    allowedMaterials: ['aircrete', 'rammed_earth', 'ferrocement', 'hempcrete'],
    structuralType: 'wall',
    surfaceAreaSqft: 220,
    costWeight: 0.85,
    carbonWeight: -0.8,
    livingBenefits: {
      windDeflection: 100,
      acousticHarmony: 94,
      thermalComfort: 90
    },
    defaultY: 1.6
  },
  {
    id: 'wall_panoramic_glass',
    name: 'PANORAMIC GLAZED SLIDING WALL',
    category: 'walls',
    tagline: 'Floor-to-ceiling insulated glass sliding portal (8m L x 3.2m H).',
    description: 'Brings vast amounts of natural daylight into living spaces with high-performance low-E solar shielding.',
    dimensions: { w: 8.0, h: 3.2, d: 0.15 },
    defaultMaterial: 'triple_glazed_glass',
    allowedMaterials: ['triple_glazed_glass', 'smart_solar_glass'],
    structuralType: 'wall_glazed',
    surfaceAreaSqft: 280,
    costWeight: 2.2,
    carbonWeight: 0.3,
    livingBenefits: {
      circadianDaylight: 100,
      panoramicView: 100,
      passiveSolarGain: 88
    },
    defaultY: 1.6
  },
  {
    id: 'wall_interior_partition',
    name: 'BIO-COMPOSITE INTERIOR PARTITION',
    category: 'walls',
    tagline: 'Lightweight breathable interior room divider (5m L x 2.8m H x 0.15m T).',
    description: 'Non-structural interior dividing wall filled with acoustic mycelium panels or hempcrete for natural air filtration.',
    dimensions: { w: 5.0, h: 2.8, d: 0.15 },
    defaultMaterial: 'mycelium_panels',
    allowedMaterials: ['mycelium_panels', 'hempcrete', 'cross_laminated_timber', 'bamboo_composite'],
    structuralType: 'partition',
    surfaceAreaSqft: 150,
    costWeight: 0.5,
    carbonWeight: -1.5,
    livingBenefits: {
      indoorAirQuality: 100,
      vocFreePurity: 100,
      acousticIsolation: 88
    },
    defaultY: 1.4
  },

  // ==========================================
  // 3. DOMES & VAULTS
  // ==========================================
  {
    id: 'dome_catenary_shell',
    name: 'PARABOLIC CATENARY EARTH DOME',
    category: 'domes',
    tagline: 'Self-supporting parabolic catenary dome shell (Diameter 8m, Height 4.8m).',
    description: 'Continuous monolithic curved shell distributing loads in pure compression with zero internal structural pillars.',
    dimensions: { radius: 4.0, h: 4.8 },
    defaultMaterial: 'aircrete',
    allowedMaterials: ['aircrete', 'rammed_earth', 'ceb_blocks', 'ferrocement', 'hempcrete'],
    structuralType: 'dome_shell',
    surfaceAreaSqft: 650,
    costWeight: 1.2,
    carbonWeight: -1.1,
    livingBenefits: {
      hurricaneImmunity: 100,
      thermalEfficiency: 96,
      sacredGeometry: 95
    },
    defaultY: 2.4
  },
  {
    id: 'dome_barrel_vault',
    name: 'MONOLITHIC BARREL VAULT SECTION',
    category: 'domes',
    tagline: 'Continuous arched earthen roof corridor (6m L x 4m W x 2.8m H).',
    description: 'Ancient Roman & Nubian earthen vault geometry creating soaring open interior volume.',
    dimensions: { w: 4.0, h: 2.8, l: 6.0 },
    defaultMaterial: 'ceb_blocks',
    allowedMaterials: ['ceb_blocks', 'rammed_earth', 'cross_laminated_timber', 'aircrete'],
    structuralType: 'vault',
    surfaceAreaSqft: 340,
    costWeight: 0.9,
    carbonWeight: -0.7,
    livingBenefits: {
      spaciousVolume: 92,
      passiveAirDraft: 94,
      structuralLongevity: 98
    },
    defaultY: 3.0
  },
  {
    id: 'dome_geodesic_biodome',
    name: 'GEODESIC SOLAR BIODOME SHELL',
    category: 'domes',
    tagline: 'Faceted spherical timber & smart-glass dome for indoor botanical microclimates.',
    description: 'High-tensile geodesic frame clad with smart low-E glass for year-round internal agriculture and meditation.',
    dimensions: { radius: 4.5, h: 4.2 },
    defaultMaterial: 'smart_solar_glass',
    allowedMaterials: ['smart_solar_glass', 'triple_glazed_glass', 'cross_laminated_timber'],
    structuralType: 'dome_shell',
    surfaceAreaSqft: 520,
    costWeight: 2.4,
    carbonWeight: 0.2,
    livingBenefits: {
      botanicalOxygen: 100,
      circadianDaylight: 100,
      passiveGreenhouse: 98
    },
    defaultY: 2.1
  },

  // ==========================================
  // 4. ROOFS & CANOPIES
  // ==========================================
  {
    id: 'roof_cantilever_clt',
    name: 'CANTILEVER MASS TIMBER SLAB ROOF',
    category: 'roofs',
    tagline: 'Expansive 5-ply mass timber roof with 1.5m perimeter overhang (10m x 10m x 0.35m).',
    description: 'Massive cross-laminated timber slab protecting earthen walls from rainfall while locking away atmospheric carbon.',
    dimensions: { w: 10.0, h: 0.35, d: 10.0 },
    defaultMaterial: 'cross_laminated_timber',
    allowedMaterials: ['cross_laminated_timber', 'bamboo_composite', 'ferrocement'],
    structuralType: 'roof',
    surfaceAreaSqft: 1080,
    costWeight: 1.4,
    carbonWeight: -2.2,
    livingBenefits: {
      rainProtection: 100,
      carbonNegativeStorage: 100,
      thermalOverhangShading: 95
    },
    defaultY: 3.4
  },
  {
    id: 'roof_cascading_garden',
    name: 'BIOPHILIC GREEN ROOF & TERRACE',
    category: 'roofs',
    tagline: 'Cascading living green roof deck with native succulents and herbs (9m x 7m x 0.5m).',
    description: 'Absorbs 90% of storm runoff, drastically reduces roof temperature, and provides edible organic produce.',
    dimensions: { w: 9.0, h: 0.5, d: 7.0 },
    defaultMaterial: 'rammed_earth',
    allowedMaterials: ['rammed_earth', 'cross_laminated_timber', 'geopolymer_concrete'],
    structuralType: 'roof',
    surfaceAreaSqft: 680,
    costWeight: 1.6,
    carbonWeight: -1.8,
    livingBenefits: {
      biophilicMentalCalm: 100,
      urbanHeatIslandCooling: 98,
      stormwaterRetention: 95
    },
    defaultY: 3.45
  },
  {
    id: 'roof_origami_a_frame',
    name: 'ORIGAMI A-FRAME STEEP ROOF',
    category: 'roofs',
    tagline: 'High-pitch storm-shedding faceted A-frame roof (7m W x 3.5m H x 7m L).',
    description: 'Sheds heavy alpine snow and torrential rainfall instantly while maximizing interior ceiling loft space.',
    dimensions: { w: 7.0, h: 3.5, d: 7.0 },
    defaultMaterial: 'cross_laminated_timber',
    allowedMaterials: ['cross_laminated_timber', 'bamboo_composite', 'recycled_poly_bricks'],
    structuralType: 'roof',
    surfaceAreaSqft: 750,
    costWeight: 1.1,
    carbonWeight: -1.4,
    livingBenefits: {
      snowLoadShedding: 100,
      interiorLoftSpace: 94,
      rainwaterShedding: 98
    },
    defaultY: 4.8
  },
  {
    id: 'roof_solar_pergola',
    name: 'PHOTOVOLTAIC SOLAR PERGOLA CANOPY',
    category: 'roofs',
    tagline: 'Elevated bifacial solar canopy providing shade and 8.4 kW clean power (6m x 5m x 0.2m).',
    description: 'Generates continuous zero-emission electrical energy while providing a shaded outdoor living porch.',
    dimensions: { w: 6.0, h: 0.2, d: 5.0 },
    defaultMaterial: 'smart_solar_glass',
    allowedMaterials: ['smart_solar_glass', 'cross_laminated_timber', 'bamboo_composite'],
    structuralType: 'roof',
    surfaceAreaSqft: 320,
    costWeight: 1.8,
    carbonWeight: -2.5,
    livingBenefits: {
      cleanEnergyGeneration: 100,
      outdoorThermalShade: 92,
      gridIndependence: 100
    },
    defaultY: 3.8
  },

  // ==========================================
  // 5. APERTURES & ENTRANCES
  // ==========================================
  {
    id: 'aperture_tunnel_portico',
    name: 'BRUTALIST AIRLOCK ENTRANCE TUNNEL',
    category: 'apertures',
    tagline: 'Protruding monolithic portico tunnel acting as thermal airlock buffer (2.4m W x 2.6m H x 3.2m L).',
    description: 'Prevents indoor conditioned air loss when entering and creates an imposing monumental arrival sequence.',
    dimensions: { w: 2.4, h: 2.6, d: 3.2 },
    defaultMaterial: 'rammed_earth',
    allowedMaterials: ['rammed_earth', 'ceb_blocks', 'geopolymer_concrete', 'cross_laminated_timber'],
    structuralType: 'entrance',
    surfaceAreaSqft: 180,
    costWeight: 0.7,
    carbonWeight: -0.6,
    livingBenefits: {
      thermalAirlockEfficiency: 98,
      monumentalAesthetic: 95,
      windbreakProtection: 96
    },
    defaultY: 1.3
  },
  {
    id: 'aperture_pivot_door',
    name: 'MASS TIMBER MONOLITHIC PIVOT DOOR',
    category: 'apertures',
    tagline: 'Full-height balanced pivot entrance door (1.6m W x 2.8m H x 0.1m T).',
    description: 'Glides smoothly on a concealed bottom needle bearing. Creates seamless indoor-outdoor transition.',
    dimensions: { w: 1.6, h: 2.8, d: 0.1 },
    defaultMaterial: 'cross_laminated_timber',
    allowedMaterials: ['cross_laminated_timber', 'bamboo_composite', 'recycled_poly_bricks'],
    structuralType: 'door',
    surfaceAreaSqft: 48,
    costWeight: 0.4,
    carbonWeight: -0.8,
    livingBenefits: {
      ingressEgressFluidity: 100,
      acousticSealing: 90,
      architecturalTactility: 96
    },
    defaultY: 1.4
  },
  {
    id: 'aperture_zenith_oculus',
    name: 'ZENITH SKYLIGHT OCULUS CAP',
    category: 'apertures',
    tagline: 'Circular zenith skylight portal with insulated solar glazing (Diameter 2.2m).',
    description: 'Placed at the apex of a dome or roof to project dramatic celestial sunlight shafts into the interior.',
    dimensions: { radius: 1.1, h: 0.25 },
    defaultMaterial: 'triple_glazed_glass',
    allowedMaterials: ['triple_glazed_glass', 'smart_solar_glass'],
    structuralType: 'skylight',
    surfaceAreaSqft: 38,
    costWeight: 0.6,
    carbonWeight: 0.1,
    livingBenefits: {
      circadianDaylight: 100,
      nighttimeStargazing: 100,
      naturalUpdraftVentilation: 95
    },
    defaultY: 4.8
  },

  // ==========================================
  // 6. OFF-GRID UTILITIES & AUTONOMY
  // ==========================================
  {
    id: 'utility_solar_battery_core',
    name: 'AUTONOMOUS POWER & BATTERY MODULE',
    category: 'utilities',
    tagline: '15 kWh LFP solid-state battery core + hybrid solar inverter (1.8m x 1.2m x 2.0m).',
    description: 'Stores solar energy generated during peak hours to power the entire infrastructure completely off-grid.',
    dimensions: { w: 1.8, h: 2.0, d: 1.2 },
    defaultMaterial: 'geopolymer_concrete',
    allowedMaterials: ['geopolymer_concrete', 'recycled_poly_bricks'],
    structuralType: 'utility',
    surfaceAreaSqft: 60,
    costWeight: 1.9,
    carbonWeight: -2.8,
    livingBenefits: {
      gridIndependence: 100,
      blackoutImmunity: 100,
      zeroEmissionPower: 100
    },
    defaultY: 1.0
  },
  {
    id: 'utility_rainwater_cistern',
    name: 'ATMOSPHERIC WATER CISTERN & GRAVITY FILTER',
    category: 'utilities',
    tagline: '2,500 Gallon subgrade rainwater collection cistern with ceramic filtration (2.4m Dia x 2.2m H).',
    description: 'Captures and purifies roof runoff into medical-grade drinking water using gravity ceramic ultra-filtration.',
    dimensions: { radius: 1.2, h: 2.2 },
    defaultMaterial: 'geopolymer_concrete',
    allowedMaterials: ['geopolymer_concrete', 'ferrocement', 'recycled_poly_bricks'],
    structuralType: 'utility',
    surfaceAreaSqft: 90,
    costWeight: 1.2,
    carbonWeight: -1.5,
    livingBenefits: {
      waterSovereignty: 100,
      chemicalFreeDrinking: 100,
      droughtImmunity: 95
    },
    defaultY: 1.1
  },

  // ==========================================
  // 7. CIRCULAR ECO-FURNITURE
  // ==========================================
  {
    id: 'furniture_mycelium_lounge',
    name: 'YZY BIO-FOAM MYCELIUM LOUNGE',
    category: 'furniture',
    tagline: 'Bio-grown sculptural lounge chair molded from fungal mycelium & hemp hurds (0.9m x 0.9m x 0.8m).',
    description: 'Velvety organic tactile finish grown in 7 days with zero toxic binders and negative carbon footprint.',
    dimensions: { w: 0.9, h: 0.8, d: 0.9 },
    defaultMaterial: 'mycelium_panels',
    allowedMaterials: ['mycelium_panels', 'hempcrete', 'bamboo_composite'],
    structuralType: 'furniture',
    surfaceAreaSqft: 20,
    costWeight: 0.35,
    carbonWeight: -0.9,
    livingBenefits: {
      ergonomicSerenity: 98,
      vocFreePurity: 100,
      tactileWarmth: 96
    },
    defaultY: 0.4
  },
  {
    id: 'furniture_earth_desk',
    name: 'MONOLITHIC TAMPED EARTH DESK',
    category: 'furniture',
    tagline: 'Massive striated earth slab workstation with wireless charging pad (1.9m x 0.9m x 0.75m).',
    description: 'Stark architectural earth sculpture burnished to a silky smooth stone finish with natural sedimentation strata.',
    dimensions: { w: 1.9, h: 0.75, d: 0.9 },
    defaultMaterial: 'rammed_earth',
    allowedMaterials: ['rammed_earth', 'ceb_blocks', 'geopolymer_concrete'],
    structuralType: 'furniture',
    surfaceAreaSqft: 35,
    costWeight: 0.65,
    carbonWeight: -0.6,
    livingBenefits: {
      focusGrounding: 100,
      zeroEmiShielding: 95,
      architecturalPermanence: 100
    },
    defaultY: 0.38
  },
  {
    id: 'furniture_clt_workbench',
    name: 'MASS TIMBER MODULAR WORKBENCH',
    category: 'furniture',
    tagline: 'Solid 5-ply spruce mass timber table with toolless notch joinery (2.2m x 1.0m x 0.75m).',
    description: 'Assembles with zero metal hardware using sliding Japanese dovetails. Finished with cold-pressed linseed oil.',
    dimensions: { w: 2.2, h: 0.75, d: 1.0 },
    defaultMaterial: 'cross_laminated_timber',
    allowedMaterials: ['cross_laminated_timber', 'bamboo_composite'],
    structuralType: 'furniture',
    surfaceAreaSqft: 40,
    costWeight: 0.45,
    carbonWeight: -1.2,
    livingBenefits: {
      biophilicWoodAroma: 95,
      craftLongevity: 98,
      toollessAssembly: 100
    },
    defaultY: 0.38
  },
  {
    id: 'furniture_hemp_screen',
    name: 'HEMP-FIBER ACOUSTIC PRIVACY SCREEN',
    category: 'furniture',
    tagline: 'Freestanding sound-absorbing divider made from industrial hemp felt (1.3m x 1.8m x 0.3m).',
    description: 'Absorbs 85% of ambient noise while releasing natural phytoncides that purify indoor air.',
    dimensions: { w: 1.3, h: 1.8, d: 0.3 },
    defaultMaterial: 'hempcrete',
    allowedMaterials: ['hempcrete', 'mycelium_panels', 'bamboo_composite'],
    structuralType: 'furniture',
    surfaceAreaSqft: 25,
    costWeight: 0.25,
    carbonWeight: -0.8,
    livingBenefits: {
      acousticPeace: 100,
      airPurification: 95,
      modularPrivacy: 92
    },
    defaultY: 0.9
  },
  {
    id: 'furniture_poly_stool',
    name: 'CIRCULAR OCEAN POLYMER STOOL',
    category: 'furniture',
    tagline: 'Indestructible monobloc cylinder stool forged from upcycled ocean plastic (0.45m Dia x 0.5m H).',
    description: 'Diverts 2,200 plastic bottles from oceans per piece. Impervious to water and UV degradation.',
    dimensions: { radius: 0.25, h: 0.5 },
    defaultMaterial: 'recycled_poly_bricks',
    allowedMaterials: ['recycled_poly_bricks', 'geopolymer_concrete', 'bamboo_composite'],
    structuralType: 'furniture',
    surfaceAreaSqft: 10,
    costWeight: 0.15,
    carbonWeight: -1.1,
    livingBenefits: {
      oceanPlasticDiversion: 100,
      allWeatherDurability: 100,
      circularEconomy: 100
    },
    defaultY: 0.25
  },
  {
    id: 'furniture_bamboo_daybed',
    name: 'ENGINEERED BAMBOO PLATFORM DAYBED',
    category: 'furniture',
    tagline: 'Low-slung Japanese platform daybed with woven coconut coir tatami inserts (2.1m x 1.5m x 0.35m).',
    description: 'Rests close to the earth for grounding sleep quality with breathable organic coir mattress.',
    dimensions: { w: 2.1, h: 0.35, d: 1.5 },
    defaultMaterial: 'bamboo_composite',
    allowedMaterials: ['bamboo_composite', 'cross_laminated_timber', 'mycelium_panels'],
    structuralType: 'furniture',
    surfaceAreaSqft: 45,
    costWeight: 0.55,
    carbonWeight: -1.6,
    livingBenefits: {
      restorativeSleep: 100,
      orthopedicGrounding: 98,
      hypoallergenicMaterials: 100
    },
    defaultY: 0.18
  }
];

// STARTER INSPIRATION BLUEPRINTS
export const STARTER_BLUEPRINTS = [
  {
    id: 'blueprint_empty',
    name: 'EMPTY STUDIO CANVAS',
    tagline: 'Pristine drafting space to build 100% from your imagination.',
    items: []
  },
  {
    id: 'blueprint_desert_sanctuary',
    name: 'MONOLITHIC DESERT SANCTUARY',
    tagline: 'Stark brutalist earth villa with mass timber cantilever roof and solar pergola.',
    items: [
      {
        instanceId: 'inst_found_1',
        pieceId: 'foundation_monolithic_slab',
        materialId: 'geopolymer_concrete',
        position: { x: 0, y: 0.2, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_wall_n',
        pieceId: 'wall_straight_solid',
        materialId: 'rammed_earth',
        position: { x: 0, y: 1.8, z: -4.5 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_wall_w',
        pieceId: 'wall_straight_solid',
        materialId: 'rammed_earth',
        position: { x: -4.5, y: 1.8, z: 0 },
        rotation: { x: 0, y: Math.PI / 2, z: 0 }
      },
      {
        instanceId: 'inst_wall_glass',
        pieceId: 'wall_panoramic_glass',
        materialId: 'triple_glazed_glass',
        position: { x: 0, y: 1.8, z: 4.5 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_door',
        pieceId: 'aperture_tunnel_portico',
        materialId: 'rammed_earth',
        position: { x: 4.5, y: 1.5, z: 0 },
        rotation: { x: 0, y: -Math.PI / 2, z: 0 }
      },
      {
        instanceId: 'inst_roof_clt',
        pieceId: 'roof_cantilever_clt',
        materialId: 'cross_laminated_timber',
        position: { x: 0, y: 3.6, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_solar',
        pieceId: 'roof_solar_pergola',
        materialId: 'smart_solar_glass',
        position: { x: 0, y: 4.1, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_desk',
        pieceId: 'furniture_earth_desk',
        materialId: 'rammed_earth',
        position: { x: -1.8, y: 0.6, z: -1.5 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_lounge',
        pieceId: 'furniture_mycelium_lounge',
        materialId: 'mycelium_panels',
        position: { x: 1.8, y: 0.6, z: 1.5 },
        rotation: { x: 0, y: -Math.PI / 4, z: 0 }
      }
    ]
  },
  {
    id: 'blueprint_biodome_pod',
    name: 'SOVEREIGN CATENARY BIODOME',
    tagline: 'Aerodynamic self-sustaining dome habitat with zenith skylight and atmospheric water unit.',
    items: [
      {
        instanceId: 'inst_plinth',
        pieceId: 'foundation_circular_plinth',
        materialId: 'geopolymer_concrete',
        position: { x: 0, y: 0.25, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_dome',
        pieceId: 'dome_catenary_shell',
        materialId: 'aircrete',
        position: { x: 0, y: 2.6, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_oculus',
        pieceId: 'aperture_zenith_oculus',
        materialId: 'triple_glazed_glass',
        position: { x: 0, y: 5.0, z: 0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_tunnel',
        pieceId: 'aperture_tunnel_portico',
        materialId: 'rammed_earth',
        position: { x: 0, y: 1.4, z: 4.2 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_water',
        pieceId: 'utility_rainwater_cistern',
        materialId: 'geopolymer_concrete',
        position: { x: -4.2, y: 1.2, z: -2.0 },
        rotation: { x: 0, y: 0, z: 0 }
      },
      {
        instanceId: 'inst_bed',
        pieceId: 'furniture_bamboo_daybed',
        materialId: 'bamboo_composite',
        position: { x: -1.2, y: 0.45, z: -1.2 },
        rotation: { x: 0, y: Math.PI / 3, z: 0 }
      },
      {
        instanceId: 'inst_screen',
        pieceId: 'furniture_hemp_screen',
        materialId: 'hempcrete',
        position: { x: 1.2, y: 1.0, z: -0.5 },
        rotation: { x: 0, y: -Math.PI / 6, z: 0 }
      }
    ]
  }
];
