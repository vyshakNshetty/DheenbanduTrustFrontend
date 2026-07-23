import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import OurDonorImageUpload from "./OurDonorImageUpload";
import OurDonorPreview from "./OurDonorPreview";

import { activityService } from "../../../services/activityService";

const OurDonorForm = ({ donor = null, onClose, onSuccess }) => {
  const [preview, setPreview] = useState("");
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    is_active: true,
    image: null,
  });

  useEffect(() => {
    if (donor) {
      setFormData({
        title: donor.title || "",
        description: donor.description || "",
        is_active: donor.is_active,
        image: null,
      });

      setPreview(donor.image);
    }
  }, [donor]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setPreview("");

    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("is_active", formData.is_active);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      setSaving(true);

      if (donor) {
        await activityService.updateOurdonor(donor.id, data);
      } else {
        await activityService.createOurDonor(data);
      }

      if (onSuccess) {
        onSuccess();
      }

      onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-5">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">
            {donor ? "Edit Donor" : "Add Donor"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-10 p-6">

            {/* Left */}

            <div className="space-y-6">

              <OurDonorImageUpload
                preview={preview}
                onImageChange={handleImageChange}
                onRemoveImage={handleRemoveImage}
              />

              <div>
                <label className="font-semibold">
                  Title
                </label>

                <input
                  className="input-field mt-2"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="font-semibold">
                  Description
                </label>

                <textarea
                  rows={8}
                  className="input-field mt-2"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  // required
                />
              </div>

              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                />

                Active Donor
              </label>

            </div>

            {/* Right */}

            <OurDonorPreview
              formData={formData}
              preview={preview}
            />

          </div>

          <div className="border-t p-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-secondary"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="btn-primary"
            >
              {saving
                ? "Saving..."
                : donor
                ? "Update Donor"
                : "Create Donor"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};

export default OurDonorForm;