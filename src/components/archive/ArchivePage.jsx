import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { archiveProjects } from '../../data/projects'
import TechBadge from '../ui/TechBadge'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function ArchiveCard({ project }) {
  const allTags = project.tags || []

  return (
    <div className="glass p-6 flex flex-col h-full rounded-xl">
      {/* Placeholder image */}
      <div
        className="aspect-video rounded-xl flex items-center justify-center mb-4 flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.06))',
          border: '1px solid rgba(99,102,241,0.1)',
        }}
      >
        <span className="gradient-text font-bold text-sm text-center px-4">{project.name}</span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-semibold text-slate-900 dark:text-white text-base leading-snug">{project.name}</h3>
          <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex-shrink-0">
            Completed
          </span>
        </div>

        <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{project.tagline}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3 flex-1">
          {project.shortDescription}
        </p>

        {project.note && (
          <p className="text-xs text-indigo-400/80 italic mb-3">{project.note}</p>
        )}

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/10">
          {allTags.slice(0, 5).map(tag => (
            <TechBadge key={tag} label={tag} small />
          ))}
          {allTags.length > 5 && (
            <span className="text-xs text-slate-500 self-center">+{allTags.length - 5}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function ArchivePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm mb-8 transition-colors mx-auto"
          >
            <FiArrowLeft size={16} /> Back to Portfolio
          </button>

          <p className="gradient-text text-xs font-semibold uppercase tracking-widest mb-3">[ Archive ]</p>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Early &amp; Academic Projects</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto">
            These represent earlier work — learning projects, academic explorations, and experiments from my journey as a developer.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {archiveProjects.map(project => (
            <motion.div key={project.id} variants={itemVariants}>
              <ArchiveCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ArchivePage
