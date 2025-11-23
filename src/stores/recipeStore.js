import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // holds recipe IDs
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => {
      // Prevent duplicates
      if (state.favorites.includes(recipeId)) return {};
      return { favorites: [...state.favorites, recipeId] };
    }),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Simple mock logic
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) &&  // related to favorites
        Math.random() > 0.5               // random selection
    );

    set({ recommendations: recommended });
  },

  // Example: if you fetch recipes from API  
  setRecipes: (data) => set({ recipes: data }),
}));
