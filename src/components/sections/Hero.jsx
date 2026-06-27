import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown, FiDownload, FiArrowRight } from 'react-icons/fi'

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
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center animate-pulse-glow relative"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #6366f1, #8b5cf6) 1',
              boxShadow: '0 0 40px rgba(99,102,241,0.3)',
              borderRadius: '50%',
            }}
          >
            {/* Gradient ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'transparent',
                boxShadow: '0 0 0 2px transparent',
                backgroundImage: 'linear-gradient(rgba(99,102,241,0.08), rgba(99,102,241,0.08)), linear-gradient(135deg, #6366f1, #8b5cf6)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                border: '2px solid transparent',
                borderRadius: '50%',
              }}
            />
            <span className="gradient-text text-3xl md:text-4xl font-extrabold">HE</span>
          </div>
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
          {/* TODO: Replace href="#" with actual CV PDF link */}
          <a href="#" className="btn-secondary dark:text-slate-100 text-slate-900">
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
