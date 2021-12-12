import React from 'react'

import RecipeCard from "../components/RecipeCard"


export default function RecipesList(props) {
    const {recipes} = props

  return (
    <div>

     {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} {...recipe} />
      ))} 
    </div>
  );
}

