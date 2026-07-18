import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSave, FaSpinner, FaTrash, FaTimes } from "react-icons/fa";

const TeamMemberCard = ({ member, onSave, onDelete, saving, deleting }) => {
  const isNew = !member?.id;

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    setName(member?.name || "");
    setRole(member?.role || "");
    setBio(member?.bio || "");
    setImage(null);
    setPreviewImage(member?.image || "");
  }, [member]);

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
    if (!name.trim()) {
      alert("Name is required");
      return;
    }

    if (!role.trim()) {
      alert("Role is required");
      return;
    }

    const formData = new FormData();

    formData.append("name", name);
    formData.append("role", role);
    formData.append("bio", bio);

    if (image) {
      formData.append("image", image);
    }

    onSave(member?.id, formData);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 space-y-4"
    >
      <div className="flex justify-center">
        {previewImage ? (
          <div className="relative w-24 h-24 group">
            <img
              src={previewImage}
              alt={name}
              className="w-24 h-24 rounded-full object-cover border-4 border-teal-50"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1 -right-1 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full transition"
            >
              <FaTimes size={10} />
            </button>
          </div>
        ) : (
          <label className="flex items-center justify-center w-24 h-24 rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-teal-500 transition text-gray-400 text-xs text-center">
            Upload
            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="hidden"
            />
          </label>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2 text-center font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2 text-center text-teal-600 font-medium focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleSubmit}
          disabled={saving}
          className="flex-1 bg-teal-600 hover:bg-teal-700 transition text-white px-4 py-2.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60 text-sm"
        >
          {saving ? (
            <>
              <FaSpinner className="animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <FaSave />
              {isNew ? "Add Member" : "Save"}
            </>
          )}
        </button>

        {!isNew && (
          <button
            onClick={() => onDelete(member.id)}
            disabled={deleting}
            className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2.5 rounded-xl flex items-center justify-center disabled:opacity-60"
          >
            {deleting ? <FaSpinner className="animate-spin" /> : <FaTrash />}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;