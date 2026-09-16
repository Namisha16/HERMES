import { MetierItem, ProductIconItem, RegionalDataItem, RevenueItem, TimelineEventItem } from '../types';

export const MASTER_DATASET = {
  project: {
    title: "The Anatomy of Luxury",
    research_question: "What makes luxury desirable?",
    brand: "Hermès",
    case_study: "The Architecture of Desire",
    period: "1837–Present"
  },
  landing: {
    headline: "THE ANATOMY OF LUXURY",
    subheadline: "WHAT MAKES LUXURY DESIRABLE?",
    supporting_line: "An interactive visual journey through the brands, objects, people and ideas that shape modern luxury.",
    cta: "EXPLORE THE HOUSES",
    brands: [
      {
        name: "Hermès",
        founded: 1837,
        origin: "Paris",
        descriptor: "The architecture of desire",
        active: true
      },
      {
        name: "Versace",
        founded: 1978,
        origin: "Milan",
        descriptor: "Mythology & baroque exuberance",
        active: false
      },
      {
        name: "Prada",
        founded: 1913,
        origin: "Milan",
        descriptor: "Intellectual subversion & industrial nylon",
        active: false
      },
      {
        name: "Chanel",
        founded: 1910,
        origin: "Paris",
        descriptor: "Modernist liberation & timeless codes",
        active: false
      },
      {
        name: "Dior",
        founded: 1946,
        origin: "Paris",
        descriptor: "The New Look & architectural silhouettes",
        active: false
      },
      {
        name: "Ralph Lauren",
        founded: 1967,
        origin: "New York",
        descriptor: "The cinematic American aristocracy",
        active: false
      },
      {
        name: "Bottega Veneta",
        founded: 1966,
        origin: "Vicenza",
        descriptor: "When your own initials are enough",
        active: false
      },
      {
        name: "Louis Vuitton",
        founded: 1854,
        origin: "Paris",
        descriptor: "The art of travel & canvas innovation",
        active: false
      }
    ]
  },
  hermes: {
    hero: {
      headline: "HERMÈS",
      title: "THE ARCHITECTURE OF DESIRE",
      period: "1837 — PRESENT",
      cta: "ENTER THE HOUSE",
      videoUrl: "https://www.youtube.com/watch?v=gWytOYNISC8",
      videoEmbedId: "gWytOYNISC8"
    }
  }
};

export const TIMELINE_EVENTS: TimelineEventItem[] = [
  { year: 1837, text: "Thierry Hermès establishes a harness workshop in Paris.", category: "origin" },
  { year: 1880, text: "Charles-Émile Hermès moves workshops and opens a store at 24 Faubourg Saint-Honoré.", category: "expansion" },
  { year: 1922, text: "Émile Hermès obtains exclusive rights to the American close-all/zipper system.", category: "innovation" },
  { year: 1925, text: "First men's ready-to-wear garment: a golf jacket.", category: "product" },
  { year: 1927, text: "Jewellery.", category: "product" },
  { year: 1928, text: "Watches and sandals.", category: "product" },
  { year: 1937, text: "First Hermès silk scarf: Jeu des omnibus et dames blanches.", category: "product" },
  { year: 1945, text: "Alfred de Dreux’s Duc attelé, groom à l’attente becomes the Hermès emblem.", category: "identity" },
  { year: 1949, text: "First Hermès tie.", category: "product" },
  { year: 1951, text: "Robert Dumas takes over leadership.", category: "leadership" },
  { year: 1956, text: "The Kelly name becomes associated with Grace Kelly after she was photographed carrying the bag.", category: "icon" },
  { year: 1967, text: "First women’s ready-to-wear collection.", category: "fashion" },
  { year: 1973, text: "Le Monde d’Hermès begins.", category: "culture" },
  { year: 1978, text: "Jean-Louis Dumas begins transforming the house and expanding métiers.", category: "leadership" },
  { year: 1984, text: "The Birkin is created after a chance encounter between Jean-Louis Dumas and Jane Birkin.", category: "icon" },
  { year: 1987, text: "150th anniversary celebration and annual theme tradition.", category: "culture" },
  { year: 1992, text: "Pantin leather workshops.", category: "craft" },
  { year: 2000, text: "Maison Hermès New York; international expansion continues.", category: "global" },
  { year: 2005, text: "Pierre-Alexis Dumas appointed artistic director.", category: "creative" },
  { year: 2008, text: "Fondation d’entreprise Hermès.", category: "culture" },
  { year: 2010, text: "petit h: creation in reverse using unused Hermès manufacturing materials.", category: "innovation" },
  { year: 2013, text: "Axel Dumas becomes Executive Chairman.", category: "leadership" },
  { year: 2018, text: "Hermès enters the CAC 40.", category: "business" },
  { year: 2020, text: "Beauty becomes the 16th métier; Rouge Hermès.", category: "product" },
  { year: 2021, text: "École Hermès des Savoir-Faire apprenticeship school and 19th leather workshop.", category: "craft" },
  { year: 2025, text: "24th leather goods workshop in France at L’Isle-d’Espagnac; eventually 260 artisans.", category: "craft" }
];

export const SIXTEEN_METIERS: MetierItem[] = [
  {
    id: "leather",
    name: "Leather Goods & Saddlery",
    frenchName: "Maroquinerie & Sellerie",
    process: "Hand saddle-stitching (cousu sellier) with beeswaxed linen thread, edge finishing, pearling nails.",
    description: "The founding craft of the house since 1837, maintaining single-artisan bag construction.",
    image: "/assets/hermes_birkin_classic.jpg",
    established: "1837"
  },
  {
    id: "silk",
    name: "Silk & Textiles",
    frenchName: "Soie & Textiles",
    process: "Screen frame printing by layer in Lyon ateliers, hand-rolled hem (roulotté) rolled inwards.",
    description: "Iconic Carré scarves and twill creations printed one screen per colour.",
    image: "/assets/silk_scarf_twill.jpg",
    established: "1937"
  },
  {
    id: "rtw-men",
    name: "Men's Ready-to-Wear",
    frenchName: "Prêt-à-porter Masculin",
    process: "Architectural tailoring, fluid technical fabrics, subtle equestrian lining details.",
    description: "Originated in 1925 with a bespoke zippered golf jacket made for the Prince of Wales.",
    image: "/assets/hermes_runway_038.jpg",
    established: "1925"
  },
  {
    id: "rtw-women",
    name: "Women's Ready-to-Wear",
    frenchName: "Prêt-à-porter Féminin",
    process: "Understated silhouettes, sensual leather drape, artisanal knitwear and silk integrations.",
    description: "Debuted in 1967, offering refined daywear and outerwear imbued with equestrian restraint.",
    image: "/assets/hermes_runway_detail_1.jpg",
    established: "1967"
  },
  {
    id: "shoes",
    name: "Shoes",
    frenchName: "Chaussures",
    process: "Last sculpting, Goodyear welt stitching, signature 'H' cut-outs in calfskin.",
    description: "From equestrian riding boots to the universally recognized Oran sandal designed in 1997.",
    image: "/assets/hermes_runway_118.jpg",
    established: "1928"
  },
  {
    id: "belts",
    name: "Belts",
    frenchName: "Ceintures",
    process: "Double-faced leather skiving, reversible construction, hand-polished palladium buckles.",
    description: "Functional saddlery hardware translated into the iconic Collier de Chien and Constance belts.",
    image: "/assets/hermes_runway_067.jpg",
    established: "1930s"
  },
  {
    id: "gloves",
    name: "Gloves",
    frenchName: "Ganterie",
    process: "Table-cut lambskin, hand-sewn fourchettes, cashmere and silk lining.",
    description: "Custom hand-molded glove making continuing ancestral French leather-dressing techniques.",
    image: "/assets/leather_harness.jpg",
    established: "1920s"
  },
  {
    id: "hats",
    name: "Hats",
    frenchName: "Chapeaux",
    process: "Felt blocking on linden wood molds, grosgrain ribbon trim, seasonal silk bandings.",
    description: "Equestrian caps, panamas, and cloches designed in historical millinery partnerships.",
    image: "/assets/hermes_runway_133.jpg",
    established: "1930s"
  },
  {
    id: "jewellery",
    name: "Jewellery",
    frenchName: "Bijouterie & Joaillerie",
    process: "Micro-pave gem setting, anchor-link casting, lost-wax goldsmithing in Paris ateliers.",
    description: "Directly inspired by maritime anchor chains and equestrian harness bits.",
    image: "/assets/hermes_vogue_inline1.jpg",
    established: "1927"
  },
  {
    id: "watches",
    name: "Horology / Watches",
    frenchName: "Horlogerie",
    process: "In-house mechanical caliber development in Le Noirmont, hand-chamfered bridges, leather straps.",
    description: "Time reimagined as playful poetry—such as the Cape Cod, Arceau, and Hermès H08.",
    image: "/assets/hermes_vogue_inline2.jpg",
    established: "1928"
  },
  {
    id: "perfumes",
    name: "Perfumes",
    frenchName: "Parfums",
    process: "In-house olfactory formulation, botanical maceration, hand-blown glassware.",
    description: "Evocative scent narratives from Eau d’Hermès (1951) and Calèche to Terre d’Hermès.",
    image: "/assets/hermes_terre_fragrance.jpg",
    established: "1951"
  },
  {
    id: "beauty",
    name: "Beauty",
    frenchName: "Beauté",
    process: "Refillable lacquered metal cases designed by Pierre Hardy, custom pigments, beeswax texture.",
    description: "The 16th métier inaugurated in 2020 with Rouge Hermès, combining sustainable metals with luxury.",
    image: "/assets/hermes_vogue_inline4.jpg",
    established: "2020"
  },
  {
    id: "art-de-vivre",
    name: "Art of Living / Home",
    frenchName: "Art de Vivre",
    process: "Solid walnut joinery, hand-woven cashmere blankets, saddlery-stitched desk objects.",
    description: "Interiors, furniture, and equestrian blankets honoring the warmth of natural materials.",
    image: "/assets/hermes_vogue_hero.jpg",
    established: "1924"
  },
  {
    id: "tableware",
    name: "Tableware",
    frenchName: "Arts de la Table",
    process: "Limoges porcelain manufacturing, 24k gold hand-filing, chromolithographic transfer firing.",
    description: "Intricately decorated porcelain dinner services featuring botanical and equestrian motifs.",
    image: "/assets/hermes_vogue_inline3.jpg",
    established: "1984"
  },
  {
    id: "equitation",
    name: "Equestrian",
    frenchName: "Équitation",
    process: "Custom saddle measurement for horse and rider, beechwood tree carving, memory foam padding.",
    description: "The living soul of the house: Steinkraus, Talaris, and Hermès Vivace competition saddles.",
    image: "/assets/saddle_craft.jpg",
    established: "1837"
  },
  {
    id: "petit-h",
    name: "petit h",
    frenchName: "petit h",
    process: "Reverse creation: artisans and artists design directly from dormant unused workshop remnants.",
    description: "Created in 2010 by Pascale Mussard to give precious unused materials a poetic second life.",
    image: "/assets/hermes_runway_156.jpg",
    established: "2010"
  }
];

export const PRODUCT_ICONS: ProductIconItem[] = [
  {
    id: "birkin",
    name: "The Birkin",
    year: 1984,
    category: "Leather Goods",
    tagline: "Born from an accidental conversation at 35,000 feet.",
    story: "In 1984, on an Air France flight between Paris and London, actress Jane Birkin dropped her straw basket contents. Executive Chairman Jean-Louis Dumas sat beside her, sketched a spacious rectangular holdall with a burnished flap and saddle stitching on an airsickness bag, and created the world's most desired handbag.",
    detail: "Hand-crafted by a single artisan from start to finish over 18 to 24 hours using twin needles and beeswaxed linen thread.",
    image: "/assets/hermes_birkin_classic.jpg"
  },
  {
    id: "kelly",
    name: "The Kelly",
    year: "1935 / 1956",
    category: "Leather Goods",
    tagline: "From Robert Dumas's Sac à dépêches to Hollywood and Monaco royalty.",
    story: "Designed in 1935 by Robert Dumas as a clean trapezoidal handbag with a rigid handle. In 1956, newlywed Princess Grace Kelly of Monaco was photographed shielding her pregnancy from paparazzi with the bag. The image went worldwide, forever baptizing the icon as The Kelly.",
    detail: "Composed of 36 distinct pieces of leather, 680 hand stitches, and signature turn-lock clasp with padlock and clochette.",
    image: "/assets/grace_kelly.jpg"
  },
  {
    id: "carre",
    name: "The Carré",
    year: 1937,
    category: "Silk",
    tagline: "90 centimeters of pure twill silk, hand-rolled inward.",
    story: "Introduced on Hermès' centenary in 1937 with the design 'Jeu des omnibus et dames blanches'. Each design requires up to 2 years of illustrative conception, up to 48 individual silkscreen color stencils, and finishes with a signature hand-rolled hem (roulotté).",
    detail: "Each 90x90cm Carré consumes approximately 300 moth cocoons worth of high-density Brazilian mulberry silk.",
    image: "/assets/silk_scarf_twill.jpg"
  },
  {
    id: "chaine-dancre",
    name: "Chaîne d’Ancre",
    year: 1938,
    category: "Jewellery",
    tagline: "The maritime anchor link transformed into sculpted silver.",
    story: "While strolling along the Normandy coastline in 1938, Robert Dumas was struck by the functional perfection of the anchor chains mooring boats. He sketched the balanced, pill-shaped interlocking links in solid silver, creating a signature jewellery archetype.",
    detail: "Each silver link is individually cast, hand-assembled, and high-polished to achieve an ergonomic, tactile drape.",
    image: "/assets/hermes_vogue_inline1.jpg"
  },
  {
    id: "constance",
    name: "The Constance",
    year: 1969,
    category: "Leather Goods",
    tagline: "Named after the artisan designer's fifth daughter on the day of her birth.",
    story: "Designed by Catherine Chaillet in 1969, the Constance was crafted for the active modern woman on the move. Featuring a clean shoulder strap and a bold architectural 'H' clasp that clicks shut with mechanical precision.",
    detail: "The distinctive metal 'H' clasp serves as both functional closure and structural sculpture, hand-fitted to millimeters.",
    image: "/assets/hermes_h_trademark.jpg"
  },
  {
    id: "hac",
    name: "Haut à Courroies",
    year: 1892,
    category: "Travel & Saddlery",
    tagline: "The matriarch of all Hermès bags, engineered to carry saddles and riding boots.",
    story: "Created by Émile-Maurice Hermès and his brother Adolphe in 1892, the HAC was specifically dimensioned for riders to transport their equestrian saddle and tall leather boots cleanly in horse carriages and early steam locomotives.",
    detail: "The structural antecedent of both the Kelly and Birkin bags, featuring high arched leather handles and double belted straps.",
    image: "/assets/saddle_craft.jpg"
  },
  {
    id: "oran",
    name: "The Oran Sandal",
    year: 1997,
    category: "Footwear",
    tagline: "Pure minimalism: a barefoot silhouette cut with a single letter 'H'.",
    story: "Conceived by shoe designer Pierre Hardy in 1997 with the idea of a woman walking bare-heeled along Mediterranean sands. The upper is composed of a clean graphic 'H' cut cleanly in box calfskin with raw edges.",
    detail: "Hand-stitched leather sole with a gentle 1.5cm heel, engineered for natural foot flexibility and understated everyday luxury.",
    image: "/assets/hermes_runway_detail_2.jpg"
  },
  {
    id: "perfume-terre",
    name: "Terre d’Hermès",
    year: 2006,
    category: "Parfums",
    tagline: "A vertical fragrance connecting man, earth, and sky.",
    story: "Master perfumer Jean-Claude Ellena composed Terre d'Hermès in 2006 based on an alchemical vision: flint, mineral stone, cedarwood, and sparkling bitter orange. The heavy glass bottle base features a subtle orange 'H' foot that casts warmth upon the surface it rests on.",
    detail: "Pure mineral-woody profile without animalic notes, celebrating raw geological resonance.",
    image: "/assets/hermes_terre_fragrance.jpg"
  }
];

export const REGIONAL_SALES: RegionalDataItem[] = [
  { region: "Asia-Pacific (excl. Japan)", percentage: 42 },
  { region: "Americas", percentage: 19 },
  { region: "Europe (excl. France)", percentage: 15 },
  { region: "Japan", percentage: 10 },
  { region: "France", percentage: 10 },
  { region: "Other / Middle East", percentage: 4 }
];

export const REVENUE_SECTORS: RevenueItem[] = [
  { sector: "Leather Goods & Saddlery", revenueMillions: 7070, percentage: 44 },
  { sector: "Ready-to-Wear & Accessories", revenueMillions: 4525, percentage: 28 },
  { sector: "Other Hermès sectors (Home, Jewellery)", revenueMillions: 2055, percentage: 13 },
  { sector: "Silk & Textiles", revenueMillions: 964, percentage: 6 },
  { sector: "Watches", revenueMillions: 549, percentage: 4 },
  { sector: "Perfume & Beauty", revenueMillions: 489, percentage: 3 },
  { sector: "Other products", revenueMillions: 349, percentage: 2 }
];

export const LEILA_MENCHARI_WINDOWS = [
  {
    title: "The Silk Dunes",
    theme: "Sensory Mirage (1988)",
    story: "Real desert sand imported from Tunisia bathed in amber lighting, with ivory silk saddles emerging as archaeological relics.",
    color: "#D4A373"
  },
  {
    title: "Underwater Coral Palace",
    theme: "Marine Elegance (1993)",
    story: "Hand-carved limestone corals and iridescent mother-of-pearl, featuring Kelly bags nestled amongst translucent glass sea anemones.",
    color: "#2A9D8F"
  },
  {
    title: "The Alchemist's Library",
    theme: "Mystical Paris (2001)",
    story: "Hundreds of antique calfskin volumes suspended in mid-air, with gold leaf and astronomical globes resting against Bolduc-tied parcels.",
    color: "#4A2415"
  },
  {
    title: "The Verdant Jungle",
    theme: "Botanical Extravaganza (2012)",
    story: "Living tropical moss, carved ebony branches, and vibrant toucan feather sculptures framing handcrafted exotic leather pieces.",
    color: "#386641"
  }
];

export const LE_MONDE_SPREADS = [
  {
    id: 1,
    issue: "N° 82 — L'Étonnement",
    theme: "Astonishment",
    quote: "To craft is to pay respectful attention to the unexpected miracles of the hand.",
    image: "/assets/hermes_vogue_hero.jpg"
  },
  {
    id: 2,
    issue: "N° 85 — La Créativité en Mouvement",
    theme: "Play & Inversion",
    quote: "A house that does not smile is a museum. Hermès is an atelier of living joy.",
    image: "/assets/hermes_vogue_inline1.jpg"
  },
  {
    id: 3,
    issue: "N° 88 — La Légèreté",
    theme: "Lightness of Being",
    quote: "True luxury is weightless: precise cuts, unlined skins, and thoughts that soar.",
    image: "/assets/hermes_runway_088.jpg"
  }
];

export const HERMES_SYSTEM_NODES = [
  { id: "artisan", label: "Artisan", role: "One person, one object from start to finish" },
  { id: "material", label: "Material", role: "Uncompromising selection of the top 10% of raw hides" },
  { id: "craft", label: "Craft", role: "Ancestral saddle-stitch (cousu sellier) impossible by machine" },
  { id: "product", label: "Product", role: "Timeless functional forms designed to be repaired indefinitely" },
  { id: "store", label: "Store", role: "Decentralized inventory curated independently by local store directors" },
  { id: "consumer", label: "Client", role: "Emotional investment, patience, and appreciation of longevity" },
  { id: "culture", label: "Culture & Status", role: "Conspicuous discretion; no external logo needed" },
  { id: "desirability", label: "Desirability", role: "Sustained through genuine physical scarcity and waiting" },
  { id: "demand", label: "Demand", role: "Organic global demand exceeding fixed artisanal output" },
  { id: "house", label: "The House", role: "Family-governed independence with generation-long horizons" }
];
