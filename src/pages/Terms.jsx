import React from 'react'
// import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <>
      {/* <Helmet>
        <title>Terms of Service — HopeBridge</title>
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
              Terms of Service
            </h1>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: January 1, 2026
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                By using HopeBridge's website and services, you agree to these Terms of Service. If you do not agree, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Donations
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>All donations are voluntary and non-refundable</li>
                <li>Donations are processed through secure payment gateways</li>
                <li>We provide receipts for tax purposes where applicable</li>
                <li>We reserve the right to refuse or refund donations</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                User Accounts
              </h2>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400">
                <li>You are responsible for maintaining account security</li>
                <li>You must provide accurate information</li>
                <li>We reserve the right to suspend accounts for violations</li>
              </ul>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                All content on this website is owned by HopeBridge and protected by copyright laws. You may not reproduce, distribute, or create derivative works without permission.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                HopeBridge is not liable for any damages arising from use of our services. We provide services "as is" without warranties of any kind.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We reserve the right to update these terms at any time. Continued use constitutes acceptance of updated terms.
              </p>

              <h2 className="text-2xl font-bold text-dark dark:text-white mt-8 mb-4">
                Contact
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Questions about these Terms? Contact us at legal@hopebridge.org.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Terms