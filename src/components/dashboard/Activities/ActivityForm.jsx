import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import ActivityImageUpload from "./ActivityImageUpload";
import ActivityPreview from "./ActivityPreview";

import { activityService } from "../../../services/activityService";

const ActivityForm = ({ activity = null, onClose, onSuccess }) => {
  const [preview, setPreview] = useState("");

  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
    is_active: true,
    image: null,
  });

  useEffect(() => {
    if (activity) {
      setFormData({
        title: activity.title || "",
        description: activity.description || "",
        date: activity.date || "",
        location: activity.location || "",
        is_active: activity.is_active,
        image: null,
      });

      setPreview(activity.image);
    }
  }, [activity]);

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
    data.append("date", formData.date);
    data.append("location", formData.location);
    data.append("is_active", formData.is_active);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      setSaving(true);

      if (activity) {
        await activityService.updateActivity(activity.id, data);
      } else {
        await activityService.createActivity(data);
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
            {activity ? "Edit Activity" : "Add Activity"}
          </h2>

          <button onClick={onClose}>
            <FaTimes size={22} />
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="grid lg:grid-cols-2 gap-10 p-6">

            {/* LEFT */}

            <div className="space-y-6">

              <ActivityImageUpload
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
                  rows={7}
                  className="input-field mt-2"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div>

                  <label className="font-semibold">
                    Date
                  </label>

                  <input
                    type="date"
                    className="input-field mt-2"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                </div>

                <div>

                  <label className="font-semibold">
                    Location
                  </label>

                  <input
                    className="input-field mt-2"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                  />

                </div>

              </div>

              <label className="flex items-center gap-3">

                <input
                  type="checkbox"
                  name="is_active"
                  checked={formData.is_active}
                  onChange={handleChange}
                />

                Active Activity

              </label>

            </div>

            {/* RIGHT */}

            <ActivityPreview
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
                : activity
                ? "Update Activity"
                : "Create Activity"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ActivityForm;