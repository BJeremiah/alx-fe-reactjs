import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <SearchBar /> {/* Add search bar above the list */}
      <RecipeList />
    </div>
  );
}

export default App;
