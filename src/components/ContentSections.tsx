import { useEffect, useState } from 'react';

export default function ContentSections() {
  const [detectedOS, setDetectedOS] = useState<'mac' | 'windows' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) {
      setDetectedOS('mac');
    } else if (userAgent.includes('win')) {
      setDetectedOS('windows');
    } else if (userAgent.includes('linux')) {
      setDetectedOS('linux');
    }
  }, []);

  const downloadLinks = {
    mac: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2-arm64.dmg',
    macIntel: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2.dmg',
    windows: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad.Setup.1.0.2.exe',
    windowsPortable: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad.1.0.2.exe',
    linuxAppImage: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2.AppImage',
    linuxDeb: 'https://github.com/yahitscara/ghostpad/releases/latest/download/ghostpad_1.0.2_amd64.deb',
  };

  const scrollToDownload = () => {
    document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          See Through the Noise.
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          A transparent notepad that floats above every app—so you can write, learn, and code without losing sight of what matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={scrollToDownload}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            → Download GhostPad
          </button>
          <a
            href="#demo"
            className="px-8 py-3 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all"
          >
            → Try It Now
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🫧</span>
              <h3 className="font-bold text-gray-900">Adjustable Transparency</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Dial in visibility from 10–100%.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <h3 className="font-bold text-gray-900">Always-On-Top Mode</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Your notes, your way, anywhere.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌗</span>
              <h3 className="font-bold text-gray-900">Dark Mode</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Clarity that's easy on the eyes.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💾</span>
              <h3 className="font-bold text-gray-900">Auto-Save</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Because ideas shouldn't vanish.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔗</span>
              <h3 className="font-bold text-gray-900">Obsidian Integration</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Instantly sync with your vault.</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">⌨️</span>
              <h3 className="font-bold text-gray-900">Keyboard Shortcuts</h3>
            </div>
            <p className="text-gray-600 text-sm pl-8">Quick controls that keep you in flow.</p>
          </div>
        </div>

        <p className="text-center text-lg text-gray-800 font-medium italic max-w-2xl mx-auto pt-8">
          For thinkers, coders, and creators who work between worlds.
        </p>
      </section>

      {/* Supporting Paragraph */}
      <section className="space-y-6 max-w-2xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          GhostPad lets you take notes without breaking flow. Adjust the transparency, pin it above any window, and stay connected to your work beneath. Whether you're studying a tutorial, writing with references, or coding from documentation—you'll never have to switch tabs again.
        </p>
      </section>

      {/* Download Section */}
      <section id="download-section" className="space-y-8 pb-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Download GhostPad</h2>

        {/* macOS */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">macOS</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={downloadLinks.mac}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                detectedOS === 'mac'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Apple Silicon (M1/M2/M3)
            </a>
            <a
              href={downloadLinks.macIntel}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-900 hover:bg-gray-300 transition-all"
            >
              Intel Mac
            </a>
          </div>
        </div>

        {/* Windows */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Windows</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={downloadLinks.windows}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                detectedOS === 'windows'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              Installer (Recommended)
            </a>
            <a
              href={downloadLinks.windowsPortable}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-900 hover:bg-gray-300 transition-all"
            >
              Portable Version
            </a>
          </div>
        </div>

        {/* Linux */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 text-center">Linux</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={downloadLinks.linuxAppImage}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                detectedOS === 'linux'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
              }`}
            >
              AppImage (Universal)
            </a>
            <a
              href={downloadLinks.linuxDeb}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-200 text-gray-900 hover:bg-gray-300 transition-all"
            >
              .deb (Ubuntu/Debian)
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 pt-4">
          Version 1.0.2 • Free and open source
        </p>
      </section>

      {/* Footer Section */}
      <footer className="border-t border-gray-200 pt-8 pb-4">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/yahitscara/ghostpad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          Made with care by <a href="https://github.com/yahitscara" className="text-blue-600 hover:text-blue-700">yahitscara</a>
        </p>
      </footer>
    </div>
  );
}
