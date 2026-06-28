import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiDownload, FiArrowRight } from 'react-icons/fi'
import { useTheme } from '../../hooks/useTheme'

const TYPEWRITER_TEXTS = [
  'Full Stack Developer',
  'Desktop App Builder',
  'Problem Solver',
  'Software Engineer',
]

function useTypewriter(texts, speed = 50, deleteSpeed = 30, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = texts[idx]
    let timeout

    if (typing) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), speed)
      } else {
        timeout = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(display.slice(0, -1)), deleteSpeed)
      } else {
        setIdx(i => (i + 1) % texts.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [display, typing, idx, texts, speed, deleteSpeed, pause])

  return display
}

// Hexagon point helper — centered at (cx, cy) with radius r
function hexPoints(cx, cy, r) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 30)
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`
  }).join(' ')
}

function MonogramAvatar() {
  const { theme } = useTheme()
  const dark = theme === 'dark'

  // ── Colour tokens — calibrated for each mode ──
  const c = {
    // Orbital rings
    orbPrimary:   dark ? '#6366f1'               : '#4338ca',
    orbSecondary: dark ? '#8b5cf6'               : '#7c3aed',
    orbOpacity:   dark ? 0.55                    : 0.85,
    orbInner:     dark ? 0.3                     : 0.6,
    leadDot:      dark ? '#818cf8'               : '#4338ca',
    trailDot:     dark ? '#a78bfa'               : '#7c3aed',
    // Hexagon
    hexFillA:     dark ? 'rgba(99,102,241,0.22)'  : 'rgba(67,56,202,0.12)',
    hexFillB:     dark ? 'rgba(139,92,246,0.12)'  : 'rgba(124,58,237,0.08)',
    hexBorderA:   dark ? '#6366f1'               : '#4338ca',
    hexBorderB:   dark ? '#8b5cf6'               : '#7c3aed',
    hexBorderOp:  dark ? 0.9                     : 1,
    innerHex:     dark ? 'rgba(99,102,241,0.25)'  : 'rgba(67,56,202,0.35)',
    glassCircle:  dark ? 'rgba(99,102,241,0.10)'  : 'rgba(67,56,202,0.08)',
    glassBorder:  dark ? 'rgba(99,102,241,0.20)'  : 'rgba(67,56,202,0.30)',
    dotA:         dark ? '#6366f1'               : '#3730a3',
    dotB:         dark ? '#8b5cf6'               : '#6d28d9',
    // Lettermark
    letterA:      dark ? '#c7d2fe'               : '#3730a3',
    letterB:      dark ? '#a78bfa'               : '#6d28d9',
    // Glow
    glow:         dark ? 'rgba(99,102,241,0.50)'  : 'rgba(67,56,202,0.30)',
    dropShadow:   dark
      ? 'drop-shadow(0 0 20px rgba(99,102,241,0.50))'
      : 'drop-shadow(0 0 12px rgba(67,56,202,0.30))',
  }

  return (
    <div className="relative flex items-center justify-center" style={{ width: 148, height: 148 }}>

      {/* ── Outer spinning dashed orbital ring ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      >
        <svg width="148" height="148" viewBox="0 0 148 148" fill="none">
          <defs>
            <linearGradient id="orbGrad" x1="0" y1="0" x2="148" y2="148" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={c.orbPrimary} stopOpacity={c.orbOpacity} />
              <stop offset="60%" stopColor={c.orbSecondary} stopOpacity={c.orbOpacity * 0.5} />
              <stop offset="100%" stopColor={c.orbPrimary} stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <circle cx="74" cy="74" r="70" stroke="url(#orbGrad)" strokeWidth="1.5"
            strokeDasharray="9 7" strokeLinecap="round" />
          {/* Bright leading dot */}
          <circle cx="74" cy="4" r="4" fill={c.leadDot} />
        </svg>
      </motion.div>

      {/* ── Slow counter-rotating inner ring ── */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        style={{ transformOrigin: 'center' }}
      >
        <svg width="148" height="148" viewBox="0 0 148 148" fill="none">
          <circle cx="74" cy="74" r="62" stroke={c.orbSecondary}
            strokeWidth="0.8" strokeDasharray="3 16" strokeLinecap="round" opacity={c.orbInner} />
          {/* Second accent dot */}
          <circle cx="74" cy="12" r="2.5" fill={c.trailDot} opacity="0.85" />
        </svg>
      </motion.div>

      {/* ── Main hexagon badge ── */}
      <motion.svg
        width="108" height="108"
        viewBox="0 0 108 108"
        fill="none"
        className="relative z-10"
        style={{ filter: c.dropShadow }}
        initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <defs>
          <linearGradient id="hexBg" x1="0" y1="0" x2="108" y2="108" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.hexFillA} />
            <stop offset="100%" stopColor={c.hexFillB} />
          </linearGradient>
          <linearGradient id="hexBorder" x1="0" y1="0" x2="108" y2="108" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.hexBorderA} />
            <stop offset="100%" stopColor={c.hexBorderB} />
          </linearGradient>
          <linearGradient id="letterGrad" x1="20" y1="28" x2="88" y2="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={c.letterA} />
            <stop offset="100%" stopColor={c.letterB} />
          </linearGradient>
          <filter id="letterGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={dark ? 2 : 1.5} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer hex — filled */}
        <polygon points={hexPoints(54, 54, 48)} fill="url(#hexBg)" />

        {/* Outer hex — border */}
        <polygon points={hexPoints(54, 54, 48)}
          stroke="url(#hexBorder)" strokeWidth="2" fill="none" opacity={c.hexBorderOp} />

        {/* Inner hex subtle frame */}
        <polygon points={hexPoints(54, 54, 38)}
          stroke={c.innerHex} strokeWidth="1" fill="none" />

        {/* Center glass circle */}
        <circle cx="54" cy="54" r="26"
          fill={c.glassCircle}
          stroke={c.glassBorder}
          strokeWidth="1" />

        {/* Vertex accent dots on outer hex */}
        {Array.from({ length: 6 }, (_, i) => {
          const angle = (Math.PI / 180) * (60 * i - 30)
          const x = 54 + 48 * Math.cos(angle)
          const y = 54 + 48 * Math.sin(angle)
          return (
            <circle key={i} cx={x} cy={y} r="2.8"
              fill={i % 2 === 0 ? c.dotA : c.dotB}
              opacity={dark ? 0.8 : 1} />
          )
        })}

        {/* "HE" lettermark */}
        <text
          x="54" y="65"
          textAnchor="middle"
          fill="url(#letterGrad)"
          fontSize="26"
          fontWeight="800"
          fontFamily="Inter, ui-sans-serif, system-ui"
          letterSpacing="-0.5"
          filter="url(#letterGlow)"
        >
          HE
        </text>
      </motion.svg>
    </div>
  )
}

function Hero() {
  const typedText = useTypewriter(TYPEWRITER_TEXTS)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-16">
      {/* Background orbs */}
      <motion.div
        className="orb"
        style={{ width: 400, height: 400, background: '#6366f1', opacity: 0.12, top: '10%', left: '-5%' }}
        animate={{ y: [0, -20, 0], opacity: [0.12, 0.18, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb"
        style={{ width: 300, height: 300, background: '#8b5cf6', opacity: 0.1, bottom: '10%', right: '-5%' }}
        animate={{ y: [0, 20, 0], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="orb"
        style={{ width: 200, height: 200, background: '#6366f1', opacity: 0.07, top: '40%', right: '15%' }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">

        {/* ── Monogram Avatar ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <MonogramAvatar />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gradient-text font-extrabold mb-4 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
        >
          Helmy Elfiky
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-4"
        >
          <span className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">
            {typedText}
            <span className="cursor-blink text-indigo-400">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-slate-500 dark:text-slate-400 text-base leading-relaxed max-w-lg mx-auto mb-8"
        >
          Building real-world software that solves real workflow problems.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={scrollToProjects} className="btn-primary">
            View My Work <FiArrowRight size={16} />
          </button>
          <a href="/Helmy%20Elfiky%20Resume.pdf" download="Helmy_Elfiky_Resume.pdf" className="btn-secondary dark:text-slate-100 text-slate-900">
            <FiDownload size={16} /> Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 dark:text-slate-400 animate-bounce2"
      >
        <FiChevronDown size={24} />
      </motion.button>
    </section>
  )
}

export default Hero
