import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function ProfileFeed() {
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = () => {
        axios
        .get(`${REACT_APP_API_URI}/api/recipe/listAllRecipes`)
        .then((response) => setRecipes(response.data))
        .catch((error) => console.log(error));
    }
    useEffect(() => {
        getAllRecipes();
    }, []);
    return (
        <Box>
            <RecipesList sx={{ p: '0 24px' }} recipes={recipes}/>
        </Box>
    )
}
