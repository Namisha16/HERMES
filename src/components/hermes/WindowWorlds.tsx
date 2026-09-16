import React, { useState } from 'react';
import { LEILA_MENCHARI_WINDOWS } from '../../data/hermesData';
import { Sparkles, Eye, Maximize2 } from 'lucide-react';

export const WindowWorlds: React.FC = () => {
  const [activeWindow, setActiveWindow] = useState(0);

  const current = LEILA_MENCHARI_WINDOWS[activeWindow];

  return (
    <div id="window-worlds-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 12</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            When a Window Becomes a World
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Leïla Menchari • 24 Faubourg Saint-Honoré (1978–2013)
          </p>
        </div>
        <p className="text-xs text-[#4A2415]/70 max-w-sm italic">
          For 35 years, Tunisian artist Leïla Menchari turned the corner vitrines of 24 Faubourg into four annual theatrical dreams without selling a single item directly.
        </p>
      </div>

      {/* Interactive Vitrine Stage */}
      <div className="bg-[#2B1810] text-[#F7F3ED] rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden border border-[#D8CEBE]/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Framed Vitrine Visualizer */}
          <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden border-4 border-[#D8CEBE]/20 shadow-inner relative flex flex-col justify-end p-6 bg-gradient-to-br from-black/80 via-black/40 to-transparent">
            {/* Ambient theatrical backdrop tint */}
            <div
              className="absolute inset-0 opacity-40 transition-colors duration-1000 pointer-events-none"
              style={{ backgroundColor: current.color }}
            />

            {/* Vitrine frame glass highlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />

            <div className="relative z-10 space-y-2">
              <span className="text-[10px] tracking-[0.3em] uppercase px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#EDE5D9] inline-block">
                Faubourg Saint-Honoré Vitrine
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal">
                {current.title}
              </h3>
              <p className="text-xs text-white/80 font-medium">
                {current.theme}
              </p>
            </div>
          </div>

          {/* Window Narrative & Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#F37021] font-semibold">
                Curatorial Scenography
              </span>
              <p className="text-sm sm:text-base text-[#EDE5D9]/90 leading-relaxed font-light">
                {current.story}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-white/10">
              <div className="text-xs uppercase tracking-wider text-[#EDE5D9]/60">
                Explore Theatrical Installations:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {LEILA_MENCHARI_WINDOWS.map((win, idx) => (
                  <button
                    key={win.title}
                    onClick={() => setActiveWindow(idx)}
                    className={`p-3 rounded-xl text-left transition-all border text-xs ${
                      activeWindow === idx
                        ? 'bg-[#F37021] text-white border-[#F37021] shadow-md font-semibold'
                        : 'bg-white/5 hover:bg-white/10 text-white/80 border-white/10'
                    }`}
                  >
                    <div className="truncate">{win.title}</div>
                    <div className="text-[10px] opacity-75 truncate">{win.theme}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
