import { useDraggable } from './hooks/useDraggable';
import BackgroundContent from './components/BackgroundContent';
import GhostPadWindow from './components/GhostPadWindow';
import ContentSections from './components/ContentSections';

function App() {
  const { dragRef, position, isDragging, handleMouseDown } = useDraggable();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* LAYER 1: Background - Static, full viewport, behind everything */}
      <BackgroundContent />

      {/* LAYER 2: Draggable Window Container - Centered with buffer space */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div
          ref={dragRef}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? 'grabbing' : 'default',
          }}
        >
          <GhostPadWindow onDragStart={handleMouseDown}>
            <ContentSections />
          </GhostPadWindow>
        </div>
      </div>
    </div>
  );
}

export default App;
