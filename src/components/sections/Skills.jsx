import { motion } from 'framer-motion'
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiOpenjdk,
  SiMysql, SiSqlite, SiGit, SiElectron, SiDocker,
} from 'react-icons/si'
import { FiDatabase, FiCheckSquare, FiCode } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import { skillCategories } from '../../data/skills'

const ICON_MAP = {
  SiHtml5, SiCss3: SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiNodedotjs, SiPython, SiDjango, SiJava: SiOpenjdk, SiCsharp: FiCode,
  SiMysql, SiSqlite, SiGit, SiElectron, SiDocker, SiMicrosoftexcel: FiCode,
  FiDatabase, FiCheckSquare, SiC: FiCode,
}

const ACCENT_COLORS = {
  indigo: 'text-indigo-400',
  violet: 'text-violet-400',
  emerald: 'text-emerald-400',
  slate: 'text-slate-400',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function SkillItem({ item, accentColor }) {
  const Icon = ICON_MAP[item.icon] || FiCode
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-200 cursor-default group"
      style={{ background: 'rgba(255,255,255,0.02)' }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      <span
        className={`${ACCENT_COLORS[accentColor] || 'text-indigo-400'} transition-all duration-200 group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]`}
      >
        <Icon size={22} />
      </span>
      <span className="text-xs font-medium text-slate-500 dark:text-slate-400 text-center leading-tight">{item.name}</span>
    </motion.div>
  )
}

function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <SectionHeader tag="Tech Stack" title="Tools I Build With" />

        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map(cat => (
            <motion.div key={cat.key} variants={itemVariants} className="glass p-6">
              <h3 className={`text-sm font-semibold uppercase tracking-widest mb-5 ${ACCENT_COLORS[cat.accentColor]}`}>
                {cat.title}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {cat.items.map(item => (
                  <SkillItem key={item.name} item={item} accentColor={cat.accentColor} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
