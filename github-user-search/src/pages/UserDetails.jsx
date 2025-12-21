import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserData } from '../services/githubService';

export default function UserDetails() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await getUser(username);
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [username]);

  if (loading) return <p>Loading user…</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h2>{user.login}</h2>
      <img src={user.avatar_url} alt="" width="120" />
      <p>{user.name}</p>
      <p>{user.bio}</p>
      <p>Followers: {user.followers} • Following: {user.following}</p>
      <p><a href={user.html_url} target="_blank" rel="noreferrer">Open on GitHub</a></p>
    </div>
  );
}
