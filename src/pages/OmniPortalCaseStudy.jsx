import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { mainProjects } from '../data/projects'
import TechBadge from '../components/ui/TechBadge'

const project = mainProjects.find(p => p.slug === 'omni-portal')

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
}

function AccordionItem({ title, description }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="font-semibold text-slate-900 dark:text-white">{title}</span>
        {open ? <FiChevronUp className="text-indigo-400 flex-shrink-0" /> : <FiChevronDown className="text-indigo-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-white/5 pt-4">
          {description}
        </div>
      )}
    </div>
  )
}

function OmniPortalCaseStudy() {
  const navigate = useNavigate()

  if (!project) return <div className="min-h-screen flex items-center justify-center text-white">Project not found.</div>

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back */}
        <motion.button
          {...fadeUp}
          onClick={() => { navigate('/'); setTimeout(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }), 100) }}
          className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm mb-10 transition-colors"
        >
          <FiArrowLeft size={16} /> Back to Portfolio
        </motion.button>

        {/* Hero */}
        <motion.div {...fadeUp} className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
            </span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">Enterprise</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300">Azure</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
            {project.name}
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-6">{project.tagline}</p>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            <FiExternalLink size={16} /> View Live Demo
          </a>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 italic">
            Repository hosted on IBM Enterprise GitHub (private). Live demo available above.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.section {...fadeUp} className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="gradient-text">01</span> Problem → Solution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-red-400 mb-3">The Problem</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-400 mb-3">The Solution</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </motion.section>

        {/* Architecture */}
        <motion.section {...fadeUp} className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="gradient-text">02</span> Architecture Overview
          </h2>
          <div className="glass p-6 rounded-xl">
            <div className="flex flex-col items-center gap-3">
              {/* Launchpad */}
              <div className="px-6 py-3 rounded-xl text-sm font-semibold text-white text-center" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', minWidth: 160 }}>
                Launchpad (React Shell)
              </div>
              <div className="text-slate-500 dark:text-slate-400">↓</div>
              {/* Three subsystems */}
              <div className="flex flex-wrap justify-center gap-4">
                {['Break Management', 'QA Audit System', 'RBAC & Employees'].map(s => (
                  <div key={s} className="px-4 py-2 rounded-lg text-xs font-semibold text-indigo-300 text-center" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', minWidth: 130 }}>
                    {s}
                  </div>
                ))}
              </div>
              <div className="text-slate-500 dark:text-slate-400">↓</div>
              {/* Backend */}
              <div className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-900 dark:text-white text-center" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', minWidth: 200 }}>
                Express / Node.js + Socket.IO
              </div>
              <div className="text-slate-500 dark:text-slate-400">↓</div>
              <div className="flex flex-wrap justify-center gap-4">
                {['SQLite (local)', 'Azure Key Vault', 'Azure App Service'].map(s => (
                  <div key={s} className="px-3 py-2 rounded-lg text-xs font-medium text-blue-300 text-center" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', minWidth: 110 }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section {...fadeUp} className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="gradient-text">03</span> Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.keyFeatures.map((f, i) => (
              <div key={i} className="glass p-5 rounded-xl">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">{f.label}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Challenges */}
        <motion.section {...fadeUp} className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="gradient-text">04</span> Technical Challenges
          </h2>
          <div className="space-y-3">
            {project.challenges.map((c, i) => (
              <AccordionItem key={i} title={c.title} description={c.description} />
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section {...fadeUp} className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="gradient-text">05</span> Tech Stack
          </h2>
          <div className="glass p-6 rounded-xl space-y-4">
            {Object.entries(project.techStack).map(([layer, items]) =>
              items && items.length > 0 ? (
                <div key={layer}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 capitalize">{layer}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map(t => <TechBadge key={t} label={t} />)}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </motion.section>

        {/* Footer note */}
        <motion.div {...fadeUp} className="glass p-5 rounded-xl text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">
            Internal enterprise tool — GitHub repository hosted on IBM Enterprise GitHub (private).
            Live demo available at the link above.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default OmniPortalCaseStudy
