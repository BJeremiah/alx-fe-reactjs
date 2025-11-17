import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Use filteredRecipes instead of recipes
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
