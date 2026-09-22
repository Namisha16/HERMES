import React, { useEffect } from 'react';
import { FloatingVideo } from './FloatingVideo';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { InteractiveTimeline } from './InteractiveTimeline';
import { LogoEvolution } from './LogoEvolution';
import { OrangeTransition } from './OrangeTransition';
import { MetiersSection } from './MetiersSection';
import { IconsSection } from './IconsSection';
import { NarrativeStories } from './NarrativeStories';
import { WindowWorlds } from './WindowWorlds';
import { EditorialWall } from './EditorialWall';
import { WorldMapSection } from './WorldMapSection';
import { RevenueSection } from './RevenueSection';
import { DesireVariablesSection } from './DesireVariablesSection';
import { ContradictionSection } from './ContradictionSection';
import { SystemNetworkSection } from './SystemNetworkSection';
import { FinalRevealSection } from './FinalRevealSection';
import { Sparkles, Compass, Shield, Award, MapPin, Feather, ArrowDown } from 'lucide-react';

interface HermesExperienceProps {
  onExploreAnotherHouse: () => void;
  onSectionVisible?: (sectionId: string) => void;
}

export const HermesExperience: React.FC<HermesExperienceProps> = ({
  onExploreAnotherHouse,
  onSectionVisible
}) => {
  useEffect(() => {
    // Scroll spy for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && onSectionVisible) {
            onSectionVisible(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sectionElements = document.querySelectorAll('section[id^="sec-"]');
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [onSectionVisible]);

  return (
    <div id="hermes-experience-root" className="w-full relative">
      {/* Floating Documentary Video Player */}
      <FloatingVideo />

      {/* SECTION 01: HERO */}
      <section
        id="sec-01"
        className="min-h-[92vh] pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-between max-w-7xl mx-auto"
      >
        <div className="space-y-6 max-w-4xl pt-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#4A2415]/15 text-[11px] uppercase tracking-[0.25em] font-medium text-[#4A2415]/80 bg-[#EDE5D9]/40 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
            <span>House Monograph • Paris 1837</span>
          </div>

          <h1 className="font-hermes-logo text-5xl sm:text-7xl lg:text-8xl font-semibold text-[#4A2415] tracking-[0.05em] leading-[1.05]">
            HERMÈS
          </h1>

          <p className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#F37021] font-light">
            THE ARCHITECTURE OF DESIRE
          </p>

          <blockquote className="text-base sm:text-xl text-[#4A2415]/85 italic font-light max-w-2xl leading-relaxed pl-4 border-l-2 border-[#F37021]">
            “Hermès does not sell products. Hermès sells the patience of human hands.”
          </blockquote>
        </div>

        {/* Hero Bottom Banner with Archival Image */}
        <div className="pt-12 space-y-6">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] rounded-3xl overflow-hidden shadow-2xl border border-[#D8CEBE] bg-[#EDE5D9]">
            <img
              src="/assets/hermes_runway_detail_1.jpg"
              alt="Hermès Runway & Craftsmanship Panorama"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B1810]/70 via-transparent to-transparent flex items-end p-6 sm:p-10">
              <div className="text-[#F7F3ED] flex items-center justify-between w-full">
                <span className="text-xs uppercase tracking-[0.2em] font-medium">
                  Savoir-Faire & Quiet Mastery • 24, Faubourg Saint-Honoré
                </span>
                <span className="hidden sm:inline-block text-xs font-mono text-[#F7F3ED]/70">
                  Documentary Monograph
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#4A2415]/60 pt-2">
            <span>Scroll downward to trace 189 years of unbroken artisanal independence</span>
            <div className="flex items-center gap-1">
              <span>Scroll</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {/* SECTION 02: THE ORIGIN: 1837 */}
        <section id="sec-02" className="space-y-8 pt-12">
          <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 02</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
                The Origin: 1837, A Harness Maker in Paris
              </h2>
            </div>
            <div className="text-xs font-mono text-[#4A2415]/60">
              Rue Basse-du-Rempart, Grands Boulevards
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE]">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#F37021] block mb-3 sm:mb-3.5">
                Thierry Hermès (1801–1878)
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#4A2415] leading-tight">
                Engineering for the Thoroughbred
              </h3>
              <p className="text-sm text-[#4A2415]/85 leading-relaxed">
                In 1837, Thierry Hermès opened a modest harness workshop on rue Basse-du-Rempart in Paris. Unlike decorative saddlers who weighed down coaches with heavy brass plates, Thierry engineered lightweight, discreet harnesses designed for security, comfort, and speed.
              </p>
              <p className="text-sm text-[#4A2415]/85 leading-relaxed">
                At the 1867 Exposition Universelle in Paris, Hermès was awarded the prestigious First Class Medal for harness making, solidifying the house’s reputation among European royalty, aristocracy, and racing stables.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-[#4A2415]">
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#F37021]" />
                  <span>1867 Exposition Universelle First Class Medal</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#D8CEBE] bg-white">
              <img
                src="/assets/saddle_craft.jpg"
                alt="Hermès Harness and Saddlery Origin"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* SECTION 03: THE ADDRESS: 24 FAUBOURG SAINT-HONORÉ, 1880 */}
        <section id="sec-03" className="space-y-8">
          <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 03</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
                The Address: 24 Faubourg Saint-Honoré, 1880
              </h2>
            </div>
            <div className="text-xs font-mono text-[#4A2415]/60">
              Charles-Émile Hermès Relocation
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm sm:text-base text-[#4A2415]/85 max-w-3xl leading-relaxed">
              In 1880, Thierry's son, Charles-Émile Hermès, moved the workshop closer to his aristocratic clientele at 24 rue du Faubourg Saint-Honoré. He established both the retail boutique and the manufacturing workshops under one roof—a physical anchor that remains the spiritual heartbeat of Hermès to this day.
            </p>

            {/* Interactive Before & After Slider */}
            <BeforeAfterSlider
              beforeImage="/assets/faubourg_historic.jpg"
              afterImage="/assets/rue_du_faubourg_saint-honore.jpg"
              beforeLabel="Circa 1900 — Historic Façade"
              afterLabel="Present Day — 24 Faubourg Saint-Honoré"
            />
          </div>
        </section>

        {/* SECTION 04: THE THREAD: 1837 TO 2025 */}
        <section id="sec-04" className="space-y-8">
          <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 04</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
                The Thread: 1837 to 2025
              </h2>
            </div>
            <div className="text-xs font-mono text-[#4A2415]/60">
              26 Historical Milestones
            </div>
          </div>

          <InteractiveTimeline />
        </section>

        {/* SECTION 05: FROM HORSE TO HOUSE: THE LOGO */}
        <section id="sec-05" className="space-y-8">
          <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 05</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
                From Horse to House: The Identity
              </h2>
            </div>
            <div className="text-xs font-mono text-[#4A2415]/60">
              Alfred de Dreux Lineage
            </div>
          </div>

          <LogoEvolution />
        </section>

        {/* SECTION 06: ORANGE: 1942 */}
        <section id="sec-06" className="space-y-8">
          <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Section 06</span>
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
                Orange: The Accidental Icon
              </h2>
            </div>
            <div className="text-xs font-mono text-[#4A2415]/60">
              1942 Wartime Packaging Shortage
            </div>
          </div>

          <OrangeTransition />
        </section>

        {/* SECTIONS 07 & 08: THE HAND BEHIND THE OBJECT & THE 16 MÉTIERS */}
        <section id="sec-07" className="space-y-8">
          <MetiersSection />
        </section>

        {/* SECTION 09: THE ICONS */}
        <section id="sec-09" className="space-y-8">
          <IconsSection />
        </section>

        {/* SECTIONS 10 & 11: NARRATIVE STORIES (KELLY & BIRKIN) */}
        <NarrativeStories />

        {/* SECTION 12: LEÏLA MENCHARI WINDOW WORLDS */}
        <section id="sec-12" className="space-y-8">
          <WindowWorlds />
        </section>

        {/* SECTION 13: LE MONDE D'HERMÈS */}
        <section id="sec-13" className="space-y-8">
          <EditorialWall />
        </section>

        {/* SECTION 14: FROM PARIS TO THE WORLD */}
        <section id="sec-14" className="space-y-8">
          <WorldMapSection />
        </section>

        {/* SECTION 15: THE HOUSE BEHIND THE ICONS (€16.0B REVENUE) */}
        <section id="sec-15" className="space-y-8">
          <RevenueSection />
        </section>

        {/* SECTION 16: THE NUMBERS OF DESIRE */}
        <section id="sec-16" className="space-y-8">
          <DesireVariablesSection />
        </section>

        {/* SECTION 17: THE CONTRADICTION */}
        <section id="sec-17" className="space-y-8">
          <ContradictionSection />
        </section>

        {/* SECTION 18: THE HERMÈS SYSTEM */}
        <section id="sec-18" className="space-y-8">
          <SystemNetworkSection />
        </section>

        {/* SECTION 19: WHAT MAKES HERMÈS DESIRABLE? */}
        <section id="sec-19" className="space-y-8">
          <FinalRevealSection onExploreAnotherHouse={onExploreAnotherHouse} />
        </section>
      </div>
    </div>
  );
};
