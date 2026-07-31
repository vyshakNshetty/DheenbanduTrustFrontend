import React from "react";
import { FaTrash, FaGripVertical } from "react-icons/fa";

const HighlightItem = ({
  index,
  highlight,
  onChange,
  onDelete,
}) => {
  return (
    <div className="flex items-center gap-3 bg-gray-50 border rounded-xl p-3">

      {/* Drag Icon (optional for future drag & drop) */}
      <FaGripVertical className="text-gray-400 cursor-move" />

      {/* Highlight Input */}
      <input
        type="text"
        value={highlight.title}
        onChange={(e) => onChange(index, e.target.value)}
        placeholder={`Highlight ${index + 1}`}
        className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />

      {/* Order Badge */}
      <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-700 font-semibold flex items-center justify-center">
        {highlight.order}
      </div>

      {/* Delete Button */}
      <button
        type="button"
        onClick={() => onDelete(index)}
        className="w-10 h-10 rounded-lg bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition"
      >
        <FaTrash />
      </button>

    </div>
  );
};

export default React.memo(HighlightItem);