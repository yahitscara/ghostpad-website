import { useState, type ReactNode } from 'react';
import OpacityControl from './OpacityControl';

interface GhostPadWindowProps {
  children: ReactNode;
}

export default function GhostPadWindow({ children }: GhostPadWindowProps) {
  const [opacity, setOpacity] = useState(65);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative z-10 min-h-screen flex items-start justify-center py-16 px-6">
      <div
        className="w-full max-w-2xl rounded-lg shadow-2xl transition-all duration-200"
        style={{
          opacity: opacity / 100,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          border: isHovered ? '2px solid rgba(0, 0, 0, 0.2)' : '2px solid rgba(0, 0, 0, 0)',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Title Bar */}
        <div
          className="h-8 rounded-t-lg border-b flex items-center justify-between px-2 transition-opacity duration-200"
          style={{
            backgroundColor: 'rgba(240, 240, 240, 0.6)',
            borderBottomColor: 'rgba(200, 200, 200, 0.3)',
            opacity: isHovered ? 1 : 0,
          }}
        >
          {/* Left side - Menu button (non-functional) */}
          <button
            className="px-2 py-1 text-sm text-gray-700 hover:bg-black/10 rounded transition-colors cursor-default"
            onClick={(e) => e.preventDefault()}
          >
            ☰
          </button>

          {/* Center - Opacity Control */}
          <div className="flex-1 max-w-xs px-4">
            <OpacityControl value={opacity} onChange={setOpacity} />
          </div>

          {/* Right side - Window controls (non-functional) */}
          <div className="flex gap-1.5">
            <button
              className="w-6 h-6 bg-gray-300/30 hover:bg-gray-300/50 rounded text-gray-700 flex items-center justify-center text-base transition-colors cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              −
            </button>
            <button
              className="w-6 h-6 bg-gray-300/30 hover:bg-gray-300/50 rounded text-gray-700 flex items-center justify-center text-base transition-colors cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              □
            </button>
            <button
              className="w-6 h-6 bg-gray-300/30 hover:bg-red-500/80 hover:text-white rounded text-gray-700 flex items-center justify-center text-base transition-colors cursor-default"
              onClick={(e) => e.preventDefault()}
            >
              ×
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </div>
  );
}
