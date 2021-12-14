import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

export default function LabTabs() {

    const [myRecipes, setMyRecipes] = useState([]);

    const [savedRecipes, setSavedRecipes] = useState([]);

    const [value, setValue] = useState('1');

    const getMyRecipes = () => {
        axios
        .get(`http://localhost:5000/api/recipe/listAllRecipes`)
        .then((response) => setMyRecipes(response.data))
        .catch((error) => console.log(error));
    };

    const getSavedRecipes = () => {
        axios
        .get(`http://localhost:5000/api/recipe/listAllRecipes`)
        .then((response) => {
            console.log(response)
            setSavedRecipes(response.data)})
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getMyRecipes();
        getSavedRecipes();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
                <Tab label="My Recipes" value="1" />
                <Tab label="Saved" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
                <p>My Recipes</p>
                <RecipesList recipes={myRecipes}/>
            </TabPanel>
            <TabPanel value="2">
                <p>Saved</p>
                <RecipesList recipes={savedRecipes}/>
            </TabPanel>
        </TabContext>
        </Box>
    );
}