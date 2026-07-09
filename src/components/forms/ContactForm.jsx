import React from 'react'
import { useForm } from 'react-hook-form'
import { FaPaperPlane } from 'react-icons/fa'
import { useToast } from '../../context/ToastContext'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { showToast } = useToast()

  const onSubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      showToast('Your message has been sent successfully!', 'success')
      reset()
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="label-field">Full Name</label>
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
      <div>
        <label className="label-field">Subject</label>
        <input
          type="text"
          {...register('subject', { required: 'Subject is required' })}
          className="input-field"
          placeholder="How can we help?"
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <label className="label-field">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          rows="5"
          className="input-field"
          placeholder="Tell us how we can help..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>
      <button type="submit" className="btn-primary w-full gap-2">
        <FaPaperPlane />
        Send Message
      </button>
    </form>
  )
}

export default ContactForm