import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from "react";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import RecipesList from './RecipesList';
import axios from 'axios';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function CustomizedInputBase(props) {
    const {handleSubmit} = props;
    const {handleSearchInput} = props;
    const {inputSearch} = props;
    const [availableIngredients, setAvailableIngredients] = useState([]);
    const [availableCuisines, setAvailableCuisines] = useState([]);
    const [value, setValue] = useState('1');
    const storedToken = localStorage.getItem("authToken");

    const [cuisine, setCuisine] = useState("")
        

    useEffect(() => {
        axios
        .get(`${REACT_APP_API_URI}/api/search-all-ing`, {
            headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((res) => {
            setAvailableIngredients(res.data);
        });
    }, []);
    
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
        //console.log("props.isFull", props.isFull);
        //props.setIsFull(false)
        props.setRecipes()
    };

   /*  useEffect(()=>{
        props.setIsFull(true)
    }) */

    const handleChangeValues = (event, value) => {
        props.setAutocompleteValues(value);
        //console.log("value", value);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList centered onChange={handleChange}>
                        <Tab sx={{ width: '50%'}} label="Ingredients" value="1" />
                        <Tab sx={{ width: '50%'}} label="Cuisine" value="2" />
                    </TabList>
                </Box>
                    <TabPanel sx={{ p: '30px 24px 0 24px' }} value="1">
                        <Stack spacing={3}>
                            <Autocomplete
                                multiple
                                value={props.autocompleteValues}
                                onChange={ handleChangeValues }
                                id="tags-outlined"
                                options={availableIngredients}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                onSubmit={handleSubmit}
                                renderInput={(params) => (                                    
                                    <div>
                                        <TextField
                                            {...params}
                                            value={inputSearch} 
                                            onChange={ handleSearchInput }
                                            label="Select Ingredients"
                                            placeholder=""
                                        />
                                    </div>
                                )}
                            />
                            <Button onClick={props.searchRecipeByIngredients} >Search</Button>
                        </Stack>
                    </TabPanel>
                    <TabPanel sx={{ p: '30px 24px 0 24px' }} value="2">
                        <Stack spacing={3}>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={availableCuisines}
                                sx={{ width: "100%" }}
                                renderInput={(params) => (
                                    <>
                                    <TextField {...params} label="Cuisine"/>
                                    {setCuisine(params.inputProps.value)}
                                    </>
                                )}
                                onChange={
                                    props.setNewSearch(cuisine) }
                            />
                        </Stack>
                    </TabPanel>
            </TabContext>
        </Box>
    );
}