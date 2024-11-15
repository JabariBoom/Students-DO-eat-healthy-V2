import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipePopup from './RecipePopup';

const LikedRecipes = ({ recipes, onUnlikeRecipe }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleClosePopup = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="container">
      <RecipeList 
        recipes={recipes} 
        onSelectRecipe={handleSelectRecipe} 
        onDeleteRecipe={onUnlikeRecipe}
      />
      {selectedRecipe && (
        <RecipePopup 
          recipe={selectedRecipe} 
          onClose={handleClosePopup} 
        />
      )}
    </div>
  );
};

export default LikedRecipes;



