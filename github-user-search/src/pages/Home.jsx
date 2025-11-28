import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchUsers } from '../services/githubService';

export default function Home() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();
    if (!q) return;
    setLoading(true);
    setError(null);
    try {
      const data = await searchUsers(q);
      setResults(data.items || []);
    } catch (err) {
      setError(err.message || 'Error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search GitHub users (e.g. tom)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          style={{ padding: 8, width: 300 }}
        />
        <button type="submit" style={{ marginLeft: 8 }}>Search</button>
      </form>

      {loading && <p>Loading…</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {results && (
        <ul>
          {results.map(user => (
            <li key={user.id} style={{ margin: '12px 0' }}>
              <img src={user.avatar_url} alt="" width="40" style={{ verticalAlign: 'middle', borderRadius: 4 }} />
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate(`/user/${user.login}`); }}
                style={{ marginLeft: 8 }}
              >
                {user.login}
              </a>
              <span style={{ marginLeft: 8 }}>
                <a href={user.html_url} target="_blank" rel="noreferrer">View on GitHub</a>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
