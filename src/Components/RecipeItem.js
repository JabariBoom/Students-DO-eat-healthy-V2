import React from 'react';

const RecipeItem = ({ recipe, onSelect, onDelete, onLike }) => {
  return (
    <div className="recipe-button" onClick={() => onSelect(recipe)}>
      <span>{recipe.title}</span>
      <button className="delete-btn" onClick={(e) => { 
        e.stopPropagation();
        onDelete(recipe.title); 
      }}>X</button>
      <button className="like-btn" onClick={(e) => {
        e.stopPropagation();
        onLike(recipe);
      }}>♡</button>
    </div>
  );
};

export default RecipeItem;

