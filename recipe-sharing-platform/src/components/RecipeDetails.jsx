import React from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data.json";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipesData.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Recipe Not Found</h2>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full max-h-96 object-cover rounded-lg mb-6" />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      <Link
        to="/"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default RecipeDetails;
