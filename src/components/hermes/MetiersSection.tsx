import React, { useState } from 'react';
import { SIXTEEN_METIERS } from '../../data/hermesData';
import { MetierItem } from '../../types';
import { Hammer, Sparkles, Layers, Info } from 'lucide-react';

export const MetiersSection: React.FC = () => {
  const [selectedMetier, setSelectedMetier] = useState<MetierItem | null>(null);

  const stats = [
    { label: "MÉTIERS", value: "16", note: "Autonomous artisanal houses" },
    { label: "PRODUCTION & TRAINING SITES", value: "63", note: "Regional France ateliers" },
    { label: "GLOBAL WORKFORCE", value: "26,494", note: "2025 verified Hermès reporting" },
    { label: "GENERATIONS", value: "6", note: "Unbroken family lineage" }
  ];

  return (
    <div className="space-y-16">
      {/* Section 07: Infrastructure Headline & Big Numbers */}
      <div id="craft-infrastructure-banner" className="space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center justify-center gap-2 mb-3.5 sm:mb-4">
            <Hammer className="w-3.5 h-3.5" />
            <span>Artisanal Infrastructure</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415] font-light leading-tight">
            “CRAFTSMANSHIP IS NOT DECORATION. IT IS INFRASTRUCTURE.”
          </h2>
          <p className="text-sm text-[#4A2415]/75 leading-relaxed max-w-xl mx-auto font-light">
            At Hermès, industrial efficiency is intentionally subordinated to hand construction. Every leather artisan is trained for up to two years before touching their first commercial hide.
          </p>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((st) => (
            <div
              key={st.label}
              className="bg-[#EDE5D9] rounded-2xl p-6 sm:p-8 border border-[#D8CEBE] text-center space-y-2"
            >
              <div className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#4A2415] font-normal tracking-tight">
                {st.value}
              </div>
              <div className="text-[11px] sm:text-xs uppercase font-bold tracking-[0.2em] text-[#F37021]">
                {st.label}
              </div>
              <div className="text-[11px] text-[#4A2415]/70 font-light">
                {st.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 08: The 16 Métiers Interactive Grid */}
      <div id="metiers-interactive-grid" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#D8CEBE] pb-4 gap-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold block mb-3.5 sm:mb-4">
              The 16 Métiers
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#4A2415]">
              Ateliers of Creation
            </h3>
          </div>
          <div className="text-xs text-[#4A2415]/70 italic font-light">
            Select any métier to view its artisanal process & history
          </div>
        </div>

        {/* Grid of 16 métiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SIXTEEN_METIERS.map((m) => {
            const isSelected = selectedMetier?.id === m.id;
            return (
              <div
                key={m.id}
                id={`metier-card-${m.id}`}
                onClick={() => setSelectedMetier(isSelected ? null : m)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 flex flex-col justify-end min-h-[280px] sm:min-h-[320px] ${
                  isSelected
                    ? 'border-[#F37021] ring-2 ring-[#F37021]/30 shadow-xl'
                    : 'border-[#D8CEBE] hover:border-[#4A2415]/40 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Background Image with overlay */}
                <img
                  src={m.image}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#221008] via-[#221008]/40 to-transparent" />

                {/* Content at bottom */}
                <div className="relative z-10 p-5 text-[#F7F3ED] space-y-2">
                  <div className="flex items-center justify-between text-[10px] tracking-widest uppercase opacity-80 font-medium">
                    <span>Est. {m.established}</span>
                    <span className="text-[#F37021] font-bold">Métier</span>
                  </div>

                  <h4 className="font-editorial text-xl font-bold tracking-wide">
                    {m.name}
                  </h4>

                  <p className="text-xs text-[#EDE5D9]/80 italic font-light">
                    {m.frenchName}
                  </p>

                  <div className="pt-2 text-xs text-[#F7F3ED]/90 line-clamp-2 leading-relaxed border-t border-white/10 font-light">
                    {m.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal / Drawer when a métier is selected */}
        {selectedMetier && (
          <div
            id="metier-detail-drawer"
            className="bg-[#EDE5D9] rounded-2xl p-6 sm:p-8 border-2 border-[#F37021] shadow-xl animate-fade-in"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#4A2415]/15 pb-4 gap-2">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F37021] block mb-2 sm:mb-3">
                  Métier Spotlight: <span className="italic font-semibold">{selectedMetier.frenchName}</span>
                </span>
                <h4 className="font-editorial text-2xl sm:text-3xl text-[#4A2415]">
                  {selectedMetier.name} <span className="text-lg font-normal text-[#4A2415]/70 font-sans">(Established {selectedMetier.established})</span>
                </h4>
              </div>
              <button
                onClick={() => setSelectedMetier(null)}
                className="text-xs uppercase tracking-wider py-1.5 px-4 rounded-full border border-[#4A2415]/20 hover:bg-[#4A2415] hover:text-white transition-colors font-medium"
              >
                Close Drawer
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
              <div className="md:col-span-4 aspect-[4/3] rounded-xl overflow-hidden shadow border border-[#D8CEBE]">
                <img
                  src={selectedMetier.image}
                  alt={selectedMetier.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-8 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#4A2415] block mb-1">
                    Artisanal Process & Hand Techniques:
                  </span>
                  <p className="text-sm text-[#4A2415] font-normal leading-relaxed bg-[#F7F3ED] p-4 rounded-xl border border-[#D8CEBE]">
                    {selectedMetier.process}
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#4A2415] block mb-1">
                    Philosophy:
                  </span>
                  <p className="text-sm text-[#4A2415]/85 leading-relaxed font-light italic">
                    “{selectedMetier.description}”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
