import React, { useState } from 'react';
import { Package, Sparkles } from 'lucide-react';

export const OrangeTransition: React.FC = () => {
  const [transitionLevel, setTransitionLevel] = useState(75);

  // Interpolate between monochrome paper beige and Hermès orange #F37021
  const orangeR = 243;
  const orangeG = 112;
  const orangeB = 33;

  const beigeR = 216;
  const beigeG = 206;
  const beigeB = 190;

  const factor = transitionLevel / 100;
  const currR = Math.round(beigeR + (orangeR - beigeR) * factor);
  const currG = Math.round(beigeG + (orangeG - beigeG) * factor);
  const currB = Math.round(beigeB + (orangeB - beigeB) * factor);
  const currentColor = `rgb(${currR}, ${currG}, ${currB})`;

  return (
    <div id="orange-transition-container" className="w-full bg-[#EDE5D9]/50 rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] space-y-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left: Historical Context */}
        <div className="md:col-span-6 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#F37021]">
            <Package className="w-4 h-4" />
            <span>1942 Archival Event</span>
          </div>

          <h3 className="font-editorial text-3xl sm:text-4xl text-[#4A2415] leading-tight">
            The Accidental Signature
          </h3>

          <p className="text-sm text-[#4A2415]/80 leading-relaxed">
            Before World War II, Hermès packaging was cream with gilded gold edging, then mustard beige with chocolate piping. In 1942, occupied Paris suffered severe paperboard shortages.
          </p>

          <p className="text-sm text-[#4A2415]/80 leading-relaxed">
            Émile-Maurice Hermès’s box manufacturer had only one stock of carton left that no other store wanted: a vivid, deep citrus orange. Left with no choice, Hermès adopted the box. Paired with the dark brown cotton Bolduc ribbon, it became one of the most recognizable luxury signatures in the world.
          </p>

          {/* Interactive Range Control */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#4A2415]/80 font-medium">
              <span>1930s Mustard Paper</span>
              <span className="text-[#F37021] font-bold">1942 Signature Orange</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={transitionLevel}
              onChange={(e) => setTransitionLevel(Number(e.target.value))}
              aria-label="Adjust era from 1930s mustard to 1942 signature orange"
              className="w-full h-2 bg-[#D8CEBE] rounded-lg appearance-none cursor-pointer accent-[#F37021]"
            />
            <div className="text-[11px] text-[#4A2415]/60 text-center italic">
              Slide to observe the transition from pre-war beige to signature citrus orange
            </div>
          </div>
        </div>

        {/* Right: Interactive Theatrical Box Representation */}
        <div className="md:col-span-6 flex flex-col items-center justify-center">
          <div
            className="relative w-64 sm:w-72 aspect-square rounded-2xl shadow-2xl transition-colors duration-200 p-6 flex flex-col items-center justify-between border-4 border-[#3A1E11]/30"
            style={{ backgroundColor: currentColor }}
          >
            {/* Dark Chocolate Piping on Edge */}
            <div className="absolute inset-1.5 border border-[#3A1E11]/40 rounded-xl pointer-events-none" />

            {/* Bolduc Ribbon Overlay */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-7 bg-[#3A1E11] text-[#EDE5D9] flex items-center justify-center text-[10px] uppercase font-bold tracking-[0.25em] shadow-md border-y border-[#EDE5D9]/20 select-none">
              HERMÈS • PARIS • BOLDUC
            </div>
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-7 bg-[#3A1E11] shadow-md pointer-events-none" />

            {/* Top Brand Mark */}
            <div className="z-10 text-center text-[#3A1E11] font-editorial font-bold text-xl tracking-widest pt-2">
              HERMÈS
            </div>

            {/* Bottom Heritage Mark */}
            <div className="z-10 text-center text-[#3A1E11] text-[10px] font-semibold tracking-widest uppercase pb-2">
              24, Faubourg Saint-Honoré
            </div>
          </div>

          <div className="mt-4 text-xs text-[#4A2415]/60 text-center">
            *Digital approximation of Hermès Orange (#F37021).
          </div>
        </div>
      </div>
    </div>
  );
};
