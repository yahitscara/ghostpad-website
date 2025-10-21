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
    mac: 'https://github.com/yahitscara/ghostpad/releases/latest',
    windows: 'https://github.com/yahitscara/ghostpad/releases/latest',
    linux: 'https://github.com/yahitscara/ghostpad/releases/latest',
  };

  return (
    <div className="p-8 space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          This IS GhostPad
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Adjust the opacity slider above to see what makes GhostPad special
        </p>
        <p className="text-sm text-gray-500 italic">
          You're experiencing it right now
        </p>
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">👻</span>
            <div>
              <h3 className="font-semibold text-gray-900">Adjustable Transparency</h3>
              <p className="text-sm text-gray-600">10-100% opacity control</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📌</span>
            <div>
              <h3 className="font-semibold text-gray-900">Always On Top</h3>
              <p className="text-sm text-gray-600">Stays visible over other apps</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌓</span>
            <div>
              <h3 className="font-semibold text-gray-900">Dark Mode</h3>
              <p className="text-sm text-gray-600">Easy on the eyes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">💾</span>
            <div>
              <h3 className="font-semibold text-gray-900">Auto-Save</h3>
              <p className="text-sm text-gray-600">Never lose your work</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔗</span>
            <div>
              <h3 className="font-semibold text-gray-900">Obsidian Compatible</h3>
              <p className="text-sm text-gray-600">Works with your vault</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⌨️</span>
            <div>
              <h3 className="font-semibold text-gray-900">Keyboard Shortcuts</h3>
              <p className="text-sm text-gray-600">Cmd/Ctrl + O/S/Q</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Perfect For</h2>
        <ul className="space-y-3 max-w-2xl mx-auto">
          <li className="flex items-start gap-2">
            <span className="text-gray-700">•</span>
            <span className="text-gray-700">Taking notes while watching videos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-700">•</span>
            <span className="text-gray-700">Coding with documentation visible</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-700">•</span>
            <span className="text-gray-700">Writing with reference material</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-gray-700">•</span>
            <span className="text-gray-700">Learning from tutorials</span>
          </li>
        </ul>
      </section>

      {/* Download Section */}
      <section className="space-y-6 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Download GhostPad</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={downloadLinks.mac}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              detectedOS === 'mac'
                ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            Download for macOS
          </a>
          <a
            href={downloadLinks.windows}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              detectedOS === 'windows'
                ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            Download for Windows
          </a>
          <a
            href={downloadLinks.linux}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              detectedOS === 'linux'
                ? 'bg-blue-600 text-white hover:bg-blue-700 ring-2 ring-blue-400'
                : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
            }`}
          >
            Download for Linux
          </a>
        </div>
        <p className="text-center text-sm text-gray-500">
          Version 1.0.3 • Free and open source
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
