import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import TechBadge from './TechBadge'
import ImageLightbox from './ImageLightbox'

function HeroProjectCard({ project }) {
  const navigate = useNavigate()
  const [fullscreenImage, setFullscreenImage] = useState(null)
  const [showGallery, setShowGallery] = useState(false)

  return (
    <>
      <motion.div
      className="relative overflow-hidden rounded-2xl p-8 md:p-10 mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(99,102,241,0.2)',
        boxShadow: '0 0 80px rgba(99,102,241,0.1), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      {/* Background gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Info */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300">
              ⭐ Featured Project
            </span>
            <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live
            </span>
          </div>

          {project.logo && (
            <img 
              src={project.logo} 
              alt={`${project.name} logo`} 
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-5 drop-shadow-xl"
            />
          )}

          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-base mb-4">{project.tagline}</p>
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.highlights?.map(h => (
              <span
                key={h.label}
                className="text-xs font-medium px-3 py-1.5 rounded-full glass text-slate-600 dark:text-slate-300"
              >
                {h.icon} {h.label}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('/project/omni-portal')}
              className="btn-primary text-sm"
            >
              View Case Study <FiArrowRight size={14} />
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm dark:text-slate-100 text-slate-900"
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
            {project.screenshots && project.screenshots.length > 0 && (
              <button
                onClick={() => setShowGallery(!showGallery)}
                className="btn-secondary text-sm dark:text-slate-100 text-slate-900"
              >
                {showGallery ? 'Hide Gallery' : 'View Gallery'}
              </button>
            )}
          </div>
        </div>

        {/* Right: Key features */}
        <div className="glass p-6 rounded-xl">
          <p className="text-xs font-semibold uppercase tracking-widest gradient-text mb-4">Key Features</p>
          <ul className="space-y-3">
            {project.keyFeatures?.slice(0, 5).map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded flex items-center justify-center text-indigo-400"
                  style={{ background: 'rgba(99,102,241,0.1)' }}
                >
                  <span className="text-xs font-bold">{i + 1}</span>
                </span>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{f.label}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200/10">
            {project.tags?.slice(0, 8).map(tag => (
              <TechBadge key={tag} label={tag} small />
            ))}
          </div>

          {/* Note */}
          {project.enterpriseNote && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 italic">
              {project.enterpriseNote}
            </p>
          )}
        </div>
      </div>

      {/* Screenshots Gallery below the grid */}
      <AnimatePresence>
        {showGallery && project.screenshots && project.screenshots.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0, borderTopColor: 'transparent' }}
            animate={{ opacity: 1, height: 'auto', marginTop: 48, paddingTop: 32, borderTopColor: 'rgba(226,232,240,0.1)' }}
            exit={{ opacity: 0, height: 0, marginTop: 0, paddingTop: 0, borderTopColor: 'transparent' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative z-10 border-t overflow-hidden"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Project Gallery</h3>
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
                  className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] flex-shrink-0 snap-center rounded-xl overflow-hidden border border-indigo-500/10 bg-slate-800/40 relative group flex items-center justify-center p-2 cursor-pointer"
                  onClick={() => setFullscreenImage(src)}
                >
                  <img 
                    src={src} 
                    alt={`${project.name} screenshot ${i + 1}`} 
                    className="w-full h-auto max-h-48 md:max-h-64 object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-lg"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none rounded-xl">
                    <span className="opacity-0 group-hover:opacity-100 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full transition-opacity duration-300 backdrop-blur-sm">Click to expand</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>

    {fullscreenImage && (
      <ImageLightbox src={fullscreenImage} onClose={() => setFullscreenImage(null)} />
    )}
    </>
  )
}

export default HeroProjectCard
