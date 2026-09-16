import React, { useState } from 'react';
import { ArrowRight, Info } from 'lucide-react';

export const LogoEvolution: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stage: "1840s Painting",
      title: "Alfred de Dreux Artwork",
      subtitle: "Duc attelé, groom à l'attente",
      description: "A gouache painting by French romantic painter Alfred de Dreux (1810–1860) acquired by Émile Hermès for his personal collection of equestrian art.",
      image: "/assets/alfred_de_dreux.jpg",
      objectPosition: "center 12%",
      note: "The original artistic inspiration held in the private museum above 24 Faubourg."
    },
    {
      stage: "1945 Emblem",
      title: "The Carriage, The Horse & The Groom",
      subtitle: "The Duc Attelé Registered",
      description: "Registered officially as the house trademark in 1945. Notably, the passenger carriage is empty—signifying that the client holds the reins and provides their own destination, while Hermès provides the finest harness and carriage.",
      image: "/assets/equestrian_horse.jpg",
      note: "Symbolic absence: Hermès awaits the client to complete the journey."
    },
    {
      stage: "1950s Typography",
      title: "The Editorial Wordmark",
      subtitle: "Hermès Paris Gravure",
      description: "A refined serif typeface with balanced proportions and a delicate grave accent over the second 'E'. Used on archival stationary, leather hot-stamps, and the orange box lids.",
      image: "/assets/hermes_h_trademark.jpg",
      note: "Serif typography signifying heritage and craft authority."
    },
    {
      stage: "Modern Day",
      title: "The Graphic 'H' & Timeless Identity",
      subtitle: "Subtle Iconography",
      description: "Rather than plastering monogram logos across products, Hermès relies on structural geometry: the 'H' cut into the Oran sandal, the turn-lock clou de selle, and the distinctive Bolduc ribbon.",
      image: "/assets/hermes_graphic_h_identity.jpg",
      note: "Conspicuous discretion: recognizable by form, stitch, and leather rather than loud logos."
    }
  ];

  return (
    <div id="logo-evolution-container" className="w-full bg-[#EDE5D9]/40 rounded-3xl p-6 sm:p-10 border border-[#D8CEBE]">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Step Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {steps.map((s, idx) => (
            <button
              key={s.stage}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-3.5 rounded-xl transition-all border ${
                activeStep === idx
                  ? 'bg-[#4A2415] text-[#F7F3ED] border-[#4A2415] shadow-sm'
                  : 'bg-[#EDE5D9] text-[#4A2415]/75 border-transparent hover:border-[#4A2415]/20'
              }`}
            >
              <div className="text-[10px] tracking-widest uppercase opacity-70 mb-1">
                Step 0{idx + 1}
              </div>
              <div className="text-xs font-semibold tracking-wide truncate">
                {s.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Evolution Step Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#F7F3ED] rounded-2xl p-6 sm:p-8 border border-[#D8CEBE]">
          <div className="md:col-span-6 space-y-4">
            <div className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold mb-3.5">
              {steps[activeStep].stage}
            </div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#4A2415] leading-tight">
              {steps[activeStep].title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#4A2415]/60 font-medium">
              {steps[activeStep].subtitle}
            </p>
            <p className="text-sm text-[#4A2415]/80 leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="pt-2 flex items-start gap-2 text-xs text-[#4A2415]/70 italic bg-[#EDE5D9]/50 p-3 rounded-lg border border-[#D8CEBE]/50">
              <Info className="w-4 h-4 text-[#F37021] shrink-0 mt-0.5" />
              <span>{steps[activeStep].note}</span>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#D8CEBE] bg-[#EDE5D9]">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                style={{ objectPosition: (steps[activeStep] as any).objectPosition || 'center center' }}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-[#4A2415]/60 italic">
          *Historical lineage strictly documented without implying unauthorized or undocumented corporate redesigns.
        </div>
      </div>
    </div>
  );
};
