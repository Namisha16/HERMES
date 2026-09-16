import React, { useState } from 'react';
import { MASTER_DATASET } from '../../data/hermesData';
import { ArrowRight, Lock, Sparkles, Building2, Calendar, MapPin } from 'lucide-react';

interface LuxuryLandingProps {
  onSelectBrand: (brandName: string) => void;
}

export const LuxuryLanding: React.FC<LuxuryLandingProps> = ({ onSelectBrand }) => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const handleBrandClick = (brand: (typeof MASTER_DATASET.landing.brands)[0]) => {
    if (brand.active) {
      onSelectBrand(brand.name);
    } else {
      setNotification(`${brand.name}: Case study monograph in archival preparation. Hermès is currently open.`);
      setTimeout(() => setNotification(null), 4000);
    }
  };

  return (
    <div id="landing-container" className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Toast Notification for coming soon brands */}
      {notification && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#4A2415] text-[#F7F3ED] px-5 py-3 rounded-xl shadow-xl text-xs flex items-center gap-3 border border-[#F37021]/30 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#F37021]"></span>
          <span>{notification}</span>
        </div>
      )}

      {/* Hero Section */}
      <section id="landing-hero" className="max-w-5xl mx-auto pt-12 sm:pt-20 pb-16 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4A2415]/15 text-[11px] uppercase tracking-[0.24em] font-medium text-[#4A2415]/80 bg-[#EDE5D9]/40">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
          <span>A Research Monograph</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#4A2415] leading-[1.08]">
          {MASTER_DATASET.landing.headline}
        </h1>

        <p className="font-editorial italic text-xl sm:text-2xl lg:text-3xl text-[#F37021] font-normal">
          {MASTER_DATASET.landing.subheadline}
        </p>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#4A2415]/80 leading-relaxed font-normal">
          {MASTER_DATASET.landing.supporting_line}
        </p>

        <div className="pt-4 flex justify-center">
          <button
            id="landing-cta-explore-hermes"
            onClick={() => onSelectBrand('Hermès')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A2415] text-[#F7F3ED] rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#F37021] transition-all duration-300 shadow-md group"
          >
            <span>Enter the Hermès Monograph</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Brand Grid */}
      <section id="landing-brand-grid" className="max-w-7xl mx-auto pt-8">
        <div className="flex items-center justify-between pb-6 border-b border-[#D8CEBE]">
          <div className="text-xs uppercase tracking-[0.2em] text-[#4A2415]/70 font-semibold flex items-center gap-2">
            <Building2 className="w-4 h-4 text-[#F37021]" />
            <span>The Indexed Houses (8)</span>
          </div>
          <div className="text-xs text-[#4A2415]/60 tracking-wider">
            Hermès: Active Case Study
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {MASTER_DATASET.landing.brands.map((b) => {
            const isHermes = b.active;
            return (
              <div
                key={b.name}
                id={`brand-card-${b.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => handleBrandClick(b)}
                onMouseEnter={() => setHoveredBrand(b.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                  isHermes
                    ? 'bg-[#EDE5D9]/70 hover:bg-[#EDE5D9] border-2 border-[#F37021] shadow-lg hover:shadow-xl'
                    : 'bg-[#EDE5D9]/30 hover:bg-[#EDE5D9]/50 border border-[#D8CEBE]/80 opacity-80 hover:opacity-100'
                }`}
              >
                {/* Top Info */}
                <div>
                  <div className="flex items-center justify-between text-xs text-[#4A2415]/60 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {b.founded}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {b.origin}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold tracking-wide text-[#4A2415] mb-2 flex items-center justify-between">
                    <span>{b.name}</span>
                    {isHermes && (
                      <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse"></span>
                    )}
                  </h3>

                  <p className="text-xs text-[#4A2415]/75 line-clamp-2 leading-relaxed">
                    {b.descriptor}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 border-t border-[#4A2415]/10 flex items-center justify-between text-xs font-semibold tracking-wider uppercase">
                  {isHermes ? (
                    <span className="text-[#F37021] flex items-center gap-1.5 group-hover:underline">
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  ) : (
                    <span className="text-[#4A2415]/40 flex items-center gap-1.5">
                      <Lock className="w-3 h-3" />
                      <span>Forthcoming</span>
                    </span>
                  )}

                  {isHermes && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F37021]/15 text-[#F37021] uppercase font-bold tracking-wider">
                      Complete
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
