import React, { useState } from 'react';
import { ShieldAlert, Sparkles, Scale, TrendingUp, Clock, Award, DollarSign } from 'lucide-react';

export const DesireVariablesSection: React.FC = () => {
  const [selectedVar, setSelectedVar] = useState<string>('scarcity');

  const variables = [
    {
      id: "price",
      name: "Price Integrity",
      icon: DollarSign,
      metric: "Zero Discounts • No End-of-Season Sales",
      description: "Unlike commercial luxury fashion brands that markdown inventory up to 70% at seasonal ends, Hermès never discounts or burns unsold stock. Prices only adjust upward annually to reflect raw leather and artisan labor inflation.",
      verifiedFact: "Hermès has never operated an outlet store or authorized flash sales."
    },
    {
      id: "scarcity",
      name: "Artisanal Scarcity",
      icon: Clock,
      metric: "1 Artisan = 1 Bag = ~20 Hours",
      description: "Artisans cannot be mass-recruited. Production capacity expands at an organic cap of ~7% per year (opening roughly one workshop annually), regardless of how much global demand surges.",
      verifiedFact: "Waiting times for quota bags (Birkin, Kelly, Constance) remain between 6 months to several years."
    },
    {
      id: "demand",
      name: "Structural Demand",
      icon: TrendingUp,
      metric: "Organic Backlog Across 45 Countries",
      description: "Demand is stimulated by refusal. When potential clients cannot walk into a boutique and purchase a Kelly off the shelf, desire transforms from transactional to aspirational.",
      verifiedFact: "Store directors independently choose what stock to order for their specific salon twice a year at the Podium."
    },
    {
      id: "resale",
      name: "Resale Appreciation",
      icon: Scale,
      metric: "Secondary Market Premium: 120%–250%+",
      description: "Pristine Birkin and Kelly bags consistently sell at Sotheby's and Christie's auctions for well above retail boutique prices, functioning as a non-correlated alternative asset class.",
      verifiedFact: "Historical auction analyses verify Hermès leather goods have outpaced the S&P 500 across multi-decade spans."
    },
    {
      id: "recognition",
      name: "Conspicuous Discretion",
      icon: Award,
      metric: "Architectural Form over Monogram Logos",
      description: "True luxury connoisseurs recognize the saddle stitch, sangles, turn-lock hardware, and pearled rivets from across a room. The absence of loud logos signals confidence and quiet authority.",
      verifiedFact: "No large exterior brand logos on signature leather handbags."
    },
    {
      id: "revenue",
      name: "Financial Independence",
      icon: TrendingUp,
      metric: "€16.0B Revenue • ~40% Operating Margin",
      description: "Family ownership control (Dumas, Guerrand, Puech dynasties) shields the executive board from short-term quarterly pressures, allowing generational decisions to prevail over quick margin extraction.",
      verifiedFact: "Over 66% of voting rights remain anchored within the family holding company Émile Hermès SAS."
    }
  ];

  return (
    <div id="desire-variables-section" className="space-y-8">
      <div className="border-b border-[#D8CEBE] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#F37021] font-semibold flex items-center gap-1.5 mb-3.5 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Section 16</span>
          </span>
          <h2 className="font-editorial text-3xl sm:text-5xl text-[#4A2415]">
            The Numbers of Desire
          </h2>
          <p className="text-xs uppercase tracking-widest text-[#4A2415]/60 mt-1">
            Independent Metric Variables • Strictly Disaggregated Analysis
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#4A2415]/70 bg-[#EDE5D9] px-4 py-2 rounded-full border border-[#D8CEBE]">
          <ShieldAlert className="w-4 h-4 text-[#F37021]" />
          <span>Methodology Rule: No invented composite score</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 6 Variables Selector Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-3">
          {variables.map((v) => {
            const isSelected = selectedVar === v.id;
            const Icon = v.icon;
            return (
              <button
                key={v.id}
                onClick={() => setSelectedVar(v.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between h-36 ${
                  isSelected
                    ? 'bg-[#4A2415] text-[#F7F3ED] border-[#4A2415] shadow-lg ring-2 ring-[#F37021]/30'
                    : 'bg-[#EDE5D9] text-[#4A2415] border-[#D8CEBE] hover:border-[#4A2415]/30'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-[10px] uppercase tracking-widest opacity-70 font-mono">
                    Variable
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F37021]' : 'text-[#4A2415]/60'}`} />
                </div>
                <div>
                  <div className="font-editorial text-lg font-bold leading-tight">
                    {v.name}
                  </div>
                  <div className={`text-[11px] truncate mt-1 ${isSelected ? 'text-[#EDE5D9]/80' : 'text-[#4A2415]/70'}`}>
                    {v.metric}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Variable Breakdown */}
        {(() => {
          const current = variables.find(v => v.id === selectedVar) || variables[0];
          const Icon = current.icon;
          return (
            <div className="lg:col-span-6 bg-[#EDE5D9] rounded-3xl p-8 border border-[#D8CEBE] shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-[#4A2415]/10 pb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#F37021]">
                  <Icon className="w-4 h-4" />
                  <span>Variable Analysis</span>
                </div>
                <span className="text-xs font-mono text-[#4A2415]/60">
                  Verified Empirical Metric
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-editorial text-3xl text-[#4A2415]">
                  {current.name}
                </h3>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#F37021] bg-[#F7F3ED] p-2.5 rounded-lg border border-[#D8CEBE] inline-block">
                  {current.metric}
                </div>
              </div>

              <p className="text-sm text-[#4A2415]/85 leading-relaxed">
                {current.description}
              </p>

              <div className="p-4 rounded-xl bg-[#F7F3ED] border border-[#D8CEBE] space-y-1">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#4A2415] block">
                  Documentary Verification:
                </span>
                <p className="text-xs text-[#4A2415]/80 italic">
                  {current.verifiedFact}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
