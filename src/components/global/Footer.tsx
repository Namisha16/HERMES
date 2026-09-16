import React from 'react';
import { ArrowUp, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onExploreHouse?: (brand: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onExploreHouse }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="global-footer" className="bg-[#EDE5D9] text-[#4A2415] border-t border-[#D8CEBE] mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Top: Project Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#D8CEBE]">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold">
              The Anatomy of Luxury
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#4A2415] font-normal leading-tight">
              Hermès: The Architecture of Desire
            </h2>
            <p className="text-sm text-[#4A2415]/80 leading-relaxed max-w-md">
              A documentary inquiry into why true luxury creates unyielding desire. Constructed strictly from archival records, financial reports, verified artisanal practices, and source materials dating from 1837 to the present.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#4A2415]">
              <ShieldCheck className="w-4 h-4 text-[#F37021]" />
              <span>Methodology & Sources</span>
            </div>
            <ul className="text-xs space-y-2 text-[#4A2415]/80 leading-relaxed">
              <li>• Hermès Finance 2025 Reporting (€16.0B revenue)</li>
              <li>• Six Generations of Artisans (Primary Heritage Archive)</li>
              <li>• L’Isle-d’Espagnac 24th Atelier Records (2025)</li>
              <li>• The Impression Paris Fashion Week Archives</li>
              <li>• The Fashion Law & Judicial Trademark Records</li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#4A2415]">
              <BookOpen className="w-4 h-4 text-[#F37021]" />
              <span>Research Classification</span>
            </div>
            <p className="text-xs text-[#4A2415]/75 leading-relaxed">
              <strong className="text-[#4A2415]">FACT:</strong> Directly sourced from official corporate filings, court trademarks, or verified historical literature.
            </p>
            <p className="text-xs text-[#4A2415]/75 leading-relaxed">
              <strong className="text-[#4A2415]">INTERPRETATION:</strong> The Hermès System network and the Desirability Model represent the project’s analytical framework, not an official Hermès formula.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A2415]/70">
          <div className="flex items-center gap-2">
            <span>© 1837 — 2026 The Anatomy of Luxury. Independent Research Monograph.</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://finance.hermes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F37021] flex items-center gap-1 transition-colors"
            >
              Hermès Finance <ExternalLink className="w-3 h-3" />
            </a>
            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 py-1.5 px-3 rounded-full border border-[#4A2415]/20 hover:border-[#F37021] hover:text-[#F37021] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
