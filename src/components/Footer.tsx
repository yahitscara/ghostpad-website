export default function Footer() {
  return (
    <footer className="py-12 px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Social links */}
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://github.com/yahitscara/ghostpad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/yahitscara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://www.buymeacoffee.com/yahitscara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Buy me a coffee"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.9 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" />
            </svg>
          </a>
        </div>

        {/* Credits */}
        <p className="text-center text-gray-400">
          Made with 👻 by{' '}
          <a
            href="https://github.com/yahitscara"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Cara
          </a>
        </p>
        <p className="text-center text-gray-500 text-sm mt-2">MIT Licensed</p>
      </div>
    </footer>
  );
}
