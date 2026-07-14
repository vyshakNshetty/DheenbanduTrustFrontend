import { api } from "./api";

export const galleryService = {
  // Create
  createImage: async (data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("location", data.location);

  if (data.image) {
    formData.append("image", data.image);
  }

  return await api.post("/gallery/create/", formData);
},
  // Get all images
  getImages: async () => {
    return await api.get("/gallery/");
  },

  // Get single image
  getImage: async (id) => {
    return await api.get(`/gallery/${id}/`);
  },

  // Update
  updateImage: async (id, data) => {
  const formData = new FormData();

  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("category", data.category);
  formData.append("location", data.location);

  if (data.image) {
    formData.append("image", data.image);
  }

  
  return await api.put(`/gallery/${id}/`, formData);

},

  // Partial update
  patchImage: async (id, imageData) => {
    return await api.patch(`/gallery/${id}/`, imageData);
  },

  // Delete
  deleteImage: async (id) => {
    return await api.delete(`/gallery/${id}/`);
  },
};