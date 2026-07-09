import { api } from './api'

export const authService = {
  login: async (credentials) => {
    return api.post('/auth/login', credentials)
  },

  logout: async () => {
    return api.post('/auth/logout')
  },

  register: async (userData) => {
    return api.post('/auth/register', userData)
  },

  getCurrentUser: async () => {
    return api.get('/auth/me')
  },

  resetPassword: async (email) => {
    return api.post('/auth/reset-password', { email })
  },

  updateProfile: async (userData) => {
    return api.put('/auth/profile', userData)
  },
}