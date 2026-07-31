import { api } from "./api";

export const testimonialService = {
  getTestimonials: async () => {
    return await api.get("/testimonials/");
  },

  createTestimonial: async (formData) => {
    return await api.post("/testimonials/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  updateTestimonial: async (id, formData) => {
    return await api.put(`/testimonials/${id}/`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteTestimonial: async (id) => {
    return await api.delete(`/testimonials/${id}/`);
  },
};