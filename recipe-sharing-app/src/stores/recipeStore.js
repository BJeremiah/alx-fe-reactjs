import create from 'zustand'

export const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  initializeIfEmpty: () =>
    set((state) => {
      if (state.recipes.length === 0) {
        return {
          recipes: [
            { id: 1, title: 'Spicy Tomato Pasta', description: 'Quick pasta with a rich tomato sauce.' },
            { id: 2, title: 'Avocado Toast', description: 'Simple avocado on toasted bread.' },
          ],
        }
      }
      return {}
    }),
}))
