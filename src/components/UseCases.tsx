export default function UseCases() {
  const useCases = [
    'Taking notes while watching tutorials',
    'Coding with documentation visible',
    'Learning from videos or lectures',
    'Referencing material while writing',
  ];

  return (
    <section className="py-24 px-8 bg-gray-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Perfect For...
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Media placeholder */}
          <div>
            <div className="aspect-video border-2 border-dashed border-gray-600 rounded-lg bg-gray-900/50 flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <svg
                  className="w-20 h-20 mx-auto text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-gray-400 font-medium">Demo video/GIF goes here</p>
                <p className="text-sm text-gray-500">600×400px recommended</p>
              </div>
            </div>
          </div>

          {/* Use cases list */}
          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-xl text-gray-300 pt-1">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
