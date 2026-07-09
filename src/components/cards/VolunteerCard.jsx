import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const VolunteerCard = ({ volunteer }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
      case 'pending': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  return (
    <div className="card p-6 hover:shadow-card-hover transition-all">
      <div className="flex items-start justify-between">
        <div>
          <h4 className="text-lg font-bold text-dark dark:text-white">
            {volunteer.name}
          </h4>
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
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <FaMapMarkerAlt className="text-gray-400" />
          <span>{volunteer.location}</span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(VolunteerCard)