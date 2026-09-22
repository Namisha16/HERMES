import React, { useState } from 'react';
import { REGIONAL_SALES } from '../../data/hermesData';
import { Globe, MapPin, Store, Sparkles, Navigation, Compass, ZoomIn, ZoomOut, CheckCircle2, ChevronRight } from 'lucide-react';

interface MapPinItem {
  id: string;
  name: string;
  city: string;
  region: string;
  x: number; // percentage (0-100)
  y: number; // percentage (0-100)
  isOrigin?: boolean;
  type: 'cradle' | 'flagship' | 'conduit';
  flagship: string;
  architecturalNote: string;
  routeControl?: { cx: number; cy: number };
}

export const WorldMapSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>("Asia-Pacific (excl. Japan)");
  const [selectedPinId, setSelectedPinId] = useState<string>("shanghai");
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const regionDetails: Record<string, { share: number; flagships: string; highlightColor: string; description: string; defaultPin: string }> = {
    "Asia-Pacific (excl. Japan)": {
      share: 42,
      defaultPin: "shanghai",
      flagships: "Maison Hermès Shanghai (Huaihai Middle Rd), Singapore Liat Towers, Seoul Dosan Park, Hong Kong Landmark Prince's, Sydney Castlereagh St",
      highlightColor: "#D95F16",
      description: "The largest global territory by revenue (42%), led by Greater China, South Korea, Singapore, and Australia."
    },
    "Americas": {
      share: 19,
      defaultPin: "new-york",
      flagships: "Madison Avenue Maison (New York), Beverly Hills Rodeo Drive, Chicago Oak St, Miami Design District, Toronto Bloor St",
      highlightColor: "#8C4A2F",
      description: "Sustained momentum driven by the flagship Madison Avenue Maison and historic boutiques across North and South America."
    },
    "Europe (excl. France)": {
      share: 15,
      defaultPin: "london",
      flagships: "London (New Bond Street & Harrods), Milan (Via Montenapoleone), Munich (Maximilianstraße), Geneva (Rue du Rhône)",
      highlightColor: "#A67858",
      description: "Continental European capitals preserving deep artisanal heritage and enduring client loyalty."
    },
    "Japan": {
      share: 10,
      defaultPin: "tokyo",
      flagships: "Maison Hermès Ginza (Renzo Piano glass lantern architecture), Omotesando, Osaka Midosuji",
      highlightColor: "#E07A2B",
      description: "A uniquely discerning market anchored by the architectural glass-block lantern designed by Renzo Piano in Ginza."
    },
    "France": {
      share: 10,
      defaultPin: "paris",
      flagships: "24 Faubourg Saint-Honoré (Historic House), 17 Rue de Sèvres (Rive Gauche Lutetia pool), Pantin Leather Workshops",
      highlightColor: "#F37021",
      description: "The historical and spiritual cradle of the house, hosting the ancestral saddlery workshops and global headquarters."
    },
    "Other / Middle East": {
      share: 4,
      defaultPin: "dubai",
      flagships: "Dubai Mall Fashion Avenue, The Galleria Al Maryah Island (Abu Dhabi), Place Vendôme Qatar (Doha)",
      highlightColor: "#BF9B7A",
      description: "Flourishing client relationships across the Emirates, Qatar, Saudi Arabia, and global international travel hubs."
    }
  };

  // Comprehensive map pins anchored precisely to the illustrated cartography
  const mapPins: MapPinItem[] = [
    {
      id: "paris",
      name: "Paris (24 Faubourg Saint-Honoré)",
      city: "Paris",
      region: "France",
      x: 42.5,
      y: 52,
      isOrigin: true,
      type: "cradle",
      flagship: "24 Faubourg & Ateliers de Pantin",
      architecturalNote: "Historic cradle since 1880. Private rooftop garden, family museum, and ancestral saddle workshop.",
      routeControl: { cx: 42.5, cy: 52 }
    },
    {
      id: "london",
      name: "London (New Bond Street)",
      city: "London",
      region: "Europe (excl. France)",
      x: 37.5,
      y: 42.5,
      type: "flagship",
      flagship: "New Bond Street Maison & Harrods",
      architecturalNote: "First overseas house opened in 1952. Features commissioned British equestrian artwork and leather salon.",
      routeControl: { cx: 40, cy: 46 }
    },
    {
      id: "milan",
      name: "Milan (Via Montenapoleone)",
      city: "Milan",
      region: "Europe (excl. France)",
      x: 51,
      y: 62.5,
      type: "flagship",
      flagship: "Via Montenapoleone Maison",
      architecturalNote: "Lombard neoclassical palazzo housing the full universe of Hermès silversmithing, silk, and tailoring.",
      routeControl: { cx: 47, cy: 58 }
    },
    {
      id: "geneva",
      name: "Geneva (Rue du Rhône)",
      city: "Geneva",
      region: "Europe (excl. France)",
      x: 47,
      y: 57.5,
      type: "flagship",
      flagship: "Rue du Rhône & Horlogerie Manufacture",
      architecturalNote: "Conduit to the Hermès mechanical horology workshops in Le Noirmont and Les Ateliers d'Hermès.",
      routeControl: { cx: 45, cy: 54 }
    },
    {
      id: "munich",
      name: "Munich (Maximilianstraße)",
      city: "Munich",
      region: "Europe (excl. France)",
      x: 54,
      y: 50,
      type: "flagship",
      flagship: "Maximilianstraße Flagship",
      architecturalNote: "Grand Bavarian boulevard salon restored with curved stucco and saddlery-stitched timber displays.",
      routeControl: { cx: 48, cy: 50 }
    },
    {
      id: "madrid",
      name: "Madrid (Galería Canalejas)",
      city: "Madrid",
      region: "Europe (excl. France)",
      x: 31,
      y: 72,
      type: "flagship",
      flagship: "Galería Canalejas Maison",
      architecturalNote: "Preserving historic stained glass and Spanish wrought-iron motifs alongside saddle-stitched calfskin.",
      routeControl: { cx: 35, cy: 62 }
    },
    {
      id: "new-york",
      name: "Americas Conduit (New York)",
      city: "New York",
      region: "Americas",
      x: 12,
      y: 44,
      type: "conduit",
      flagship: "Madison Avenue Maison (706 Madison)",
      architecturalNote: "706 Madison Ave: 20,250 sq ft multi-townhouse landmark with rooftop sculpture garden and VIP salons.",
      routeControl: { cx: 26, cy: 38 }
    },
    {
      id: "shanghai",
      name: "Asia-Pacific Conduit (Shanghai)",
      city: "Shanghai",
      region: "Asia-Pacific (excl. Japan)",
      x: 88,
      y: 56,
      type: "conduit",
      flagship: "Maison Hermès Shanghai (Huaihai Rd)",
      architecturalNote: "Restored 1927 historic brick estate anchoring 42% of global house turnover across Greater China and APAC.",
      routeControl: { cx: 66, cy: 44 }
    },
    {
      id: "tokyo",
      name: "Japan Conduit (Tokyo Ginza)",
      city: "Tokyo",
      region: "Japan",
      x: 93,
      y: 38,
      type: "conduit",
      flagship: "Maison Hermès Ginza (Renzo Piano)",
      architecturalNote: "Architectural lantern of 13,000 translucent glass blocks with a cavalier roof statue, designed by Renzo Piano.",
      routeControl: { cx: 70, cy: 32 }
    },
    {
      id: "dubai",
      name: "Middle East Conduit (Dubai)",
      city: "Dubai",
      region: "Other / Middle East",
      x: 74,
      y: 76,
      type: "conduit",
      flagship: "The Dubai Mall Fashion Avenue",
      architecturalNote: "Three-level monumental boutique showcasing haute bijouterie, bespoke saddlery, and private VIP suites.",
      routeControl: { cx: 60, cy: 70 }
    }
  ];

  // Active pin details
  const activePin = mapPins.find(p => p.id === selectedPinId) || mapPins[0];
  const originPin = mapPins.find(p => p.isOrigin) || mapPins[0];

  const handleSelectPin = (pin: MapPinItem) => {
    setSelectedPinId(pin.id);
    setActiveRegion(pin.region);
  };

  const handleSelectRegion = (regionName: string) => {
    setActiveRegion(regionName);
    const detail = regionDetails[regionName];
    if (detail && detail.defaultPin) {
      setSelectedPinId(detail.defaultPin);
    }
  };

  const globalGateways = [
    { name: "Americas Route", percent: "19%", direction: "Westbound Atlantic", region: "Americas", pinId: "new-york", color: "#8C4A2F" },
    { name: "Asia-Pacific Route", percent: "42%", direction: "Eastbound Silk Maritime", region: "Asia-Pacific (excl. Japan)", pinId: "shanghai", color: "#D95F16" },
    { name: "Japan Route", percent: "10%", direction: "Pacific Ginza Conduit", region: "Japan", pinId: "tokyo", color: "#E07A2B" },
    { name: "Middle East Route", percent: "4%", direction: "Levant & Gulf Conduit", region: "Other / Middle East", pinId: "dubai", color: "#BF9B7A" }
  ];

  return (
    <div id="world-distribution-section" className="space-y-8">
      {/* SECTION HEADER */}
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 14</span>
          </span>

          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415] mb-2 sm:mb-2.5">
            From Paris to the World
          </h2>

          <p className="text-sm uppercase tracking-wider text-[#4A2415]/70 font-medium">
            Geographic Revenue Distribution • Official House Financial Disclosures
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#EDE5D9] px-4 py-2 rounded-full border border-[#D8CEBE] text-xs text-[#4A2415] font-semibold self-start sm:self-auto">
          <Store className="w-4 h-4 text-[#F37021]" />
          <span>Nearly 300 boutiques across 45 nations</span>
        </div>
      </div>

      {/* Quick Territory Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A2415]/60 mr-1 whitespace-nowrap">
          Filter Territory:
        </span>
        {REGIONAL_SALES.map((reg) => {
          const isSelected = activeRegion === reg.region;
          return (
            <button
              key={reg.region}
              type="button"
              onClick={() => handleSelectRegion(reg.region)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                isSelected
                  ? "bg-[#4A2415] text-[#FAF6EE] border-[#4A2415] shadow-sm ring-2 ring-[#F37021]/50"
                  : "bg-[#EDE5D9] text-[#4A2415]/80 hover:bg-[#E3DACB] border-[#D8CEBE]"
              }`}
            >
              <span>{reg.region.replace(" (excl. Japan)", "").replace(" (excl. France)", "")}</span>
              <span className={`ml-1.5 font-mono text-[10px] ${isSelected ? "text-[#F37021]" : "text-[#4A2415]/60"}`}>
                {reg.percentage}%
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Visual Data Visualization Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md">
        
        {/* Left Column: Illustrated Antique European Cartography Canvas */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative bg-[#FAF6EE] rounded-2xl p-4 sm:p-5 border border-[#D5C9B8] shadow-[inset_0_2px_12px_rgba(74,36,21,0.06)] flex flex-col justify-between">
            
            {/* Map Header Overlay with Editorial Cartouche */}
            <div className="flex items-center justify-between text-[11px] text-[#4A2415]/80 font-mono border-b border-[#E3DACB] pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#F37021]" />
                <span className="font-editorial text-xs sm:text-sm tracking-wider uppercase text-[#4A2415] font-semibold">
                  Carte Illustrée des Maisons d’Europe & Conduits Mondiaux
                </span>
              </div>

              {/* Detail Zoom Control */}
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="px-2.5 py-1 rounded-full bg-[#EDE5D9] hover:bg-[#E3DACB] text-[#4A2415] border border-[#D8CEBE] text-[11px] font-medium shadow-sm flex items-center gap-1 transition-colors"
                title={isZoomed ? "Reset map scale" : "Zoom into European flagships"}
              >
                {isZoomed ? (
                  <>
                    <ZoomOut className="w-3.5 h-3.5 text-[#F37021]" />
                    <span>Reset View</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3.5 h-3.5 text-[#F37021]" />
                    <span>Detail Zoom</span>
                  </>
                )}
              </button>
            </div>

            {/* Illustrated Map Canvas Container: Unified scaling ensures pins NEVER drift */}
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-[#D8CEBE] bg-[#F2ECE1] shadow-inner select-none">
              
              {/* Scalable Canvas Layer (Transforms image, SVG routes, and pins together) */}
              <div
                className={`relative w-full h-full transition-transform duration-500 ease-out origin-center ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
              >
                {/* 1. Base Illustrated Antique Cartography */}
                <img
                  src="/assets/europe_illustrated_map.jpg"
                  alt="Illustrated Map of Europe and Global Conduits - Hermès Maisons"
                  className="w-full h-full object-cover pointer-events-none"
                />

                {/* Antique Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810]/35 via-transparent to-[#2B1810]/15 pointer-events-none" />

                {/* 2. SVG Route Arcs Layer originating from Paris (42.5%, 52%) */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F37021" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#D95F16" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="0.8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Draw route lines to all hubs */}
                  {mapPins
                    .filter(pin => !pin.isOrigin)
                    .map((pin) => {
                      const isPinActive = pin.id === selectedPinId;
                      const isRegionActive = pin.region === activeRegion;
                      const cx = pin.routeControl?.cx ?? (originPin.x + pin.x) / 2;
                      const cy = pin.routeControl?.cy ?? (originPin.y + pin.y) / 2;
                      const pathData = `M ${originPin.x} ${originPin.y} Q ${cx} ${cy} ${pin.x} ${pin.y}`;

                      return (
                        <g key={`route-${pin.id}`}>
                          {/* Background faint path */}
                          <path
                            d={pathData}
                            fill="none"
                            stroke={isPinActive || isRegionActive ? "#F37021" : "#4A2415"}
                            strokeWidth={isPinActive ? "1.2" : isRegionActive ? "0.8" : "0.35"}
                            strokeOpacity={isPinActive ? 0.95 : isRegionActive ? 0.65 : 0.25}
                            strokeDasharray={isPinActive ? "2, 1" : isRegionActive ? "3, 2" : "none"}
                            filter={isPinActive ? "url(#glow)" : undefined}
                          />

                          {/* Animated flow pulse dot along active route */}
                          {isPinActive && (
                            <circle
                              r="1.2"
                              fill="#FFFFFF"
                              stroke="#F37021"
                              strokeWidth="0.5"
                            >
                              <animateMotion
                                path={pathData}
                                dur="2.5s"
                                repeatCount="indefinite"
                              />
                            </circle>
                          )}
                        </g>
                      );
                    })}
                </svg>

                {/* 3. Interactive Pins Layer */}
                <div className="absolute inset-0 z-20">
                  {mapPins.map((pin) => {
                    const isSelected = selectedPinId === pin.id;
                    const isRegionMatch = activeRegion === pin.region;

                    return (
                      <div
                        key={pin.id}
                        style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                      >
                        {/* Accessible Hit Button */}
                        <button
                          type="button"
                          onClick={() => handleSelectPin(pin)}
                          aria-label={`Select ${pin.name} in ${pin.region}`}
                          className="relative group p-3 -m-3 flex items-center justify-center focus:outline-none"
                        >
                          {/* Origin pulse halo */}
                          {pin.isOrigin && (
                            <span className="absolute w-7 h-7 rounded-full bg-[#F37021]/30 animate-ping pointer-events-none" />
                          )}

                          {/* Selected pulse halo */}
                          {isSelected && !pin.isOrigin && (
                            <span className="absolute w-6 h-6 rounded-full bg-[#F37021]/30 animate-ping pointer-events-none" />
                          )}

                          {/* Pin marker body */}
                          <div
                            className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-md ${
                              pin.isOrigin
                                ? "w-6 h-6 bg-[#F37021] text-white ring-2 ring-white scale-110"
                                : isSelected
                                ? "w-5 h-5 bg-[#4A2415] text-[#FAF6EE] ring-2 ring-[#F37021] scale-125 shadow-lg"
                                : isRegionMatch
                                ? "w-4.5 h-4.5 bg-[#F37021] text-white ring-1 ring-white/90 scale-110"
                                : "w-3.5 h-3.5 bg-white text-[#4A2415] border border-[#4A2415]/70 hover:scale-125"
                            }`}
                          >
                            <div
                              className={`rounded-full transition-all ${
                                pin.isOrigin
                                  ? "w-2 h-2 bg-white"
                                  : isSelected
                                  ? "w-2 h-2 bg-[#F37021]"
                                  : isRegionMatch
                                  ? "w-1.5 h-1.5 bg-white"
                                  : "w-1 h-1 bg-[#4A2415]"
                              }`}
                            />
                          </div>

                          {/* Interactive Callout Tooltip */}
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1.5 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider transition-all duration-200 pointer-events-none shadow-md ${
                              isSelected || pin.isOrigin
                                ? "bg-[#2B1810] text-[#FAF6EE] border border-[#F37021]/60 opacity-100 z-30"
                                : "bg-[#2B1810]/85 text-[#FAF6EE] opacity-0 group-hover:opacity-100 z-20"
                            }`}
                          >
                            <div className="flex items-center gap-1">
                              <span>{pin.city}</span>
                              {pin.isOrigin && (
                                <span className="text-[#F37021] font-bold">(Maison Mère)</span>
                              )}
                            </div>
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Bottom Inset Banner: Active Flagship & Architectural Spotlight */}
              <div className="absolute bottom-2 left-2 right-2 z-30 bg-[#FAF6EE]/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-[#D8CEBE] shadow-md flex items-center justify-between gap-3 text-[#4A2415]">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F37021]" />
                    <span className="font-editorial text-sm font-bold text-[#4A2415] truncate">
                      {activePin.flagship}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#EDE5D9] text-[#4A2415]/80">
                      {activePin.region}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#4A2415]/75 truncate mt-0.5">
                    {activePin.architecturalNote}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectRegion(activePin.region)}
                  className="shrink-0 text-[11px] font-bold text-[#F37021] hover:text-[#D95F16] flex items-center gap-0.5 uppercase tracking-wider"
                >
                  <span>Inspect</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Global Outbound Conduit Indicators */}
            <div className="pt-3 border-t border-[#D8CEBE] mt-3 space-y-2">
              <div className="text-[11px] uppercase font-bold tracking-wider text-[#4A2415]/70 flex items-center justify-between">
                <span>Conduits Mondiaux & Répartition par Territoire</span>
                <span className="text-[10px] font-mono text-[#F37021]">Hermès S.A. Financial Disclosures</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {globalGateways.map((gw) => {
                  const isSelected = activeRegion === gw.region;
                  return (
                    <button
                      key={gw.name}
                      type="button"
                      onClick={() => {
                        handleSelectRegion(gw.region);
                        setSelectedPinId(gw.pinId);
                      }}
                      className={`p-2 rounded-xl text-left transition-all border text-xs ${
                        isSelected
                          ? "bg-[#F7F3ED] border-[#F37021] shadow-sm ring-1 ring-[#F37021]/40"
                          : "bg-[#F7F3ED]/60 hover:bg-[#F7F3ED] border-[#D8CEBE]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: gw.color }} />
                          <span className="font-bold text-[#4A2415] truncate text-[11px]">
                            {gw.region.split(' ')[0]}
                          </span>
                        </div>
                        <span className="font-editorial text-xs font-bold text-[#F37021]">
                          {gw.percent}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#4A2415]/70 font-mono truncate">{gw.direction}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="text-[12px] text-[#4A2415]/70 text-center italic">
            Interactive cartography: Click any flagship pin, conduit, or regional card to trace supply routes and architectural milestones originating from 24 Faubourg.
          </div>
        </div>

        {/* Right Column: Regional Breakdown Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-[#4A2415]/70 pb-1 flex items-center justify-between">
            <span>Regional Share of Turnover</span>
            <span className="text-[10px] font-mono text-[#F37021]">FY2025 Consolidated</span>
          </div>

          {REGIONAL_SALES.map((reg) => {
            const isSelected = activeRegion === reg.region;
            const meta = regionDetails[reg.region];
            return (
              <div
                key={reg.region}
                onClick={() => handleSelectRegion(reg.region)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#F7F3ED] border-[#F37021] shadow-md ring-1 ring-[#F37021]/30'
                    : 'bg-[#F7F3ED]/60 hover:bg-[#F7F3ED] border-[#D8CEBE]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#4A2415] flex items-center gap-2">
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F37021]' : 'text-[#4A2415]/50'}`} />
                    {reg.region}
                  </span>
                  <span className="font-editorial text-xl font-bold text-[#F37021]">
                    {reg.percentage}%
                  </span>
                </div>

                <div className="w-full bg-[#D8CEBE]/40 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{
                      width: `${reg.percentage * 2}%`,
                      backgroundColor: meta?.highlightColor || '#F37021'
                    }}
                  />
                </div>

                {isSelected && meta && (
                  <div className="space-y-1.5 pt-2 border-t border-[#D8CEBE]/60 text-xs text-[#4A2415]/80">
                    <p className="italic text-[#4A2415]/90 leading-relaxed">{meta.description}</p>
                    <div className="text-[11px] pt-1">
                      <span className="font-semibold text-[#F37021] uppercase tracking-wider block mb-0.5">
                        Architectural Flagships:
                      </span>
                      <span className="text-[#4A2415]/85 leading-relaxed">{meta.flagships}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
