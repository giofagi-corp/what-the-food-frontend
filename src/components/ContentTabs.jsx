import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function ContentTabs() {

    const [myRecipes, setMyRecipes] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [value, setValue] = useState('1');
    const getMyRecipes = () => {
        axios
        .get(`${REACT_APP_API_URI}/api/recipe/listAllRecipes`)
        .then((response) => setMyRecipes(response.data))
        .catch((error) => console.log(error));
    };
    const getSavedRecipes = () => {
        axios
        .get(`${REACT_APP_API_URI}/api/recipe/listAllRecipes`)
        .then((response) => {
            console.log("RESPONSE ---------->".response)
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
            <TabList centered onChange={handleChange}>
                <Tab sx={{ width: '50%'}} label="My Recipes" value="1" />
                <Tab sx={{ width: '50%'}} label="Saved" value="2" />
            </TabList>
            </Box>
            <TabPanel sx={{ p: '0 24px' }} value="1">
                <RecipesList recipes={myRecipes}/>
            </TabPanel>
            <TabPanel sx={{ p: '0 24px' }} value="2">
                <RecipesList recipes={savedRecipes}/>
            </TabPanel>
        </TabContext>
        </Box>
    );
}