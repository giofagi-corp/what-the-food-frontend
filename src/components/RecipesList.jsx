import React from 'react'

import { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "../components/RecipeCard"
/* import AddProject from "./../components/AddProject";
const API_URI = process.env.REACT_APP_API_URI; */

export default function RecipesList(props) {
    console.log("----------> ",props)
    const {recipes} = props
    return (
    <div>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe._id} {...recipe} />
      ))}
    </div>
  );
}

