import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGraduationCap, FaHeartbeat, FaProjectDiagram, FaUsers, FaHandshake, FaDollarSign } from 'react-icons/fa'
import homeData from '../../data/home.json'

const iconMap = {
  FaGraduationCap: FaGraduationCap,
  FaHeartbeat: FaHeartbeat,
  FaProjectDiagram: FaProjectDiagram,
  FaUsers: FaUsers,
  FaHandshake: FaHandshake,
  FaDollarSign: FaDollarSign,
}

const Statistics = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [counts, setCounts] = useState({})

  const stats = homeData.statistics.stats

  useEffect(() => {
    if (inView) {
      const newCounts = {}
      stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/[^0-9]/g, ''))
        if (!isNaN(target)) {
          let current = 0
          const increment = Math.ceil(target / 60)
          const interval = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(interval)
            }
            const prefix = stat.value.includes('+') ? '+' : ''
            const suffix = stat.value.includes('M') ? 'M+' : ''
            newCounts[index] = `${prefix}${current.toLocaleString()}${suffix}`
            setCounts({ ...newCounts })
          }, 20)
        }
      })
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <>
    </>
    // <section className="section-padding bg-gray-50 dark:bg-dark/50">
    //   <div className="container-custom">
    //     <motion.div
    //       initial={{ opacity: 0, y: 20 }}
    //       whileInView={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.6 }}
    //       viewport={{ once: true }}
    //       className="text-center max-w-3xl mx-auto mb-16"
    //     >
    //       <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
    //         {homeData.statistics.title}
    //       </span>
    //       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
    //         {homeData.statistics.title}
    //       </h2>
    //       <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
    //         {homeData.statistics.description}
    //       </p>
    //     </motion.div>

    //     <motion.div
    //       ref={ref}
    //       variants={containerVariants}
    //       initial="hidden"
    //       animate={inView ? 'visible' : 'hidden'}
    //       className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
    //     >
    //       {stats.map((stat, index) => {
    //         const Icon = iconMap[stat.icon]
    //         return (
    //           <motion.div
    //             key={index}
    //             variants={itemVariants}
    //             className="card p-6 text-center group hover:shadow-card-hover"
    //           >
    //             <div className="w-14 h-14 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
    //               {Icon && <Icon className="text-2xl text-primary-600 dark:text-primary-400" />}
    //             </div>
    //             <div className="mt-4">
    //               <div className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
    //                 {counts[index] || stat.value}
    //               </div>
    //               <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
    //                 {stat.label}
    //               </div>
    //             </div>
    //           </motion.div>
    //         )
    //       })}
    //     </motion.div>
    //   </div>
    // </section>
  )
}

export default React.memo(Statistics)