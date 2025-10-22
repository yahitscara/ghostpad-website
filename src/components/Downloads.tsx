import { useEffect, useState } from 'react';

export default function Downloads() {
  const [detectedOS, setDetectedOS] = useState<'mac' | 'windows' | 'linux' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform.toLowerCase();

    if (platform.includes('mac') || userAgent.includes('mac')) {
      setDetectedOS('mac');
    } else if (platform.includes('win') || userAgent.includes('win')) {
      setDetectedOS('windows');
    } else if (platform.includes('linux') || userAgent.includes('linux')) {
      setDetectedOS('linux');
    }
  }, []);

  const downloadLinks = {
    macArm: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2-arm64.dmg',
    macIntel: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2.dmg',
    windowsInstaller: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad.Setup.1.0.2.exe',
    windowsPortable: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad.1.0.2.exe',
    linuxAppImage: 'https://github.com/yahitscara/ghostpad/releases/latest/download/GhostPad-1.0.2.AppImage',
    linuxDeb: 'https://github.com/yahitscara/ghostpad/releases/latest/download/ghostpad_1.0.2_amd64.deb',
  };

  const DownloadButton = ({
    href,
    children,
    highlighted = false,
  }: {
    href: string;
    children: React.ReactNode;
    highlighted?: boolean;
  }) => (
    <a
      href={href}
      className={`px-6 py-3 rounded-lg font-semibold transition-all text-center ${
        highlighted
          ? 'bg-purple-600 text-white hover:bg-purple-700 ring-2 ring-purple-500 transform scale-105'
          : 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700'
      }`}
    >
      {children}
    </a>
  );

  return (
    <section id="downloads" className="py-24 px-8 scroll-mt-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Download GhostPad
        </h2>

        {/* macOS */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-300">macOS</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <DownloadButton href={downloadLinks.macArm} highlighted={detectedOS === 'mac'}>
              Apple Silicon (M1/M2/M3)
            </DownloadButton>
            <DownloadButton href={downloadLinks.macIntel}>Intel Mac</DownloadButton>
          </div>
        </div>

        {/* Windows */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-300">Windows</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <DownloadButton href={downloadLinks.windowsInstaller} highlighted={detectedOS === 'windows'}>
              Installer (Recommended)
            </DownloadButton>
            <DownloadButton href={downloadLinks.windowsPortable}>Portable Version</DownloadButton>
          </div>
        </div>

        {/* Linux */}
        <div className="space-y-6 mb-12">
          <h3 className="text-2xl font-semibold text-center text-gray-300">Linux</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <DownloadButton href={downloadLinks.linuxAppImage} highlighted={detectedOS === 'linux'}>
              AppImage (Universal)
            </DownloadButton>
            <DownloadButton href={downloadLinks.linuxDeb}>.deb (Ubuntu/Debian)</DownloadButton>
          </div>
        </div>

        {/* GitHub link */}
        <div className="text-center pt-8">
          <a
            href="https://github.com/yahitscara/ghostpad/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>View all releases and documentation on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
