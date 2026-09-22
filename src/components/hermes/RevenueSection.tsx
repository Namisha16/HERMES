import React, { useState } from 'react';
import { REVENUE_SECTORS } from '../../data/hermesData';
import { TrendingUp, PieChart, Sparkles, BarChart3 } from 'lucide-react';

export const RevenueSection: React.FC = () => {
  const [activeSector, setActiveSector] = useState<number | null>(null);

  const totalRevenue = 16001; // €16.0B

  return (
    <div id="revenue-visualisation-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 15</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            The House Behind the Icons
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Consolidated Financial Performance • Full Year 2025
          </p>
        </div>
        <div className="text-right">
          <div className="font-editorial text-4xl sm:text-6xl text-[#4A2415] font-light">
            €16.0B
          </div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F37021]">
            2025 Revenue
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EDE5D9] rounded-3xl p-6 sm:p-10 border border-[#D8CEBE] shadow-md">
        {/* Left: Interactive Proportional Stacked & Donut Bar Graph */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#4A2415]">
              <span>Proportional Sector Contribution</span>
              <span className="text-[#F37021]">100% Total Turnover</span>
            </div>

            {/* Continuous Proportional Ribbon */}
            <div className="w-full h-8 rounded-xl overflow-hidden flex shadow-inner border border-[#D8CEBE] p-0.5 bg-white">
              {REVENUE_SECTORS.map((s, idx) => {
                const isHovered = activeSector === idx;
                const colors = [
                  'bg-[#F37021]',
                  'bg-[#4A2415]',
                  'bg-[#8D5B4C]',
                  'bg-[#D4A373]',
                  'bg-[#8C6D62]',
                  'bg-[#B08968]',
                  'bg-[#9E8E84]'
                ];
                return (
                  <div
                    key={s.sector}
                    style={{ width: `${s.percentage}%` }}
                    onMouseEnter={() => setActiveSector(idx)}
                    onMouseLeave={() => setActiveSector(null)}
                    className={`${colors[idx % colors.length]} h-full transition-opacity cursor-pointer relative group ${
                      activeSector !== null && !isHovered ? 'opacity-40' : 'opacity-100'
                    }`}
                    title={`${s.sector}: €${s.revenueMillions}M (${s.percentage}%)`}
                  />
                );
              })}
            </div>
          </div>

          {/* Sector Highlight or Default Summary */}
          <div className="bg-[#F7F3ED] p-6 rounded-2xl border border-[#D8CEBE] space-y-2">
            {activeSector !== null ? (
              <div className="animate-fade-in space-y-1">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#F37021]">
                  Sector Spotlight:
                </div>
                <div className="font-editorial text-2xl text-[#4A2415]">
                  {REVENUE_SECTORS[activeSector].sector}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <div>
                    <div className="text-[10px] text-[#4A2415]/60 uppercase font-semibold">Turnover</div>
                    <div className="text-xl font-bold text-[#4A2415] tracking-tight">
                      €{REVENUE_SECTORS[activeSector].revenueMillions.toLocaleString()}M
                    </div>
                  </div>
                  <div className="border-l border-[#D8CEBE] pl-4">
                    <div className="text-[10px] text-[#4A2415]/60 uppercase font-semibold">Share</div>
                    <div className="text-xl font-bold text-[#F37021] tracking-tight">
                      {REVENUE_SECTORS[activeSector].percentage}%
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#4A2415]/70">
                  Consolidated Overview:
                </div>
                <p className="text-xs sm:text-sm text-[#4A2415]/85 leading-relaxed">
                  Leather Goods & Saddlery remains the historical core at 44% (€7,070M), followed by Ready-to-Wear & Accessories at 28% (€4,525M). The house maintains self-funded growth without debt reliance.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Data Table (Accessible Data Summary) */}
        <div className="lg:col-span-6 space-y-3">
          <div className="text-xs uppercase font-bold tracking-wider text-[#4A2415]/70 pb-1">
            2025 Revenue Breakdown by Sector
          </div>

          <div className="space-y-2">
            {REVENUE_SECTORS.map((s, idx) => {
              const isSelected = activeSector === idx;
              return (
                <div
                  key={s.sector}
                  onMouseEnter={() => setActiveSector(idx)}
                  onMouseLeave={() => setActiveSector(null)}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#F7F3ED] border-[#F37021] shadow-sm'
                      : 'bg-[#F7F3ED]/70 hover:bg-[#F7F3ED] border-[#D8CEBE]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-[#4A2415]">
                      {s.sector}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="text-xs font-medium text-[#4A2415]/80">
                      €{s.revenueMillions.toLocaleString()}M
                    </span>
                    <span className="text-xs font-bold text-[#F37021] w-10 text-right">
                      {s.percentage}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
