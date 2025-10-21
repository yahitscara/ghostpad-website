import ParallaxBackground from './components/ParallaxBackground';
import GhostPadWindow from './components/GhostPadWindow';
import ContentSections from './components/ContentSections';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Parallax Background */}
      <ParallaxBackground />

      {/* Main Content - GhostPad Window */}
      <GhostPadWindow>
        <ContentSections />
      </GhostPadWindow>
    </div>
  );
}

export default App;
