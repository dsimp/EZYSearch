// SOURCING ENGINE & EQUIPMENT DIRECTORY
// Real supplier pathways, open-source tool blueprints, and price comparison benchmarks

export const SOURCING_CHANNELS = [
  {
    category: "FREE / LOCAL HARVESTING",
    title: "ON-SITE & REGIONAL HARVESTING",
    badge: "COST: $0 - $200",
    description: "Methods for acquiring 70-90% of raw building mass directly from local geography.",
    channels: [
      {
        item: "Subsoil & Clay for CEBs/Rammed Earth",
        howToSource: "Foundation basement excavation, construction site clean fill, local road cutting excavations, or agricultural pond dredging.",
        estimatedCost: "$0.00 (Self-dug) or $15/ton delivered from local excavation contractor",
        availability: "Everywhere worldwide"
      },
      {
        item: "Agricultural Waste (Straw, Husks, Wood Chaff)",
        howToSource: "Connect with local grain/rice/wheat farmers after harvest season. Substrate for mycelium bio-insulation and cob binders.",
        estimatedCost: "$3.00 - $5.00 per 50 lb round bale",
        availability: "Agricultural zones / Rural co-ops"
      },
      {
        item: "Recycled Plastic (HDPE Milk Jugs & Bottle Caps)",
        howToSource: "Set up community drop-off points at schools/churches. Melted into interlocking zero-cost foundation blocks.",
        estimatedCost: "$0.00 (Community collection) to $0.20/lb washed flake",
        availability: "Urban & suburban centers"
      }
    ]
  },
  {
    category: "LOW-COST EQUIPMENT & TOOLING",
    title: "OPEN-SOURCE BLOCK PRESSES & CASTING RIGS",
    badge: "ONE-TIME COMMUNITY TOOL KIT",
    description: "Inexpensive machinery that a single community can share to build dozens of homes.",
    channels: [
      {
        item: "Manual Interlocking CEB Press (Cinva-Ram / Auram Style)",
        howToSource: "Purchase from Open Source Ecology, Habitat for Humanity suppliers, or weld locally using open-source CAD plans.",
        estimatedCost: "$380 - $650 (One-time purchase, builds 50+ homes)",
        leadTime: "3-7 Days shipping or 2 days local welding"
      },
      {
        item: "Aircrete Continuous Bio-Foam Generator Rig",
        howToSource: "Domegaia Little Dragon foam unit or DIY 5-gallon pressure tank with aerator wand.",
        estimatedCost: "$120 - $280",
        leadTime: "Immediate DIY assembly"
      },
      {
        item: "Slipform Formwork & Steel Walers",
        howToSource: "Reusable 3/4\" high-density overlay (HDO) plywood sheets with quick-release wedge bolts.",
        estimatedCost: "$450 per 16 linear feet of reusable forms",
        leadTime: "Local lumber yard"
      }
    ]
  },
  {
    category: "COMMERCIAL BIO & MINERAL SUPPLIERS",
    title: "PROCESSED HEMPCRETE, LIME & MASS TIMBER",
    badge: "DIRECT SUPPLY CHAIN",
    description: "Direct wholesale bulk contacts for specialized binders and bio-composites.",
    channels: [
      {
        item: "Industrial Hemp Shiv / Hurd (Fibers cleaned & shredded)",
        howToSource: "HempWood (KY), Sunstrand, US Hemp Brokerage, Hempitecture.",
        estimatedCost: "$0.38 - $0.55 / lb in 1-ton super-sacks",
        leadTime: "5-10 Days freight"
      },
      {
        item: "Naturally Hydraulic Lime (NHL 3.5 / NHL 5.0) & Pozzolans",
        howToSource: "Saint-Astier, Limestrong, Graymont, Boral Fly Ash / Slag recycling.",
        estimatedCost: "$14.00 - $18.00 per 50 lb sack wholesale",
        leadTime: "Regional masonry distributors"
      },
      {
        item: "Engineered Bamboo Culms & Strands",
        howToSource: "Guadua bamboo co-ops, BamCore structural framing panels.",
        estimatedCost: "$3.50 / linear ft",
        leadTime: "Regional timber hubs"
      }
    ]
  }
];

export const COST_BENCHMARKS = [
  {
    metric: "Foundation (per sq ft)",
    conventional: "$18.50 (Standard poured concrete)",
    ezyInfra: "$3.80 (Rubble trench + Geopolymer plinth)",
    savings: "79% SAVED"
  },
  {
    metric: "Exterior Wall Envelope (per sq ft)",
    conventional: "$42.00 (Wood studs + OSB + Fiberglass + Drywall + Siding)",
    ezyInfra: "$4.20 (Interlocking CEB Earth or Rammed Earth)",
    savings: "90% SAVED"
  },
  {
    metric: "Insulation & Acoustic (per sq ft)",
    conventional: "$9.50 (Toxic closed-cell spray foam)",
    ezyInfra: "$2.90 (Grown Mycelium or Hemp-Lime)",
    savings: "69% SAVED"
  },
  {
    metric: "Total Turnkey Cost (1,200 sqft Residence)",
    conventional: "$280,000 - $420,000",
    ezyInfra: "$14,500 - $28,000",
    savings: "93% SAVED"
  },
  {
    metric: "Net Embodied Carbon",
    conventional: "+65,000 kg CO2 (Heavy polluter)",
    ezyInfra: "-14,200 kg CO2 (Net Carbon Sink)",
    savings: "122% REDUCTION"
  }
];
