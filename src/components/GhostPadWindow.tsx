import { useState, useEffect, useRef, type ReactNode } from 'react';
import OpacityControl from './OpacityControl';

interface GhostPadWindowProps {
  children: ReactNode;
}

export default function GhostPadWindow({ children }: GhostPadWindowProps) {
  const [opacity, setOpacity] = useState(85);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div
      className="w-full max-w-[800px] flex flex-col rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200"
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
      {/* Title Bar - EXACT match to app + DRAGGABLE */}
      <div
        className="title-bar h-8 rounded-t-lg border-b flex items-center justify-between px-2 transition-opacity duration-200 relative cursor-move active:cursor-grabbing"
        style={{
          backgroundColor: 'rgba(240, 240, 240, 0.6)',
          borderBottomColor: 'rgba(200, 200, 200, 0.3)',
          opacity: isHovered ? 1 : 0,
        }}
      >
        {/* Left side - Hamburger menu with dropdown */}
        <div className="relative" ref={menuRef}>
          <button
            className="px-2 py-1 text-lg text-gray-700 hover:bg-black/10 rounded transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Dropdown Menu - EXACT match to app */}
          {menuOpen && (
            <div
              className="absolute top-full left-0 mt-2 rounded-md shadow-lg z-50 p-2 min-w-[200px]"
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid rgba(200, 200, 200, 0.5)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Opacity Control */}
              <div className="p-2 mb-1">
                <label
                  className="text-xs font-medium block mb-1.5"
                  style={{ color: '#333' }}
                >
                  Opacity
                </label>
                <OpacityControl value={opacity} onChange={setOpacity} />
              </div>

              {/* Divider */}
              <div
                className="h-px my-1"
                style={{ background: 'rgba(200, 200, 200, 0.3)' }}
              />

              {/* Menu Buttons (non-functional for demo) */}
              <button
                className="w-full px-3 py-2 text-left text-sm rounded hover:bg-black/5 transition-colors flex items-center gap-2"
                style={{ color: '#333' }}
              >
                <span>☀️</span>
                <span>Dark Mode</span>
              </button>
            </div>
          )}
        </div>

        {/* Right side - Window controls */}
        <div className="flex gap-1.5">
          <button
            className="w-6 h-6 rounded text-gray-700 flex items-center justify-center text-base transition-colors"
            style={{
              background: 'rgba(200, 200, 200, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200, 200, 200, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(200, 200, 200, 0.3)';
            }}
          >
            −
          </button>
          <button
            className="w-6 h-6 rounded text-gray-700 flex items-center justify-center text-base transition-colors"
            style={{
              background: 'rgba(200, 200, 200, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(200, 200, 200, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(200, 200, 200, 0.3)';
            }}
          >
            □
          </button>
          <button
            className="w-6 h-6 rounded text-gray-700 flex items-center justify-center text-base transition-colors"
            style={{
              background: 'rgba(200, 200, 200, 0.3)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 59, 48, 0.8)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(200, 200, 200, 0.3)';
              e.currentTarget.style.color = '#333';
            }}
          >
            ×
          </button>
        </div>
      </div>

      {/* Content Area - SCROLLABLE */}
      <div
        className="overflow-y-auto"
        style={{
          maxHeight: '600px',
        }}
      >
        {children}
      </div>
    </div>
  );
}
