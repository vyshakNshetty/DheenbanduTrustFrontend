import { api } from "./api";

export const getAboutSections = () => api.get("/about/");

export const getAboutSection = (id) =>
  api.get(`/about/${id}/`);

// export const createAboutSection = (formData) =>
//   api.post("/about/", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

export const updateAboutSection = (id, formData) =>
  api.put(`/about/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// export const deleteAboutSection = (id) =>
//   api.delete(`/about/${id}/`);



// Get all team members
export const getTeamMembers = () => api.get("/team/");

// Get single team member
export const getTeamMember = (id) =>
  api.get(`/team/${id}/`);

// Create team member
export const createTeamMember = (formData) =>
  api.post("/team/create/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Update team member
export const updateTeamMember = (id, formData) =>
  api.put(`/team/${id}/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// Delete team member
export const deleteTeamMember = (id) =>
  api.delete(`/team/${id}/`);


export const getContactMessages = () => api.get("/contact/");

export const sendContactMessage = (data) =>
  api.post("/contact/", data);
