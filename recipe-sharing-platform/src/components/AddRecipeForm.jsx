<div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md md:max-w-lg">
  <form>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
        Recipe Title
      </label>
      <input
        type="text"
        id="title"
        className="w-full border border-gray-300 p-2 rounded md:p-3"
        placeholder="Enter recipe title"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="ingredients">
        Ingredients
      </label>
      <textarea
        id="ingredients"
        className="w-full border border-gray-300 p-2 rounded md:p-3"
        placeholder="List ingredients, separated by commas"
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="steps">
        Preparation Steps
      </label>
      <textarea
        id="steps"
        className="w-full border border-gray-300 p-2 rounded md:p-3"
        placeholder="Describe preparation steps"
      />
    </div>
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 md:py-3 md:px-6"
    >
      Add Recipe
    </button>
  </form>
</div>
