import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import TopList from "../components/TopList";
import GenericPageTitle from "../components/GenericPageTitle";
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";

//import needed components

import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function TopRecipesPage() {
  const storedToken = localStorage.getItem("authToken");
  const [recipes, setRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`${REACT_APP_API_URI}/api/top-recipies`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
    <div className="HomeCardContainer">
    <div className="TopCardContainer">
      <Link to="/"><BackButton/></Link>
      <GenericPageTitle text="Latest recipes" />
      <TopList recipes={recipes} />
    </div>
    </div>
    <Footer />
    </>
    
    
  );
}
