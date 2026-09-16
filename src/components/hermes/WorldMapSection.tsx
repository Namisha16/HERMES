import React, { useState } from 'react';
import { REGIONAL_SALES } from '../../data/hermesData';
import { Globe, MapPin, Store, Sparkles } from 'lucide-react';

export const WorldMapSection: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>(REGIONAL_SALES[0].region);

  const regionCoordinates: Record<string, { x: number; y: number; detail: string }> = {
    "Asia-Pacific (excl. Japan)": { x: 74, y: 52, detail: "China, Singapore, South Korea, Australia, Hong Kong SAR" },
    "Americas": { x: 26, y: 44, detail: "United States (Madison Ave flagship), Canada, Latin America" },
    "Europe (excl. France)": { x: 52, y: 34, detail: "London (Bond St), Milan (Via Montenapoleone), Germany, Switzerland" },
    "Japan": { x: 84, y: 42, detail: "Ginza Maison Hermès (Renzo Piano glass lantern architecture)" },
    "France": { x: 48, y: 38, detail: "24 Faubourg Saint-Honoré, Rue de Sèvres, Pantin Ateliers" },
    "Other / Middle East": { x: 60, y: 48, detail: "Dubai Mall, Abu Dhabi, Doha, Kuwait" }
  };

  return (
    <div id="world-distribution-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 14</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            From Paris to the World
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Geographic Revenue Distribution • Verified Hermès 2025 Reporting
          </p>
        </div>
        <div className="flex items-center gap-2 bg-[#EDE5D9] px-4 py-2 rounded-full border border-[#D8CEBE] text-xs text-[#4A2415] font-semibold">
          <Store className="w-4 h-4 text-[#F37021]" />
          <span>Almost 300 stores in 45 countries</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md">
        {/* Left: Stylized Interactive Vector Map Graphic */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[16/10] bg-[#F7F3ED] rounded-2xl p-4 overflow-hidden border border-[#D8CEBE] shadow-inner flex items-center justify-center">
            {/* World Map SVG Silhouette */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full text-[#4A2415]/20 fill-current select-none"
              aria-hidden="true"
            >
              {/* Generalized elegant continent contours */}
              <path d="M150,120 Q220,100 280,140 Q320,200 260,260 Q180,240 140,180 Z" />
              <path d="M260,290 Q340,300 320,420 Q260,460 220,380 Z" />
              <path d="M460,110 Q540,90 580,150 Q540,220 470,200 Z" />
              <path d="M470,220 Q560,240 540,380 Q480,410 440,310 Z" />
              <path d="M580,100 Q820,70 860,240 Q760,340 620,260 Z" />
              <path d="M780,340 Q880,320 860,440 Q760,450 750,380 Z" />
            </svg>

            {/* Interactive Pulse Points */}
            {REGIONAL_SALES.map((reg) => {
              const coords = regionCoordinates[reg.region] || { x: 50, y: 50, detail: '' };
              const isSelected = activeRegion === reg.region;
              return (
                <button
                  key={reg.region}
                  onClick={() => setActiveRegion(reg.region)}
                  style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
                  aria-label={`Select region ${reg.region}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-transform ${
                    isSelected ? 'scale-125 z-20' : 'scale-100 z-10 hover:scale-110'
                  }`}
                >
                  <span className={`flex h-6 w-6 relative items-center justify-center`}>
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                        isSelected ? 'bg-[#F37021]' : 'bg-[#4A2415]/40'
                      }`}
                    />
                    <span
                      className={`relative inline-flex rounded-full h-4 w-4 items-center justify-center text-[9px] font-bold text-white shadow-md ${
                        isSelected ? 'bg-[#F37021]' : 'bg-[#4A2415]'
                      }`}
                    >
                      {reg.percentage}%
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-[#4A2415]/60 text-center italic">
            Tap the coordinate pins on the map or the list on the right to inspect regional presence.
          </div>
        </div>

        {/* Right: Regional Breakdown Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-[#4A2415]/70 pb-2">
            Regional Share of Turnover
          </div>

          {REGIONAL_SALES.map((reg) => {
            const isSelected = activeRegion === reg.region;
            const detail = regionCoordinates[reg.region]?.detail;
            return (
              <div
                key={reg.region}
                onClick={() => setActiveRegion(reg.region)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  isSelected
                    ? 'bg-[#F7F3ED] border-[#F37021] shadow-md'
                    : 'bg-[#F7F3ED]/60 hover:bg-[#F7F3ED] border-[#D8CEBE]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#4A2415] flex items-center gap-1.5">
                    <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-[#F37021]' : 'text-[#4A2415]/50'}`} />
                    {reg.region}
                  </span>
                  <span className="font-editorial text-lg font-bold text-[#F37021]">
                    {reg.percentage}%
                  </span>
                </div>

                {/* Proportion bar */}
                <div className="w-full h-1.5 bg-[#D8CEBE] rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSelected ? 'bg-[#F37021]' : 'bg-[#4A2415]/60'
                    }`}
                    style={{ width: `${reg.percentage}%` }}
                  />
                </div>

                {isSelected && detail && (
                  <p className="text-[11px] text-[#4A2415]/80 italic pt-1 border-t border-[#D8CEBE]/60 animate-fade-in">
                    {detail}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
