// MODULAR ARCHITECTURAL PART MATRIX FOR PICK & PULL CUSTOMIZATION
// Allows granular customization of every single component (Walls, Windows, Roofs, Base, Openings, Utilities)

export const ARCHETYPE_PARTS = {
  yzy_mono_dome: [
    {
      id: "dome_base",
      name: "SUBGRADE PLINTH & FOUNDATION",
      category: "FOUNDATION",
      description: "Load-bearing frost-proof plinth anchoring the catenary dome to bedrock.",
      defaultMaterial: "geopolymer_concrete",
      allowedMaterials: ["geopolymer_concrete", "ceb_blocks", "recycled_poly_bricks", "rammed_earth"],
      surfaceAreaSqft: 280,
      partType: "solid"
    },
    {
      id: "dome_shell",
      name: "MONOLITHIC DOME SHELL (MAIN ENVELOPE)",
      category: "ENVELOPE",
      description: "Parabolic curved earthen shell distributing structural loads into pure compression.",
      defaultMaterial: "aircrete",
      allowedMaterials: ["aircrete", "ceb_blocks", "rammed_earth", "hempcrete", "ferrocement"],
      surfaceAreaSqft: 650,
      partType: "curved_shell"
    },
    {
      id: "dome_window_oculus",
      name: "APERTURE: ZENITH SKYLIGHT OCULUS",
      category: "WINDOWS & APERTURES",
      description: "Circular central skylight portal bringing natural zenith daylight deep into the interior.",
      defaultMaterial: "triple_glazed_glass",
      allowedMaterials: ["triple_glazed_glass", "smart_solar_glass", "solid_earthen_cap", "timber_louver"],
      surfaceAreaSqft: 25,
      partType: "aperture"
    },
    {
      id: "dome_portal_tunnel",
      name: "ENTRANCE TUNNEL & AIRLOCK PORTICO",
      category: "FACADE & ENTRANCE",
      description: "Protruding brutalist tunnel entry acting as thermal buffer and windbreak.",
      defaultMaterial: "rammed_earth",
      allowedMaterials: ["rammed_earth", "ceb_blocks", "cross_laminated_timber", "geopolymer_concrete"],
      surfaceAreaSqft: 90,
      partType: "portal"
    },
    {
      id: "dome_insulation_liner",
      name: "INTERIOR BIO-ACOUSTIC LINING",
      category: "INSULATION",
      description: "Continuous breathable interior insulation preventing acoustic reverberation.",
      defaultMaterial: "mycelium_panels",
      allowedMaterials: ["mycelium_panels", "hempcrete", "aircrete"],
      surfaceAreaSqft: 400,
      partType: "insulation"
    },
    {
      id: "dome_utilities",
      name: "OFF-GRID AUTONOMOUS LIFE-SUPPORT",
      category: "UTILITIES",
      description: "Closed-loop solar array, battery storage, and rainwater gravity filtration unit.",
      defaultMaterial: "essential_eco_pod",
      allowedMaterials: ["essential_eco_pod", "offgrid_solar_water"],
      surfaceAreaSqft: 50,
      partType: "utility"
    }
  ],
  rammed_earth_villa: [
    {
      id: "villa_foundation",
      name: "ENGINEERED SUBGRADE & SLAB",
      category: "FOUNDATION",
      description: "High-density monolithic slab with integrated radiant floor tubing.",
      defaultMaterial: "geopolymer_concrete",
      allowedMaterials: ["geopolymer_concrete", "recycled_poly_bricks", "rammed_earth"],
      surfaceAreaSqft: 1200,
      partType: "solid"
    },
    {
      id: "villa_south_wall",
      name: "SOUTH FACADE ENVELOPE",
      category: "WALLS & APERTURES",
      description: "Front exterior envelope facing sun azimuth for passive solar heating.",
      defaultMaterial: "rammed_earth",
      allowedMaterials: ["rammed_earth", "ceb_blocks", "hempcrete", "triple_glazed_glass", "cross_laminated_timber"],
      surfaceAreaSqft: 380,
      partType: "swappable_wall" // Can be converted to glass window!
    },
    {
      id: "villa_north_wall",
      name: "NORTH THERMAL SHIELD WALL",
      category: "WALLS",
      description: "Thick monolithic earth wall with zero openings to prevent winter heat loss.",
      defaultMaterial: "rammed_earth",
      allowedMaterials: ["rammed_earth", "ceb_blocks", "hempcrete", "cross_laminated_timber"],
      surfaceAreaSqft: 380,
      partType: "solid"
    },
    {
      id: "villa_side_walls",
      name: "EAST & WEST PERIMETER WALLS",
      category: "WALLS & APERTURES",
      description: "Flanking striated earth walls with narrow vertical daylight slits.",
      defaultMaterial: "rammed_earth",
      allowedMaterials: ["rammed_earth", "ceb_blocks", "hempcrete", "triple_glazed_glass"],
      surfaceAreaSqft: 450,
      partType: "swappable_wall"
    },
    {
      id: "villa_roof_cantilever",
      name: "CANTILEVERED MASS TIMBER ROOF SLAB",
      category: "ROOF & CANOPY",
      description: "Expansive 4-foot overhang roof protecting earthen walls from direct rainfall.",
      defaultMaterial: "cross_laminated_timber",
      allowedMaterials: ["cross_laminated_timber", "bamboo_composite", "ferrocement"],
      surfaceAreaSqft: 1450,
      partType: "roof"
    },
    {
      id: "villa_window_portal",
      name: "DAYLIGHT RIBBON & PATIO PORTAL",
      category: "WINDOWS & APERTURES",
      description: "Floor-to-ceiling high-efficiency insulated low-E glazed glass sliding portal.",
      defaultMaterial: "triple_glazed_glass",
      allowedMaterials: ["triple_glazed_glass", "smart_solar_glass", "timber_louver"],
      surfaceAreaSqft: 180,
      partType: "aperture"
    },
    {
      id: "villa_utilities",
      name: "WHOLE-HOME REGENERATIVE ENERGY SUITE",
      category: "UTILITIES",
      description: "5.2kW Solar Pergola + 10kWh Battery + 2,000L Rain Cistern & Methane Digester.",
      defaultMaterial: "offgrid_solar_water",
      allowedMaterials: ["offgrid_solar_water", "essential_eco_pod", "microgrid_communal"],
      surfaceAreaSqft: 120,
      partType: "utility"
    }
  ],
  modular_eco_apartments: [
    {
      id: "mod_pod_base",
      name: "PODIUM SUBGRADE & BASE",
      category: "FOUNDATION",
      description: "High-compressive engineered base absorbing multi-level residential loads.",
      defaultMaterial: "geopolymer_concrete",
      allowedMaterials: ["geopolymer_concrete", "recycled_poly_bricks"],
      surfaceAreaSqft: 1800,
      partType: "solid"
    },
    {
      id: "mod_tier1_modules",
      name: "LEVEL 01 LIVING MODULES",
      category: "RESIDENTIAL MODULES",
      description: "Lower tier community apartments with direct shaded courtyard access.",
      defaultMaterial: "ceb_blocks",
      allowedMaterials: ["ceb_blocks", "cross_laminated_timber", "hempcrete", "rammed_earth"],
      surfaceAreaSqft: 1600,
      partType: "modular_box"
    },
    {
      id: "mod_tier2_modules",
      name: "LEVEL 02 LIVING MODULES",
      category: "RESIDENTIAL MODULES",
      description: "Mid-level residential units with cantilevered balconies.",
      defaultMaterial: "cross_laminated_timber",
      allowedMaterials: ["cross_laminated_timber", "ceb_blocks", "hempcrete"],
      surfaceAreaSqft: 1600,
      partType: "modular_box"
    },
    {
      id: "mod_tier3_modules",
      name: "LEVEL 03 PENTHOUSE MODULES",
      category: "RESIDENTIAL MODULES",
      description: "Top floor suites with biophilic light shafts and cross-breeze airflow.",
      defaultMaterial: "cross_laminated_timber",
      allowedMaterials: ["cross_laminated_timber", "ceb_blocks", "hempcrete"],
      surfaceAreaSqft: 1600,
      partType: "modular_box"
    },
    {
      id: "mod_facade_glazing",
      name: "COURTYARD WINDOWS & BALCONIES",
      category: "WINDOWS & APERTURES",
      description: "High-performance acoustic double/triple glazed window panels.",
      defaultMaterial: "triple_glazed_glass",
      allowedMaterials: ["triple_glazed_glass", "smart_solar_glass", "timber_louver"],
      surfaceAreaSqft: 420,
      partType: "aperture"
    },
    {
      id: "mod_roof_canopy",
      name: "COMMUNAL ROOFTOP CANOPY",
      category: "ROOF & CANOPY",
      description: "Mass timber roof pergola supporting communal solar array and food gardens.",
      defaultMaterial: "cross_laminated_timber",
      allowedMaterials: ["cross_laminated_timber", "bamboo_composite", "ferrocement"],
      surfaceAreaSqft: 2000,
      partType: "roof"
    },
    {
      id: "mod_utilities",
      name: "DISTRICT MICROGRID & WATER SUITE",
      category: "UTILITIES",
      description: "25kW Solar Pergola + 50kWh Battery + Central Water Condenser.",
      defaultMaterial: "microgrid_communal",
      allowedMaterials: ["microgrid_communal", "offgrid_solar_water"],
      surfaceAreaSqft: 300,
      partType: "utility"
    }
  ],
  donda_resilience_commons: [
    {
      id: "donda_base_plaza",
      name: "COMMUNAL PLAZA & AMPHITHEATER BASE",
      category: "FOUNDATION",
      description: "Permeable earth and geopolymer plaza naturally recharging local aquifers.",
      defaultMaterial: "geopolymer_concrete",
      allowedMaterials: ["geopolymer_concrete", "recycled_poly_bricks", "rammed_earth"],
      surfaceAreaSqft: 6500,
      partType: "solid"
    },
    {
      id: "donda_central_dome",
      name: "CENTRAL COMMUNITY BIODOME",
      category: "CENTRAL COMMONS",
      description: "Geodesic gathering hub for communal dining, education, and hydroponic food.",
      defaultMaterial: "ferrocement",
      allowedMaterials: ["ferrocement", "aircrete", "bamboo_composite", "triple_glazed_glass"],
      surfaceAreaSqft: 2800,
      partType: "curved_shell"
    },
    {
      id: "donda_living_pods",
      name: "SATELLITE RESIDENTIAL DOMES (6 PODS)",
      category: "RESIDENTIAL CLUSTER",
      description: "Circular perimeter of monolithic dome homes for community residents.",
      defaultMaterial: "rammed_earth",
      allowedMaterials: ["rammed_earth", "ceb_blocks", "aircrete", "hempcrete"],
      surfaceAreaSqft: 4800,
      partType: "modular_box"
    },
    {
      id: "donda_pergola_ring",
      name: "RAIN HARVESTING RING & SOLAR CANOPY",
      category: "ROOF & CANOPY",
      description: "Continuous circular canopy capturing 100% of seasonal rainfall for village use.",
      defaultMaterial: "bamboo_composite",
      allowedMaterials: ["bamboo_composite", "cross_laminated_timber", "ferrocement"],
      surfaceAreaSqft: 3200,
      partType: "roof"
    },
    {
      id: "donda_microgrid",
      name: "DECENTRALIZED CITY MICRO-GRID",
      category: "UTILITIES",
      description: "Zero-dependency power, water generation, and anaerobic waste recycling.",
      defaultMaterial: "microgrid_communal",
      allowedMaterials: ["microgrid_communal"],
      surfaceAreaSqft: 800,
      partType: "utility"
    }
  ],
  rapid_emergency_pod: [
    {
      id: "pod_base_chassis",
      name: "ELEVATED INTERLOCKING BASE PLINTH",
      category: "FOUNDATION",
      description: "Lightweight modular foundation elevating pod 6 inches off wet muddy ground.",
      defaultMaterial: "recycled_poly_bricks",
      allowedMaterials: ["recycled_poly_bricks", "cross_laminated_timber"],
      surfaceAreaSqft: 160,
      partType: "solid"
    },
    {
      id: "pod_bio_walls",
      name: "FLATPACK BIO-COMPOSITE ENVELOPE",
      category: "WALLS",
      description: "Interlocking tongue-and-groove insulated panels assembled with zero tools.",
      defaultMaterial: "recycled_poly_bricks",
      allowedMaterials: ["recycled_poly_bricks", "mycelium_panels", "cross_laminated_timber"],
      surfaceAreaSqft: 280,
      partType: "swappable_wall"
    },
    {
      id: "pod_origami_roof",
      name: "ANGLED WATER-DEFLECTING ROOF",
      category: "ROOF",
      description: "High-slope origami roof shedding monsoon rains and snow loads.",
      defaultMaterial: "ferrocement",
      allowedMaterials: ["ferrocement", "cross_laminated_timber", "aircrete"],
      surfaceAreaSqft: 190,
      partType: "roof"
    },
    {
      id: "pod_glazing",
      name: "LIGHT PORTS & EMERGENCY EGRESS",
      category: "WINDOWS & APERTURES",
      description: "Polycarbonate insulated light panels for natural interior illumination.",
      defaultMaterial: "triple_glazed_glass",
      allowedMaterials: ["triple_glazed_glass", "timber_louver"],
      surfaceAreaSqft: 40,
      partType: "aperture"
    },
    {
      id: "pod_utility_kit",
      name: "PLUG-AND-PLAY 12V EMERGENCY SOLAR KIT",
      category: "UTILITIES",
      description: "Integrated solar panel on roof powering interior LEDs, phone charging, and water filter.",
      defaultMaterial: "essential_eco_pod",
      allowedMaterials: ["essential_eco_pod"],
      surfaceAreaSqft: 30,
      partType: "utility"
    }
  ],
  terrace_earth_apartments: [
    {
      id: "terrace_foundation",
      name: "ZIGGURAT BASE & RETAINING PLINTH",
      category: "FOUNDATION",
      description: "Stepped bedrock foundation supporting cascading multi-level earth terraces.",
      defaultMaterial: "geopolymer_concrete",
      allowedMaterials: ["geopolymer_concrete", "recycled_poly_bricks"],
      surfaceAreaSqft: 3200,
      partType: "solid"
    },
    {
      id: "terrace_tier_walls",
      name: "STEPPED RESIDENTIAL WALL MATRIX",
      category: "WALLS",
      description: "Thick brutalist earth walls stepping backward on each residential tier.",
      defaultMaterial: "hempcrete",
      allowedMaterials: ["hempcrete", "rammed_earth", "ceb_blocks", "cross_laminated_timber"],
      surfaceAreaSqft: 4800,
      partType: "swappable_wall"
    },
    {
      id: "terrace_garden_roofs",
      name: "CASCADING GREEN ROOF TERRACES",
      category: "ROOF & GARDENS",
      description: "Rooftop edible food gardens and soil thermal blankets for every apartment unit.",
      defaultMaterial: "cross_laminated_timber",
      allowedMaterials: ["cross_laminated_timber", "ferrocement"],
      surfaceAreaSqft: 3800,
      partType: "roof"
    },
    {
      id: "terrace_panoramic_windows",
      name: "EXPANSIVE TERRACE GLAZING PORTALS",
      category: "WINDOWS & APERTURES",
      description: "Full-width glass sliding walls opening directly onto rooftop gardens.",
      defaultMaterial: "triple_glazed_glass",
      allowedMaterials: ["triple_glazed_glass", "smart_solar_glass", "timber_louver"],
      surfaceAreaSqft: 650,
      partType: "aperture"
    },
    {
      id: "terrace_utilities",
      name: "CENTRALIZED URBAN ECO-GRID",
      category: "UTILITIES",
      description: "Communal solar array + greywater reed-bed filtration recycling 100% of water.",
      defaultMaterial: "microgrid_communal",
      allowedMaterials: ["microgrid_communal"],
      surfaceAreaSqft: 600,
      partType: "utility"
    }
  ]
};

// SPECIALTY APERTURE / GLAZING MATERIALS (Windows & Portals)
export const APERTURE_MATERIALS = [
  {
    id: "triple_glazed_glass",
    name: "TRIPLE-PANE PASSIVE SOLAR GLAZING",
    shortName: "Triple-Pane Glazing",
    category: "HIGH-EFFICIENCY GLASS",
    tagline: "Argon gas-filled triple pane glass with low-E coating for massive daylight and zero heat loss.",
    description: "Converts solid earth walls into expansive panoramic portals. Features warm-edge spacers, non-toxic wood/aluminum frame, and superior sound dampening.",
    unitCost: "$28.00 / sq ft",
    costPerSqFt: 28.00,
    carbonImpact: +8.5,
    thermalRValue: 8.0, // High thermal efficiency
    pros: [
      "Floods interior with 100% natural mood-elevating daylight",
      "R-8 insulation value prevents winter drafts and heat loss",
      "Superior acoustic insulation isolates external noise",
      "Expands visual space making compact earth homes feel massive"
    ],
    cons: [
      "Higher upfront cost than solid earthen blocks ($28/sqft vs $4.20/sqft)",
      "Requires careful alignment and flashing during installation",
      "Needs occasional window cleaning"
    ],
    supplier: {
      name: "Alpen High Performance Glass / Loewen Windows",
      location: "Louisville, Colorado",
      contact: "sales@alpenhpp.com | +1 (303) 833-7000",
      website: "alpenhpp.com",
      exactPrice: "$28.00 / sq ft customized to rough opening",
      leadTime: "2-3 Weeks"
    },
    colorHex: "#68A5BA",
    textureType: "glass_glaze",
    badge: "MAX DAYLIGHT PORTAL"
  },
  {
    id: "smart_solar_glass",
    name: "PHOTOVOLTAIC BIPV SMART TINT GLASS",
    shortName: "Solar Smart Glass",
    category: "SOLAR GENERATING GLASS",
    tagline: "Transparent solar window generating daily electricity while electronically tinting.",
    description: "Building-Integrated Photovoltaics (BIPV) embedded within architectural glass. Generates 50W per square meter of clean electricity while rejecting 98% of solar glare.",
    unitCost: "$44.00 / sq ft",
    costPerSqFt: 44.00,
    carbonImpact: -65.0, // Net clean power generator
    thermalRValue: 9.5,
    pros: [
      "Window actively generates clean off-grid electricity throughout daylight hours",
      "Dynamic electrochromic tinting eliminates need for curtains or blinds",
      "Rejects 99% of damaging UV rays to protect interior furniture"
    ],
    cons: [
      "Premium investment cost ($44.00/sqft)",
      "Requires low-voltage electrical wire hookup to battery bank"
    ],
    supplier: {
      name: "Ubiquitous Energy / Onyx Solar Photovoltaic Glass",
      location: "Redwood City, California",
      contact: "info@onyxsolar.com | +1 (917) 563-3993",
      website: "onyxsolar.com / ubiquitous.energy",
      exactPrice: "$44.00 / sq ft custom architectural sizing",
      leadTime: "3-4 Weeks"
    },
    colorHex: "#3A7E94",
    textureType: "solar_glass",
    badge: "CLEAN ENERGY PORTAL"
  },
  {
    id: "timber_louver",
    name: "MASS TIMBER OPERABLE BREEZE LOUVERS",
    shortName: "Timber Breeze Louvers",
    category: "NATURAL VENTILATION",
    tagline: "Adjustable cedar/bamboo louvers channeling cooling breezes while blocking direct solar heat.",
    description: "Hand-crafted operable wooden horizontal fins allowing customizable privacy, shade, and natural cross-ventilation.",
    unitCost: "$16.50 / sq ft",
    costPerSqFt: 16.50,
    carbonImpact: -28.0,
    thermalRValue: 4.2,
    pros: [
      "Channels natural mountain & desert breezes into home for zero-cost cooling",
      "100% natural organic wood aesthetics matching Yeezy minimal architecture",
      "Carbon-negative natural material"
    ],
    cons: [
      "Does not seal airtight (designed for temperate or tropical microclimates)",
      "Requires occasional natural oil re-coating every 5 years"
    ],
    supplier: {
      name: "BamCore / Local Woodcraft Guilds",
      location: "North America Regional Co-ops",
      contact: "craft@bamcore.com",
      website: "bamcore.com",
      exactPrice: "$16.50 / sq ft with brass pivot hardware",
      leadTime: "1 Week"
    },
    colorHex: "#A87A46",
    textureType: "timber_louver",
    badge: "PASSIVE COOLING"
  }
];
