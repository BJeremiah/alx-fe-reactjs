import { create } from 'zustand';
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // FAVORITES
  favorites: [],
  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // RECOMMENDATIONS
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      // fake logic: recommend favorites + some random recipes
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) || Math.random() > 0.6
      );

      return { recommendations: recommended };
    }),
}));

export const useRecipeStore = create((set) => ({
  recipes: [],

  