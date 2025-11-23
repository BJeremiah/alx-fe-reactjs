import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails'; // Make sure this exists
import './index.css';

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <SearchBar />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import useRecipeStore from './store/recipeStore';

function App() {
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  return (
    <div>
      <h1>Recipe Sharing App</h1>

      <button onClick={generateRecommendations}>Generate Recommendations</button>

      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

export default App;
