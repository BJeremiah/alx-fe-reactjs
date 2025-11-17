import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  
  // --- Search and filtering ---
  searchTerm: '',
  filteredRecipes: [],

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return { 
        recipes: updatedRecipes, 
        filteredRecipes: updatedRecipes.filter(r =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),
}));

export { useRecipeStore };
