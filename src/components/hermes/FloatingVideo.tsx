import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Minimize2, Maximize2, X, Play, Move, GripHorizontal } from 'lucide-react';

export const FloatingVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
  const [isMinimized, setIsMinimized] = useState(false);

  // Dragging state
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number }>({
    mouseX: 0,
    mouseY: 0,
    startX: 0,
    startY: 0
  });
  const containerRef = useRef<HTMLElement>(null);

  // Initialize position at bottom-left on first mount
  useEffect(() => {
    if (typeof window !== 'undefined' && position === null) {
      const initialX = 24;
      const initialY = Math.max(24, window.innerHeight - 240);
      setPosition({ x: initialX, y: initialY });
    }
  }, [position]);

  // Keep inside viewport on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!position || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const maxX = Math.max(12, window.innerWidth - rect.width - 12);
      const maxY = Math.max(12, window.innerHeight - rect.height - 12);
      setPosition((prev) => {
        if (!prev) return prev;
        return {
          x: Math.min(Math.max(12, prev.x), maxX),
          y: Math.min(Math.max(12, prev.y), maxY)
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [position]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only drag with primary mouse button
    if (e.button !== 0) return;
    
    // Do not initiate drag if clicking an action button
    const target = e.target as HTMLElement;
    if (target.closest('button')) return;

    e.preventDefault();
    setIsDragging(true);

    const currentX = position?.x ?? 24;
    const currentY = position?.y ?? (window.innerHeight - 240);

    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: currentX,
      startY: currentY
    };
  }, [position]);

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const deltaX = e.clientX - dragStartRef.current.mouseX;
      const deltaY = e.clientY - dragStartRef.current.mouseY;

      const rect = containerRef.current.getBoundingClientRect();
      const maxX = Math.max(12, window.innerWidth - rect.width - 12);
      const maxY = Math.max(12, window.innerHeight - rect.height - 12);

      const nextX = Math.min(Math.max(12, dragStartRef.current.startX + deltaX), maxX);
      const nextY = Math.min(Math.max(12, dragStartRef.current.startY + deltaY), maxY);

      setPosition({ x: nextX, y: nextY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('pointercancel', handlePointerUp);
    };
  }, [isDragging]);

  if (!isOpen) {
    return (
      <button
        id="reopen-floating-video-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-[#4A2415] text-[#F7F3ED] rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-[#F37021] transition-colors border border-[#F7F3ED]/20"
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        <span>Watch Documentary Video</span>
      </button>
    );
  }

  const sizeClasses = {
    small: 'w-72 sm:w-80 h-44 sm:h-48',
    medium: 'w-88 sm:w-96 h-52 sm:h-56',
    large: 'w-[90vw] sm:w-[480px] h-64 sm:h-72'
  };

  const currentStyle: React.CSSProperties = position
    ? {
        left: `${position.x}px`,
        top: `${position.y}px`,
        touchAction: 'none'
      }
    : {
        left: '24px',
        bottom: '24px'
      };

  return (
    <aside
      ref={containerRef}
      id="floating-video-container"
      aria-label="Hermès Documentary Player"
      style={currentStyle}
      className={`fixed z-40 bg-[#4A2415] text-[#F7F3ED] rounded-2xl shadow-2xl overflow-hidden border border-[#EDE5D9]/30 transition-shadow ${
        isDragging ? 'shadow-2xl ring-2 ring-[#F37021]/50 cursor-grabbing' : 'shadow-xl'
      } ${isMinimized ? 'w-64 h-11' : sizeClasses[size]}`}
    >
      {/* Window Controls Bar / Drag Handle */}
      <div
        onPointerDown={handlePointerDown}
        className={`h-10 px-3 bg-[#381B10] flex items-center justify-between border-b border-[#4A2415] select-none transition-colors ${
          isDragging ? 'cursor-grabbing bg-[#2e150c]' : 'cursor-grab hover:bg-[#3f1f13]'
        }`}
        title="Click and drag to reposition anywhere on the page"
      >
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[#EDE5D9]/90 truncate">
          <GripHorizontal className="w-4 h-4 text-[#F37021] flex-shrink-0" />
          <span className="truncate">Hermès — Savoir-Faire Film</span>
        </div>

        <div className="flex items-center space-x-1" onPointerDown={(e) => e.stopPropagation()}>
          <button
            id="floating-video-minimize"
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:text-[#F37021] text-[#EDE5D9]/70 rounded transition-colors"
            title={isMinimized ? "Expand" : "Minimize"}
            aria-label={isMinimized ? "Expand video" : "Minimize video"}
          >
            <Minimize2 className="w-3.5 h-3.5" />
          </button>

          {!isMinimized && (
            <button
              id="floating-video-resize"
              onClick={() => {
                if (size === 'small') setSize('medium');
                else if (size === 'medium') setSize('large');
                else setSize('small');
              }}
              className="p-1 hover:text-[#F37021] text-[#EDE5D9]/70 rounded transition-colors"
              title="Toggle size"
              aria-label="Toggle video size"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            id="floating-video-close"
            onClick={() => setIsOpen(false)}
            className="p-1 hover:text-red-400 text-[#EDE5D9]/70 rounded transition-colors"
            title="Close"
            aria-label="Close video player"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Video Content */}
      {!isMinimized && (
        <div className="relative w-full h-[calc(100%-2.5rem)] bg-black">
          {/* Transparent shield while dragging so pointer events don't get trapped by the iframe */}
          {isDragging && (
            <div className="absolute inset-0 z-50 bg-transparent cursor-grabbing" />
          )}
          <iframe
            id="hermes-youtube-iframe"
            className="w-full h-full border-0"
            src="https://www.youtube-nocookie.com/embed/gWytOYNISC8?enablejsapi=1&origin=https://localhost"
            title="Hermès Artisan Savoir-Faire"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </aside>
  );
};
