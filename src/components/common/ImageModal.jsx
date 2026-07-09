import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const ImageModal = ({ isOpen, onClose, image, alt }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors text-3xl"
        >
          <FaTimes />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="max-w-6xl max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image}
            alt={alt}
            className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default React.memo(ImageModal)