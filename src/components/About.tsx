export default function About() {
  return (
    <section className="py-24 px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          See Through to What Matters
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Media placeholder */}
          <div className="order-2 md:order-1">
            <div className="aspect-video border-2 border-dashed border-gray-600 rounded-lg bg-gray-900/50 flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <svg
                  className="w-16 h-16 mx-auto text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-gray-400 font-medium">Screenshot/GIF goes here</p>
                <p className="text-sm text-gray-500">800×500px recommended</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="order-1 md:order-2 space-y-6">
            <p className="text-xl text-gray-300 leading-relaxed">
              GhostPad is a minimalist note-taking app that floats over your other windows with adjustable transparency.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Perfect for taking notes while learning, coding, or working — never lose sight of what's important.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
