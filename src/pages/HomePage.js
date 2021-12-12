import React from "react"
import RecipesList from "../components/RecipesList"
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <RecipesList/>
    </div>
  );
}

export default HomePage;