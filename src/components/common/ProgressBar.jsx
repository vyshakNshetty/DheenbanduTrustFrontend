import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ value, max = 100, label, showLabel = true, className = '' }) => {
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div className={`space-y-2 ${className}`}>
      {showLabel && label && (
        <div className="flex justify-between text-sm">
          <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
          <span className="text-gray-500 dark:text-gray-400">{percentage.toFixed(0)}%</span>
        </div>
      )}
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
        />
      </div>
    </div>
  )
}

export default React.memo(ProgressBar)