import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', directions: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(recipe);
    setRecipe({ title: '', ingredients: '', directions: '' });
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={recipe.title}
        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
      />
      <textarea
        placeholder="Ingredients"
        value={recipe.ingredients}
        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
      />
      <textarea
        placeholder="Directions"
        value={recipe.directions}
        onChange={(e) => setRecipe({ ...recipe, directions: e.target.value })}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
