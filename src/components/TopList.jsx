import React from "react";

import RecipeCard from "./RecipeCard";
import PodiumNumber from "./PodiumNumber";

export default function TopList(props) {
  console.log("PROPS----->",props)
  const { recipes } = props;

  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={recipe._id}>
          <PodiumNumber number={index + 1} />
          <div className="TopCard">
          <RecipeCard {...recipe}/>
          </div>
        </div>
      ))}
    </div>
  );
}
