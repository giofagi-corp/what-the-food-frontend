import React from "react";
import axios from "axios";
import TopList from "../components/TopList";
import GenericPageTitle from "../components/GenericPageTitle";

//import needed components

import { useState, useEffect } from "react";

export default function TopCuisinePage() {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`http://localhost:5000/api/recipe/topCuisine`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div>
      <GenericPageTitle text="TOP CUISINE" />
      <TopList recipes={recipes} />
    </div>
  );
}
