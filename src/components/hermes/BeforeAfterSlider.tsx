import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "1880 — Original Façade",
  afterLabel = "Present Day — 24 Faubourg"
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div
        ref={containerRef}
        id="before-after-slider-container"
        role="region"
        aria-label="Interactive Before and After Façade Comparison"
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl select-none cursor-ew-resize bg-[#EDE5D9] border border-[#D8CEBE]"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Current Day) - Background */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-[#4A2415]/80 backdrop-blur-sm text-[#F7F3ED] text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
          {afterLabel}
        </div>

        {/* Before Image (Historic) - Clipped Overlay */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              height: '100%'
            }}
          />
          <div className="absolute top-4 left-4 z-10 bg-[#4A2415]/80 backdrop-blur-sm text-[#F7F3ED] text-[11px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-[#F7F3ED] shadow-2xl z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#F37021] text-white shadow-xl flex items-center justify-center border-2 border-white">
            <SlidersHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Accessible Controls Bar */}
      <div className="flex flex-wrap items-center justify-between text-xs text-[#4A2415]/70 gap-2 px-1">
        <span className="italic">Drag the divider or use the buttons to compare eras</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSliderPosition(100)}
            className="px-2.5 py-1 rounded border border-[#4A2415]/20 hover:border-[#F37021] hover:text-[#F37021] transition-colors"
          >
            Show 1880
          </button>
          <button
            onClick={() => setSliderPosition(50)}
            className="px-2.5 py-1 rounded border border-[#4A2415]/20 hover:border-[#F37021] hover:text-[#F37021] transition-colors"
          >
            Split 50%
          </button>
          <button
            onClick={() => setSliderPosition(0)}
            className="px-2.5 py-1 rounded border border-[#4A2415]/20 hover:border-[#F37021] hover:text-[#F37021] transition-colors"
          >
            Show Present
          </button>
        </div>
      </div>
    </div>
  );
};
