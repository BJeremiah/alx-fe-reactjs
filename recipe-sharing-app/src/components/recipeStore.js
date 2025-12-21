// src/components/recipeStore.js
import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Existing recipes
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // --- Task 3: Favorites & Recommendations ---
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({ favorites: state.favorites.filter((id) => id !== recipeId) })),

  recommendations: [],
  generateRecommendations: () => {
    const state = get();
    // Mock: recommend recipes that are not yet in favorites
    const recommended = state.recipes.filter(
      (recipe) => !state.favorites.includes(recipe.id)
    );
    set({ recommendations: recommended });
  },
}));
