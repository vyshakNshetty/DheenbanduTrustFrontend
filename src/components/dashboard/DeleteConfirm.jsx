import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrashAlt, FaTimes } from "react-icons/fa";

const DeleteConfirm = ({
  isOpen,
  title = "Delete Item",
  message = "Are you sure you want to delete this item? This action cannot be undone.",
  onCancel,
  onConfirm,
  loading = false,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onCancel}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="rounded-2xl bg-white dark:bg-gray-900 shadow-2xl p-6">

              {/* Header */}
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <FaTrashAlt className="text-red-600 text-xl" />
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h2>
                </div>

                <button
                  onClick={onCancel}
                  disabled={loading}
                  className="text-gray-500 hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Message */}
              <p className="text-gray-600 dark:text-gray-400 leading-7">
                {message}
              </p>

              {/* Buttons */}
              <div className="flex justify-end gap-3 mt-8">
                <button
                  onClick={onCancel}
                  disabled={loading}
                  className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  disabled={loading}
                  className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteConfirm;