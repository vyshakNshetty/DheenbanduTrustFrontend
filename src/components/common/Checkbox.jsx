import React from 'react'

const Checkbox = ({ label, error, className = '', ...props }) => {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          className={`w-5 h-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500 transition-colors ${
            error ? 'border-red-500' : ''
          } ${className}`}
          {...props}
        />
        <span className="text-gray-700 dark:text-gray-300">{label}</span>
      </label>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default React.memo(Checkbox)