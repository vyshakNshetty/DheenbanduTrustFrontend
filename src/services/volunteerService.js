import { api } from './api'

export const volunteerService = {
  registerVolunteer: async (volunteerData) => {
    return api.post('/volunteers', volunteerData)
  },

  getVolunteers: async () => {
    return api.get('/volunteers')
  },

  updateVolunteerStatus: async (id, status) => {
    return api.put(`/volunteers/${id}/status`, { status })
  },

  getVolunteerStats: async () => {
    return api.get('/volunteers/stats')
  },
}