import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import HeroProjectCard from '../ui/HeroProjectCard'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import { mainProjects, filterCategories } from '../../data/projects'

const heroProject = mainProjects.find(p => p.isHero)
const nonHeroProjects = mainProjects.filter(p => !p.isHero)

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeFilter === 'all'
      ? nonHeroProjects
      : nonHeroProjects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Work"
          title="Projects"
          subtitle="From enterprise tools to freelance builds — real software for real problems."
        />

        {/* Hero project — always visible */}
        {heroProject && <HeroProjectCard project={heroProject} />}

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filterCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeFilter === cat.id
                  ? 'text-white border-indigo-500/50'
                  : 'glass text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-transparent'
              }`}
              style={activeFilter === cat.id ? { background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: 'easeOut' }}
                className={project.tier === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <ProjectCard
                  project={project}
                  featured={project.tier === 2}
                  onClick={() => project.tier === 2 ? setSelectedProject(project) : undefined}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              className="col-span-full text-center py-12 text-slate-500 dark:text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No projects match this filter yet.
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}

export default Projects
