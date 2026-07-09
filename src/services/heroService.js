import { api } from "./api";

const HERO_SECTION_ENDPOINT = "/hero/";

// Get Hero Section
export const getHeroSection = async () => {
  try {
    return await api.get(HERO_SECTION_ENDPOINT);
  } catch (error) {
    console.error("Error fetching hero section:", error);
    throw error;
  }
};

// Update Hero Section
export const updateHeroSection = async (heroData) => {
  try {
    return await api.put(HERO_SECTION_ENDPOINT, heroData);
  } catch (error) {
    console.error("Error updating hero section:", error);
    throw error;
  }
};