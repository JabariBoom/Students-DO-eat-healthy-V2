import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeApp from './Components/RecipeApp';
import LikedRecipes from './Components/LikedRecipes';
import './styles/index.css';

function App() {
  const [likedRecipes, setLikedRecipes] = useState([]);

  const handleLikeRecipe = (recipe) => {
    if (!likedRecipes.some((liked) => liked.title === recipe.title)) {
      setLikedRecipes([...likedRecipes, recipe]);
      alert("Liked!");
    }
  };

  const handleUnlikeRecipe = (title) => {
    setLikedRecipes(likedRecipes.filter((recipe) => recipe.title !== title));
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="nav-links">
          <Link to="/" className="nav-button">Home</Link>
          <Link to="/all-recipes" className="nav-button">All Recipes</Link>
          <Link to="/liked-recipes" className="nav-button">Liked Recipes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<RecipeApp showFormOnly={true} onLikeRecipe={handleLikeRecipe} />} />
          <Route 
            path="/all-recipes" 
            element={<RecipeApp showFormOnly={false} onLikeRecipe={handleLikeRecipe} showSearchBar={true} />} 
          />
          <Route 
            path="/liked-recipes" 
            element={<LikedRecipes recipes={likedRecipes} onUnlikeRecipe={handleUnlikeRecipe} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





