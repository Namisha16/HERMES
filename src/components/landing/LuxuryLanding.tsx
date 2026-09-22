import React, { useState } from 'react';
import { MASTER_DATASET } from '../../data/hermesData';
import { ArrowRight, Lock, Database, FileText, Globe2, Compass, Layers, CheckCircle2, ChevronRight, Hash } from 'lucide-react';

interface LuxuryLandingProps {
  onSelectBrand: (brandName: string) => void;
}

export const LuxuryLanding: React.FC<LuxuryLandingProps> = ({ onSelectBrand }) => {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleBrandClick = (brand: (typeof MASTER_DATASET.landing.brands)[0]) => {
    if (brand.active) {
      onSelectBrand(brand.name);
    } else {
      setToastMessage(`Folio [${brand.name.toUpperCase()}]: Monograph undergoing archival indexing. Only Dossier 01 (Hermès) is currently accessible.`);
      setTimeout(() => setToastMessage(null), 4500);
    }
  };

  const researchIndices = [
    { code: "IND-01", label: "Economic Inversion", desc: "How scarcity drives demand beyond classical price-elasticity limits." },
    { code: "IND-02", label: "Savoir-Faire Sovereignty", desc: "Single-artisan responsibility vs. serialized assembly line fragmentation." },
    { code: "IND-03", label: "Anti-Marketing Architecture", desc: "The deliberate rejection of celebrity gifting, paid influencers, and discounts." },
    { code: "IND-04", label: "Generational Longevity", desc: "Preserving independent family ownership across two centuries." }
  ];

  return (
    <div id="landing-archive-container" className="min-h-screen bg-[#FAF7F2] text-[#1E1915] font-sans pt-24 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden selection:bg-[#F37021] selection:text-white">
      {/* Archival Grid Substrate Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25]"
        style={{
          backgroundImage: 'linear-gradient(#DDD5C7 1px, transparent 1px), linear-gradient(90deg, #DDD5C7 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Floating Curatorial Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#F4EFE6] text-[#1E1915] px-5 py-3.5 rounded-lg shadow-2xl text-xs flex items-center gap-3 border border-[#DDD4C7] animate-fade-in max-w-md">
          <span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse"></span>
          <span className="text-[11px] font-medium leading-relaxed text-[#4A3F35]">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* TOP CURATORIAL MASTHEAD / ARCHIVE HEADER */}
        <header className="border-b border-[#E5DCD0] pb-8 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-[11px] font-semibold tracking-widest text-[#7D6F64] uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F37021]"></span>
              <span>FOLIO REPOSITORY • LUX-ARCHIVE N° 01</span>
              <span className="text-[#C7BBAE]">/</span>
              <span className="font-medium text-[#8C7E74]">EST. 2026</span>
            </div>
            <h2 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B5E54]">
              Monograph Series on Modern Luxury Architecture
            </h2>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold text-[#6B5E54]">
            <span className="px-3 py-1.5 rounded-md bg-[#F0EAE1] border border-[#DDD4C7] tracking-wider">
              CASE STUDIES: 08
            </span>
            <span className="px-3 py-1.5 rounded-md bg-[#EDE5D9] border border-[#DDD4C7] text-[#1E1915] font-semibold flex items-center gap-1.5 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
              <span>ACTIVE DOSSIER: [01 / HERMÈS]</span>
            </span>
          </div>
        </header>

        {/* HERO SECTION — ASYMMETRICAL EDITORIAL ARCHIVE */}
        <section id="archive-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#F0EAE1] border border-[#DDD4C7] text-[11px] font-semibold text-[#5C5046] uppercase tracking-wider">
                <Database className="w-3.5 h-3.5 text-[#8C532B]" />
                <span>Primary Research Inquiry</span>
              </div>

              {/* Display Heading styled with Playfair Display per user request */}
              <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1E1915] leading-[1.08]">
                THE ARCHIVE OF OBJECT DESIRE
              </h1>

              <p className="text-xl sm:text-2xl text-[#8C532B] font-editorial italic leading-snug">
                An Empirical Research Monograph on the Structural Economics, Semiotics, and Craft Invariants of Supreme Luxury.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#5C5046] leading-relaxed max-w-2xl font-light">
              Why do certain physical objects appreciate in desirability across centuries while consumer technology decays into obsolescence? This archive deconstructs the structural mechanisms of elite European houses through financial reports, primary heritage literature, and artisan ethnography.
            </p>

            {/* Core Research Hypotheses Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-xl">
              {researchIndices.map((idx) => (
                <div key={idx.code} className="p-3.5 rounded-lg bg-[#F4EFE6] border border-[#DDD4C7] shadow-sm space-y-1 hover:border-[#C4B6A3] transition-colors">
                  <div className="flex items-center justify-between text-[10px] text-[#8C532B] font-bold tracking-wider">
                    <span>{idx.code}</span>
                    <span className="text-[#A38A75] font-semibold">THESIS</span>
                  </div>
                  <div className="text-xs font-semibold text-[#1E1915]">{idx.label}</div>
                  <div className="text-[11px] text-[#6B5E54] leading-relaxed line-clamp-2 font-light">{idx.desc}</div>
                </div>
              ))}
            </div>

            {/* Primary Action Button to Enter Hermès Dossier */}
            <div className="pt-4 flex items-center gap-4">
              <button
                id="archive-cta-enter-hermes"
                onClick={() => onSelectBrand('Hermès')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1E1915] text-[#FAF7F2] rounded-lg text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#3D342E] transition-all duration-300 shadow-xl group border border-[#1E1915]"
              >
                <span>Access Dossier 01: Hermès (1837–Present)</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform text-[#F37021]" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Archival Dossier Fragment */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-[#F2ECE1] border border-[#DDD4C7] p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              
              {/* Archival Classification Header */}
              <div className="flex items-center justify-between border-b border-[#DDD4C7] pb-4">
                <div className="flex items-center gap-2 text-xs text-[#5C5046] font-semibold tracking-wider">
                  <FileText className="w-4 h-4 text-[#8C532B]" />
                  <span>DOSSIER-FILE // HERMÈS-01</span>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] bg-[#E8DFD3] text-[#5C5046] border border-[#D5C9B8] font-bold tracking-wider uppercase">
                  OPEN FOR REVIEW
                </span>
              </div>

              {/* Archival Photographic Fragment */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D5C9B8] bg-[#E5DCD0]">
                <img
                  src="/assets/saddle_craft.jpg"
                  alt="Hermès Saddlery Archival Fragment"
                  className="w-full h-full object-cover contrast-110 hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#FAF7F2]/90 backdrop-blur-sm rounded text-[9px] font-semibold tracking-wider text-[#1E1915] border border-[#DDD4C7]">
                  FIG 1.0 // SELLERIE ORIGIN 1837
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#FAF7F2]/90 backdrop-blur-sm rounded text-[9px] text-[#8C532B] font-bold tracking-wider border border-[#DDD4C7]">
                  24, FAUBOURG SAINT-HONORÉ
                </div>
              </div>

              {/* Dossier Curatorial Abstract */}
              <div className="space-y-2 text-xs text-[#5C5046]">
                <div className="flex justify-between border-b border-[#E0D7C9] pb-1.5">
                  <span className="text-[#7D6F64] font-medium tracking-wide">REVENUE DISCLOSURE:</span>
                  <span className="text-[#1E1915] font-semibold">€16.0 BILLION (FY2025)</span>
                </div>
                <div className="flex justify-between border-b border-[#E0D7C9] pb-1.5">
                  <span className="text-[#7D6F64] font-medium tracking-wide">OPERATING MARGIN:</span>
                  <span className="text-[#1E1915] font-semibold">42.1% RECORD CAPITAL PROFIT</span>
                </div>
                <div className="flex justify-between border-b border-[#E0D7C9] pb-1.5">
                  <span className="text-[#7D6F64] font-medium tracking-wide">ACTIVE MÉTIERS:</span>
                  <span className="text-[#1E1915] font-semibold">16 ARTISANAL CREATION ATELIERS</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-[#7D6F64] font-medium tracking-wide">METHODOLOGY:</span>
                  <span className="text-[#8C532B] font-bold">19 HISTORICAL CHAPTERS</span>
                </div>
              </div>

              <button
                onClick={() => onSelectBrand('Hermès')}
                className="w-full py-3 bg-[#E5DCD0] hover:bg-[#DDD2C3] text-[#1E1915] rounded-lg text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-[#D5C9B8] font-bold"
              >
                <span>Open Complete Dossier</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#F37021]" />
              </button>
            </div>
          </div>
        </section>

        {/* REPOSITORY INDEX — THE 8 LUXURY HOUSES */}
        <section id="archive-index" className="space-y-6 pt-12 border-t border-[#E5DCD0]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] text-[#8C532B] uppercase tracking-widest mb-1.5 flex items-center gap-1.5 font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>TAXONOMIC INDEX</span>
              </div>
              <h2 className="font-archive-display text-2xl sm:text-3xl font-bold text-[#1E1915]">
                Monograph Corpus: 8 Case Studies
              </h2>
            </div>
            <div className="text-xs text-[#7D6F64] font-medium">
              Select a house to inspect research status
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MASTER_DATASET.landing.brands.map((b, index) => {
              const isHermes = b.active;
              return (
                <div
                  key={b.name}
                  id={`archive-card-${b.name.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => handleBrandClick(b)}
                  onMouseEnter={() => setHoveredBrand(b.name)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className={`rounded-xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[220px] relative border ${
                    isHermes
                      ? 'bg-white border-2 border-[#F37021] shadow-lg hover:shadow-xl ring-2 ring-[#F37021]/15'
                      : 'bg-[#F3ECE1] border border-[#DDD4C7] hover:border-[#C7B9A5] hover:bg-[#EFE7DC]'
                  }`}
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-[10px] text-[#7D6F64] mb-3 font-semibold tracking-wider">
                      <span className="flex items-center gap-1">
                        <Hash className="w-3 h-3 text-[#A38A75]" />
                        <span>FOLIO 0{index + 1}</span>
                      </span>
                      <span className="font-medium">{b.origin} • {b.founded}</span>
                    </div>

                    {/* House Title */}
                    <h3 className="font-archive-display text-xl font-bold text-[#1E1915] mb-2 tracking-tight">
                      {b.name}
                    </h3>

                    {/* Core Archival Discipline */}
                    <p className="text-xs text-[#5C5046] leading-relaxed line-clamp-2 font-light">
                      {b.descriptor}
                    </p>
                  </div>

                  {/* Status Indicator Bar */}
                  <div className="pt-4 mt-4 border-t border-[#E5DCD0] flex items-center justify-between">
                    {isHermes ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#F37021] font-bold tracking-wider">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F37021]" />
                        <span>ACCESSIONED [OPEN]</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-[#8C7E74] font-medium tracking-wider">
                        <Lock className="w-3.5 h-3.5" />
                        <span>IN PREPARATION</span>
                      </span>
                    )}

                    <ChevronRight className={`w-4 h-4 transition-transform ${isHermes ? 'text-[#F37021]' : 'text-[#A38A75]'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* METHODOLOGICAL NOTE FOOTER IN ARCHIVE STYLE */}
        <footer className="pt-12 pb-6 border-t border-[#E5DCD0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7D6F64] font-medium">
          <div className="tracking-wide">
            RESEARCH ARCHIVE // HARVARD BUSINESS SCHOOL & ÉCOLE DU LOUVRE COMPARATIVE MONOGRAPH
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-wider">
            <span>METHODOLOGY: EMPIRICAL & SEMIOTIC</span>
            <span>DATA CURRENT: FY2025</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
