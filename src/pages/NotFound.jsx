import React from 'react'
import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
  return (
    <>
      {/* <Helmet>
        <title>Page Not Found — HopeBridge</title>
      </Helmet> */}

      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-md"
        >
          <div className="text-8xl font-bold text-primary-600 dark:text-primary-400 mb-4">
            404
          </div>
          <h1 className="text-3xl font-bold text-dark dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary gap-2">
              <FaHome />
              Back to Home
            </Link>
            <Link to="/contact" className="btn-secondary gap-2">
              <FaSearch />
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default NotFound