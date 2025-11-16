import React, { useEffect } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { useRecipeStore } from './stores/recipeStore'
import './index.css'

function App() {
  const initializeIfEmpty = useRecipeStore((state) => state.initializeIfEmpty)

  // initialize demo recipes on mount
  useEffect(() => {
    initializeIfEmpty()
  }, [initializeIfEmpty])

  return (
    <div className="app-container">
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  )
}

export default App
