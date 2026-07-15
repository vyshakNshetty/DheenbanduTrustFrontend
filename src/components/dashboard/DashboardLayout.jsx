import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaHome, FaHeart, FaUsers, FaCalendarAlt, FaImages, 
  FaCog, FaBars, FaTimes, FaSignOutAlt,FaImage
} from 'react-icons/fa'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const location = useLocation()

  const menuItems = [
    { to: '/dashboard', icon: FaHome, label: 'Overview' },
    { to: "/dashboard/hero-section", icon: FaImage, label: "Hero Section" },
    { to: '/dashboard/donations', icon: FaHeart, label: 'Donations' },
    { to: '/dashboard/volunteers', icon: FaUsers, label: 'Volunteers' },
    { to: '/dashboard/activities', icon: FaCalendarAlt, label: 'Activities' },
    { to: '/dashboard/gallery', icon: FaImages, label: 'Gallery' },
    { to: '/dashboard/settings', icon: FaCog, label: 'Settings' },
  ]

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark ">
      {/* Mobile Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-24 left-4 z-30 p-2 bg-white dark:bg-dark/80 rounded-lg shadow-card"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{ width: isSidebarOpen ? 280 : 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed lg:relative z-20 h-[calc(100vh-80px)] bg-white dark:bg-dark/90 border-r border-gray-200 dark:border-gray-800 overflow-hidden ${
            isSidebarOpen ? 'w-64' : 'w-0'
          } lg:w-64`}
        >
          <div className="h-full overflow-y-auto p-4">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.to
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-medium">Back to Site</span>
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 p-6 lg:p-8 ${
          isSidebarOpen ? 'lg:ml-0' : 'ml-0'
        }`}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout