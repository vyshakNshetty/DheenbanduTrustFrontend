import React from "react";
import {
  FaCloudUploadAlt,
  FaTrash,
  FaImage,
} from "react-icons/fa";

const HeroImageUpload = ({
  previewImage,
  handleImage,
  removeImage,
}) => {
  return (
    <div>

      {/* Label */}

      <label className="block text-sm font-semibold text-gray-700 mb-3">
        Background Image
      </label>

      {/* Upload Box */}

      <div className="border-2 border-dashed border-gray-300 hover:border-teal-500 transition rounded-2xl overflow-hidden">

        {!previewImage ? (

          <label
            htmlFor="heroImage"
            className="cursor-pointer block p-10 text-center"
          >

            <FaCloudUploadAlt className="mx-auto text-5xl text-teal-500 mb-5" />

            <h3 className="text-lg font-semibold text-gray-700">
              Upload Background Image
            </h3>

            <p className="text-gray-500 mt-2">
              Click here to browse your computer
            </p>

            <p className="text-xs text-gray-400 mt-3">
              Supported formats:
              JPG • PNG • JPEG • WEBP
            </p>

            <input
              id="heroImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />

          </label>

        ) : (

          <div className="relative">

            <img
              src={previewImage}
              alt="Hero Preview"
              className="w-full h-72 object-cover"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex justify-center items-center gap-4">

              {/* Change */}

              <label
                htmlFor="heroImage"
                className="bg-white rounded-xl px-5 py-3 cursor-pointer flex items-center gap-2 shadow-lg hover:bg-gray-100"
              >

                <FaCloudUploadAlt />

                Change Image

              </label>

              {/* Remove */}

              <button
                type="button"
                onClick={removeImage}
                className="bg-red-600 text-white rounded-xl px-5 py-3 flex items-center gap-2 hover:bg-red-700"
              >

                <FaTrash />

                Remove

              </button>

            </div>

            <input
              id="heroImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />

          </div>

        )}

      </div>

      {/* Information */}

      <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">

        <FaImage />

        Recommended Size:
        <strong>1920 × 1080</strong>

      </div>

    </div>
  );
};

export default HeroImageUpload;