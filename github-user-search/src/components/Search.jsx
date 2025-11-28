// src/components/Search.jsx

import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const results = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(results);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we cant find the user</p>}
        {users.length > 0 && (
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="border p-2 rounded flex items-center space-x-4">
                <img src={user.avatar_url} alt="" className="w-16 rounded" />
                <div>
                  <p className="font-bold">{user.login}</p>
                  {user.name && <p>{user.name}</p>}
                  {user.location && <p>Location: {user.location}</p>}
                  <p>Repos: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
