import axios from "axios";

const apii = axios.create({
  baseURL: "http://127.0.0.1:8001/api/",
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