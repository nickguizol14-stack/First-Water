export type Project = {
  slug: string;
  name: string;
  sector: "highway" | "airport" | "municipal" | "commercial" | "industrial" | "residential";
  sectorLabel: string;
  serviceTypes: string[];
  location: string;
  client: string;
  scope: string;
  tonnage: string;
  timeline: string;
  crew: string;
  challenges: string;
  quote: { text: string; author: string; role: string };
  hero: string;
  before: string;
  after: string;
  drone: string;
  coords: [number, number];
};

// Reliable image source with stable seeded URLs. Every image guaranteed to load.
const img = (seed: string, w = 1800, h = 1200) =>
  `https://picsum.photos/seed/fw-${seed}/${w}/${h}`;

export const projects: Project[] = [
  {
    slug: "i-35-corridor-reconstruction",
    name: "I-35 Corridor Reconstruction",
    sector: "highway",
    sectorLabel: "Highway / DOT",
    serviceTypes: ["New Construction", "Mill & Overlay"],
    location: "Waco, TX",
    client: "Texas DOT",
    scope: "14 miles of mainline replacement with intelligent compaction, 3D paving, and full shoulder reconstruction.",
    tonnage: "312,000 tons",
    timeline: "11 months (2024–2025)",
    crew: "Avg. 42 / peak 68",
    challenges: "Night work with live traffic, 72-hour weather contingencies, TxDOT Tier-1 QC throughout.",
    quote: {
      text: "First Water held density and smoothness on every lot. They opened lanes ahead of milestones through the winter push.",
      author: "R. Delgado",
      role: "Resident Engineer, TxDOT",
    },
    hero: img("i35-hero", 2400, 1350),
    before: img("i35-before"),
    after: img("i35-after"),
    drone: img("i35-drone", 2400, 1350),
    coords: [31.5493, -97.1467],
  },
  {
    slug: "dfw-runway-9l-rehab",
    name: "DFW Runway 9L Rehabilitation",
    sector: "airport",
    sectorLabel: "Airport / Runway",
    serviceTypes: ["Mill & Overlay", "Grooving Coordination"],
    location: "Dallas/Fort Worth, TX",
    client: "DFW Airport Authority",
    scope: "13,400 ft runway mill and full-depth AC overlay with FAA P-401 specification on a 56-night window.",
    tonnage: "88,500 tons",
    timeline: "56 consecutive nights",
    crew: "Avg. 60 / peak 95",
    challenges: "FOD-zero protocol, 6-hour nightly windows, FAA density, profile, and smoothness acceptance.",
    quote: {
      text: "Every nightly closure opened on time. Smoothness bonuses across every lot — an extraordinary result at an airport of this size.",
      author: "M. Okafor",
      role: "Airside Operations, DFW",
    },
    hero: img("dfw-hero", 2400, 1350),
    before: img("dfw-before"),
    after: img("dfw-after"),
    drone: img("dfw-drone", 2400, 1350),
    coords: [32.8998, -97.0403],
  },
  {
    slug: "costco-regional-distribution-lot",
    name: "Costco Regional Distribution Lot",
    sector: "commercial",
    sectorLabel: "Commercial",
    serviceTypes: ["New Construction", "Striping", "ADA"],
    location: "Oklahoma City, OK",
    client: "Costco Wholesale",
    scope: "52 acres of heavy-duty paving for trailer staging, dock approaches, and employee parking with full ADA build-out.",
    tonnage: "64,200 tons",
    timeline: "5 months",
    crew: "Avg. 28 / peak 40",
    challenges: "Phased hand-off to keep distribution operating; designed mix for HS20 trailer loading year-round.",
    quote: {
      text: "They paved around live trailer traffic with zero disruption. We moved in early.",
      author: "K. Lowe",
      role: "Construction Manager, Costco",
    },
    hero: img("costco-hero", 2400, 1350),
    before: img("costco-before"),
    after: img("costco-after"),
    drone: img("costco-drone", 2400, 1350),
    coords: [35.4676, -97.5164],
  },
  {
    slug: "city-of-frisco-overlay-program",
    name: "City of Frisco Overlay Program",
    sector: "municipal",
    sectorLabel: "Municipal",
    serviceTypes: ["Mill & Overlay", "Crack Sealing", "Striping"],
    location: "Frisco, TX",
    client: "City of Frisco PW",
    scope: "42 residential streets, 11.2 lane-miles, ADA ramp upgrades, and thermoplastic striping replacement.",
    tonnage: "28,900 tons",
    timeline: "Summer 2024",
    crew: "Avg. 24",
    challenges: "Neighborhood-by-neighborhood notifications, same-day access for residents, tight cul-de-sac geometry.",
    quote: {
      text: "The public-facing communication and cleanup were flawless. We received fewer complaints than any past season.",
      author: "T. Ruiz",
      role: "PW Director, City of Frisco",
    },
    hero: img("frisco-hero", 2400, 1350),
    before: img("frisco-before"),
    after: img("frisco-after"),
    drone: img("frisco-drone", 2400, 1350),
    coords: [33.1507, -96.8236],
  },
  {
    slug: "port-houston-intermodal-yard",
    name: "Port Houston Intermodal Yard",
    sector: "industrial",
    sectorLabel: "Industrial / Port",
    serviceTypes: ["Full-Depth Reclamation", "Heavy-Duty Paving"],
    location: "Houston, TX",
    client: "Port Houston Authority",
    scope: "41 acres of reclaimed sub-base with a 6\" heavy-duty HMA surface engineered for 120,000-lb container handlers.",
    tonnage: "71,400 tons",
    timeline: "8 months",
    crew: "Avg. 32",
    challenges: "Live terminal operations required segmented 2-acre work cells with 24-hour turnover on each cell.",
    quote: {
      text: "First Water's cell-by-cell turnover plan kept us fully operational. A masterclass in heavy-civil sequencing.",
      author: "J. Albright",
      role: "Director of Operations, Port Houston",
    },
    hero: img("port-hero", 2400, 1350),
    before: img("port-before"),
    after: img("port-after"),
    drone: img("port-drone", 2400, 1350),
    coords: [29.7258, -95.2486],
  },
  {
    slug: "home-depot-southwest-lot-refresh",
    name: "Home Depot Southwest Lot Refresh",
    sector: "commercial",
    sectorLabel: "Commercial",
    serviceTypes: ["Mill & Overlay", "Seal Coating", "Striping"],
    location: "Phoenix, AZ",
    client: "The Home Depot",
    scope: "Multi-store program: 6 lots across AZ with weekend-only closures. Full re-stripe, ADA upgrade, wheel-stop replacement.",
    tonnage: "18,600 tons",
    timeline: "18 weekends",
    crew: "Avg. 18",
    challenges: "120°F summer paving window, strict store-open deadline every Monday at 6:00 AM.",
    quote: {
      text: "They made our 6 AM Monday opening every single weekend. Not once did we have to delay a store.",
      author: "A. Chen",
      role: "Regional Facilities, The Home Depot",
    },
    hero: img("homedepot-hero", 2400, 1350),
    before: img("homedepot-before"),
    after: img("homedepot-after"),
    drone: img("homedepot-drone", 2400, 1350),
    coords: [33.4484, -112.074],
  },
];

export const services = [
  {
    id: "new-construction",
    name: "New Construction Paving",
    blurb: "Greenfield highways, runways, and heavy-civil lots paved to DOT and FAA tolerances.",
    image: img("svc-newcon", 1600, 1000),
  },
  {
    id: "mill-overlay",
    name: "Mill & Overlay",
    blurb: "Precision milling paired with single-pass paving to renew pavement life with minimum downtime.",
    image: img("svc-mill", 1600, 1000),
  },
  {
    id: "fdr",
    name: "Full-Depth Reclamation",
    blurb: "Structural rehab that recycles existing pavement in place — faster, greener, cheaper.",
    image: img("svc-fdr", 1600, 1000),
  },
  {
    id: "micro-surfacing",
    name: "Micro-Surfacing",
    blurb: "Polymer-modified surface treatment that seals and re-textures pavement in a single pass.",
    image: img("svc-micro", 1600, 1000),
  },
  {
    id: "maintenance",
    name: "Seal Coat, Crack Seal & Striping",
    blurb: "Preventive maintenance programs that extend pavement life by years for pennies on the dollar.",
    image: img("svc-maint", 1600, 1000),
  },
  {
    id: "ada",
    name: "ADA Upgrades & Patching",
    blurb: "Ramp, detectable warning, and pavement patching work in full compliance with the 2010 Standards.",
    image: img("svc-ada", 1600, 1000),
  },
];

export const sectors = [
  { slug: "highways", name: "Federal & State Highways", summary: "Tier-1 prequalified for DOT mainline and corridor work across the Southwest.", image: img("sec-hwy", 2000, 1400) },
  { slug: "airports", name: "Airports & Runways", summary: "FAA P-401 compliant paving on nighttime closure windows with zero tolerance for FOD.", image: img("sec-air", 2000, 1400) },
  { slug: "ports-seaports", name: "Seaports & Intermodal", summary: "Heavy-duty surfacing engineered for container handlers, straddle carriers, and RTGs.", image: img("sec-port", 2000, 1400) },
  { slug: "municipal", name: "Municipal Streets", summary: "Overlay programs, neighborhood reconstruction, and ADA compliance for cities and counties.", image: img("sec-muni", 2000, 1400) },
  { slug: "commercial", name: "Commercial & Retail", summary: "Distribution yards, big-box lots, HOAs, and campuses — paved on your operating schedule.", image: img("sec-com", 2000, 1400) },
  { slug: "industrial", name: "Industrial Facilities", summary: "Refineries, warehouses, and manufacturing plants with heavy wheel loading demands.", image: img("sec-ind", 2000, 1400) },
];

export const equipment = [
  { name: "Vögele SUPER 2100-3i Pavers", spec: "35-ft variable-width paving · AutoSet Plus · PaveDock Assist", image: img("eq-paver", 1600, 1000) },
  { name: "Hamm HD+ Tandem Rollers", spec: "Intelligent compaction · Oscillation · HCQ-GPS mapping", image: img("eq-roller", 1600, 1000) },
  { name: "Wirtgen W 210 Fi Cold Mills", spec: "3D level control · Mill Assist · closed-loop emissions", image: img("eq-mill", 1600, 1000) },
  { name: "Roadtec SB-3000 Shuttle Buggies", spec: "Anti-segregation material transfer for smoothness pay-item work", image: img("eq-sb", 1600, 1000) },
];

export const processSteps = [
  { step: "01", title: "Site Walk & Estimate", copy: "A superintendent walks the site, pulls cores if needed, and delivers a scoped estimate within a week." },
  { step: "02", title: "Design & Mix Selection", copy: "Our QC lab designs the mix — PG grade, aggregate gradation, polymer modification — for your traffic and climate." },
  { step: "03", title: "Schedule & Traffic Plan", copy: "We build the sequencing, phasing, traffic control, and public notification plan before a blade touches ground." },
  { step: "04", title: "Prep & Demolition", copy: "Milling, base repair, utility adjustments, and sub-grade work — the quiet steps that decide pavement life." },
  { step: "05", title: "Paving & Compaction", copy: "3D-controlled paving with intelligent compaction maps. Every pass logged, every lot acceptance-tested." },
  { step: "06", title: "Striping & Hand-Off", copy: "Thermoplastic striping, ADA detectables, punch-list, and a warranty walk before we hand you the keys." },
];

export const serviceAreas = [
  { city: "Dallas–Fort Worth", state: "TX", lead: "Based from our Irving HQ — ~140 active crews." },
  { city: "Austin", state: "TX", lead: "Regional shop with asphalt plant partnerships statewide." },
  { city: "Houston", state: "TX", lead: "Dedicated port and heavy-industrial fleet." },
  { city: "San Antonio", state: "TX", lead: "Municipal and commercial programs across south-central Texas." },
  { city: "Oklahoma City", state: "OK", lead: "Serving OK, KS, and the I-35 corridor." },
  { city: "Phoenix", state: "AZ", lead: "Southwest regional office; desert-specific mix designs." },
  { city: "Albuquerque", state: "NM", lead: "DOT prequalified for NM mainline and FLH work." },
  { city: "Little Rock", state: "AR", lead: "Mill & overlay and maintenance programs across AR." },
];

export const testimonials = [
  { quote: "First Water is the rare paver who hits both the schedule and the spec. Not many can.", author: "R. Delgado", role: "Resident Engineer, TxDOT" },
  { quote: "They paved 52 acres of a live distribution yard without disrupting a single outbound load.", author: "K. Lowe", role: "Construction Manager, Costco" },
  { quote: "Smoothness bonuses across every FAA lot — that is not normal, that is craft.", author: "M. Okafor", role: "Airside Operations, DFW Airport" },
];

export const certifications = [
  "NAPA Diamond Commendation for Paving Excellence",
  "DOT Prequalified — TX, OK, NM, AZ, AR",
  "FAA P-401 Certified",
  "EMR of 0.68 (3-year average)",
  "OSHA 30-Hour on every field crew lead",
  "DBE partnerships across all active regions",
];

export const careersOpenings = [
  { title: "Paver Operator", location: "Dallas, TX", type: "Full-time" },
  { title: "Roller Operator — Intelligent Compaction", location: "Houston, TX", type: "Full-time" },
  { title: "Paving Foreman", location: "Oklahoma City, OK", type: "Full-time" },
  { title: "Project Manager — Heavy Civil", location: "Phoenix, AZ", type: "Full-time" },
  { title: "CDL Driver — Belly Dump", location: "Austin, TX", type: "Full-time" },
  { title: "QC Lab Technician", location: "Irving, TX", type: "Full-time" },
];

export const resources = [
  { slug: "how-long-does-asphalt-last", title: "How Long Does Asphalt Actually Last?", excerpt: "A truthful look at pavement lifespan — what we see on real DOT lots vs. what you read in a spec sheet.", date: "2026-03-18", readMin: 6, image: img("res-life", 1600, 1000) },
  { slug: "seal-coat-vs-repave", title: "Seal Coat vs. Repave: A Decision Framework", excerpt: "Four signals that tell you whether a seal coat buys you another 5 years — or is money thrown at a dead surface.", date: "2026-02-04", readMin: 5, image: img("res-seal", 1600, 1000) },
  { slug: "maintenance-playbook", title: "The Commercial Property Maintenance Playbook", excerpt: "A year-by-year calendar for keeping a 10-acre commercial lot out of the full-reconstruction category.", date: "2026-01-12", readMin: 8, image: img("res-maint", 1600, 1000) },
];

// Editorial/gallery image set used across the site
export const gallery = {
  heroMain: img("hero-main", 2800, 1500),
  craft: img("craft-roller", 2000, 1200),
  rail1: img("rail1", 1400, 1800),
  rail2: img("rail2", 1800, 1200),
  rail3: img("rail3", 1800, 1200),
  crew: img("crew", 1600, 2000),
  community: img("community", 1800, 1300),
};
