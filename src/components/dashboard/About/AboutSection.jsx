import React, { useEffect, useState } from "react";
import { FaSave, FaSpinner, FaTimes } from "react-icons/fa";

const AboutSectionCard = ({ section, onSave, saving }) => {
  const [sectionType, setSectionType] = useState("founder");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setSectionType(section.section_type || "founder");
    setTitle(section.title || "");
    setDescription(section.description || "");
    setImage(null);
    setPreviewImage(section.image || "");
  }, [section]);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreviewImage("");
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      alert("Please enter title");
      return;
    }

    if (!description.trim()) {
      alert("Please enter description");
      return;
    }

    if (!section.id && !image) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();

    formData.append("section_type", sectionType);
    formData.append("title", title);
    formData.append("description", description);

    if (image) {
      formData.append("image", image);
    }

    onSave(section.id || null, formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-xl font-bold text-gray-800">
          {sectionType === "founder" ? "The Founder" : "Our Journey"}
        </h2>

        <button
          onClick={handleSubmit}
          disabled={saving}
          className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 disabled:opacity-60 text-sm"
        >
          {saving ? (
            <>
              <FaSpinner className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <FaSave />
              Save
            </>
          )}
        </button>

      </div>

      {/* Story Type */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Story Type
        </label>

        <select
          value={sectionType}
          disabled={!!section.id}
          onChange={(e) => setSectionType(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 disabled:bg-gray-100"
        >
          <option value="founder">Founder</option>
          <option value="journey">Journey</option>
        </select>
      </div>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Title
        </label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Description
        </label>

        <textarea
          rows={6}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2.5 resize-none"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          Image
        </label>

        {previewImage ? (
          <div className="relative w-full h-48 rounded-xl overflow-hidden">

            <img
              src={previewImage}
              alt={title}
              className="w-full h-full object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full"
            >
              <FaTimes size={12} />
            </button>

          </div>
        ) : (
          <label className="flex items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-teal-500 text-gray-400 text-sm">

            Click to upload image

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />

          </label>
        )}
      </div>

    </div>
  );
};

export default AboutSectionCard;