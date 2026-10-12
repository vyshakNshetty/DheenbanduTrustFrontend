import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { useToast } from '../../context/ToastContext'
import { FaSave, FaUser, FaBell, FaPalette, FaShieldAlt } from 'react-icons/fa'
import { useAuth } from '../../context/AuthContext'
import { authService } from '../../services/authService'
const Settings = () => {
  const {user}=useAuth()
  const { isDark, toggleTheme } = useTheme()
  const { showToast } = useToast()
  const [settings, setSettings] = useState({
    name: user.name,
    email: user.email,
    notifications: true,
    newsletter: true,
    language: 'en',
  })
  // const [showChangePassword, setShowChangePassword] = useState(false)
  const [showChangePassword, setShowChangePassword] = useState(false)

const [oldPassword, setOldPassword] = useState('')
const [newPassword, setNewPassword] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleChangePassword = async (e) => {
  e.preventDefault()

  try {

    const response = await authService.changePassword({
      old_password: oldPassword,
      new_password: newPassword
    })

    alert(response.data.message)

    setOldPassword('')
    setNewPassword('')
    setShowChangePassword(false)

  } catch (error) {

    console.log(error)

    alert(
      error.response?.data?.old_password?.[0] ||
      error.response?.data?.new_password?.[0] ||
      'Failed to change password'
    )
  }
}

  const handleSave = () => {
    showToast('Settings saved successfully!', 'success')
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-dark dark:text-white mb-8">
          Settings
        </h1>

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-dark dark:text-white mb-4 flex items-center gap-2">
              <FaUser className="text-primary-500" />
              Profile Settings
            </h2>
            <div className="space-y-4">
              <div>
                <label className="label-field">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="label-field">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Preferences */}
          {/* <div className="card p-6">
            <h2 className="text-xl font-bold text-dark dark:text-white mb-4 flex items-center gap-2">
              <FaPalette className="text-primary-500" />
              Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-dark dark:text-white">Dark Mode</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Toggle dark/light theme</p>
                </div>
                <button
                  onClick={toggleTheme}
                  className={`w-14 h-8 rounded-full transition-colors ${
                    isDark ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full bg-white transform transition-transform ${
                    isDark ? 'translate-x-7' : 'translate-x-1'
                  }`} />
                </button>
              </div>
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="notifications"
                    checked={settings.notifications}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary-600 rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Enable notifications</span>
                </label>
              </div>
              <div>
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={settings.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary-600 rounded"
                  />
                  <span className="text-gray-700 dark:text-gray-300">Subscribe to newsletter</span>
                </label>
              </div>
              <div>
                <label className="label-field">Language</label>
                <select
                  name="language"
                  value={settings.language}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          </div> */}

          {/* Security */}
          <div className="card p-6">
            <h2 className="text-xl font-bold text-dark dark:text-white mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-primary-500" />
              Security
            </h2>
            <button
            onClick={() => setShowChangePassword(true)}
             className="btn-secondary">
              Change Password
            </button>
          </div>

          <button
            onClick={handleSave}
            className="btn-primary w-full md:w-auto gap-2"
          >
            <FaSave />
            Save Settings
          </button>
        </div>
      </motion.div>
      {showChangePassword && (
  <div className="card p-6 mt-4">

    <h2 className="text-xl font-bold text-dark dark:text-white mb-4">
      Change Password
    </h2>

    <form onSubmit={handleChangePassword}>

      <div className="mb-4">
        <label className="block mb-2">
          Old Password
        </label>

        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="input-field"
          placeholder="Enter old password"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">
          New Password
        </label>

        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="input-field"
          placeholder="Enter new password"
        />
      </div>

      <div className="flex gap-2">

        <button
          type="submit"
          className="btn-primary"
        >
          Change Password
        </button>

        <button
          type="button"
          onClick={() => setShowChangePassword(false)}
          className="btn-secondary"
        >
          Cancel
        </button>

      </div>

    </form>

  </div>
)}
    </div>
  )
}

export default Settings