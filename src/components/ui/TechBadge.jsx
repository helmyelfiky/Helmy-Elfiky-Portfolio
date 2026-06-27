function TechBadge({ label, variant = 'default', small = false }) {
  const variantStyles = {
    default: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    frontend: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    backend: 'bg-violet-500/10 border-violet-500/30 text-violet-300',
    database: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    other: 'bg-slate-500/10 border-slate-400/30 text-slate-300',
    live: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    azure: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    internal: 'bg-amber-500/10 border-amber-500/30 text-amber-300',
  }

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border ${variantStyles[variant] || variantStyles.default} ${small ? 'text-[11px] px-2 py-0.5' : 'text-xs px-3 py-1'}`}
    >
      {label}
    </span>
  )
}

export default TechBadge
