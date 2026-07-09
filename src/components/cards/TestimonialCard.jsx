import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="card p-8 relative hover:shadow-card-hover transition-all">
      <FaQuoteLeft className="absolute top-6 right-6 text-4xl text-primary-100 dark:text-primary-900/30" />
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <h4 className="font-bold text-dark dark:text-white">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.role}
          </p>
        </div>
      </div>
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-accent-500 text-sm" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        "{testimonial.content}"
      </p>
    </div>
  )
}

export default React.memo(TestimonialCard)