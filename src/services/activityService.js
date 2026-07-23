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

  // --------------------------------------------------------------------

   getOurdonor: async ()=>{
    return await api.get("/ourdonor/");
  },

  // create Ourdonor
   createOurdonor: async (ourdonorData) => {
    return await api.post("/ourdonor/create/", ourdonorData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // get single Ourdonor
  getOurdonorById: async (id) => {
    return await api.get(`/ourdonor/${id}/`);
  },


  // update Ourdonor
  updateOurdonor: async (id, ourdonorData) => {
    return await api.put(`/ourdonor/${id}/`, ourdonorData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  // Delete activity
  deleteOurdonor: async (id) => {
    return await api.delete(`/ourdonor/${id}/`);
  },
};