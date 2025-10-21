export default function BackgroundContent() {
  return (
    <div className="fixed inset-0 w-full min-h-screen overflow-hidden pointer-events-none">
      {/* This content will be BEHIND the GhostPad window, visible through transparency */}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" />

      {/* Floating Code Snippets */}
      <div className="absolute top-20 left-10 opacity-30 text-sm font-mono text-gray-700 transform -rotate-3">
        <pre className="bg-white/50 p-4 rounded shadow-lg backdrop-blur-sm">
{`function createNote() {
  const idea = capture();
  return idea.save();
}`}
        </pre>
      </div>

      <div className="absolute top-40 right-20 opacity-30 text-sm font-mono text-gray-700 transform rotate-2">
        <pre className="bg-white/50 p-4 rounded shadow-lg backdrop-blur-sm">
{`// Stay in flow
while (learning) {
  takeNotes();
  seeThrough();
}`}
        </pre>
      </div>

      <div className="absolute bottom-32 left-20 opacity-30 text-sm font-mono text-gray-700 transform rotate-1">
        <pre className="bg-white/50 p-4 rounded shadow-lg backdrop-blur-sm">
{`const ghostpad = {
  transparency: true,
  alwaysOnTop: true,
  autoSave: true
}`}
        </pre>
      </div>

      <div className="absolute bottom-20 right-32 opacity-30 text-sm font-mono text-gray-700 transform -rotate-2">
        <pre className="bg-white/50 p-4 rounded shadow-lg backdrop-blur-sm">
{`# Quick Notes
- Tutorial timestamp: 12:34
- Key concept: state mgmt
- Follow up: refactor`}
        </pre>
      </div>

      {/* Floating Text Elements */}
      <div className="absolute top-60 left-1/4 opacity-20 text-2xl font-bold text-indigo-600 transform -rotate-12">
        See through
      </div>

      <div className="absolute top-96 right-1/4 opacity-20 text-2xl font-bold text-purple-600 transform rotate-6">
        Stay focused
      </div>

      <div className="absolute bottom-60 left-1/3 opacity-20 text-2xl font-bold text-blue-600 transform rotate-3">
        Never switch tabs
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-br from-purple-300/20 to-blue-300/20 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-10 w-40 h-40 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-2xl" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300/20 to-indigo-300/20 rounded-full blur-2xl" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(to right, #8882 1px, transparent 1px),
          linear-gradient(to bottom, #8882 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
    </div>
  );
}
