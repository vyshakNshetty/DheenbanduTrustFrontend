import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa'
import { useToast } from '../../context/ToastContext'
import homeData from '../../data/home.json'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { showToast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      showToast('Successfully subscribed to our newsletter!', 'success')
      setEmail('')
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="card-glass p-12 md:p-16">
            <div className="w-16 h-16 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
              <FaEnvelope className="text-2xl text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
              {homeData.newsletter.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              {homeData.newsletter.description}
            </p>
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input-field flex-1"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary gap-2 flex-shrink-0"
              >
                <FaPaperPlane />
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(Newsletter)