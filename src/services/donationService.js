import { api } from "./api";

export const getDonation = () => api.get("/donation/");

export const updateDonation = (data) =>
  api.put("/donation/", data);