import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import RecipeForm from './RecipeForm';
import RecipeList from './RecipeList';
import RecipePopup from './RecipePopup';
import '../styles/index.css';

const RecipeApp = ({ showFormOnly, onLikeRecipe, showSearchBar }) => {
  const [defaultRecipes, setDefaultRecipes] = useState([]);
  const [userRecipes, setUserRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const baseURL = "https://my-json-server.typicode.com/JabariBoom/Students-DO-eat-healthy-V2/Foods";

  useEffect(() => {
    fetch(baseURL)
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
    alert("Added Successfully");
  };

  const handleDeleteRecipe = (title) => {
    const updatedUserRecipes = userRecipes.filter(recipe => recipe.title !== title);
    setUserRecipes(updatedUserRecipes);
    setFilteredRecipes([...defaultRecipes, ...updatedUserRecipes]);
  };

  return (
    <div className="container">
      {showSearchBar && (
        <SearchBar onSearch={(query) => {
          const allRecipes = [...defaultRecipes, ...userRecipes];
          setFilteredRecipes(query ? allRecipes.filter(recipe => recipe.title.toLowerCase().includes(query.toLowerCase())) : allRecipes);
        }} />
      )}
      {showFormOnly ? (
        <RecipeForm onAddRecipe={handleAddRecipe} />
      ) : (
        <RecipeList 
          recipes={filteredRecipes} 
          onSelectRecipe={setSelectedRecipe} 
          onDeleteRecipe={handleDeleteRecipe} 
          onLikeRecipe={onLikeRecipe} 
        />
      )}
      {selectedRecipe && <RecipePopup recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </div>
  );
};

export default RecipeApp;



