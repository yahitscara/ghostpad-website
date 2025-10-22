export default function Features() {
  const features = [
    {
      icon: '🫧',
      title: 'Adjustable Transparency',
      description: 'Control opacity from 10-100% to see exactly what you need beneath your notes.',
    },
    {
      icon: '📍',
      title: 'Always On Top',
      description: 'Stays visible over all your applications so you never lose your notes.',
    },
    {
      icon: '💾',
      title: 'Auto-Save',
      description: 'Your work saves automatically every 2 seconds. No manual saving required.',
    },
    {
      icon: '🌗',
      title: 'Dark Mode',
      description: 'Easy on the eyes, day or night. Toggle between light and dark themes.',
    },
    {
      icon: '🔗',
      title: 'Obsidian Integration',
      description: 'Instantly sync your notes with your Obsidian vault.',
    },
    {
      icon: '⌨️',
      title: 'Keyboard Shortcuts',
      description: 'Quick controls that keep you in flow without reaching for the mouse.',
    },
  ];

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Everything You Need,<br />Nothing You Don't
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="space-y-3 p-6 rounded-lg bg-gray-800/30 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-100">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
