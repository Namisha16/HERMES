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
    <div id="landing-archive-container" className="min-h-screen bg-[#0E1013] text-[#ECEEF0] font-sans pt-24 pb-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden selection:bg-[#5B7898] selection:text-white">
      {/* Archival Grid Substrate Lines */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#ECEEF0 1px, transparent 1px), linear-gradient(90deg, #ECEEF0 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
        aria-hidden="true"
      />

      {/* Floating Curatorial Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#161A20] text-[#ECEEF0] px-5 py-3.5 rounded-lg shadow-2xl text-xs flex items-center gap-3 border border-[#5B7898]/40 animate-fade-in max-w-md">
          <span className="w-2 h-2 rounded-full bg-[#5B7898] animate-pulse"></span>
          <span className="font-mono text-[11px] leading-relaxed">{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* TOP CURATORIAL MASTHEAD / ARCHIVE HEADER */}
        <header className="border-b border-[#22262C] pb-8 pt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-[#7B95B3] uppercase">
              <span className="inline-block w-2 h-2 rounded-full bg-[#5B7898]"></span>
              <span>FOLIO REPOSITORY • LUX-ARCHIVE N° 01</span>
              <span className="text-[#3E4550]">/</span>
              <span>EST. 2026</span>
            </div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-medium text-[#8E95A0]">
              Monograph Series on Modern Luxury Architecture
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8E95A0]">
            <span className="px-2.5 py-1 rounded bg-[#161A20] border border-[#262C34]">
              CASE STUDIES: 08
            </span>
            <span className="px-2.5 py-1 rounded bg-[#161A20] border border-[#262C34] text-[#C7BCAD]">
              ACTIVE DOSSIER: [01 / HERMÈS]
            </span>
          </div>
        </header>

        {/* HERO SECTION — ASYMMETRICAL EDITORIAL ARCHIVE */}
        <section id="archive-hero" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1A1E24] border border-[#2B323C] text-[11px] font-mono text-[#A3AFBF] uppercase tracking-wider">
                <Database className="w-3.5 h-3.5 text-[#7B95B3]" />
                <span>Primary Research Inquiry</span>
              </div>

              {/* Distinctive Architectural Display Heading (Space Grotesk) */}
              <h1 className="font-archive-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F2F4F7] leading-[1.02]">
                THE ARCHIVE OF OBJECT DESIRE
              </h1>

              <p className="text-xl sm:text-2xl text-[#C7BCAD] font-light leading-snug">
                An Empirical Research Monograph on the Structural Economics, Semiotics, and Craft Invariants of Supreme Luxury.
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#8E95A0] leading-relaxed max-w-2xl font-normal">
              Why do certain physical objects appreciate in desirability across centuries while consumer technology decays into obsolescence? This archive deconstructs the structural mechanisms of elite European houses through financial reports, primary heritage literature, and artisan ethnography.
            </p>

            {/* Core Research Hypotheses Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2 max-w-xl">
              {researchIndices.map((idx) => (
                <div key={idx.code} className="p-3 rounded-lg bg-[#14171D] border border-[#222730] space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#7B95B3]">
                    <span>{idx.code}</span>
                    <span>THESIS</span>
                  </div>
                  <div className="text-xs font-semibold text-[#ECEEF0]">{idx.label}</div>
                  <div className="text-[11px] text-[#8E95A0] leading-tight line-clamp-2">{idx.desc}</div>
                </div>
              ))}
            </div>

            {/* Primary Action Button to Enter Hermès Dossier */}
            <div className="pt-4 flex items-center gap-4">
              <button
                id="archive-cta-enter-hermes"
                onClick={() => onSelectBrand('Hermès')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C7BCAD] text-[#0E1013] rounded-lg text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#DCD4C7] transition-all duration-300 shadow-xl group border border-[#DCD4C7]"
              >
                <span>Access Dossier 01: Hermès (1837–Present)</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Archival Dossier Fragment */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl bg-[#13161C] border border-[#2A303A] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
              
              {/* Archival Classification Header */}
              <div className="flex items-center justify-between border-b border-[#222730] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C7BCAD]">
                  <FileText className="w-4 h-4 text-[#7B95B3]" />
                  <span>DOSSIER-FILE // HERMÈS-01</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1E2530] text-[#7B95B3] border border-[#303B4D]">
                  OPEN FOR REVIEW
                </span>
              </div>

              {/* Archival Photographic Fragment */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#2A303A] bg-[#0A0C0E]">
                <img
                  src="/assets/saddle_craft.jpg"
                  alt="Hermès Saddlery Archival Fragment"
                  className="w-full h-full object-cover grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-3 left-3 px-2 py-1 bg-[#0E1013]/90 backdrop-blur-sm rounded text-[9px] font-mono text-[#ECEEF0] border border-[#2A303A]">
                  FIG 1.0 // SELLERIE ORIGIN 1837
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#0E1013]/90 backdrop-blur-sm rounded text-[9px] font-mono text-[#C7BCAD] border border-[#2A303A]">
                  24, FAUBOURG SAINT-HONORÉ
                </div>
              </div>

              {/* Dossier Curatorial Abstract */}
              <div className="space-y-2 text-xs font-mono text-[#8E95A0]">
                <div className="flex justify-between border-b border-[#1E232B] pb-1.5">
                  <span className="text-[#646F7E]">REVENUE DISCLOSURE:</span>
                  <span className="text-[#ECEEF0]">€16.0 BILLION (FY2025)</span>
                </div>
                <div className="flex justify-between border-b border-[#1E232B] pb-1.5">
                  <span className="text-[#646F7E]">OPERATING MARGIN:</span>
                  <span className="text-[#ECEEF0]">42.1% RECORD CAPITAL PROFIT</span>
                </div>
                <div className="flex justify-between border-b border-[#1E232B] pb-1.5">
                  <span className="text-[#646F7E]">ACTIVE MÉTIERS:</span>
                  <span className="text-[#ECEEF0]">16 ARTISANAL CREATION ATELIERS</span>
                </div>
                <div className="flex justify-between pb-1">
                  <span className="text-[#646F7E]">METHODOLOGY:</span>
                  <span className="text-[#C7BCAD]">19 HISTORICAL CHAPTERS</span>
                </div>
              </div>

              <button
                onClick={() => onSelectBrand('Hermès')}
                className="w-full py-3 bg-[#1B2028] hover:bg-[#232A35] text-[#ECEEF0] rounded-lg text-xs font-mono uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border border-[#2C3442]"
              >
                <span>Open Complete Dossier</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#7B95B3]" />
              </button>
            </div>
          </div>
        </section>

        {/* REPOSITORY INDEX — THE 8 LUXURY HOUSES */}
        <section id="archive-index" className="space-y-6 pt-12 border-t border-[#22262C]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono text-[#7B95B3] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>TAXONOMIC INDEX</span>
              </div>
              <h2 className="font-archive-display text-2xl sm:text-3xl font-bold text-[#F2F4F7]">
                Monograph Corpus: 8 Case Studies
              </h2>
            </div>
            <div className="text-xs font-mono text-[#8E95A0]">
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
                      ? 'bg-[#15181F] border-[#C7BCAD] shadow-xl hover:border-[#F2F4F7] ring-1 ring-[#C7BCAD]/20'
                      : 'bg-[#12141A] border-[#1F242C] hover:border-[#2D3542] hover:bg-[#161921] opacity-75 hover:opacity-100'
                  }`}
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#7B95B3] mb-3">
                      <span className="flex items-center gap-1">
                        <Hash className="w-3 h-3 text-[#5B7898]" />
                        <span>FOLIO 0{index + 1}</span>
                      </span>
                      <span>{b.origin} • {b.founded}</span>
                    </div>

                    {/* House Title */}
                    <h3 className="font-archive-display text-xl font-bold text-[#ECEEF0] mb-2 tracking-tight">
                      {b.name}
                    </h3>

                    {/* Core Archival Discipline */}
                    <p className="text-xs text-[#8E95A0] leading-relaxed line-clamp-2">
                      {b.descriptor}
                    </p>
                  </div>

                  {/* Status Indicator Bar */}
                  <div className="pt-4 mt-4 border-t border-[#1C2028] flex items-center justify-between">
                    {isHermes ? (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C7BCAD] font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#7B95B3]" />
                        <span>ACCESSIONED [OPEN]</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#5A6372]">
                        <Lock className="w-3.5 h-3.5" />
                        <span>IN PREPARATION</span>
                      </span>
                    )}

                    <ChevronRight className={`w-4 h-4 transition-transform ${isHermes ? 'text-[#C7BCAD]' : 'text-[#444D5C]'}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* METHODOLOGICAL NOTE FOOTER IN ARCHIVE STYLE */}
        <footer className="pt-12 pb-6 border-t border-[#1E232B] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6A7584]">
          <div>
            RESEARCH ARCHIVE // HARVARD BUSINESS SCHOOL & ÉCOLE DU LOUVRE COMPARATIVE MONOGRAPH
          </div>
          <div className="flex items-center gap-6">
            <span>METHODOLOGY: EMPIRICAL & SEMIOTIC</span>
            <span>DATA CURRENT: FY2025</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
