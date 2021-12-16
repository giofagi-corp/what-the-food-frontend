import React from "react"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import RecipeCard from "../components/RecipeCard";

export default function RecipesList(props) {
  const { recipes } = props;
  console.log("recipes props in HomeTop---------> ",recipes);

  return (
    <Box sx={{p: '0 24px' }}> 
      {recipes.map((recipe) => (
        <Link to={recipe.link}><RecipeCard key={recipe._id} {...recipe} /></Link>
      ))}
    </Box>
  );
}
