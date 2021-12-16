import React from "react";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";

export default function RecipesList(props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe) => (
        <Link to="" ><RecipeCard key={recipe._id} {...recipe} /></Link>
      ))}
    </div>
  );
}
