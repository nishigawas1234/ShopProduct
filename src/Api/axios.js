import axios from 'axios';

// Create an Axios instance with the base URL
const api = axios.create({
  baseURL: "https://api.sheety.co/af35b536915ec576818d468cf2a6505c",
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add the Authorization header to each request
api.interceptors.request.use((config) => {
  const token = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo ";
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
