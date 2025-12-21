import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // <-- import Link

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  if (recipes.length === 0) {
    return <p>No recipes found.</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px' }}>
          {/* Wrap title in a Link to details page */}
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'blue' }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeCard = ({ recipe }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={() => isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id)}>
        {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeCard;
