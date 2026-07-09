import React from "react";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaArrowRight,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import donateData from "../../data/donate.json";

const DonateHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900 text-white pt-36 pb-28">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">

        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-8 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            {donateData.title}
          </motion.h1>

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-8"
          >
            {donateData.subtitle}
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-5 mt-12"
          >

            <a
              href="#upi"
              className="inline-flex items-center gap-3 bg-white text-teal-800 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all hover:-translate-y-1"
            >
              <FaHeart />
              Donate with UPI
              <FaArrowRight />
            </a>

            <a
              href="#international"
              className="inline-flex items-center gap-3 border border-white/30 hover:bg-white/10 px-8 py-4 rounded-xl font-semibold backdrop-blur-md transition-all hover:-translate-y-1"
            >
              <FaGlobe />
              International Donation
            </a>

          </motion.div>

          {/* Trust Badges */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-3 gap-5 mt-20"
          >

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

              <FaShieldAlt className="text-3xl text-emerald-300 mx-auto mb-4" />

              <h4 className="font-bold text-lg">
                Secure Donations
              </h4>

              <p className="text-sm text-gray-200 mt-2">
                Your contribution is transferred safely through trusted banking and UPI channels.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

              <FaHeart className="text-3xl text-pink-300 mx-auto mb-4" />

              <h4 className="font-bold text-lg">
                Transparent Usage
              </h4>

              <p className="text-sm text-gray-200 mt-2">
                Every donation directly supports education, healthcare, and rural development.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">

              <FaGlobe className="text-3xl text-cyan-300 mx-auto mb-4" />

              <h4 className="font-bold text-lg">
                Global Support
              </h4>

              <p className="text-sm text-gray-200 mt-2">
                Indian and international donors can contribute easily through multiple methods.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default React.memo(DonateHero);