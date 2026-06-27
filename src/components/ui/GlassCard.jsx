import { motion } from 'framer-motion'

function GlassCard({ children, className = '', hover = false, glow = false, hero = false, onClick }) {
  const Tag = hover ? motion.div : 'div'
  const hoverProps = hover
    ? { whileHover: { y: -4, scale: 1.01 }, transition: { duration: 0.2 } }
    : {}

  return (
    <Tag
      className={`glass p-6 ${glow ? 'glow' : ''} ${hero ? 'glow-strong' : ''} ${className}`}
      onClick={onClick}
      {...hoverProps}
    >
      {children}
    </Tag>
  )
}

export default GlassCard
