import React from 'react'
import { motion } from 'framer-motion'

const Spinner = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  }

  const colors = {
    primary: 'border-primary-600',
    white: 'border-white',
    gray: 'border-gray-600',
  }

  return (
    <motion.div
      className={`${sizes[size]} border-4 border-t-transparent rounded-full ${colors[color]}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

export default React.memo(Spinner)