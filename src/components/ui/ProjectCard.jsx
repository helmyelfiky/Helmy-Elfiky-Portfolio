import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import TechBadge from './TechBadge'

function StatusBadge({ status }) {
  if (status === 'completed') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-400">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
        Completed
      </span>
    )
  }
  if (status === 'in-progress') {
    return (
      <span className="flex items-center gap-1.5 text-xs font-medium text-amber-400">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block animate-pulse" />
        In Progress
      </span>
    )
  }
  return (
    <span className="text-xs font-medium text-slate-400">{status}</span>
  )
}

function ProjectCard({ project, onClick, featured = false }) {
  const allTags = project.tags || []
  const displayTags = featured ? allTags.slice(0, 6) : allTags.slice(0, 5)

  return (
    <motion.div
      className={`glass flex flex-col h-full cursor-pointer group ${featured ? 'p-8' : 'p-6'}`}
      style={featured ? { borderLeft: '3px solid #6366f1' } : {}}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {/* Screenshot placeholder */}
      <div
        className={`relative rounded-xl overflow-hidden mb-4 flex items-center justify-center ${featured ? 'aspect-[4/3]' : 'aspect-video'}`}
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.08))',
          border: '1px solid rgba(99,102,241,0.15)',
        }}
      >
        <span className="gradient-text font-bold text-lg text-center px-4">{project.name}</span>
        {/* Status badge top-right */}
        <div className="absolute top-3 right-3">
          <StatusBadge status={project.status} />
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
          <span className="text-white text-sm font-medium">View Details</span>
        </div>
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-2 py-1 rounded-full gradient-text border border-indigo-500/30 bg-indigo-500/10">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className={`font-semibold text-slate-900 dark:text-white mb-1 ${featured ? 'text-xl' : 'text-lg'}`}>
          {project.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-3 line-clamp-2">
          {project.tagline}
        </p>
        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {displayTags.map(tag => (
            <TechBadge key={tag} label={tag} small />
          ))}
          {allTags.length > displayTags.length && (
            <span className="text-xs text-slate-500 dark:text-slate-400 self-center">
              +{allTags.length - displayTags.length} more
            </span>
          )}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-3 mt-auto pt-3 border-t border-slate-200/10">
          {project.isInternalTool ? (
            <span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">
              Internal Tool
            </span>
          ) : project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <FiGithub size={13} /> GitHub
            </a>
          ) : null}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 hover:text-emerald-400 transition-colors ml-auto"
            >
              <FiExternalLink size={13} /> Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
