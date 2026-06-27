import { FiGithub, FiLinkedin } from 'react-icons/fi'

function Footer() {
  return (
    <footer
      className="py-10 px-4 text-center"
      style={{
        background: 'rgba(0,0,0,0.2)',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Logo + name */}
        <div className="flex items-center justify-center gap-3">
          <span
            className="gradient-text text-lg font-extrabold w-8 h-8 flex items-center justify-center rounded-lg"
            style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
          >
            HE
          </span>
          <span className="text-slate-900 dark:text-white font-semibold">Helmy Elfiky</span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400">Building real software for real problems.</p>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/helmyelfiky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="glass w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/helmyelfiky"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="glass w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FiLinkedin size={16} />
          </a>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-500">
          © 2025 Helmy Elfiky · Built with React &amp; ❤️
        </p>
      </div>
    </footer>
  )
}

export default Footer
