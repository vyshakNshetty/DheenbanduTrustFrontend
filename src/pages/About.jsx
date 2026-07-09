import React from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import aboutData from '../data/about.json'
import { FaUsers, FaGlobe, FaHandshake, FaHeart } from 'react-icons/fa'

const About = () => {
  const data = aboutData

  // const stats = [
  //   { icon: FaUsers, value: '500+', label: 'Volunteers' },
  //   { icon: FaGlobe, value: '30+', label: 'Countries' },
  //   { icon: FaHandshake, value: '120+', label: 'Partners' },
  //   { icon: FaHeart, value: '50K+', label: 'Lives Changed' },
  // ]

  return (
    <>
      {/* <Helmet>
        <title>About Us — HopeBridge</title>
        <meta name="description" content="Learn about HopeBridge's mission, vision, and impact in empowering communities worldwide." />
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
              {data.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark dark:text-white">
                {data.mission.title}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {data.mission.description}
              </p>
              <div className="mt-8 space-y-4">
                {data.mission.values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 dark:text-primary-400">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark dark:text-white">{value.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={data.mission.image}
                alt="Our Mission"
                className="rounded-2xl shadow-card-hover w-full h-[500px] object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-gray-50 dark:bg-dark/50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto bg-primary-50 dark:bg-primary-900/30 rounded-xl flex items-center justify-center">
                    <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="mt-3 text-2xl font-bold text-dark dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section> */}

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-dark dark:text-white mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-dark dark:text-white">
                  {member.name}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 text-sm">
                  {member.role}
                </p>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About