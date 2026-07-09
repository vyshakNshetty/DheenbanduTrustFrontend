import React from 'react'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimesCircle, FaTimes } from 'react-icons/fa'

const Alert = ({ type = 'info', title, message, onClose, className = '' }) => {
  const types = {
    info: {
      icon: FaInfoCircle,
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
    },
    success: {
      icon: FaCheckCircle,
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-700 dark:text-green-300',
    },
    warning: {
      icon: FaExclamationCircle,
      bg: 'bg-yellow-50 dark:bg-yellow-900/20',
      border: 'border-yellow-200 dark:border-yellow-800',
      text: 'text-yellow-700 dark:text-yellow-300',
    },
    error: {
      icon: FaTimesCircle,
      bg: 'bg-red-50 dark:bg-red-900/20',
      border: 'border-red-200 dark:border-red-800',
      text: 'text-red-700 dark:text-red-300',
    },
  }

  const Icon = types[type].icon

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`flex items-start gap-4 p-4 rounded-xl border ${types[type].bg} ${types[type].border} ${className}`}
    >
      <Icon className={`text-xl flex-shrink-0 mt-0.5 ${types[type].text}`} />
      <div className="flex-1">
        {title && <h4 className={`font-semibold ${types[type].text}`}>{title}</h4>}
        <p className="text-sm text-gray-600 dark:text-gray-400">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        >
          <FaTimes />
        </button>
      )}
    </motion.div>
  )
}

export default React.memo(Alert)