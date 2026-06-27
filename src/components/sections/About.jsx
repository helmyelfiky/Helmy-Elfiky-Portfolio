import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const STATS = [
  { value: '5+', label: 'Projects' },
  { value: '2', label: 'Companies' },
  { value: '4 Yrs', label: 'Experience' },
  { value: '2', label: 'Languages' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <SectionHeader tag="About Me" title="I build things that work in the real world." />

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Left: Photo placeholder */}
          <motion.div
            className="md:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="relative flex-shrink-0"
              style={{ width: 280, height: 320 }}
            >
              {/* Shimmer gradient border */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #6366f1)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s linear infinite',
                  padding: 2,
                  borderRadius: 20,
                }}
              >
                <div
                  className="w-full h-full rounded-[18px] flex flex-col items-center justify-center overflow-hidden"
                  style={{ background: 'var(--inner-bg)' }}
                >
                  <img src="/screenshots/my-photo.png" alt="Helmy El-Fiky" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            className="md:col-span-3 space-y-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m a Computer Engineering graduate from AAST with hands-on experience building production tools
              used daily by real teams. From internal IBM platforms to freelance client work, I focus on solving
              workflow problems with clean architecture and interfaces that actually make sense to use.
            </motion.p>
            <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-300 leading-relaxed">
              I&apos;m currently working at IBM as Hardware Technical Support for Lenovo (USA), while continuing to
              build software on the side. My stack spans React, Node.js, Electron, Django, Python, and SQLite —
              whatever the problem needs.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {STATS.map(s => (
                <div
                  key={s.label}
                  className="glass p-4 text-center rounded-xl"
                >
                  <p className="gradient-text text-2xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
