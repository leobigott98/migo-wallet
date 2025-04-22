import axios from 'axios';

// Create an Axios instance
const api = axios.create({
  baseURL: 'http://192.168.100.167:3005', // Replace with your backend URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Token interceptor (optional, if using authentication)
/* api.interceptors.request.use(
  async (config) => {
    const token = await getTokenFromStorage(); // Implement this function to Retrieve token from AsyncStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
); */

// Handle errors in a centralized way
/* api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        if (error.response.status === 401) {
          // Handle unauthorized (e.g., redirect to login)
        } else if (error.response.status === 500) {
          console.error('Server error:', error.response.data);
        }
      } else {
        console.error('Network error:', error.message);
      }
      return Promise.reject(error);
    }
  ); */
  

export default api;
