import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

export default function ImageLightbox({ src, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    
    // Prevent scrolling when lightbox is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = originalOverflow;
    }
  }, [onClose])

  if (!src) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Close button */}
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          aria-label="Close fullscreen view"
          className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-white/30 transition-colors z-[100] backdrop-blur-md border border-white/20 cursor-pointer"
        >
          <FiX size={24} />
        </button>

        {/* Image */}
        <motion.img
          src={src}
          alt="Fullscreen view"
          className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </AnimatePresence>
  )
}
