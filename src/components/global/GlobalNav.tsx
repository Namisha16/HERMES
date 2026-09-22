import React, { useState, useEffect } from 'react';
import { Compass, Sparkles, Volume2, VolumeX } from 'lucide-react';

interface GlobalNavProps {
  currentView: 'landing' | 'hermes';
  onNavigate: (view: 'landing' | 'hermes', sectionId?: string) => void;
  activeSection?: string;
}

export const GlobalNav: React.FC<GlobalNavProps> = ({ currentView, onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioMuted, setAudioMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hermesSections = [
    { id: 'sec-01', label: 'THE HOUSE' },
    { id: 'sec-02', label: 'ORIGIN' },
    { id: 'sec-04', label: 'TIMELINE' },
    { id: 'sec-07', label: 'CRAFT' },
    { id: 'sec-08', label: 'MÉTIERS' },
    { id: 'sec-09', label: 'ICONS' },
    { id: 'sec-12', label: 'CULTURE' },
    { id: 'sec-14', label: 'GLOBAL' },
    { id: 'sec-15', label: 'BUSINESS' },
    { id: 'sec-18', label: 'DESIRE' },
  ];

  const scrollToSection = (id: string) => {
    if (currentView !== 'hermes') {
      onNavigate('hermes', id);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const isLanding = currentView === 'landing';

  return (
    <header
      id="global-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLanding
          ? scrolled
            ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(30,25,21,0.06)] border-b border-[#E8DFD3] text-[#1E1915]'
            : 'bg-transparent text-[#1E1915]'
          : scrolled
            ? 'bg-[#F7F3ED]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(74,36,21,0.06)] border-b border-[#EDE5D9] text-[#4A2415]'
            : 'bg-transparent text-[#4A2415]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Project Title / Brand Switcher */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          <button
            id="nav-brand-title"
            onClick={() => onNavigate('landing')}
            className="text-left group focus:outline-none rounded-sm"
          >
            <div className={`text-[10px] tracking-[0.24em] uppercase font-medium ${
              isLanding ? 'text-[#7D6F64] font-mono' : 'text-[#4A2415]/70'
            }`}>
              {isLanding ? 'RESEARCH ARCHIVE' : 'The Anatomy of Luxury'}
            </div>
            <div className={`text-lg sm:text-xl flex items-center gap-1.5 ${
              isLanding ? 'font-archive-display font-bold text-[#1E1915] tracking-wider' : 'font-hermes-logo font-semibold text-[#4A2415] tracking-[0.05em]'
            }`}>
              <span>{isLanding ? 'THE HOUSES' : 'HERMÈS'}</span>
              {!isLanding && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#F37021] inline-block"></span>
              )}
            </div>
          </button>

          {!isLanding && (
            <button
              id="nav-return-landing"
              onClick={() => onNavigate('landing')}
              className="hidden md:flex items-center gap-1.5 text-xs tracking-wider uppercase py-1.5 px-3 rounded-full border border-[#4A2415]/20 text-[#4A2415]/80 hover:bg-[#4A2415] hover:text-[#F7F3ED] transition-colors"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>All Houses</span>
            </button>
          )}
        </div>

        {/* Center: In-depth Hermès Chapter Navigation */}
        {!isLanding && (
          <nav id="nav-chapter-links" className="hidden xl:flex items-center space-x-5 text-xs font-medium tracking-widest uppercase">
            {hermesSections.map((sec) => {
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  id={`nav-sec-btn-${sec.id}`}
                  onClick={() => scrollToSection(sec.id)}
                  className={`py-1 transition-colors relative ${
                    isActive ? 'text-[#F37021] font-semibold' : 'text-[#4A2415]/70 hover:text-[#4A2415]'
                  }`}
                >
                  {sec.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#F37021]" />
                  )}
                </button>
              );
            })}
          </nav>
        )}

        {/* Right: Actions */}
        <div className="flex items-center space-x-3">
          {isLanding ? (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-mono tracking-widest text-[#7D6F64] uppercase">
                MONOGRAPH ARCHIVE • VOL. I
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] tracking-widest text-[#4A2415]/60 uppercase">
                1837 — Present
              </span>
              <button
                id="nav-ambient-sound-toggle"
                onClick={() => setAudioMuted(!audioMuted)}
                title={audioMuted ? "Subtle ambient tone muted" : "Subtle ambient tone active"}
                className="w-8 h-8 rounded-full border border-[#4A2415]/15 flex items-center justify-center text-[#4A2415]/70 hover:text-[#F37021] hover:border-[#F37021]/30 transition-colors"
                aria-label="Toggle ambient tone"
              >
                {audioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#F37021]" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
