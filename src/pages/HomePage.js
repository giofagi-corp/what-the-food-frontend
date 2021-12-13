import React from "react"
import axios from "axios";
import RecipesList from "../components/RecipesList"
import Header from "../components/Header"

import { useState, useEffect } from "react";


export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`http://localhost:5000/api/recipe/listAllRecipes`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Header/>
      <RecipesList recipes={recipes}/>
    </div>
  );
}
