import React from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <>
      {/* <Helmet>
        <title>Privacy Policy — HopeBridge</title>
      </Helmet> */}

      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white dark:from-dark dark:to-dark/80">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-8">
              Privacy Policy
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: January 1, 2026
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                HopeBridge ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Donation history and preferences</li>
                <li>Volunteer activity and interests</li>
                <li>Website usage data and analytics</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>To process donations and provide tax receipts</li>
                <li>To communicate about programs and opportunities</li>
                <li>To improve our services and user experience</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Your Rights
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                If you have questions about this Privacy Policy, please contact us at privacy@hopebridge.org.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Privacy