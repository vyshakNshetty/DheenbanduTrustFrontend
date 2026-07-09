import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaHeartbeat, FaLeaf, FaFemale } from 'react-icons/fa'
import homeData from '../../data/home.json'

const iconMap = {
  FaGraduationCap: FaGraduationCap,
  FaHeartbeat: FaHeartbeat,
  FaLeaf: FaLeaf,
  FaFemale: FaFemale,
}

const Programs = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const programs = homeData.programs.items

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {homeData.programs.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
            {homeData.programs.title}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            {homeData.programs.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {programs.map((program) => {
            const Icon = iconMap[program.icon]
            const isHovered = hoveredId === program.id

            return (
              <motion.div
                key={program.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(program.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="card overflow-hidden group relative"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-500/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                      {Icon && <Icon className="text-xl" />}
                    </div>
                    <span className="text-white font-semibold text-sm bg-dark/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {program.impact}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark dark:text-white mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {program.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 h-0.5 bg-primary-500"
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(Programs)