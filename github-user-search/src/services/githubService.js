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
// src/services/githubService.js

export async function fetchAdvancedUsers({ username = '', location = '', minRepos = '' }) {
  // Construct query for GitHub API
  let query = username ? `${username} in:login` : '';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axiosInstance.get('/search/users', {
    params: { q: query, per_page: 30 },
  });

  // The search API returns only basic info, fetch full details for each user
  const userDetails = await Promise.all(
    response.data.items.map(async (user) => {
      const res = await axiosInstance.get(`/users/${user.login}`);
      return res.data;
    })
  );

  return userDetails;
}
