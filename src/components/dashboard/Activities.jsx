import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'

const Activities = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const activities = useMemo(() => [
    { id: 1, title: 'Back to School Drive', location: 'Kenya', participants: 120, date: '2026-06-20', status: 'ongoing', category: 'education' },
    { id: 2, title: 'Health Camp', location: 'Nigeria', participants: 85, date: '2026-06-25', status: 'upcoming', category: 'healthcare' },
    { id: 3, title: 'Farmers Training', location: 'Brazil', participants: 45, date: '2026-06-18', status: 'completed', category: 'sustainability' },
    { id: 4, title: 'Women Empowerment Workshop', location: 'India', participants: 60, date: '2026-07-01', status: 'upcoming', category: 'women' },
    { id: 5, title: 'Community Clean-up', location: 'Philippines', participants: 200, date: '2026-06-12', status: 'completed', category: 'community' },
  ], [])

  const filteredActivities = useMemo(() => {
    let result = activities
    if (filter !== 'all') {
      result = result.filter(a => a.status === filter)
    }
    if (searchTerm) {
      result = result.filter(a => 
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        a.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return result
  }, [activities, filter, searchTerm])

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'upcoming': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
      case 'completed': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-dark dark:text-white">
            Activities
          </h1>
          <button className="btn-primary gap-2">
            <FaPlus />
            Create Activity
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'ongoing', 'upcoming', 'completed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-xl font-medium transition-all capitalize ${
                  filter === status
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-6 hover:shadow-card-hover transition-all"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-dark dark:text-white">
                  {activity.title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(activity.status)}`}>
                  {activity.status}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaMapMarkerAlt className="text-primary-500" />
                  <span>{activity.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaCalendarAlt className="text-primary-500" />
                  <span>{activity.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaUsers className="text-primary-500" />
                  <span>{activity.participants} participants</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">
                  {activity.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No activities found
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Activities