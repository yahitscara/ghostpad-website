import BackgroundContent from './components/BackgroundContent';
import GhostPadWindow from './components/GhostPadWindow';
import ContentSections from './components/ContentSections';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* LAYER 1: Background Content - This is what you see THROUGH the window */}
      <BackgroundContent />

      {/* LAYER 2: GhostPad Window - Floats on top with transparency */}
      <GhostPadWindow>
        <ContentSections />
      </GhostPadWindow>
    </div>
  );
}

export default App;
