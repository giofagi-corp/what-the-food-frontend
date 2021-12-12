import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard"
/* import AddProject from "./../components/AddProject";
const API_URI = process.env.REACT_APP_API_URI; */

export default function RecipesList() {
  const [recipes, setRecipes] = useState([]);

  const getAllProjects = () => {
    // Get the token from the localStorage
    //const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    // axios
    //   .get(`${API_URI}/api/projects`, {
    //     headers: { Authorization: `Bearer ${storedToken}` },
    //   })
    //   .then((response) => setProjects(response.data))
    //   .catch((error) => console.log(error));

    axios
      .get(`http://localhost:5000/api/recipe/listAllRecipes`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div>

      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} {...recipe} />
      ))}
    </div>
  );
}

