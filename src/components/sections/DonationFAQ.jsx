import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";
import donateData from "../../data/donate.json";

const DonationFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >

          <span className="inline-flex px-5 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold">
            ❓ Frequently Asked Questions
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Have Questions?
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-8">
            Find answers to the most commonly asked questions about donating to
            Deenabandhu Trust.
          </p>

        </motion.div>

        {/* FAQ */}

        <div className="max-w-4xl mx-auto space-y-5">

          {donateData.faq.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700 overflow-hidden"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">

                    <FaQuestionCircle className="text-xl text-teal-600" />

                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">

                    {faq.question}

                  </h3>

                </div>

                {activeIndex === index ? (
                  <FaChevronUp className="text-teal-600 text-lg" />
                ) : (
                  <FaChevronDown className="text-gray-500 text-lg" />
                )}

              </button>

              <AnimatePresence>

                {activeIndex === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >

                    <div className="px-6 pb-6 pl-20 text-gray-600 dark:text-gray-300 leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-teal-700 to-emerald-700 rounded-3xl p-12 text-white shadow-xl"
        >

          <h3 className="text-3xl md:text-4xl font-bold">
            Still Have Questions?
          </h3>

          <p className="mt-5 text-lg text-teal-100 max-w-2xl mx-auto">
            Our team is happy to help you with donation methods,
            tax receipts, international donations, and any other
            queries.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center mt-8 bg-white text-teal-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(DonationFAQ);