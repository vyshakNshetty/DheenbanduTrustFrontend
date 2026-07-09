import React from 'react'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const DonationImpactCard = ({ amount, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card p-6 text-center hover:shadow-card-hover transition-all"
    >
      <div className="w-12 h-12 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
        <FaHeart className="text-xl text-primary-600 dark:text-primary-400" />
      </div>
      <div className="mt-3 text-2xl font-bold text-dark dark:text-white">
        ${amount}
      </div>
      <div className="mt-1 font-semibold text-dark dark:text-white">{title}</div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

export default React.memo(DonationImpactCard)