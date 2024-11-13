import React from 'react';

const RecipePopup = ({ recipe, onClose }) => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <div className="popup show">
      <div className="popup-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{recipe.title}</h2>
        
        {recipe.img_URL && (
          <img src={recipe.img_URL} alt={recipe.title} onError={handleImageError} />
        )}
        
        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p><strong>Directions:</strong> {recipe.directions}</p>
      </div>
    </div>
  );
};

export default RecipePopup;


