import React, { useState } from 'react';
import { Minimize2, Maximize2, X, Play, Move } from 'lucide-react';

export const FloatingVideo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [size, setSize] = useState<'small' | 'medium' | 'large'>('small');
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) {
    return (
      <button
        id="reopen-floating-video-btn"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2 bg-[#4A2415] text-[#F7F3ED] rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-[#F37021] transition-colors border border-[#F7F3ED]/20"
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        <span>Watch Documentary Video</span>
      </button>
    );
  }

  const sizeClasses = {
    small: 'w-72 sm:w-80 h-44 sm:h-48',
    medium: 'w-96 h-56',
    large: 'w-[480px] h-72'
  };

  return (
    <aside
      id="floating-video-container"
      aria-label="Hermès Documentary Player"
      className={`fixed bottom-6 left-6 z-40 bg-[#4A2415] text-[#F7F3ED] rounded-2xl shadow-2xl overflow-hidden border border-[#EDE5D9]/30 transition-all duration-300 ${
        isMinimized ? 'w-64 h-12' : sizeClasses[size]
      }`}
    >
      {/* Window Controls Bar */}
      <div className="h-10 px-3 bg-[#381B10] flex items-center justify-between border-b border-[#4A2415] select-none cursor-move">
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[#EDE5D9]/80 truncate">
          <Move className="w-3 h-3 text-[#F37021]" />
          <span className="truncate">Hermès — Savoir-Faire Film</span>
        </div>

        <div className="flex items-center space-x-1">
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
        <div className="w-full h-[calc(100%-2.5rem)] bg-black">
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
