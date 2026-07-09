import React, { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import contactData from '../data/contact.json'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'
import { useToast } from '../context/ToastContext'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { showToast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      showToast('Your message has been sent successfully! We\'ll get back to you soon.', 'success')
      reset()
    } catch (error) {
      showToast('Something went wrong. Please try again.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = contactData.contactInfo

  return (
    <>
      {/* <Helmet>
        <title>Contact Us — HopeBridge</title>
        <meta name="description" content="Get in touch with HopeBridge. We'd love to hear from you and answer any questions about our work." />
      </Helmet> */}

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark dark:to-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark dark:text-white">
              {contactData.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {contactData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => {
              const icons = {
                FaMapMarkerAlt: FaMapMarkerAlt,
                FaPhone: FaPhone,
                FaEnvelope: FaEnvelope,
                FaClock: FaClock,
              }
              const Icon = icons[info.icon]
              return (
               <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1 }}
  viewport={{ once: true }}
  className="card p-6 text-center"
>
  <div className="w-14 h-14 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-4">
    {Icon && (
      <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
    )}
  </div>

  <h4 className="font-bold text-dark dark:text-white">
    {info.title}
  </h4>

  <a
    href={
      info.icon === "FaPhone"
        ? `tel:${info.value}`
        : info.icon === "FaEnvelope"
        ? `mailto:${info.value}`
        : info.icon === "FaMapMarkerAlt"
        ? "https://www.google.com/maps/place/Deenabandhu+Trust+%2F+Boys'+Home/@11.9219699,76.9546741,17z"
        : "#"
    }
    target={info.icon === "FaMapMarkerAlt" ? "_blank" : undefined}
    rel={info.icon === "FaMapMarkerAlt" ? "noopener noreferrer" : undefined}
    className="mt-1 block text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
  >
    {info.value}
  </a>
</motion.div>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-6">
                Send Us a Message
              </h2>
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full gap-2"
                >
                  <FaPaperPlane />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="rounded-2xl overflow-hidden shadow-card-hover">
    <iframe
      title="Office Location"
      width="100%"
      height="500"
      style={{ border: 0, display: 'block' }}
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.5!2d76.9546741!3d11.9219699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf30f25b76fb77%3A0x649826ee852ab7cd!2sDeenabandhu%20Trust%20%2F%20Boys'%20Home!5e0!3m2!1sen!2sin!4v1"
    />
  </div>
</motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact