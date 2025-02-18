import axios from "axios";

const API = axios.create({
  baseURL: "https://carbonease-api.onrender.com/api/auth",
  // baseURL: "http://localhost:3000/api/auth",
  headers: { "Content-Type": "application/json" },
});

// Attach token automatically for protected routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
