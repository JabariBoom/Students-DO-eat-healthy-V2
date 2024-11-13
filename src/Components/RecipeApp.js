
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipePopup from './RecipePopup';
import '../styles/index.css';

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (title) => {
    setRecipes(recipes.filter(recipe => recipe.title !== title));
  };

  const handleSearch = (query) => {
    if (query) {
      const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
      setRecipes(filteredRecipes);
    }
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <RecipeForm onAddRecipe={handleAddRecipe} />
      <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} onDeleteRecipe={handleDeleteRecipe} />
      {selectedRecipe && <RecipePopup recipe={selectedRecipe} onClose={handleClosePopup} />}
    </div>
  );
};

export default RecipeApp;


