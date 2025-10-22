export default function Hero() {
  const scrollToDownloads = () => {
    document.getElementById('downloads')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Icon placeholder */}
        <div className="flex justify-center">
          <div className="text-8xl">👻</div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transparent Note-Taking<br />for Multitaskers
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          A lightweight overlay notebook that stays visible while you watch videos, read docs, or browse the web.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={scrollToDownloads}
            className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-lg"
          >
            Download for Free
          </button>
          <a
            href="https://github.com/yahitscara/ghostpad"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gray-800 text-gray-100 rounded-lg font-semibold hover:bg-gray-700 transition-all border border-gray-700 text-lg"
          >
            View on GitHub
          </a>
        </div>

        <p className="text-sm text-gray-500 pt-4">
          Version 1.0.2 • Free & Open Source
        </p>
      </div>
    </section>
  );
}
