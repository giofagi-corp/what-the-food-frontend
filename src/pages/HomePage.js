import React from "react"
import RecipesList from "../components/RecipesList"

import { useState, useEffect } from "react";
import axios from "axios";


function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`http://localhost:5000/api/recipe/listAllRecipes`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <RecipesList recipes={recipes}/>
    </div>
  );
}

export default HomePage;