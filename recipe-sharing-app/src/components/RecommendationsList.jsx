import React from 'react';
import useRecipeStore from '../store/recipeStore';
import RecipeCard from './RecipeCard';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length === 0 ? <p>No recommendations yet</p> :
        recommendations.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default RecommendationsList;
