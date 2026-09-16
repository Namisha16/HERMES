import React, { useState } from 'react';
import { REGIONAL_SALES } from '../../data/hermesData';
import { Globe, MapPin, Store, Sparkles, Navigation } from 'lucide-react';

export const WorldMapSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>(REGIONAL_SALES[0].region);

  const regionDetails: Record<string, { share: number; flagships: string; highlightClass: string }> = {
    "Asia-Pacific (excl. Japan)": {
      share: 48,
      flagships: "Maison Hermès Shanghai (Huaihai Middle Rd), Singapore Liat Towers, Seoul Dosan Park, Hong Kong Landmark Prince's, Sydney Castlereagh St",
      highlightClass: "fill-[#D95F16] stroke-[#B84E10]"
    },
    "Americas": {
      share: 19,
      flagships: "Madison Avenue Maison (New York), Beverly Hills Rodeo Drive, Chicago Oak St, Miami Design District, Toronto Bloor St",
      highlightClass: "fill-[#8C4A2F] stroke-[#6B331D]"
    },
    "Europe (excl. France)": {
      share: 13,
      flagships: "London (New Bond Street & Harrods), Milan (Via Montenapoleone), Munich (Maximilianstraße), Geneva (Rue du Rhône)",
      highlightClass: "fill-[#A67858] stroke-[#875D3F]"
    },
    "Japan": {
      share: 9,
      flagships: "Maison Hermès Ginza (Renzo Piano glass lantern architecture), Omotesando, Osaka Midosuji",
      highlightClass: "fill-[#E07A2B] stroke-[#BA5B15]"
    },
    "France": {
      share: 9,
      flagships: "24 Faubourg Saint-Honoré (Historic House), 17 Rue de Sèvres (Rive Gauche Lutetia pool), Pantin Leather Workshops",
      highlightClass: "fill-[#F37021] stroke-[#C65510]"
    },
    "Other / Middle East": {
      share: 2,
      flagships: "Dubai Mall Fashion Avenue, The Galleria Al Maryah Island (Abu Dhabi), Place Vendôme Qatar (Doha)",
      highlightClass: "fill-[#BF9B7A] stroke-[#967657]"
    }
  };

  // Capital landmark pins on the map
  const flagPins = [
    { name: "Paris (24 Faubourg)", x: 49.2, y: 32.8, region: "France", origin: true },
    { name: "New York (706 Madison)", x: 28.5, y: 35.5, region: "Americas" },
    { name: "Tokyo (Ginza Maison)", x: 84.8, y: 39.5, region: "Japan" },
    { name: "Shanghai (Huaihai Rd)", x: 79.5, y: 44.0, region: "Asia-Pacific (excl. Japan)" },
    { name: "London (New Bond St)", x: 47.8, y: 30.5, region: "Europe (excl. France)" },
    { name: "Dubai (The Dubai Mall)", x: 62.5, y: 47.5, region: "Other / Middle East" },
    { name: "Singapore (Liat Towers)", x: 76.5, y: 61.5, region: "Asia-Pacific (excl. Japan)" },
    { name: "Sydney (Castlereagh)", x: 88.0, y: 81.0, region: "Asia-Pacific (excl. Japan)" },
  ];

  return (
    <div id="world-distribution-section" className="space-y-8">
      {/* SECTION HEADER WITH RIGOROUS BREATHING ROOM */}
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          {/* Section label with comfortable gap */}
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 14</span>
          </span>

          {/* Main heading with moderate gap */}
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415] mb-2 sm:mb-2.5">
            From Paris to the World
          </h2>

          {/* Subheading with comfortable gap to body */}
          <p className="text-sm uppercase tracking-wider text-[#4A2415]/70 font-medium">
            Geographic Revenue Distribution • Official House Financial Disclosures
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#EDE5D9] px-4 py-2 rounded-full border border-[#D8CEBE] text-xs text-[#4A2415] font-semibold self-start sm:self-auto">
          <Store className="w-4 h-4 text-[#F37021]" />
          <span>Nearly 300 boutiques across 45 nations</span>
        </div>
      </div>

      {/* Main Visual Data Visualization Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md">
        
        {/* Left Column: Geographic Map Canvas */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] bg-[#F7F3ED] rounded-2xl p-3 sm:p-5 overflow-hidden border border-[#D8CEBE] shadow-inner flex flex-col justify-between select-none">
            
            {/* Map Header Overlay */}
            <div className="flex items-center justify-between text-[11px] text-[#4A2415]/70 font-mono z-10">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#F37021]" />
                <span>EQUIRECTANGULAR CARTOGRAPHIC PROJECTION</span>
              </span>
              <span className="hidden sm:inline-block">24 FAUBOURG ORIGIN COORDINATE 48.8698° N, 2.3204° E</span>
            </div>

            {/* Authentic Detailed Vector World Map */}
            <div className="relative w-full h-[85%] my-auto flex items-center justify-center">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full"
                aria-label="Geographic revenue distribution map"
              >
                <defs>
                  {/* Fine latitude / longitude graticule pattern */}
                  <pattern id="graticule" width="100" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 50" fill="none" stroke="#E3DACB" strokeWidth="0.5" strokeDasharray="2 3" />
                  </pattern>
                  
                  {/* Radial Pulse for Faubourg Origin */}
                  <radialGradient id="parisGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F37021" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F37021" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ocean Background with subtle graticule */}
                <rect width="1000" height="500" fill="#F4EFE8" />
                <rect width="1000" height="500" fill="url(#graticule)" />

                {/* Equator and Prime Meridian Lines */}
                <line x1="0" y1="250" x2="1000" y2="250" stroke="#D5CBB9" strokeWidth="0.8" strokeDasharray="4 4" />
                <line x1="492" y1="0" x2="492" y2="500" stroke="#D5CBB9" strokeWidth="0.8" strokeDasharray="4 4" />

                {/* ================= GEOGRAPHIC CONTINENTS WITH REGIONAL COLORING ================= */}
                
                {/* 1. AMERICAS (19%) */}
                <g
                  id="region-americas"
                  onClick={() => setActiveRegion("Americas")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "Americas" ? "opacity-100 filter drop-shadow-md" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* North America: Alaska, Canada, USA, Mexico */}
                  <path
                    d="M 140,55 L 175,45 L 215,50 L 260,65 L 290,95 L 305,120 L 285,150 L 295,190 L 265,220 L 235,260 L 205,275 L 180,245 L 160,210 L 140,165 L 115,130 L 110,95 Z
                       M 190,30 L 225,25 L 245,45 L 210,50 Z
                       M 270,30 L 310,25 L 330,60 L 295,75 Z"
                    fill={activeRegion === "Americas" ? "#8C4A2F" : "#A66D52"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Americas" ? "1.5" : "0.75"}
                  />
                  {/* Central America & Caribbean */}
                  <path
                    d="M 205,275 L 230,290 L 240,315 L 225,310 L 205,285 Z
                       M 250,270 A 5 5 0 1 0 250,272
                       M 270,265 A 6 6 0 1 0 270,267"
                    fill={activeRegion === "Americas" ? "#8C4A2F" : "#A66D52"}
                    stroke="#4A2415"
                    strokeWidth="0.75"
                  />
                  {/* South America: Brazil, Argentina, Andes, Colombia */}
                  <path
                    d="M 235,315 L 280,310 L 320,335 L 345,370 L 325,415 L 290,455 L 265,475 L 255,450 L 250,380 L 230,345 Z"
                    fill={activeRegion === "Americas" ? "#8C4A2F" : "#A66D52"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Americas" ? "1.5" : "0.75"}
                  />
                  {/* Americas label tag */}
                  <text x="210" y="170" fill="#F7F3ED" fontSize="13" fontWeight="bold" letterSpacing="1">AMERICAS</text>
                  <text x="210" y="186" fill="#F7F3ED" fontSize="11" opacity="0.9">19%</text>
                </g>

                {/* 2. EUROPE EXCL. FRANCE (13%) */}
                <g
                  id="region-europe"
                  onClick={() => setActiveRegion("Europe (excl. France)")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "Europe (excl. France)" ? "opacity-100 filter drop-shadow-md" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* British Isles & Scandinavia & Central/Eastern/Southern Europe */}
                  <path
                    d="M 465,120 L 485,100 L 500,125 L 485,150 L 465,140 Z
                       M 515,60 L 540,55 L 560,95 L 535,130 L 515,110 Z
                       M 505,140 L 565,125 L 610,135 L 600,185 L 555,190 L 525,185 L 505,170 Z
                       M 515,185 L 530,225 L 545,225 L 530,195 Z
                       M 440,195 L 475,190 L 460,230 L 435,220 Z"
                    fill={activeRegion === "Europe (excl. France)" ? "#A67858" : "#B88E70"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Europe (excl. France)" ? "1.5" : "0.75"}
                  />
                  <text x="530" y="145" fill="#F7F3ED" fontSize="11" fontWeight="bold">EUROPE</text>
                  <text x="530" y="158" fill="#F7F3ED" fontSize="9.5" opacity="0.9">13%</text>
                </g>

                {/* 3. FRANCE (9% - CRADLE & EPICENTER) */}
                <g
                  id="region-france"
                  onClick={() => setActiveRegion("France")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "France" ? "opacity-100 filter drop-shadow-md" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* France Hexagone */}
                  <path
                    d="M 475,160 L 505,155 L 512,180 L 490,195 L 470,185 Z"
                    fill="#F37021"
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "France" ? "2" : "1.2"}
                  />
                  {/* Faubourg Saint-Honoré Origin Marker Rings */}
                  <circle cx="492" cy="164" r="14" fill="url(#parisGlow)" className="animate-pulse" />
                  <circle cx="492" cy="164" r="3.5" fill="#FFFFFF" stroke="#4A2415" strokeWidth="1" />
                  <text x="445" y="172" fill="#F37021" fontSize="11" fontWeight="900" textAnchor="end">FRANCE 9%</text>
                </g>

                {/* 4. AFRICA & OTHER / MIDDLE EAST (2%) */}
                <g
                  id="region-middle-east"
                  onClick={() => setActiveRegion("Other / Middle East")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "Other / Middle East" ? "opacity-100 filter drop-shadow-md" : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Africa continent body */}
                  <path
                    d="M 465,225 L 530,220 L 565,250 L 595,290 L 575,370 L 545,430 L 505,435 L 475,360 L 450,285 L 450,240 Z
                       M 590,360 L 610,380 L 595,415 L 580,390 Z"
                    fill="#D1BFA8"
                    stroke="#4A2415"
                    strokeWidth="0.75"
                  />
                  {/* Middle East & Arabian Peninsula */}
                  <path
                    d="M 570,225 L 620,215 L 640,245 L 615,280 L 580,265 Z"
                    fill={activeRegion === "Other / Middle East" ? "#BF9B7A" : "#C5B29B"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Other / Middle East" ? "1.5" : "0.75"}
                  />
                  <text x="600" y="250" fill="#4A2415" fontSize="10" fontWeight="bold">MIDDLE EAST</text>
                  <text x="600" y="262" fill="#4A2415" fontSize="9">2%</text>
                </g>

                {/* 5. ASIA-PACIFIC EXCL. JAPAN (48% - THE LARGEST SHARE) */}
                <g
                  id="region-asia-pacific"
                  onClick={() => setActiveRegion("Asia-Pacific (excl. Japan)")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "Asia-Pacific (excl. Japan)" ? "opacity-100 filter drop-shadow-md" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Greater Asia (China, India, Central Asia, Southeast Asia) */}
                  <path
                    d="M 610,135 L 750,110 L 820,135 L 815,195 L 760,260 L 730,290 L 690,260 L 665,200 L 620,185 Z
                       M 665,200 L 710,215 L 715,260 L 685,260 Z
                       M 740,270 L 780,285 L 750,330 L 725,305 Z"
                    fill={activeRegion === "Asia-Pacific (excl. Japan)" ? "#D95F16" : "#DE7432"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Asia-Pacific (excl. Japan)" ? "2" : "1"}
                  />
                  {/* Australia & New Zealand archipelago */}
                  <path
                    d="M 795,360 L 870,350 L 895,405 L 850,445 L 805,420 L 790,385 Z
                       M 910,430 L 925,450 L 905,470 Z"
                    fill={activeRegion === "Asia-Pacific (excl. Japan)" ? "#D95F16" : "#DE7432"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Asia-Pacific (excl. Japan)" ? "2" : "1"}
                  />
                  <text x="730" y="175" fill="#F7F3ED" fontSize="14" fontWeight="bold" letterSpacing="1">ASIA-PACIFIC</text>
                  <text x="730" y="195" fill="#F7F3ED" fontSize="12" fontWeight="bold">48% of House Turnover</text>
                </g>

                {/* 6. JAPAN ARCHIPELAGO (9%) */}
                <g
                  id="region-japan"
                  onClick={() => setActiveRegion("Japan")}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeRegion === "Japan" ? "opacity-100 filter drop-shadow-md" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Distinctive Curved Japanese Island Archipelago: Hokkaido, Honshu, Kyushu, Shikoku */}
                  <path
                    d="M 855,140 L 870,145 L 865,160 L 850,155 Z
                       M 838,162 Q 860,185 848,205 L 838,208 Q 848,185 832,170 Z
                       M 830,210 L 838,210 L 833,222 L 825,218 Z
                       M 822,220 L 830,222 L 825,232 L 817,228 Z"
                    fill={activeRegion === "Japan" ? "#E07A2B" : "#E8904D"}
                    stroke="#4A2415"
                    strokeWidth={activeRegion === "Japan" ? "2" : "1"}
                  />
                  <circle cx="848" cy="195" r="8" fill="none" stroke="#E07A2B" strokeWidth="1.5" className="animate-ping" />
                  <text x="865" y="185" fill="#4A2415" fontSize="11" fontWeight="bold">JAPAN 9%</text>
                </g>

                {/* Landmark Temple Pins */}
                {flagPins.map((pin) => {
                  const isOrigin = pin.origin;
                  const isSelected = activeRegion === pin.region;
                  return (
                    <g
                      key={pin.name}
                      transform={`translate(${pin.x * 10}, ${pin.y * 5})`}
                      className="cursor-pointer"
                      onClick={() => setActiveRegion(pin.region)}
                    >
                      <circle
                        cx="0"
                        cy="0"
                        r={isOrigin ? "5" : isSelected ? "4.5" : "3"}
                        fill={isOrigin ? "#F37021" : isSelected ? "#4A2415" : "#FFFFFF"}
                        stroke="#4A2415"
                        strokeWidth="1.5"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Editorial Cartographic Legend */}
            <div className="pt-2 border-t border-[#D8CEBE] flex flex-wrap items-center justify-between gap-3 text-[11px] text-[#4A2415]/75 font-medium">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-[#4A2415]">Relative Scale:</span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-[#D95F16]" />
                  <span>48% Asia-Pacific</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-[#8C4A2F]" />
                  <span>19% Americas</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-[#A67858]" />
                  <span>13% Europe</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-[#F37021]" />
                  <span>9% France</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-sm bg-[#E07A2B]" />
                  <span>9% Japan</span>
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#4A2415]/60">Select region to view flagship network</span>
            </div>
          </div>

          <div className="text-[12px] text-[#4A2415]/70 text-center italic">
            Interactive visual map: Select any geographic quadrant or the breakdown cards on the right to inspect regional store architecture.
          </div>
        </div>

        {/* Right Column: Regional Breakdown Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-[#4A2415]/70 pb-1 flex items-center justify-between">
            <span>Regional Share of Turnover</span>
            <span className="text-[10px] font-mono text-[#F37021]">Hermès Financial Review</span>
          </div>

          {REGIONAL_SALES.map((reg) => {
            const isSelected = activeRegion === reg.region;
            const meta = regionDetails[reg.region];
            return (
              <div
                key={reg.region}
                onClick={() => setActiveRegion(reg.region)}
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

                {/* Visual Proportion Bar */}
                <div className="w-full h-1.5 bg-[#D8CEBE] rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSelected ? 'bg-[#F37021]' : 'bg-[#4A2415]/60'
                    }`}
                    style={{ width: `${reg.percentage}%` }}
                  />
                </div>

                {/* Flagship Temples Detail on Selection */}
                {isSelected && meta && (
                  <div className="pt-2 border-t border-[#D8CEBE]/60 text-[11px] text-[#4A2415]/80 space-y-1">
                    <div className="font-semibold text-[#4A2415] flex items-center gap-1">
                      <Navigation className="w-3 h-3 text-[#F37021]" />
                      <span>Key Architectural Maisons:</span>
                    </div>
                    <p className="italic leading-relaxed">
                      {meta.flagships}
                    </p>
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
