import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHeart, FaArrowRight } from 'react-icons/fa'
import homeData from '../../data/home.json'

const DonationCTA = () => {
  const data = homeData.donationCTA

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              {data.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
              {data.title}
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {data.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={data.buttonLink}
                className="btn-primary gap-3 text-base px-8 py-4 group"
              >
                <FaHeart className="group-hover:scale-110 transition-transform" />
                {data.buttonText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="card p-6 text-center hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                  <FaHeart className="text-primary-500" />
                </div>
                <div className="mt-3 text-2xl font-bold text-dark dark:text-white">
                  ${[50, 100, 250, 500][item - 1]}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {['Provides books', 'Supports a child', 'Builds a classroom', 'Funds a clinic'][item - 1]}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(DonationCTA)