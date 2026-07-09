import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ icon: Icon, label, value, change, trend = 'up' }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="card p-6 hover:shadow-card-hover transition-all"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-dark dark:text-white mt-1">
            {value}
          </p>
        </div>
        <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
          <Icon className="text-xl text-primary-600 dark:text-primary-400" />
        </div>
      </div>
      {change && (
        <div className="flex items-center gap-1 mt-2">
          <span className={`text-sm font-medium ${
            trend === 'up' ? 'text-green-500' : 'text-red-500'
          }`}>
            {change}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            vs last month
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default React.memo(StatCard)