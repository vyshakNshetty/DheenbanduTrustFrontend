// Base API service configuration
const API_BASE_URL = `${import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'}/api`;

export const api = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`)
      if (!response.ok) throw new Error('Network response was not ok')
      return await response.json()
    } catch (error) {
      console.error('API GET error:', error)
      throw error
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error('Network response was not ok')
        return await response.json()
    } catch (error) {
      console.error('API POST error:', error)
      throw error
    }
  },

  put: async (endpoint, data) => {
    try {
      const isFormData = data instanceof FormData;

      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "PUT",
        body: isFormData ? data : JSON.stringify(data),
        headers: isFormData
          ? {}
          : {
            "Content-Type": "application/json",
          },
      });

      const result = await response.json();

      if (!response.ok) {
        console.error(result);
      throw new Error(JSON.stringify(result));
    }

    return result;
  } catch (error) {
    console.error("PUT Error:", error);
    throw error;
  }
  },

  delete: async (endpoint) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Network response was not ok')
      return await response.json()
    } catch (error) {
      console.error('API DELETE error:', error)
      throw error
    }
  },
}