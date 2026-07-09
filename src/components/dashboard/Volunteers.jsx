import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaUserPlus, FaEnvelope, FaPhone } from 'react-icons/fa'

const Volunteers = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const volunteers = useMemo(() => [
    { id: 1, name: 'Anna Kowalski', email: 'anna@email.com', phone: '+1 555-0101', role: 'Teacher', status: 'active', joined: '2025-01-15' },
    { id: 2, name: 'Carlos Mendez', email: 'carlos@email.com', phone: '+1 555-0102', role: 'Healthcare Worker', status: 'active', joined: '2025-02-20' },
    { id: 3, name: 'Fatima Al-Hassan', email: 'fatima@email.com', phone: '+1 555-0103', role: 'Project Coordinator', status: 'pending', joined: '2025-03-10' },
    { id: 4, name: 'George Okonkwo', email: 'george@email.com', phone: '+1 555-0104', role: 'Field Worker', status: 'active', joined: '2024-11-05' },
    { id: 5, name: 'Hannah Lee', email: 'hannah@email.com', phone: '+1 555-0105', role: 'Fundraiser', status: 'inactive', joined: '2024-09-12' },
    { id: 6, name: 'Ibrahim Singh', email: 'ibrahim@email.com', phone: '+1 555-0106', role: 'Community Organizer', status: 'active', joined: '2025-04-01' },
  ], [])

  const filteredVolunteers = useMemo(() => {
    let result = volunteers
    if (filter !== 'all') {
      result = result.filter(v => v.status === filter)
    }
    if (searchTerm) {
      result = result.filter(v => 
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return result
  }, [volunteers, filter, searchTerm])

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
      case 'inactive': return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
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
            Volunteers
          </h1>
          <button className="btn-primary gap-2">
            <FaUserPlus />
            Add Volunteer
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search volunteers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'active', 'pending', 'inactive'].map((status) => (
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVolunteers.map((volunteer, index) => (
            <motion.div
              key={volunteer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card p-6 hover:shadow-card-hover transition-all"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-bold text-dark dark:text-white">
                    {volunteer.name}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400">
                    {volunteer.role}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(volunteer.status)}`}>
                  {volunteer.status}
                </span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaEnvelope className="text-gray-400" />
                  <span>{volunteer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <FaPhone className="text-gray-400" />
                  <span>{volunteer.phone}</span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  Joined: {volunteer.joined}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No volunteers found
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Volunteers