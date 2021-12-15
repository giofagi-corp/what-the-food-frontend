import React from "react"
import { Link } from 'react-router-dom'

import RecipeCard from "../components/RecipeCard";

export default function RecipesList(props) {
  console.log("props ---------->", props);
  const { recipes } = props;

  return (
    <div>
      {recipes.map((recipe) => (
        <Link><RecipeCard key={recipe._id} {...recipe} /></Link>
      ))}
    </div>
  );
}
