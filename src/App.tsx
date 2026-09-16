import React, { useState } from 'react';
import { GlobalNav } from './components/global/GlobalNav';
import { Footer } from './components/global/Footer';
import { LuxuryLanding } from './components/landing/LuxuryLanding';
import { HermesExperience } from './components/hermes/HermesExperience';

export const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'hermes'>('hermes');
  const [activeSection, setActiveSection] = useState<string>('sec-01');

  const handleNavigate = (view: 'landing' | 'hermes', sectionId?: string) => {
    setCurrentView(view);
    if (view === 'hermes' && sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectBrand = (brandName: string) => {
    if (brandName.toLowerCase() === 'hermès' || brandName.toLowerCase() === 'hermes') {
      setCurrentView('hermes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#4A2415] flex flex-col justify-between selection:bg-[#F37021] selection:text-white">
      {/* Global Navigation with brand switch and chapter links */}
      <GlobalNav
        currentView={currentView}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentView === 'landing' ? (
          <LuxuryLanding onSelectBrand={handleSelectBrand} />
        ) : (
          <HermesExperience
            onExploreAnotherHouse={() => {
              setCurrentView('landing');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSectionVisible={(secId) => setActiveSection(secId)}
          />
        )}
      </main>

      {/* Editorial Footer */}
      <Footer onExploreHouse={handleSelectBrand} />
    </div>
  );
};

export default App;
