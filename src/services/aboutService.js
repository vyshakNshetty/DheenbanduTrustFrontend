import { api } from "./api";
import apii from "../services/apii"

export const getAboutPreview = () => api.get("/about/preview/");

export const createAboutPreview = (data) =>
  api.post("/about/preview/", data);

export const updateAboutPreview = (data) =>
  api.put("/about/preview/", data);

export const patchAboutPreview = (data) =>
  api.patch("/about/preview/", data);

// -----------------------------------------------------------------------------------------
export const getAboutSections = () => api.get("/about/");

export const getAboutSection = (id) =>
  api.get(`/about/${id}/`);

export const createAboutSection = (formData) =>
  api.post("/about/", formData);

export const updateAboutSection = (id, formData) =>
  api.patch(`/about/${id}/`, formData);

// export const deleteAboutSection = (id) =>
//   api.delete(`/about/${id}/`);


// Get all team members
export const getTeamMembers = async () => {
  const response = await apii.get("/team/", {
    skipAuth: true,
  });

  return response.data;
};

// Get single team member
export const getTeamMember = async (id) => {
  const response = await apii.get(`/team/${id}/`);
  return response.data;
};

// Create team member
export const createTeamMember = async (formData) => {
  const response = await apii.post("/team/create/", formData);
  return response.data;
};

// Update team member
export const updateTeamMember = async (id, formData) => {
  const response = await apii.put(`/team/${id}/`, formData);
  return response.data;
};

// Delete team member
export const deleteTeamMember = async (id) => {
  const response = await apii.delete(`/team/${id}/`);
  return response.data;
};

// -------------------------------------------------------------
export const getContactMessages = () => apii.get("/contact/");

export const sendContactMessage = (data) =>
  api.post("/contact/", data);
