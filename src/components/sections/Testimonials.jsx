import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import GoogleTranslate from "../common/GoogleTranslate";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useEffect } from "react";
import { testimonialService } from "../../services/testimonialService";


const Testimonials = () => {
  const swiperRef = useRef(null);
  // const testimonials = homeData.testimonials.testimonials;
  const [testimonials, setTestimonials] = useState([]);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);



  useEffect(() => {
  const loadTestimonials = async () => {
    try {
      const response = await testimonialService.getTestimonials();
      setTestimonials(response);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
  };

  loadTestimonials();
}, []);


  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm uppercase tracking-wider">
            {homeData.testimonials.subtitle}
          </span> */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 text-dark dark:text-white">
            Messages of Support
          </h2>
        </motion.div>

        <div className="relative px-14">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="relative pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="card p-8 relative h-full"
                >
                  <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-primary-100" />

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />

                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-600 line-clamp-4">
                    "{testimonial.content}"
                  </p>

                  <button
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className="mt-5 text-primary-600 font-semibold hover:underline"
                  >
                    Read More →
                  </button>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2
                       w-12 h-12 rounded-full bg-white shadow-xl
                       border border-gray-200
                       flex items-center justify-center
                       hover:bg-primary-600 hover:text-white
                       transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2
                       w-12 h-12 rounded-full bg-white shadow-xl
                       border border-gray-200
                       flex items-center justify-center
                       hover:bg-primary-600 hover:text-white
                       transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-primary-600 text-white p-8 relative">
                <button
                  onClick={() => setSelectedTestimonial(null)}
                  aria-label="Close testimonial"
                  className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-red-500 transition flex items-center justify-center"
                >
                  <FaTimes />
                </button>

                <div className="flex items-center gap-5">
                  <img
                    src={selectedTestimonial.avatar}
                    alt={selectedTestimonial.name}
                    className="w-20 h-20 rounded-full border-4 border-white object-cover"
                  />

                  <div>
                    <h2 className="text-3xl font-bold">
                      {selectedTestimonial.name}
                    </h2>

                    <p className="text-primary-100">
                      {selectedTestimonial.role}
                    </p>

                    <div className="flex mt-3 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-300" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <GoogleTranslate />
                </div>

                <FaQuoteLeft className="text-5xl text-primary-200 mb-5" />

                <p className="text-lg leading-8 text-gray-700 italic">
                  "{selectedTestimonial.content}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(Testimonials);