import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../../data/hermesData';
import { TimelineEventItem } from '../../types';
import { Calendar, Filter, Sparkles } from 'lucide-react';

export const InteractiveTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Milestones' },
    { id: 'origin', label: 'Origin' },
    { id: 'craft', label: 'Craft & Ateliers' },
    { id: 'product', label: 'Objects' },
    { id: 'icon', label: 'Icons' },
    { id: 'leadership', label: 'Dynasty' },
    { id: 'culture', label: 'Culture' },
    { id: 'business', label: 'House' }
  ];

  const filteredEvents = selectedCategory === 'all'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter(e => e.category === selectedCategory || (selectedCategory === 'business' && e.category === 'expansion'));

  const activeEvent: TimelineEventItem = filteredEvents[activeEventIndex] || filteredEvents[0];

  return (
    <div id="interactive-timeline-module" className="w-full space-y-8">
      {/* Category Badges */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="text-xs uppercase tracking-wider text-[#4A2415]/60 flex items-center gap-1.5 mr-2">
          <Filter className="w-3.5 h-3.5 text-[#F37021]" />
          <span>Filter:</span>
        </div>
        {categories.map(c => (
          <button
            key={c.id}
            onClick={() => {
              setSelectedCategory(c.id);
              setActiveEventIndex(0);
            }}
            className={`text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider font-medium whitespace-nowrap transition-all ${
              selectedCategory === c.id
                ? 'bg-[#4A2415] text-[#F7F3ED] shadow-sm'
                : 'bg-[#EDE5D9] text-[#4A2415]/75 hover:bg-[#EDE5D9]/80'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Main Timeline Card and Scrubber */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Highlight Card */}
        <div className="lg:col-span-5 bg-[#EDE5D9] rounded-2xl p-8 border border-[#D8CEBE] shadow-md space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#F37021]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-between border-b border-[#4A2415]/10 pb-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F37021] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeEvent?.category}</span>
            </span>
            <span className="text-xs text-[#4A2415]/70 font-medium tracking-wide">
              Milestone {activeEventIndex + 1} of {filteredEvents.length}
            </span>
          </div>

          <div className="space-y-2">
            <div className="font-editorial text-5xl sm:text-6xl font-normal text-[#4A2415] tracking-tight">
              {activeEvent?.year}
            </div>
            <p className="font-editorial text-xl sm:text-2xl text-[#4A2415] leading-snug">
              {activeEvent?.text}
            </p>
          </div>

          <div className="pt-4 border-t border-[#4A2415]/10 text-xs text-[#4A2415]/70 flex items-center justify-between">
            <span className="italic font-light">Verified against Hermès Primary Heritage Archives</span>
            <div className="flex items-center gap-2">
              <button
                disabled={activeEventIndex <= 0}
                onClick={() => setActiveEventIndex(i => Math.max(0, i - 1))}
                className="px-3 py-1 rounded bg-[#F7F3ED] text-[#4A2415] border border-[#4A2415]/20 disabled:opacity-40 hover:border-[#F37021] font-medium text-xs transition-colors"
              >
                Previous
              </button>
              <button
                disabled={activeEventIndex >= filteredEvents.length - 1}
                onClick={() => setActiveEventIndex(i => Math.min(filteredEvents.length - 1, i + 1))}
                className="px-3 py-1 rounded bg-[#F7F3ED] text-[#4A2415] border border-[#4A2415]/20 disabled:opacity-40 hover:border-[#F37021] font-medium text-xs transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* Right: Year Scrubber & List */}
        <div className="lg:col-span-7 bg-[#EDE5D9]/40 rounded-2xl p-6 border border-[#D8CEBE] max-h-[440px] overflow-y-auto space-y-3">
          {filteredEvents.map((evt, idx) => {
            const isCurrent = idx === activeEventIndex;
            return (
              <div
                key={`${evt.year}-${idx}`}
                onClick={() => setActiveEventIndex(idx)}
                className={`p-4 rounded-xl cursor-pointer transition-all flex items-start gap-4 ${
                  isCurrent
                    ? 'bg-[#F7F3ED] shadow-sm border-l-4 border-[#F37021] text-[#4A2415]'
                    : 'hover:bg-[#EDE5D9] text-[#4A2415]/75'
                }`}
              >
                <div className={`font-bold text-sm tracking-wide shrink-0 ${isCurrent ? 'text-[#F37021]' : 'text-[#4A2415]/80'}`}>
                  {evt.year}
                </div>
                <div className={`text-xs sm:text-sm leading-relaxed flex-1 ${isCurrent ? 'font-medium' : 'font-light'}`}>
                  {evt.text}
                </div>
                <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#4A2415]/5 text-[#4A2415]/60 shrink-0 font-medium">
                  {evt.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
