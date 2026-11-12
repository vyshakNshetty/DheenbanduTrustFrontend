import apii from "./apii";

const HERO_SECTION_ENDPOINT = "/hero/";

// GET Hero Section (Public)
export const getHeroSection = async () => {
  try {
    const response = await apii.get(HERO_SECTION_ENDPOINT, {
      skipAuth: true,
    });

    return response.data;

  } catch (error) {
    console.error("GET Hero Error:", error.response?.data || error);
    throw error;
  }
};

// PUT Hero Section (Admin only)
export const updateHeroSection = async (heroData) => {
  try {
    const response = await apii.put(
      HERO_SECTION_ENDPOINT,
      heroData
    );

    return response.data;

  } catch (error) {
    console.error("PUT Hero Error:", error.response?.data || error);
    throw error;
  }
};