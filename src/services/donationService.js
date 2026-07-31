import { api } from "./api";

export const donationService = {
  // Get donation details
  getDonation: async () => {
    return await api.get("/donation/");
  },

  
 

  // Update donation details
  updateDonation: async (donationData) => {
    return await api.put("/donation/", donationData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};