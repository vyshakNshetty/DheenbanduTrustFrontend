import React from "react";
import {
  FaEye,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const HeroPreview = ({ form, previewImage }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-100 p-6">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <FaEye className="text-indigo-600" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Live Preview
            </h2>

            <p className="text-sm text-gray-500">
              Homepage Hero Preview
            </p>
          </div>

        </div>

        {form.is_active ? (
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <FaCheckCircle />
            Active
          </span>
        ) : (
          <span className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
            <FaTimesCircle />
            Inactive
          </span>
        )}

      </div>

      {/* Preview */}

      <div className="p-6">

        <div className="relative overflow-hidden rounded-2xl min-h-[650px]">

          {/* Background */}

          {previewImage ? (
            <img
              src={previewImage}
              alt="Hero Background"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-cyan-600 to-slate-900" />
          )}

          {/* Dark Overlay */}

          <div className="absolute inset-0 bg-black/55" />

          {/* Hero Content */}

          <div className="relative z-10 flex flex-col justify-center h-full p-10 text-white">

            {/* Badge */}

            <span className="inline-flex self-start rounded-full border border-white/30 bg-white/20 backdrop-blur-md px-5 py-2 text-sm font-semibold">

              {form.badge || "Making a Difference Together"}

            </span>

            {/* Title */}

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">

              {form.title ||
                "Empowering Communities, Transforming Lives"}

            </h1>

            {/* Description */}

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-100">

              {form.description ||
                "Join us in creating sustainable change through education, healthcare, and community development."}

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl bg-teal-500 px-7 py-3 font-semibold shadow-lg hover:bg-teal-600 transition"
              >
                <FaHandHoldingHeart />

                {form.donate_button_text || "Donate Now"}

              </button>

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-white px-7 py-3 font-semibold hover:bg-white hover:text-gray-900 transition"
              >
                <FaHandsHelping />

                {form.valunteer_button_text ||
                  "Become a Volunteer"}

              </button>

            </div>

            {/* Links */}

            <div className="mt-12 rounded-xl bg-white/10 backdrop-blur-md p-5">

              <h4 className="font-semibold mb-3">
                Navigation Links
              </h4>

              <div className="space-y-2 text-sm text-gray-200">

                <div>
                  <span className="font-semibold">
                    Donate:
                  </span>{" "}
                  {form.donate_button_link || "/donate"}
                </div>

                <div>
                  <span className="font-semibold">
                    Volunteer:
                  </span>{" "}
                  {form.valunteer_button_link ||
                    "/get-involved"}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default HeroPreview;