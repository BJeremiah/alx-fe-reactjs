import React from "react";
import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoriteRecipes = favorites
    .map(id => recipes.find(r => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorite Recipes</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map(recipe => (
        <div key={recipe.id} style={{ marginBottom: "10px" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>

          <Link to={`/recipe/${recipe.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const favorites = useRecipeStore((state) => state.favorites);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>

      {favoriteRecipes.length === 0 && <p>No favorites yet.</p>}

      {favoriteRecipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '1rem' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
