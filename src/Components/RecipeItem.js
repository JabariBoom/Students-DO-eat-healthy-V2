import React from 'react';

const RecipeItem = ({ recipe, onSelect, onDelete }) => {
  return (
    <div className="recipe-button" onClick={() => onSelect(recipe)}>
      <span>{recipe.title}</span>
      <button className="delete-btn" onClick={(e) => { 
        e.stopPropagation();
        onDelete(recipe.title); 
      }}>
        X
      </button>
    </div>
  );
};

export default RecipeItem;

