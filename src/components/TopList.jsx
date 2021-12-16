import React from "react";
import { Link } from 'react-router-dom'

import RecipeCard from "./RecipeCard";
import PodiumNumber from "./PodiumNumber";

export default function TopList(props) {
  const { recipes } = props;
  return (
    <div>
      {recipes.map((recipe, index) => (
        <Link to={`/recipe/${recipe._id}`} >
        <div key={recipe._id}>
          <PodiumNumber number={index + 1} />
          <RecipeCard {...recipe} />
        </div>
        </Link>
      ))}
    </div>
  );
}
