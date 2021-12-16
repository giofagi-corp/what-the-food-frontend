import React from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import RecipeCard from "./RecipeCard";
import PodiumNumber from "./PodiumNumber";
import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function TopListIngredients(props) {

  const { recipes } = props

  const [recipesING, setRecipeIng] = useState();
  const [isFound, setIsFound] = useState(true);

  const getRecipesByIngredients = (name) => {
        
        axios
            .post(`${REACT_APP_API_URI}/api/search/${name}`)
            .then((response) => {
                if (response.data[0]) {
                    const id = response.data[0]._id;
                    axios
                        .get(
                            `${REACT_APP_API_URI}/api/recipes?ingredients=${id}`
                        )
                        .then((response) => {
                            setIsFound(true);
                            setRecipeIng(response.data);
                        });
                } else {
                    setIsFound(false);
                }
            })
            .catch((error) => console.log(error));
    };


  
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
