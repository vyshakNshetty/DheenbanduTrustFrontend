import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import homeData from '../../data/home.json'

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const stories = homeData.successStories.stories

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {homeData.successStories.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {homeData.successStories.title}
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            {homeData.successStories.description}
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={stories[currentIndex].image}
                  alt={stories[currentIndex].name}
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-primary-400 font-semibold">
                    {stories[currentIndex].location}
                  </p>
                </div>
              </div>

              <div>
                <FaQuoteLeft className="text-4xl text-primary-400/30 mb-6" />
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200">
                  "{stories[currentIndex].content}"
                </p>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white">
                    {stories[currentIndex].name}
                  </h4>
                  <p className="text-gray-400">
                    {stories[currentIndex].title}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevStory}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous story"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextStory}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next story"
            >
              <FaArrowRight />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-primary-500'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default React.memo(SuccessStories)