import React from 'react';

const RecipeItem = ({ recipe, onSelect, onDelete }) => {
  return (
    <div className="recipe-button">
      <span onClick={() => onSelect(recipe)}>{recipe.title}</span>
      <button className="delete-btn" onClick={() => onDelete(recipe.title)}>Delete</button>
    </div>
  );
};

export default RecipeItem;
