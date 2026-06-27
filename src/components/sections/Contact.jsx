import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'

const CONTACT_INFO = [
  { icon: FiMail, label: 'Email', value: 'helmyelfiky@gmail.com', href: 'mailto:helmyelfiky@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '01000045775', href: 'tel:01000045775' },
  { icon: FiMapPin, label: 'Location', value: 'Cairo, Egypt', href: null },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'helmyelfiky', href: 'https://linkedin.com/in/helmyelfiky' },
  { icon: FiGithub, label: 'GitHub', value: 'helmyelfiky', href: 'https://github.com/helmyelfiky' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Contact() {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const form = e.target
      const data = new FormData(form)
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <SectionHeader
          tag="Contact"
          title="Let's Talk"
          subtitle="Open to new opportunities, freelance projects, and interesting problems."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left: Contact info */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {CONTACT_INFO.map(item => (
              <motion.div key={item.label} variants={itemVariants}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="glass flex items-center gap-4 p-4 rounded-xl hover:glow transition-all duration-200 group"
                  >
                    <span className="gradient-text">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:gradient-text transition-all">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass flex items-center gap-4 p-4 rounded-xl">
                    <span className="gradient-text">
                      <item.icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{item.label}</p>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="glass p-6 space-y-4 rounded-xl"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 block">Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field dark:bg-white/[0.03] dark:text-white dark:border-white/[0.08] bg-white/70 text-slate-900 border-black/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 block">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="input-field dark:bg-white/[0.03] dark:text-white dark:border-white/[0.08] bg-white/70 text-slate-900 border-black/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 block">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="input-field dark:bg-white/[0.03] dark:text-white dark:border-white/[0.08] bg-white/70 text-slate-900 border-black/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1 block">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about the project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field dark:bg-white/[0.03] dark:text-white dark:border-white/[0.08] bg-white/70 text-slate-900 border-black/10 resize-none"
                />
              </div>

              {status === 'success' ? (
                <div className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm">
                  <FiCheck size={16} /> Message sent — I'll be in touch!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              )}

              {status === 'error' && (
                <p className="text-xs text-red-400 text-center">Something went wrong. Try emailing directly at helmyelfiky@gmail.com</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
