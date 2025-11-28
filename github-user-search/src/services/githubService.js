// src/services/githubService.js

import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Pull API key from environment (optional)
const token = import.meta.env.VITE_APP_GITHUB_API_KEY || '';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: token
    ? { Authorization: `token ${token}` }
    : {}, // No header if token not provided
});

// Search GitHub users
export async function searchUsers(query) {
  const response = await axiosInstance.get('/search/users', {
    params: { q: query, per_page: 30 },
  });

  return response.data; // returns { items: [...] }
}

// Get a single user's full details
export async function getUser(username) {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
}
// fetch single user by username
export async function fetchUserData(username) {
  const response = await axiosInstance.get(`/users/${username}`);
  return response.data;
}
