import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen, Quote } from 'lucide-react';

export const NarrativeStories: React.FC = () => {
  const [kellyStep, setKellyStep] = useState(0);
  const [birkinStep, setBirkinStep] = useState(0);

  const kellySequence = [
    {
      title: "1. The Hollywood Star",
      subtitle: "Alfred Hitchcock & To Catch a Thief (1954)",
      text: "Costume designer Edith Head selected Hermès accessories for Grace Kelly on the Côte d'Azur set of Hitchcock's To Catch a Thief. Kelly fell in love with the structured trapezoidal Sac à dépêches.",
      image: "/assets/grace_kelly.jpg",
      objectPosition: "center 12%"
    },
    {
      title: "2. The Candid Photograph",
      subtitle: "Life Magazine Cover (1956)",
      text: "Newly married to Prince Rainier III of Monaco and pregnant with Princess Caroline, Grace Kelly stepped out in front of international paparazzi, holding her Hermès bag in front of her stomach to conceal her baby bump.",
      image: "/assets/grace_kelly.jpg",
      objectPosition: "center 10%"
    },
    {
      title: "3. The Transformation",
      subtitle: "From Sac à dépêches to 'The Kelly'",
      text: "Women across Paris, London, and New York stormed Hermès boutiques asking for 'the Kelly bag'. The house respectfully and officially adopted the name in 1977, cementing its aristocratic immortality.",
      image: "/assets/kelly_transformation.jpg",
      objectPosition: "center 20%"
    },
    {
      title: "4. The Craft Blueprint",
      subtitle: "36 Leather Elements, 680 Saddle Stitches",
      text: "Every Kelly bag requires 18 to 20 hours of single-artisan assembly. The turn-lock touret, padlock (cadenas), clochette, and pearled rivets remain unchanged across nearly a century.",
      image: "/assets/hermes_birkin_black.jpg",
      objectPosition: "center center"
    }
  ];

  const birkinSequence = [
    {
      title: "1. The Chance Flight",
      subtitle: "Paris to London, 1984",
      text: "English-French singer and actress Jane Birkin was upgraded on an Air France flight. Settling into her seat, her straw basket fell from the overhead bin, spilling its contents across the aisle.",
      image: "/assets/birkin_flight.jpg",
      objectPosition: "center center"
    },
    {
      title: "2. The Conversation at 35,000 Feet",
      subtitle: "Jane Birkin & Jean-Louis Dumas",
      text: "Her seatmate was Jean-Louis Dumas, then Executive Chairman of Hermès. Birkin complained that she could never find a leather weekend bag big enough for her baby bottles and daily essentials yet refined enough for Paris.",
      image: "/assets/hermes_birkin_classic.jpg",
      objectPosition: "center center"
    },
    {
      title: "3. The Airsickness Sketch",
      subtitle: "Sketched on Barf Bag Paper",
      text: "Dumas asked: 'What would it look like?' Birkin drew a sketch on an airsickness bag. Dumas promised: 'I will make it for you if you allow us to give it your name.'",
      image: "/assets/hermes_birkin_fuchsia.jpg",
      objectPosition: "center center"
    },
    {
      title: "4. The Global Phenomenon",
      subtitle: "The Most Desired Object on Earth",
      text: "Unlike the Kelly's rigid formal posture, the Birkin was slouchy, generous, and casual. Today it commands years-long waiting lists and broke auction records as an asset outpacing gold and the S&P 500.",
      image: "/assets/birkin_global_phenom.jpg",
      objectPosition: "center 15%"
    }
  ];

  return (
    <div className="space-y-24">
      {/* Section 10: THE KELLY */}
      <section id="sec-10-kelly" className="space-y-8">
        <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 10</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
              The Kelly: Royalty & Accident
            </h2>
          </div>
          <div className="text-xs text-[#4A2415]/60 font-mono">
            Sequential Narrative • 1935–Present
          </div>
        </div>

        <div className="bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex gap-2">
              {kellySequence.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setKellyStep(idx)}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    kellyStep === idx ? 'bg-[#F37021]' : 'bg-[#D8CEBE]'
                  }`}
                  aria-label={`Go to Kelly step ${idx + 1}`}
                />
              ))}
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#F37021] font-bold block mb-2 sm:mb-2.5">
                {kellySequence[kellyStep].subtitle}
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#4A2415]">
                {kellySequence[kellyStep].title}
              </h3>
              <p className="text-sm text-[#4A2415]/85 leading-relaxed">
                {kellySequence[kellyStep].text}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#4A2415]/10">
              <span className="text-xs text-[#4A2415]/60">Step {kellyStep + 1} of {kellySequence.length}</span>
              <button
                onClick={() => setKellyStep((s) => (s + 1) % kellySequence.length)}
                className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#4A2415] hover:text-[#F37021] transition-colors"
              >
                <span>Advance Narrative</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEBE] bg-white">
            <img
              src={kellySequence[kellyStep].image}
              alt="Grace Kelly and Hermès Kelly"
              style={{ objectPosition: (kellySequence[kellyStep] as any).objectPosition || 'center top' }}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Section 11: THE BIRKIN */}
      <section id="sec-11-birkin" className="space-y-8">
        <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Section 11</span>
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
              The Birkin: The Flight at 35,000 Feet
            </h2>
          </div>
          <div className="text-xs text-[#4A2415]/60 font-mono">
            Sequential Narrative • 1984–Present
          </div>
        </div>

        <div className="bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEBE] bg-white">
            <img
              src={birkinSequence[birkinStep].image}
              alt="Jane Birkin and Hermès Birkin"
              style={{ objectPosition: (birkinSequence[birkinStep] as any).objectPosition || 'center center' }}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex gap-2">
              {birkinSequence.map((step, idx) => (
                <button
                  key={step.title}
                  onClick={() => setBirkinStep(idx)}
                  className={`h-1.5 flex-1 rounded-full transition-all ${
                    birkinStep === idx ? 'bg-[#F37021]' : 'bg-[#D8CEBE]'
                  }`}
                  aria-label={`Go to Birkin step ${idx + 1}`}
                />
              ))}
            </div>

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#F37021] font-bold block mb-2 sm:mb-2.5">
                {birkinSequence[birkinStep].subtitle}
              </span>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#4A2415]">
                {birkinSequence[birkinStep].title}
              </h3>
              <p className="text-sm text-[#4A2415]/85 leading-relaxed">
                {birkinSequence[birkinStep].text}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#4A2415]/10">
              <span className="text-xs text-[#4A2415]/60">Step {birkinStep + 1} of {birkinSequence.length}</span>
              <button
                onClick={() => setBirkinStep((s) => (s + 1) % birkinSequence.length)}
                className="flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#4A2415] hover:text-[#F37021] transition-colors"
              >
                <span>Advance Narrative</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
