import React from 'react';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipes, onSelectRecipe, onDeleteRecipe }) => {
  return (
    <div className="button-container">
      <div className="recipe-list">
        {recipes.map(recipe => (
          <RecipeItem
            key={recipe.title}
            recipe={recipe}
            onSelect={onSelectRecipe}
            onDelete={onDeleteRecipe}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

