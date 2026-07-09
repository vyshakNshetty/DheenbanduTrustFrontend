import { api } from './api'

export const donationService = {
  createDonation: async (donationData) => {
    return api.post('/donations', donationData)
  },

  getDonations: async () => {
    return api.get('/donations')
  },

  getDonationStats: async () => {
    return api.get('/donations/stats')
  },

  processPayment: async (paymentData) => {
    return api.post('/payments', paymentData)
  },
}