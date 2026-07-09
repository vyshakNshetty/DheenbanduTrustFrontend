import React, { useState } from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import getInvolvedData from '../data/getInvolved.json'
import { FaHandsHelping, FaHeart, FaGlobe, FaGraduationCap, FaUserPlus, FaArrowRight } from 'react-icons/fa'

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your interest! We will contact you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    })
  }

  const opportunities = getInvolvedData.opportunities

  return (
    <>
      {/* <Helmet>
        <title>Get Involved — HopeBridge</title>
        <meta name="description" content="Join HopeBridge as a volunteer, donor, or partner and help us make a difference in communities worldwide." />
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
              {getInvolvedData.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
              {getInvolvedData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {opportunities.map((opp, index) => {
              const icons = {
                FaHandsHelping: FaHandsHelping,
                FaHeart: FaHeart,
                FaGlobe: FaGlobe,
                FaGraduationCap: FaGraduationCap,
              }
              const Icon = icons[opp.icon]
              return (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center hover:shadow-card-hover transition-all"
                >
                  <div className="w-16 h-16 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-4">
                    {Icon && <Icon className="text-2xl text-primary-600 dark:text-primary-400" />}
                  </div>
                  <h3 className="text-lg font-bold text-dark dark:text-white">{opp.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{opp.description}</p>
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
                Volunteer Application
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="label-field">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="label-field">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="label-field">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="label-field">Area of Interest</label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="input-field"
                    required
                  >
                    <option value="">Select an area</option>
                    <option value="education">Education</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="sustainability">Sustainability</option>
                    <option value="women-empowerment">Women's Empowerment</option>
                    <option value="fundraising">Fundraising</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="label-field">Tell us about yourself</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="input-field"
                    placeholder="Share your skills, experience, and why you want to volunteer..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full gap-2">
                  <FaUserPlus />
                  Submit Application
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
                Other Ways to Help
              </h2>
              <div className="space-y-4">
                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-50 dark:bg-accent-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-accent-500 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-white">Make a Donation</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Every contribution helps us reach more communities.
                    </p>
                    <Link to="/donate" className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold text-sm mt-2 hover:gap-2 transition-all">
                      Donate Now <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGlobe className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-white">Corporate Partnership</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Partner with us to create meaningful impact.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold text-sm mt-2 hover:gap-2 transition-all">
                      Contact Us <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>

                <div className="card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 dark:bg-secondary-900/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-secondary-600 text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark dark:text-white">Spread Awareness</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Share our mission with your network and community.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GetInvolved