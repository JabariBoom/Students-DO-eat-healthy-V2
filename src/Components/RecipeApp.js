import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipePopup from './RecipePopup';
import '../styles/index.css';

const RecipeApp = () => {
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/Foods")
      .then(response => response.json())
      .then(data => {
        setDefaultRecipes(data);
        setFilteredRecipes(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddRecipe = (newRecipe) => {
    const updatedUserRecipes = [...userRecipes, newRecipe];
    setUserRecipes(updatedUserRecipes);
    setFilteredRecipes([...defaultRecipes, ...updatedUserRecipes]);
  };

  const handleDeleteRecipe = (title) => {
    const updatedUserRecipes = userRecipes.filter(recipe => recipe.title !== title);
    setUserRecipes(updatedUserRecipes);
    setFilteredRecipes([...defaultRecipes, ...updatedUserRecipes]);
  };

  const handleSearch = (query) => {
    if (query) {
      const allRecipes = [...defaultRecipes, ...userRecipes];
      const filteredResults = allRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRecipes(filteredResults);
    } else {
      setFilteredRecipes([...defaultRecipes, ...userRecipes]);
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
      <RecipeList recipes={filteredRecipes} onSelectRecipe={handleSelectRecipe} onDeleteRecipe={handleDeleteRecipe} />
      {selectedRecipe && <RecipePopup recipe={selectedRecipe} onClose={handleClosePopup} />}
    </div>
  );
};

export default RecipeApp;
