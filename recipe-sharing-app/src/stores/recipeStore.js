import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],         // all recipes
  favorites: [],       // favorite recipe IDs
  recommendations: [], // recommended recipes

  // Favorites
  addFavorite: (id) =>
    set((state) => ({ favorites: [...state.favorites, id] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter(fid => fid !== id) })),

  // Generate simple recommendations based on favorites
  generateRecommendations: () =>
    set((state) => ({
      recommendations: state.recipes.filter(
        r => state.favorites.includes(r.id) && Math.random() > 0.5
      ),
    })),
}));

export default useRecipeStore;
