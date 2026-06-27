import { motion } from 'framer-motion'

function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {tag && (
        <p className="gradient-text text-xs font-semibold uppercase tracking-widest mb-3">
          [ {tag} ]
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className="h-0.5 w-16 mx-auto mt-6 rounded-full"
        style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
      />
    </motion.div>
  )
}

export default SectionHeader
