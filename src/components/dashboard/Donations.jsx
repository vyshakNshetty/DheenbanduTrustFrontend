import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaFilter, FaDownload } from 'react-icons/fa'

const Donations = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  const donations = useMemo(() => [
    { id: 1, donor: 'John Smith', amount: 500, date: '2026-06-15', status: 'completed', type: 'one-time' },
    { id: 2, donor: 'Sarah Johnson', amount: 250, date: '2026-06-14', status: 'completed', type: 'monthly' },
    { id: 3, donor: 'Michael Chen', amount: 1000, date: '2026-06-13', status: 'pending', type: 'one-time' },
    { id: 4, donor: 'Emily Rodriguez', amount: 75, date: '2026-06-12', status: 'completed', type: 'one-time' },
    { id: 5, donor: 'David Kim', amount: 200, date: '2026-06-11', status: 'completed', type: 'monthly' },
    { id: 6, donor: 'Lisa Thompson', amount: 150, date: '2026-06-10', status: 'pending', type: 'one-time' },
    { id: 7, donor: 'James Wilson', amount: 300, date: '2026-06-09', status: 'completed', type: 'monthly' },
    { id: 8, donor: 'Maria Santos', amount: 50, date: '2026-06-08', status: 'completed', type: 'one-time' },
  ], [])

  const filteredDonations = useMemo(() => {
    let result = donations
    if (filter !== 'all') {
      result = result.filter(d => d.type === filter)
    }
    if (searchTerm) {
      result = result.filter(d => 
        d.donor.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return result
  }, [donations, filter, searchTerm])

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
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
            Donations
          </h1>
          <button className="btn-primary gap-2">
            <FaDownload />
            Export Report
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search donations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('one-time')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'one-time'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
              }`}
            >
              One-time
            </button>
            <button
              onClick={() => setFilter('monthly')}
              className={`px-4 py-2 rounded-xl font-medium transition-all ${
                filter === 'monthly'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-dark/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Donor
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {filteredDonations.map((donation) => (
                  <motion.tr
                    key={donation.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-dark dark:text-white">
                      {donation.donor}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-primary-600 dark:text-primary-400">
                      ${donation.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {donation.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {donation.type}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(donation.status)}`}>
                        {donation.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredDonations.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No donations found
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default Donations