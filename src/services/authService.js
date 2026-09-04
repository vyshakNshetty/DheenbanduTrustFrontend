import apii from './apii'

export const authService = {
  login: async (credentials) => {
    const response = await apii.post('auth/login/', credentials)

    console.log("LOGIN API RESPONSE:", response.data)

    return response.data
  },

  logout: async () => {
    return apii.post('auth/logout')
  },

  register: async (userData) => {
    return apii.post('auth/register', userData)
  },

  getCurrentUser: async () => {
    return apii.get('auth/me')
  },

  resetPassword: async (email) => {
    return apii.post('auth/reset-password', { email })
  },

  updateProfile: async (userData) => {
    return apii.put('auth/profile', userData)
  },
}