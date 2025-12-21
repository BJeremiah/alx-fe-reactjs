import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="p-4">
        <PostsComponent />
      </div>
    </QueryClientProvider>
  )
}

export default App
