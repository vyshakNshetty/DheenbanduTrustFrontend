import { api } from './api'

export const activityService = {
  createActivity: async (activityData) => {
    return api.post('/activities', activityData)
  },

  getActivities: async () => {
    return api.get('/activities')
  },

  getActivityById: async (id) => {
    return api.get(`/activities/${id}`)
  },

  updateActivity: async (id, activityData) => {
    return api.put(`/activities/${id}`, activityData)
  },

  deleteActivity: async (id) => {
    return api.delete(`/activities/${id}`)
  },
}