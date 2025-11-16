import React from 'react'
import { useRecipeStore } from '../stores/recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (!recipes || recipes.length === 0) {
    return <div data-testid="empty-list">No recipes yet. Be the first to add one!</div>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #ddd',
            padding: '12px',
            marginBottom: '8px',
            borderRadius: '8px',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0' }}>{recipe.title}</h3>
          <p style={{ margin: 0 }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
