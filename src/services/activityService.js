import { api } from "./api";

export const activityService = {
  // Get all activities
  getActivities: async () => {
    return await api.get("/activities/");
  },

  // Create activity
  createActivity: async (activityData) => {
    return await api.post("/activities/create/", activityData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // Get single activity
  getActivityById: async (id) => {
    return await api.get(`/activities/${id}/`);
  },

  // Update activity
  updateActivity: async (id, activityData) => {
    return await api.put(`/activities/${id}/`, activityData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // Delete activity
  deleteActivity: async (id) => {
    return await api.delete(`/activities/${id}/`);
  },
};