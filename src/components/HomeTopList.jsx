import React from "react"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import RecipeCard from "../components/RecipeCard";

export default function RecipesList(props) {
  console.log("props ---------->", props);
  const { recipes } = props;

  return (
    <Box sx={{p: '0 24px' }}> 
      {recipes.map((recipe) => (
        <Link><RecipeCard key={recipe._id} {...recipe} /></Link>
      ))}
    </Box>
  );
}
