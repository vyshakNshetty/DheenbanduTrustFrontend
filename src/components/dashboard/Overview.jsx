import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  FaHeart, FaUsers, FaCalendarAlt, FaDollarSign,
  FaArrowUp, FaArrowDown
} from 'react-icons/fa'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const Overview = () => {
  const stats = useMemo(() => [
    { label: 'Total Donations', value: '$125,430', change: '+12.5%', icon: FaDollarSign, trend: 'up' },
    { label: 'Active Volunteers', value: '1,247', change: '+8.3%', icon: FaUsers, trend: 'up' },
    { label: 'Ongoing Activities', value: '45', change: '-2.1%', icon: FaCalendarAlt, trend: 'down' },
    { label: 'Lives Impacted', value: '52,389', change: '+15.7%', icon: FaHeart, trend: 'up' },
  ], [])

  const donationData = [
    { month: 'Jan', amount: 8500 },
    { month: 'Feb', amount: 9200 },
    { month: 'Mar', amount: 10800 },
    { month: 'Apr', amount: 9700 },
    { month: 'May', amount: 11200 },
    { month: 'Jun', amount: 12500 },
  ]

  const activityData = [
    { name: 'Education', value: 35 },
    { name: 'Healthcare', value: 25 },
    { name: 'Sustainability', value: 20 },
    { name: 'Women Empowerment', value: 20 },
  ]

  const COLORS = ['#0F766E', '#14B8A6', '#F59E0B', '#8B5CF6']

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-dark dark:text-white mb-8">
          Dashboard Overview
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold text-dark dark:text-white mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                    <Icon className="text-xl text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {stat.trend === 'up' ? (
                    <FaArrowUp className="text-green-500 text-xs" />
                  ) : (
                    <FaArrowDown className="text-red-500 text-xs" />
                  )}
                  <span className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    vs last month
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6"
          >
            <h3 className="text-lg font-bold text-dark dark:text-white mb-4">
              Donation Trends
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={donationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#0F766E"
                    strokeWidth={3}
                    dot={{ fill: '#0F766E' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card p-6"
          >
            <h3 className="text-lg font-bold text-dark dark:text-white mb-4">
              Activities Distribution
            </h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={activityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {activityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card p-6 mt-6"
        >
          <h3 className="text-lg font-bold text-dark dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors">
                <div className="w-10 h-10 bg-primary-50 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                  <FaHeart className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-dark dark:text-white">
                    New donation received
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 minutes ago
                  </p>
                </div>
                <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  +$500
                </span>
              </div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </div>
  )
}

export default Overview