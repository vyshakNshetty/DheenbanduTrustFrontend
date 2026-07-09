import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const ProgramCard = ({ program }) => {
  const Icon = program.icon

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card overflow-hidden group hover:shadow-card-hover transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary-500/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
            <Icon className="text-sm" />
          </div>
          <span className="text-white text-xs bg-dark/50 backdrop-blur-sm px-2 py-1 rounded-full">
            {program.impact}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-dark dark:text-white mb-2">
          {program.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {program.description}
        </p>
        <Link
          to="/activities"
          className="mt-3 inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-2 transition-all"
        >
          Learn More
          <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </motion.div>
  )
}

export default React.memo(ProgramCard)