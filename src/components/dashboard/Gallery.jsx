import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaTrash, FaEdit, FaSearch } from 'react-icons/fa'

const DashboardGallery = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const galleryItems = [
    { id: 1, title: 'School Opening', location: 'Kenya', date: '2026-05-15', category: 'education' },
    { id: 2, title: 'Medical Camp', location: 'Nigeria', date: '2026-05-20', category: 'healthcare' },
    { id: 3, title: 'Farming Workshop', location: 'Brazil', date: '2026-05-25', category: 'sustainability' },
    { id: 4, title: 'Women\'s Group', location: 'India', date: '2026-06-01', category: 'women' },
  ]

  const filteredItems = galleryItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white">
            Gallery Management
          </h1>
          <button className="btn-primary gap-2">
            <FaPlus />
            Add Image
          </button>
        </div>

        <div className="relative mb-6">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search gallery..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="card overflow-hidden group"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">📷 Image</span>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-dark dark:text-white">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.location}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{item.date}</p>
                <div className="mt-3 flex gap-2">
                  <button className="p-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors">
                    <FaEdit />
                  </button>
                  <button className="p-2 bg-red-50 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No gallery items found
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default DashboardGallery