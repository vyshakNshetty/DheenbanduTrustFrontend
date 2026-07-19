import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import homeData from '../../data/home.json'

const GalleryPreview = () => {
  const images = homeData.galleryPreview.images

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
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
            {homeData.galleryPreview.title}
          </h2>
          <Link
            to="/gallery"
            className="mt-4 inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all group"
          >
            View Full Gallery
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2 h-96' : 'h-48'
              }`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(GalleryPreview)