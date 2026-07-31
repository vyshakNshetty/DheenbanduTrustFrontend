import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPreviewCard = ({ formData }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-6 bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}

      <div className="bg-primary-600 text-white px-6 py-4">
        <h2 className="text-xl font-bold">
          Live Preview
        </h2>
        <p className="text-sm opacity-90">
          This is how your About section will appear.
        </p>
      </div>

      <div className="p-6">

        {/* Title */}

        {/* <h2 className="text-3xl font-bold text-gray-900">
          {formData.title || "About Us"}
        </h2> */}

        {/* Short Description */}

        <p className="mt-4 text-gray-600 leading-7">
          {formData.short_description ||
            "Short description will appear here."}
        </p>

        {/* YouTube */}

        <div className="mt-8 rounded-xl overflow-hidden shadow">
          {formData.youtube_url ? (
            <iframe
              className="w-full aspect-video"
              src={formData.youtube_url}
              title="About Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="aspect-video flex items-center justify-center bg-gray-100 text-gray-500">
              YouTube Preview
            </div>
          )}
        </div>

        {/* Highlights */}

        <div className="mt-8">

          <h3 className="text-xl font-semibold mb-4">
            Highlights
          </h3>

          {formData.highlights?.length ? (
            <div className="space-y-3">
              {formData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />

                  <span className="text-gray-700">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">
              No highlights added.
            </p>
          )}
        </div>

        {/* Full Description */}

        <div className="mt-8">

          <h3 className="text-xl font-semibold mb-4">
            Full Description
          </h3>

          <p className="text-gray-700 leading-8 whitespace-pre-line">
            {formData.full_description ||
              "Full description will appear here..."}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPreviewCard;