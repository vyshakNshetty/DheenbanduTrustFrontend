import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaHeart, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { useToast } from '../../context/ToastContext'

const DonationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [amount, setAmount] = useState('')
  const [selectedAmount, setSelectedAmount] = useState(null)
  const { showToast } = useToast()

  const donationAmounts = [25, 50, 100, 250, 500]

  const onSubmit = (data) => {
    const donationAmount = data.customAmount || data.amount
    if (!donationAmount) {
      showToast('Please select or enter a donation amount.', 'warning')
      return
    }
    showToast(`Thank you for your donation of $${donationAmount}! 🙏`, 'success')
    reset()
    setSelectedAmount(null)
    setAmount('')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="label-field">Select Amount</label>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {donationAmounts.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setSelectedAmount(value)
                setAmount(value.toString())
              }}
              className={`p-3 rounded-xl font-bold transition-all ${
                selectedAmount === value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark/70'
              }`}
            >
              ${value}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="label-field">Custom Amount</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-bold">
            $
          </span>
          <input
            type="number"
            {...register('customAmount')}
            placeholder="Enter amount"
            className="input-field pl-8"
            min="1"
            onChange={(e) => {
              setSelectedAmount(null)
              setAmount(e.target.value)
            }}
          />
        </div>
      </div>

      <div>
        <label className="label-field">Your Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className="input-field"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="label-field">Email Address</label>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="input-field"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <button type="submit" className="btn-primary w-full gap-2 text-base py-4">
        <FaHeart />
        Donate Now
      </button>

      <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1">
          <FaShieldAlt className="text-primary-500" />
          Secure Payment
        </span>
        <span className="flex items-center gap-1">
          <FaCheckCircle className="text-primary-500" />
          100% Transparent
        </span>
      </div>
    </form>
  )
}

export default DonationForm