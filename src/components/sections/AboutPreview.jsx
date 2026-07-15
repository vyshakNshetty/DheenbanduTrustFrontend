import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import homeData from '../../data/home.json'

const AboutPreview = () => {
  const data = homeData.aboutPreview
  const [open, setOpen] = useState(false)

  return (
    <>
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
              {data.subtitle}
            </span> */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
              {data.title}
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {data.shortDescription}
            </p>

<button
  onClick={() => setOpen(true)}
  className="mt-5 text-primary-600 font-semibold hover:underline"
>
  Read More 
  <FaArrowRight className="inline-block ml-1 transition-transform group-hover:translate-x-1" />
</button>
            <ul className="mt-8 space-y-3">
              {data.highlights.slice(0, 4).map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-primary-500 flex-shrink-0" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all group"
            >
              Learn More About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative"
>
  <div className="relative rounded-2xl overflow-hidden shadow-card-hover aspect-video">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/_k62nGcF7wk"
      title="About Deenabandhu Trust"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
  <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-500/10 rounded-full blur-2xl" />
</motion.div>
        </div>
      </div>
      
    </section>
    {open && (
  <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">

    <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">

      <button
        onClick={() => setOpen(false)}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
      >
        ✕
      </button>

      <div className="p-8 md:p-12">

        <h2 className="text-4xl font-bold mb-4">
          {data.title}
        </h2>

       
        {/* Paragraphs */}

        <div className="space-y-6">

          {data.paragraphs.map((paragraph, index) => (

            <p
              key={index}
              className="text-gray-700 dark:text-gray-300 leading-8 text-lg"
            >
              {paragraph}
            </p>

          ))}

        </div>

        {/* Highlights */}

        <div className="mt-10">

          <h3 className="text-2xl font-bold mb-6">
            Key Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            {data.highlights.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3"
              >

                <FaCheckCircle className="text-primary-600 mt-1" />

                <span className="text-gray-700 dark:text-gray-300">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  </div>
)}
</>
  )
}

export default React.memo(AboutPreview)