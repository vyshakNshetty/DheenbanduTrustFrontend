import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import HighlightItem from "./HighlightItem";
const AboutForm = ({
  formData,
  setFormData,
  onSubmit,
  loading,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHighlightChange = (index, value) => {
    const updated = [...formData.highlights];

    updated[index].title = value;

    setFormData((prev) => ({
      ...prev,
      highlights: updated,
    }));
  };

  const addHighlight = () => {
    setFormData((prev) => ({
      ...prev,
      highlights: [
        ...prev.highlights,
        {
          title: "",
          order: prev.highlights.length + 1,
        },
      ],
    }));
  };

  const removeHighlight = (index) => {
    const updated = formData.highlights
      .filter((_, i) => i !== index)
      .map((item, i) => ({
        ...item,
        order: i + 1,
      }));

    setFormData((prev) => ({
      ...prev,
      highlights: updated,
    }));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        Edit About Section
      </h2>

      {/* Title */}

      {/* <div>
        <label className="block mb-2 font-medium">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div> */}

      {/* Short Description */}

      <div>
        <label className="block mb-2 font-medium">
          Short Description
        </label>

        <textarea
          rows={3}
          name="short_description"
          value={formData.short_description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      {/* Full Description */}

      <div>
        <label className="block mb-2 font-medium">
          Full Description
        </label>

        <textarea
          rows={8}
          name="full_description"
          value={formData.full_description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 resize-none focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      {/* Youtube */}

      <div>
        <label className="block mb-2 font-medium">
          YouTube URL
        </label>

        <input
          type="url"
          name="youtube_url"
          value={formData.youtube_url}
          onChange={handleChange}
          placeholder="https://www.youtube.com/embed/..."
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 outline-none"
        />
      </div>

      {/* Highlights */}

      <div>
        <div className="flex justify-between items-center mb-4">
          <label className="font-medium">
            Highlights
          </label>

          <button
            type="button"
            onClick={addHighlight}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700"
          >
            <FaPlus />
            Add Highlight
          </button>
        </div>

        <div className="space-y-3">
        {formData.highlights.map((item, index) => (
  <HighlightItem
    key={index}
    index={index}
    highlight={item}
    onChange={handleHighlightChange}
    onDelete={removeHighlight}
  />
))}
        </div>
      </div>

      {/* Save */}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
};

export default AboutForm;