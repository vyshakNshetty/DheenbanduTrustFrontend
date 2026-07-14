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
            {/* {donateData.subtitle} */}
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
              Donations from USA
            </a>

          </motion.div>

          

        
        </div>

      </div>

    </section>
  );
};

export default React.memo(DonateHero);