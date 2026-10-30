import { api } from "./api";

export const testimonialService = {
  getTestimonials: async () => {
    return await api.get("/testimonials/");
  },

  createTestimonial: async (formData) => {
    return await api.post("/testimonials/", formData);
  },

  updateTestimonial: async (id, formData) => {
    return await api.put(`/testimonials/${id}/`, formData);
  },

  deleteTestimonial: async (id) => {
    return await api.delete(`/testimonials/${id}/`);
  },
};