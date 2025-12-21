import React from 'react'
import { useQuery } from 'react-query'

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!res.ok) throw new Error('Network response was not ok')
  return res.json()
}

const PostsComponent = () => {
  const { data, isLoading, error, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // 1 minute caching
  })

  if (isLoading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <button
        onClick={() => refetch()}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Refetch Posts
      </button>
      <ul>
        {data.map(post => (
          <li key={post.id} className="mb-2 border-b p-2">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
