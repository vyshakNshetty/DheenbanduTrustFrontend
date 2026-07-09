import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaLock,
  FaUniversity,
  FaCheckCircle,
  FaReceipt,
  FaHandHoldingHeart,
} from "react-icons/fa";
import donateData from "../../data/donate.json";

const iconMap = {
  "Registered Charitable Trust": FaUniversity,
  "Secure Bank Transfer": FaLock,
  "UPI Payments Accepted": FaHandHoldingHeart,
  "Transparent Fund Utilization": FaShieldAlt,
  "Tax Benefit Eligible (Applicable Rules)": FaReceipt,
  "100% Accountable Donation Process": FaCheckCircle,
};

const DonationTransparency = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold">
            🔒 Trust & Transparency
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            {donateData.transparency.title}
          </h2>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400 leading-8">
            Every donation is handled securely and utilized responsibly.
            We are committed to complete transparency and accountability.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {donateData.transparency.items.map((item, index) => {

            const Icon = iconMap[item] || FaCheckCircle;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-white dark:bg-slate-800 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 dark:border-slate-700 p-8 transition-all"
              >

                <div className="w-18 h-18 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mx-auto">

                  <Icon className="text-4xl text-teal-600 group-hover:scale-110 transition-transform" />

                </div>

                <h3 className="mt-8 text-xl font-bold text-center text-slate-900 dark:text-white">

                  {item}

                </h3>

              </motion.div>
            );

          })}

        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-teal-700 to-emerald-700 rounded-3xl text-white p-10 shadow-xl"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <h3 className="text-3xl font-bold">
                Your Trust is Our Greatest Responsibility
              </h3>

              <p className="mt-4 text-teal-100 leading-8 max-w-3xl">
                Every contribution is recorded, monitored and utilized
                carefully to support education, healthcare, food
                distribution, rural development and community welfare
                initiatives.
              </p>

            </div>

            <div className="flex items-center justify-center w-28 h-28 rounded-full bg-white/10 backdrop-blur-lg">

              <FaShieldAlt className="text-6xl text-white" />

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(DonationTransparency);