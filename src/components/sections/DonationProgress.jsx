import React from 'react'
import { motion } from 'framer-motion'

const DonationProgress = ({ raised, target, currency = '$' }) => {
  const percentage = Math.min((raised / target) * 100, 100)

  return (
    <div className="space-y-3">
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-dark dark:text-white">
          {currency}{raised.toLocaleString()} raised
        </span>
        <span className="text-gray-500 dark:text-gray-400">
          Target: {currency}{target.toLocaleString()}
        </span>
      </div>
      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{percentage.toFixed(1)}% funded</span>
        <span>{Math.round(target - raised).toLocaleString()} remaining</span>
      </div>
    </div>
  )
}

export default React.memo(DonationProgress)