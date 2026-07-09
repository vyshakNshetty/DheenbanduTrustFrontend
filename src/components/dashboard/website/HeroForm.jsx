import React from "react";
import { FaEdit } from "react-icons/fa";
import HeroImageUpload from "./HeroImageUpload";

const HeroForm = ({
  form,
  handleChange,
  handleImage,
  previewImage,
  removeImage,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100">

      {/* Header */}

      <div className="flex items-center gap-3 border-b border-gray-100 p-6">

        <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
          <FaEdit className="text-teal-600" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            Hero Content
          </h2>

          <p className="text-gray-500 text-sm">
            Edit homepage hero information
          </p>
        </div>

      </div>

      {/* Form */}

      <div className="p-6 space-y-6">

        {/* Badge */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Badge
          </label>

          <input
            type="text"
            name="badge"
            value={form.badge}
            onChange={handleChange}
            placeholder="Making a Difference Together"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />

        </div>

        {/* Title */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Hero Title
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Empowering Communities, Transforming Lives"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />

        </div>

        {/* Description */}

        <div>

          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description
          </label>

          <textarea
            rows={6}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter hero description..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />

          <div className="text-right mt-2 text-xs text-gray-400">
            {form.description.length}/500
          </div>

        </div>

        {/* Donate */}

        {/* <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Donate Button Text
            </label>

            <input
              type="text"
              name="donate_button_text"
              value={form.donate_button_text}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Donate Button Link
            </label>

            <input
              type="text"
              name="donate_button_link"
              value={form.donate_button_link}
              onChange={handleChange}
              placeholder="/donate"
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />

          </div>

        </div> */}

        {/* Volunteer */}

        {/* <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Volunteer Button Text
            </label>

            <input
              type="text"
              name="valunteer_button_text"
              value={form.valunteer_button_text}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />

          </div>

          <div>

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Volunteer Button Link
            </label>

            <input
              type="text"
              name="valunteer_button_link"
              value={form.valunteer_button_link}
              onChange={handleChange}
              placeholder="/get-involved"
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />

          </div>

        </div> */}

        {/* Image Upload */}

        <HeroImageUpload
          previewImage={previewImage}
          handleImage={handleImage}
          removeImage={removeImage}
        />

        {/* Active */}

        <div className="flex justify-between items-center rounded-xl border border-gray-200 bg-gray-50 p-5">

          <div>

            <h4 className="font-semibold text-gray-800">
              Active Hero Section
            </h4>

            <p className="text-sm text-gray-500 mt-1">
              Show this Hero Section on the homepage.
            </p>

          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              className="sr-only peer"
              checked={form.is_active}
              name="is_active"
              onChange={handleChange}
            />

            <div className="w-14 h-7 bg-gray-300 rounded-full peer peer-checked:bg-teal-600 transition"></div>

            <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition peer-checked:translate-x-7"></div>

          </label>

        </div>

      </div>

    </div>
  );
};

export default HeroForm;