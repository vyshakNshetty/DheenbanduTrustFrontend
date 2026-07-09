import { api } from './api'

export const galleryService = {
  uploadImage: async (imageData) => {
    return api.post('/gallery', imageData)
  },

  getImages: async () => {
    return api.get('/gallery')
  },

  deleteImage: async (id) => {
    return api.delete(`/gallery/${id}`)
  },

  updateImage: async (id, imageData) => {
    return api.put(`/gallery/${id}`, imageData)
  },
}