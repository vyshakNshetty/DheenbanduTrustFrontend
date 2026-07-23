import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FaHome, FaHeart, FaUsers, FaCalendarAlt, FaImages,
  FaCog, FaBars, FaTimes, FaSignOutAlt, FaImage,
  FaUber,
  FaInfo,
  FaProjectDiagram,
  FaDonate
} from 'react-icons/fa'

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { to: '/dashboard', icon: FaHome, label: 'Overview' },
    { to: '/dashboard/hero-section', icon: FaImage, label: 'Hero Section' },
    { to: '/dashboard/donations', icon: FaHeart, label: 'Donations' },
    // { to: '/dashboard/volunteers', icon: FaUsers, label: 'Volunteers' },
    { to: '/dashboard/activities', icon: FaCalendarAlt, label: 'Activities' },
    { to: '/dashboard/gallery', icon: FaImages, label: 'Gallery' },
    { to: '/dashboard/ourdonor', icon: FaDonate, label: 'Our donors' },
    { to: '/dashboard/about', icon: FaInfo, label: 'About us' },
    { to: '/dashboard/contact', icon: FaUsers, label: 'Constact us' },
    { to: '/dashboard/settings', icon: FaCog, label: 'Settings' },
  ]

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark">
      {/* Mobile Toggle */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-24 left-4 z-40 p-2 bg-white dark:bg-dark/80 rounded-lg shadow-card"
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="lg:hidden fixed inset-0 bg-black/40 z-10"
          />
        )}
      </AnimatePresence>

      {/* pt-24 clears the fixed Navbar; flex row holds sidebar + main */}
      <div className="flex pt-24">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static top-24 lg:top-0 left-0 z-20 w-64 h-[calc(100vh-6rem)] bg-white dark:bg-dark/90 border-r border-gray-200 dark:border-gray-800 transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0`}
        >
          <div className="h-full overflow-y-auto p-4 flex flex-col">
            <div className="space-y-1 flex-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.to
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={closeSidebar}
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

            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all mt-4"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-medium">Back to Site</span>
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout