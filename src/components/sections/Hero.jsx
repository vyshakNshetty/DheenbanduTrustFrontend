import React, { useEffect, useRef ,useState} from 'react'

import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'
import { FaHeart, FaHandsHelping, FaArrowRight } from 'react-icons/fa'
import { getHeroSection } from '../../services/heroService';
// import heroData from '../../data/home.json'

const Hero = () => {


  useEffect(() => {
  loadHero();
}, []);


 const loadHero =async () =>{
  try {
    const data = await getHeroSection();
    setHero({
      badge: data.badge || "",
      title: data.title || "",
      description: data.description || "",
      donate_button_text: data.donate_button_text || "",
      donate_button_link: data.donate_button_link || "",
      valunteer_button_text: data.valunteer_button_text || "",
      valunteer_button_link: data.valunteer_button_link || "",
      background_image: data.background_image || "",
      // stats: data.stats || [],
    });
  }
  catch (error) {
    console.error("Failed to load hero section:", error);
  }
  }
  
  const [hero,setHero] = useState({
    badge:"",
    title:"",
    description:"",
    donate_button_text:"",
    donate_button_link:"",
    valunteer_button_text:"",
    valunteer_button_link:"",
    backgroundImage:"",
    // stats:[]
  })
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // const hero = heroData.hero

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.85)), url(${hero.background_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/20 to-dark/80" />
      
      <div className="container-custom relative z-10 py-32 md:py-40">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-500/20 backdrop-blur-sm rounded-full text-primary-300 text-sm font-semibold border border-primary-400/30">
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-white leading-tight"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/donate"
              className="btn-primary gap-3 text-base px-8 py-4 group"
            >
              <FaHeart className="group-hover:scale-110 transition-transform" />
              Donate Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/get-involved"
              className="btn-outline gap-3 text-base px-8 py-4"
            >
              <FaHandsHelping />
              Become Volunteer
            </Link>
          </motion.div>

          {/* Stats Cards */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {hero.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="glass px-6 py-4 rounded-2xl text-center backdrop-blur-sm border-white/10"
              >
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-sm">
          <span>Scroll to explore</span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div> */}
    </section>
  )
}

export default React.memo(Hero)