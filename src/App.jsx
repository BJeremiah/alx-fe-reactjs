import React, { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore';

import RecipeCard from './components/RecipeCard';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  const recipes = useRecipeStore((s) => s.recipes);
  const setRecipes = useRecipeStore((s) => s.setRecipes);

  // TEMP DATA — You can replace this with API fetch
  useEffect(() => {
    const sampleRecipes = [
      { id: 1, title: "Jollof Rice", description: "Classic West African jollof." },
      { id: 2, title: "Kelewele", description: "Spicy Ghanaian fried plantain." },
      { id: 3, title: "Banku with Okro Soup", description: "A traditional delicacy." },
      { id: 4, title: "Wakye", description: "Rice and beans with stew." },
    ];
    setRecipes(sampleRecipes);
  }, [setRecipes]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Recipe Sharing App</h1>

      <section style={{ marginBottom: "2rem" }}>
        <RecommendationsList />
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <FavoritesList />
      </section>

      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default App;
