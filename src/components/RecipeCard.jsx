import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeCard = ({ recipe }) => {
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);
  const favorites = useRecipeStore((s) => s.favorites);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem"
      }}
    >
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button
          onClick={() => removeFavorite(recipe.id)}
          style={{ background: "tomato", color: "white", padding: "0.5rem 1rem" }}
        >
          Remove Favorite
        </button>
      ) : (
        <button
          onClick={() => addFavorite(recipe.id)}
          style={{ background: "green", color: "white", padding: "0.5rem 1rem" }}
        >
          Add to Favorites
        </button>
      )}
    </div>
  );
};

export default RecipeCard;
