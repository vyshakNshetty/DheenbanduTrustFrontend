import React from "react";

const OurDonorPreview = ({ formData, preview }) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border">

      {/* Preview Header */}
      <div className="px-6 py-4 border-b bg-gray-50 dark:bg-gray-800">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          Live Preview
        </h2>
      </div>

      {/* Image */}
      <div className="h-64 bg-gray-100 dark:bg-gray-800">
        {preview ? (
          <img
            src={preview}
            alt="Donor Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image Selected
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {formData.title || "Donor Title"}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-7 line-clamp-6">
          {formData.description ||
            "Donor description will appear here as you type."}
        </p>

        {/* Status */}
        <div className="mt-6">
          <span
            className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
              formData.is_active
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {formData.is_active ? "Active" : "Inactive"}
          </span>
        </div>

      </div>
    </div>
  );
};

export default OurDonorPreview;