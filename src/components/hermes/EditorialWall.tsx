import React, { useState } from 'react';
import { LE_MONDE_SPREADS } from '../../data/hermesData';
import { BookOpen, Sparkles, X, Quote } from 'lucide-react';

export const EditorialWall: React.FC = () => {
  const [enlargedSpread, setEnlargedSpread] = useState<(typeof LE_MONDE_SPREADS)[0] | null>(null);

  return (
    <div id="editorial-wall-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 13</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            Le Monde d’Hermès
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Biannual Literary Journal of the House • Established 1973
          </p>
        </div>
        <p className="text-xs text-[#4A2415]/70 max-w-sm italic">
          Published biannually in multiple languages with no advertising and no commercial catalog listings. A pure celebration of art, imagination, and craft.
        </p>
      </div>

      {/* Editorial Wall Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {LE_MONDE_SPREADS.map((spread) => (
          <div
            key={spread.id}
            onClick={() => setEnlargedSpread(spread)}
            className="group relative bg-[#EDE5D9] rounded-2xl overflow-hidden border border-[#D8CEBE] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white">
              <img
                src={spread.image}
                alt={spread.theme}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#F37021] font-semibold uppercase tracking-wider">
                <span>{spread.issue}</span>
                <BookOpen className="w-3.5 h-3.5" />
              </div>

              <h4 className="font-editorial text-2xl text-[#4A2415]">
                {spread.theme}
              </h4>

              <blockquote className="text-xs text-[#4A2415]/80 italic leading-relaxed pl-3 border-l-2 border-[#F37021]">
                “{spread.quote}”
              </blockquote>

              <div className="pt-2 text-[11px] uppercase tracking-wider text-[#4A2415]/60 flex items-center gap-1 group-hover:text-[#F37021] transition-colors">
                <span>Click to expand folio</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enlarged Folio Modal */}
      {enlargedSpread && (
        <div
          className="fixed inset-0 z-50 bg-[#2B1810]/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fade-in"
          onClick={() => setEnlargedSpread(null)}
        >
          <div
            className="bg-[#F7F3ED] rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl border border-[#D8CEBE] relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setEnlargedSpread(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#EDE5D9] text-[#4A2415] hover:bg-[#F37021] hover:text-white transition-colors"
              aria-label="Close enlarged spread"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEBE]">
                <img
                  src={enlargedSpread.image}
                  alt={enlargedSpread.theme}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-bold">
                  {enlargedSpread.issue}
                </span>
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#4A2415]">
                  {enlargedSpread.theme}
                </h3>
                <p className="font-editorial text-lg text-[#4A2415] italic leading-relaxed">
                  “{enlargedSpread.quote}”
                </p>
                <p className="text-xs text-[#4A2415]/75 leading-relaxed pt-4 border-t border-[#D8CEBE]">
                  Printed in France on sustainably sourced archival art paper. Distributed directly through Hermès salons globally to patrons, writers, and cultural institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
