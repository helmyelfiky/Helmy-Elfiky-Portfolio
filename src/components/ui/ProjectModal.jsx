import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import TechBadge from './TechBadge'
import ImageLightbox from './ImageLightbox'

function StatusBadge({ status }) {
  if (status === 'completed') return <span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">Completed</span>
  if (status === 'in-progress') return <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">In Progress</span>
  return null
}

function ProjectModal({ project, onClose }) {
  const [fullscreenImage, setFullscreenImage] = useState(null)

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null

  const allTech = [
    ...(project.techStack?.frontend || []),
    ...(project.techStack?.backend || []),
    ...(project.techStack?.database || []),
    ...(project.techStack?.devops || []),
    ...(project.techStack?.other || []),
  ]

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0"
          style={{ background: 'rgba(7,11,20,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal */}
        <motion.div
          className="relative glass max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 glass w-9 h-9 rounded-full flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
          >
            <FiX size={16} />
          </button>

          <div className="p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h2>
                <StatusBadge status={project.status} />
              </div>
              <p className="gradient-text font-semibold">{project.tagline}</p>
              {project.isInternalTool && (
                <span className="inline-flex mt-2 text-xs font-semibold px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  Internal Tool
                </span>
              )}
            </div>

            {/* Short description */}
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
              {project.shortDescription}
            </p>

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Gallery</h3>
                <div 
                  className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory rounded-xl custom-scrollbar"
                  style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: 'rgba(99,102,241,0.3) transparent',
                  }}
                >
                  {project.screenshots.map((src, i) => (
                    <div 
                      key={i} 
                      className="min-w-[85%] md:min-w-[70%] flex-shrink-0 snap-center rounded-xl overflow-hidden border border-indigo-500/10 bg-slate-800/40 relative group flex items-center justify-center p-2 cursor-pointer"
                      onClick={() => setFullscreenImage(src)}
                    >
                      <img 
                        src={src} 
                        alt={`${project.name} screenshot ${i + 1}`} 
                        className="w-full h-auto max-h-48 md:max-h-64 lg:max-h-80 object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-lg"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none rounded-xl">
                        <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full transition-opacity duration-300 backdrop-blur-sm">Click to expand</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {project.keyFeatures.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="gradient-text font-bold mt-0.5">›</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenge & Solution */}
            {project.topChallenge && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Challenge → Solution</h3>
                <div className="glass p-4" style={{ borderRadius: '10px' }}>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold mb-1 uppercase tracking-wide">Problem</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">{project.topChallenge.problem}</p>
                  <p className="text-xs text-indigo-400 font-semibold mb-1 uppercase tracking-wide">Solution</p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{project.topChallenge.solution}</p>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Tech Stack</h3>
              {Object.entries(project.techStack || {}).map(([layer, items]) => (
                items && items.length > 0 ? (
                  <div key={layer} className="mb-2">
                    <span className="text-xs text-slate-500 dark:text-slate-500 capitalize mr-2">{layer}:</span>
                    <span className="flex flex-wrap gap-1.5 mt-1">
                      {items.map(item => (
                        <TechBadge key={item} label={item} small />
                      ))}
                    </span>
                  </div>
                ) : null
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-4 border-t border-slate-200/10">
              {project.isInternalTool ? (
                <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                  {project.enterpriseNote || 'Internal tool — not publicly available.'}
                </span>
              ) : (
                <>
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                      <FiGithub size={14} /> GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                      <FiExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {fullscreenImage && (
        <ImageLightbox src={fullscreenImage} onClose={() => setFullscreenImage(null)} />
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
