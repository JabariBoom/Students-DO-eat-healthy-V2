import React, { useState } from 'react';

const RecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [directions, setDirections] = useState('');
  const [img_URL, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients,
      directions,
      img_URL
    };

const baseURL = "https://my-json-server.typicode.com/JabariBoom/Students-DO-eat-healthy-V2/Foods"

    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    })
    .then(response => response.json())
    .then(data => {
      onAddRecipe(data);
      setTitle('');
      setIngredients('');
      setDirections('');
      setImage('');
    })
    .catch(error => console.error('Error saving recipe:', error));
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-form">
      <h2>Post your delicious recipes!</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <textarea
        placeholder="Directions"
        value={directions}
        onChange={(e) => setDirections(e.target.value)}
      />
      <input
        type="url"
        placeholder="Image URL"
        value={img_URL}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;


