import React, { useRef } from "react";
import { FaUpload, FaTrash } from "react-icons/fa";

const OurDonorImageUpload = ({
  preview,
  onImageChange,
  onRemoveImage,
}) => {
  const fileInputRef = useRef(null);

  return (
    <div className="space-y-4">
      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
        Donor Image
      </label>

      {/* Preview */}
      <div className="w-full h-64 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 overflow-hidden bg-gray-50 dark:bg-gray-800 flex items-center justify-center">
        {preview ? (
          <img
            src={preview}
            alt="Donor Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center text-gray-500 dark:text-gray-400">
            <FaUpload className="mx-auto text-4xl mb-3" />
            <p>No Image Selected</p>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
        >
          {preview ? "Change Image" : "Upload Image"}
        </button>

        {preview && (
          <button
            type="button"
            onClick={onRemoveImage}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2"
          >
            <FaTrash />
            Remove
          </button>
        )}
      </div>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="hidden"
      />
    </div>
  );
};

export default OurDonorImageUpload;