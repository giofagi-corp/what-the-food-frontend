import React from "react";
import { Link } from 'react-router-dom'

import RecipeCard from "./RecipeCard";
import PodiumNumber from "./PodiumNumber";

export default function TopListIngredients(props) {
  const { recipes } = props;
  return (
    <div>
      {recipes && recipes.map((recipe, index) => (
        <Link to={`/recipes-list/${recipe._id}`} >
        <div key={recipe._id}>
          <PodiumNumber number={index + 1} />
          <div className="TopCard">
          <RecipeCard {...recipe}/>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}
