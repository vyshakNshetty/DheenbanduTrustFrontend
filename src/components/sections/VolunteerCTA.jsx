import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaHandsHelping, FaArrowRight } from 'react-icons/fa'
import homeData from '../../data/home.json'

const VolunteerCTA = () => {
  const data = homeData.volunteerCTA

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-16 lg:p-20"
          style={{
            backgroundImage: 'linear-gradient(135deg, #0F766E, #0F172A)',
          }}
        >
          <div className="absolute inset-0 bg-grid-white/5" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {data.title}
              </h2>
              <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                {data.description}
              </p>
              <Link
                to={data.buttonLink}
                className="mt-8 inline-flex items-center gap-3 bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all group"
              >
                <FaHandsHelping />
                {data.buttonText}
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(VolunteerCTA)