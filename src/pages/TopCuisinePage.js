import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import TopListCuisine from "../components/TopListCuisine";
import GenericPageTitle from "../components/GenericPageTitle";
import BackButton from "../components/BackButton";

import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

//import needed components

export default function TopCuisinePage() {
  const storedToken = localStorage.getItem("authToken");
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`${REACT_APP_API_URI}/api/recipe/topCuisine`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <div className="NotificationsPage">
      <Link to="/"><BackButton/></Link>
      <GenericPageTitle text="Top Cuisine" />
      <TopListCuisine recipes={recipes} />
    </div>
  );
}


