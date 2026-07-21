import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaSearch,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import ActivityForm from "./ActivityForm";
import DeleteConfirm from "./DeleteConfirm";
import LoadingSpinner from "../../common/LoadingSpinner";
import { activityService } from "../../../services/activityService";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [selectedActivity, setSelectedActivity] = useState(null);
const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    try {
      setLoading(true);

      const data = await activityService.getActivities();

      setActivities(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [activities, searchTerm]);

  const handleAdd = () => {
    setEditingActivity(null);
    setShowModal(true);
  };

  const handleEdit = (activity) => {
    setEditingActivity(activity);
    setShowModal(true);
  };

  const handleDelete = async () => {
  if (!selectedActivity) return;

  try {
    setDeleting(true);

    await activityService.deleteActivity(selectedActivity.id);

    await loadActivities();

    setShowDeleteModal(false);
    setSelectedActivity(null);

  } catch (error) {
    console.error(error);
  } finally {
    setDeleting(false);
  }
};

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Activities
          </h1>

          <button
            onClick={handleAdd}
            className="btn-primary flex items-center gap-2"
          >
            <FaPlus />
            Add Activity
          </button>

        </div>

        {/* Search */}

        <div className="relative mb-6">

          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search Activity..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="input-field pl-10"
          />

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-xl bg-white shadow">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="p-4 text-left">
                  Image
                </th>

                <th className="p-4 text-left">
                  Title
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

                <th className="p-4 text-left">
                  Location
                </th>

                <th className="p-4 text-center">
                  Actions
                </th>

              </tr>

            </thead>

           <tbody>
  {filteredActivities.length === 0 ? (
    <tr>
      <td colSpan="5" className="p-8 text-center text-gray-500">
        No activities found.
      </td>
    </tr>
  ) : (
    filteredActivities.map((activity) => (
      <tr key={activity.id} className="border-b hover:bg-gray-50">
        <td className="p-4">
          {activity.image ? (
            <img
              src={activity.image}
              alt={activity.title}
              className="w-20 h-14 rounded object-cover"
            />
          ) : (
            <div className="w-20 h-14 rounded bg-gray-200 flex items-center justify-center text-xs text-gray-500">
              No Image
            </div>
          )}
        </td>

        <td className="p-4 font-semibold">
          {activity.title}
        </td>

        <td className="p-4">
          {activity.date || "-"}
        </td>

        <td className="p-4">
          {activity.location || "-"}
        </td>

        <td className="p-4">
          <div className="flex justify-center gap-3">
            <button
              onClick={() => handleEdit(activity)}
              className="text-blue-600 hover:text-blue-800"
            >
              <FaEdit />
            </button>

            <button
              onClick={() => {
                setSelectedActivity(activity);
                setShowDeleteModal(true);
              }}
              className="text-red-600 hover:text-red-800"
            >
              <FaTrash />
            </button>
          </div>
        </td>
      </tr>
    ))
  )}
</tbody>

          </table>

        </div>

      </motion.div>

      {showModal && (
        <ActivityForm
  activity={editingActivity}
  onClose={() => setShowModal(false)}
  onSuccess={() => {
    loadActivities();
    setShowModal(false);
  }}
/>

      )}

      <DeleteConfirm
  isOpen={showDeleteModal}
  title="Delete Activity"
  message={`Are you sure you want to delete "${selectedActivity?.title}"? This action cannot be undone.`}
  loading={deleting}
  onCancel={() => {
    setShowDeleteModal(false);
    setSelectedActivity(null);
  }}
  onConfirm={handleDelete}
/>
    </>
  );
};

export default Activities;