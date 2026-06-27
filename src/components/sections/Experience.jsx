import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const EXPERIENCE = [
  {
    id: 1,
    period: 'April 2025 — Present',
    role: 'Hardware Technical Support (USA) — Lenovo',
    company: 'IBM · Cairo, Egypt',
    description:
      'Providing Lenovo hardware technical support for US customers. Built production internal tools including the Agent Notes App and Inventory Management System. Presented software solutions directly to business stakeholders.',
    type: 'work',
  },
  {
    id: 2,
    period: 'November 2024 — February 2025',
    role: 'Software Engineer Trainee',
    company: 'United Systems Co. · Cairo, Egypt',
    description: '',
    type: 'work',
  },
  {
    id: 3,
    period: '2019 — 2024',
    role: 'Bachelor of Engineering — Computer Engineering',
    company: 'Arab Academy for Science, Technology & Maritime Transport',
    description:
      'Graduated with a focus on AI and software systems. Final year project: Voice-Based Image Caption Generator using Deep Learning (CNN + LSTM/Transformer architectures).',
    type: 'education',
  },
  {
    id: 4,
    period: '2006 — 2019',
    role: 'High School — IGCSE',
    company: 'Port Said British School · Cairo, Egypt',
    description: '',
    type: 'education',
  },
]

function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-max">
        <SectionHeader tag="Career" title="Experience & Education" />

        <div className="relative max-w-2xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-0.5"
            style={{ background: 'linear-gradient(180deg, #6366f1, #8b5cf6, transparent)' }}
          />

          <div className="space-y-8">
            {EXPERIENCE.map((item, i) => (
              <motion.div
                key={item.id}
                className="relative pl-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.15 }}
              >
                {/* Dot */}
                <div
                  className="absolute left-0 top-5 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', transform: 'translate(-50%, -50%)', left: 16 }}
                >
                  <div className="w-3 h-3 rounded-full bg-dark-bg dark:bg-dark-bg bg-white" />
                </div>

                <div className="glass p-6 rounded-xl">
                  <p className="gradient-text text-xs font-semibold uppercase tracking-widest mb-2">{item.period}</p>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{item.company}</p>
                  {item.description && <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
