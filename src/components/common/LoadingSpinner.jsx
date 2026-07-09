import React from 'react'
import { motion } from 'framer-motion'

const LoadingSpinner = ({ fullScreen = false }) => {
  const spinner = (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">
        Loading...
      </p>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark">
        {spinner}
      </div>
    )
  }

  return spinner
}

export default React.memo(LoadingSpinner)