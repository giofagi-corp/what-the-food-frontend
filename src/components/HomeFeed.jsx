import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

export default function ProfileFeed() {
    const [recipes, setRecipes] = useState([]);

    const getAllRecipes = () => {
        axios
        .get(`http://localhost:5000/api/recipe/listAllRecipes`)
        .then((response) => setRecipes(response.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <Box>
            <RecipesList sx={{ p: '0 24px' }} recipes={recipes}/>
        </Box>
    )
}
