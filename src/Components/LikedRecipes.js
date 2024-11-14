import React from 'react';
import RecipeList from './RecipeList';

const LikedRecipes = ({ recipes, onUnlikeRecipe }) => {
  return (
    <div className="container">
      <RecipeList 
        recipes={recipes} 
        onDeleteRecipe={onUnlikeRecipe}
      />
    </div>
  );
};

export default LikedRecipes;


