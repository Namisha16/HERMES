import React, { useState } from 'react';
import { Sparkles, ArrowRight, Play, RotateCcw } from 'lucide-react';

export const ContradictionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stage: "The Solitary Hand",
      title: "One Artisan",
      metric: "1 Individual",
      detail: "Seated at a wooden workbench in Pantin or L’Isle-d’Espagnac, using personal tools kept in their customized leather chest."
    },
    {
      stage: "The Singular Object",
      title: "One Object",
      metric: "18 to 24 Hours",
      detail: "Constructed start-to-finish without assembly lines. Every stitch, burnish, and turn is the responsibility of that single craftsperson."
    },
    {
      stage: "The Regional Ateliers",
      title: "One Workshop",
      metric: "Human Scale (< 250 People)",
      detail: "Workshops are capped in size to preserve intimate atelier culture, natural day-lit architecture, and mentor-apprentice dialogues."
    },
    {
      stage: "The Global Hunger",
      title: "Global Demand",
      metric: "Exceeding Supply by Multiple Factors",
      detail: "Clients across 45 countries wait months or years for quota allocations, refusing industrial mass-market alternatives."
    },
    {
      stage: "The Economic Reality",
      title: "€16.0 Billion Turnover",
      metric: "Annual Revenue (2025)",
      detail: "Massive global economic scale achieved paradoxically by refusing industrial speedups or automated robotics."
    },
    {
      stage: "The Human Guild",
      title: "26,494+ People",
      metric: "Global Workforce",
      detail: "A modern artisanal guild of leathercutters, silk printers, silversmiths, watchmakers, and perfumers preserving centuries of ancestral knowledge."
    }
  ];

  return (
    <div id="the-contradiction-section" className="space-y-10">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center justify-center gap-2 mb-3.5 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Section 17 • The Central Paradox</span>
        </span>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415] font-light leading-tight">
          “HOW DO YOU SCALE SOMETHING THAT IS SUPPOSED TO BE RARE?”
        </h2>
        <p className="text-sm text-[#4A2415]/75 leading-relaxed">
          The ultimate paradox of Hermès: maintaining the slowest, most exacting hand craftsmanship while standing as one of the most profitable luxury houses on earth.
        </p>
      </div>

      {/* Sequential Reveal Component with deliberate pause */}
      <div className="bg-[#EDE5D9] rounded-3xl p-6 sm:p-12 border border-[#D8CEBE] shadow-lg max-w-5xl mx-auto space-y-8">
        {/* Progress indicators */}
        <div className="grid grid-cols-6 gap-2">
          {steps.map((st, idx) => (
            <button
              key={st.title}
              onClick={() => setActiveStep(idx)}
              className={`h-2 rounded-full transition-all ${
                activeStep === idx
                  ? 'bg-[#F37021]'
                  : activeStep > idx
                  ? 'bg-[#4A2415]'
                  : 'bg-[#D8CEBE]'
              }`}
              aria-label={`Step ${idx + 1}: ${st.title}`}
            />
          ))}
        </div>

        {/* Current Paradox Step Reveal */}
        <div className="bg-[#F7F3ED] rounded-2xl p-8 sm:p-10 border border-[#D8CEBE] space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F37021]">
              Phase 0{activeStep + 1}: {steps[activeStep].stage}
            </span>
            <span className="text-xs font-mono text-[#4A2415]/60">
              {steps[activeStep].metric}
            </span>
          </div>

          <h3 className="font-editorial text-4xl sm:text-5xl text-[#4A2415]">
            {steps[activeStep].title}
          </h3>

          <p className="text-base sm:text-lg text-[#4A2415]/85 leading-relaxed max-w-2xl font-light">
            {steps[activeStep].detail}
          </p>

          <div className="pt-6 border-t border-[#D8CEBE] flex items-center justify-between text-xs">
            <span className="text-[#4A2415]/60 italic">
              Observe how the microscopic hand expands to macroeconomic power
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStep(0)}
                className="flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[#4A2415]/20 hover:border-[#F37021] text-[#4A2415] transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>

              <button
                onClick={() => setActiveStep(s => (s + 1) % steps.length)}
                className="flex items-center gap-2 py-2 px-5 rounded-full bg-[#F37021] text-white font-semibold uppercase tracking-wider hover:bg-[#D95F16] transition-colors shadow-sm"
              >
                <span>{activeStep === steps.length - 1 ? "Replay Paradox" : "Advance Step"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
