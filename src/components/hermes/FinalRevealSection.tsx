import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface FinalRevealSectionProps {
  onExploreAnotherHouse: () => void;
}

export const FinalRevealSection: React.FC<FinalRevealSectionProps> = ({ onExploreAnotherHouse }) => {
  const words = [
    { word: "TIME", meaning: "Patience over speed. Up to two years to train an artisan, decades to perfect a formula." },
    { word: "CRAFT", meaning: "The human hand as the supreme instrument of quality and accountability." },
    { word: "CONTROL", meaning: "Generational family governance free from quarterly public hedge fund whims." },
    { word: "HERITAGE", meaning: "An unbroken harness-making DNA from 1837 alive in every contemporary stitch." },
    { word: "SCARCITY", meaning: "Artisanal production ceilings that will never accelerate to satisfy mass fever." },
    { word: "CULTURE", meaning: "Artistic patrons, Leïla Menchari windows, and literature instead of logo ambassadorships." },
    { word: "CONSISTENCY", meaning: "Zero discounts, zero burning of unsold bags, and steadfast pricing integrity." },
    { word: "DESIRE", meaning: "The emergent property: an irresistible hunger born when rarity meets uncompromising mastery." }
  ];

  const [revealedCount, setRevealedCount] = useState<number>(3);

  return (
    <div id="final-reveal-section" className="space-y-16 py-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Section 19 • Synthesis</span>
        </span>
        <h2 className="font-editorial text-4xl sm:text-6xl text-[#4A2415] font-light leading-tight">
          What Makes Hermès Desirable?
        </h2>
        <p className="text-sm text-[#4A2415]/75 leading-relaxed">
          The cumulative formula revealed word by word. Each pillar holds up the edifice of modern luxury.
        </p>
      </div>

      {/* Word-by-Word Interactive Reveal Board */}
      <div className="bg-[#EDE5D9] rounded-3xl p-6 sm:p-12 border border-[#D8CEBE] shadow-xl max-w-5xl mx-auto space-y-8">
        <div className="flex items-center justify-between border-b border-[#4A2415]/15 pb-4">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#4A2415]/70">
            The Analytical Sequence ({revealedCount} of {words.length} Unlocked)
          </span>
          <button
            onClick={() => setRevealedCount(words.length)}
            className="text-xs text-[#F37021] font-semibold uppercase tracking-wider hover:underline"
          >
            Reveal All Pillars
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {words.map((item, idx) => {
            const isRevealed = idx < revealedCount;
            const isDesire = item.word === "DESIRE";
            return (
              <div
                key={item.word}
                onClick={() => {
                  if (!isRevealed) setRevealedCount(idx + 1);
                }}
                className={`p-6 rounded-2xl transition-all duration-500 border flex flex-col justify-between min-h-[180px] ${
                  !isRevealed
                    ? 'bg-[#EDE5D9]/40 border-dashed border-[#D8CEBE] cursor-pointer opacity-50 hover:opacity-80'
                    : isDesire
                    ? 'bg-[#F37021] text-white border-[#F37021] shadow-lg scale-105'
                    : 'bg-[#F7F3ED] text-[#4A2415] border-[#D8CEBE] shadow-sm'
                }`}
              >
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest block mb-1 ${
                    isDesire ? 'text-white/80' : 'text-[#F37021]'
                  }`}>
                    0{idx + 1}
                  </span>
                  <div className="font-editorial text-2xl font-bold tracking-wider">
                    {isRevealed ? item.word : "•••••"}
                  </div>
                </div>

                <p className={`text-xs leading-relaxed mt-4 ${
                  !isRevealed
                    ? 'text-transparent'
                    : isDesire
                    ? 'text-white/90'
                    : 'text-[#4A2415]/75'
                }`}>
                  {isRevealed ? item.meaning : "Click to reveal pillar"}
                </p>
              </div>
            );
          })}
        </div>

        {revealedCount < words.length && (
          <div className="text-center pt-4">
            <button
              onClick={() => setRevealedCount((c) => Math.min(words.length, c + 1))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A2415] text-[#F7F3ED] rounded-full text-xs font-semibold uppercase tracking-widest hover:bg-[#F37021] transition-colors"
            >
              <span>Reveal Next Pillar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>

      {/* Quiet Ending & CTA to Explore Another House */}
      <div className="text-center max-w-xl mx-auto space-y-6 pt-12">
        <p className="font-editorial italic text-2xl sm:text-3xl text-[#4A2415] leading-relaxed">
          “But Hermès is only one model of luxury.”
        </p>

        <p className="text-xs text-[#4A2415]/70 leading-relaxed">
          The Anatomy of Luxury invites inquiry into differing philosophies: Versace's theatrical maximalism, Prada's intellectual ugly-chic, Chanel's modern emancipation, and Dior's architectural silhouette.
        </p>

        <div className="pt-2">
          <button
            id="cta-explore-another-house"
            onClick={onExploreAnotherHouse}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#4A2415] text-[#F7F3ED] rounded-full text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#F37021] transition-all shadow-md group"
          >
            <Compass className="w-4 h-4 text-[#F37021] group-hover:rotate-45 transition-transform" />
            <span>Explore Another House</span>
          </button>
        </div>
      </div>
    </div>
  );
};
