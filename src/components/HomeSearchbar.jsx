import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomeSearchbar(props) {

    const [inputSearch, setInputSearch] = useState("");
    const [availableIngredients, setAvailableIngredients] = useState([]);
    const [availableCuisines, setAvailableCuisines] = useState([]);
    const [autocompleteValues, setAutocompleteValues] = useState();
    const [value, setValue] = useState('1');
    const [cuisine, setCuisine] = useState("");

    const storedToken = localStorage.getItem("authToken");

    // AVAILABLE INGREDIENTS
    useEffect(() => {
        axios
        .get(`${REACT_APP_API_URI}/api/search-all-ing`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((res) => {
            setAvailableIngredients(res.data);
        });
    }, []);

    // AVAILABLE CUISINES
    useEffect(() => {
    axios
      .get(`${REACT_APP_API_URI}/api/cuisine`, {
          headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
          setAvailableCuisines(res.data);
      })
    }, [])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setIsHome(true)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputSearch("");
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList  centered onChange={handleChange} aria-label="Home menu">
                <Tab sx={{ width: '50%'}} label="Ingredients" value="1" />
                <Tab sx={{ width: '50%'}} label="Cuisine" value="2" />
            </TabList>
            </Box>
            <TabPanel value="1">
            <Autocomplete
                onChange={ (e, value)=> props.setNewSearch(value)}
                multiple
                value={autocompleteValues}
                id="tags-outlined"
                options={availableIngredients}
                getOptionLabel={(option) => option.name}
                filterSelectedOptions
                renderInput={(params) => (
                    <>
                        <TextField
                            {...params}
                            value={inputSearch} 
                            label="Select Ingredients"
                            placeholder=""
                            onChange={ (e, value) => setInputSearch(value), props.setIsCuisine(false) }
                        />
                    </>
                )}
            />
            </TabPanel>
            <TabPanel value="2">
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={availableCuisines}
                sx={{ width: "100%" }}
                renderInput={(params) => (
                    <>
                        <TextField {...params} label="Select Cuisine" 
                            onChange={ e => setInputSearch(e.target.value) }
                        />
                        {props.setIsCuisine(true)}
                    </>
                )}
                onChange={ (e, value)=> props.setNewSearch(value)}
            />
            </TabPanel>
        </TabContext>
        </Box>
    );
}