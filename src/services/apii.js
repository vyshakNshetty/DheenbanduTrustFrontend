import axios from "axios";

const apii = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
});

apii.interceptors.request.use((config) => {

  // Public API: don't send JWT token
  if (config.skipAuth) {
    delete config.skipAuth;
    delete config.headers.Authorization;
    return config;
  }

  // Protected API: send JWT token
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default apii;