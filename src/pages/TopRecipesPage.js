import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import TopList from "../components/TopList";
import GenericPageTitle from "../components/GenericPageTitle";
import BackButton from "../components/BackButton";

//import needed components

import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function TopRecipesPage() {
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`${REACT_APP_API_URI}/api/top-recipies`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div className="NotificationsPage">
      <Link to="/"><BackButton/></Link>
      <GenericPageTitle text="Top recipes" />
      <TopList recipes={recipes} />
    </div>
  );
}
