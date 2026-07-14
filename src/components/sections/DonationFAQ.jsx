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