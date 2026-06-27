import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from '../ui/ThemeToggle'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.3 }
    )
    NAV_LINKS.forEach(l => {
      const el = document.getElementById(l.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const scrollTo = (id) => {
    setMobileOpen(false)
    if (isHome) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || mobileOpen ? 'backdrop-blur-md' : ''}`}
        style={scrolled || mobileOpen
          ? { background: 'var(--navbar-bg)', borderBottom: '1px solid var(--navbar-border)' }
          : { background: 'transparent' }
        }
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            aria-label="Home"
            className="flex items-center gap-2"
          >
            <span
              className="gradient-text text-xl font-extrabold w-9 h-9 flex items-center justify-center rounded-lg"
              style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
            >
              HE
            </span>
          </button>

          {/* Desktop nav */}
          {isHome && (
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                    activeSection === link.id
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
                    />
                  )}
                </button>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {isHome && (
              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
                className="md:hidden glass w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300"
              >
                {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && isHome && (
          <motion.div
            className="fixed top-16 left-0 right-0 z-30 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ background: 'var(--navbar-bg)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--navbar-border)' }}
          >
            <nav className="flex flex-col py-4 px-4">
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left py-3 text-sm font-medium border-b border-black/5 dark:border-white/5 last:border-0 transition-colors ${
                    activeSection === link.id ? 'gradient-text' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
