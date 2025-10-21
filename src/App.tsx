import BackgroundContent from './components/BackgroundContent';
import GhostPadWindow from './components/GhostPadWindow';
import ContentSections from './components/ContentSections';

function App() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* LAYER 1: Background - Static, full viewport, behind everything */}
      <BackgroundContent />

      {/* LAYER 2: Window Container - Centered with buffer space */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <GhostPadWindow>
          <ContentSections />
        </GhostPadWindow>
      </div>
    </div>
  );
}

export default App;
