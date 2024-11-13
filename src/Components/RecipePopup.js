import React from 'react';

const RecipePopup = ({ recipe, onClose }) => {
  return (
    <div className="recipe-popup">
      <div className="popup-content">
        <h2>{recipe.title}</h2>
        <h3>Ingredients</h3>
        <p>{recipe.ingredients}</p>
        <h3>Directions</h3>
        <p>{recipe.directions}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RecipePopup;
