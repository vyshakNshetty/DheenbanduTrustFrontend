import { api } from "./api";

export const galleryService = {
  // Create Gallery Image
  createImage: async (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);

    if (data.location) {
      formData.append("location", data.location);
    }

    if (data.date) {
      formData.append("date", data.date);
    }

    if (data.image) {
      formData.append("image", data.image);
    }

    return await api.post("/gallery/create/", formData);
  },

  // Get All Gallery Images
  getImages: async () => {
    return await api.get("/gallery/");
  },

  // Get Single Gallery Image
  getImage: async (id) => {
    return await api.get(`/gallery/${id}/`);
  },

  // Update Gallery Image
  updateImage: async (id, data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);

    if (data.location) {
      formData.append("location", data.location);
    }

    if (data.date) {
      formData.append("date", data.date);
    }

    if (data.image) {
      formData.append("image", data.image);
    }

    return await api.put(`/gallery/${id}/`, formData);
  },

  // Partial Update
  patchImage: async (id, data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      if (data[key] !== null && data[key] !== undefined) {
        formData.append(key, data[key]);
      }
    });

    return await api.patch(`/gallery/${id}/`, formData);
  },

  // Delete Gallery Image
  deleteImage: async (id) => {
    return await api.delete(`/gallery/${id}/`);
  },

  // Get Categories
  getCategories: async () => {
    return await api.get("/gallery/categories/");
  },

  // Create Category
  createCategory: async (data) => {
    return await api.post("/gallery/categories/", data);
  },
};