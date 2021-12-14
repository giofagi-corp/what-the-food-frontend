import React, { useState } from 'react'
import TabMenu from '../components/TabMenu'
import SearchBar from '../components/SearchBar'
import RecipeDuration from '../components/RecipeDuration'
import axios from 'axios'
import { useEffect } from 'react'


export default function Header(props) {

    const [inputSearch, setInputSearch] = useState("")
    const [recipesByIngredients, setRecipesByIngredients] = useState([])

    const getRecipesByIngredients = (newSearch) => {
        axios
        .get(`http://localhost:5000/api/recipes?ingredients=${newSearch}`) ///.join("+")
        .then((response) => {
            console.log("RESPONSE =======>",response);
            setRecipesByIngredients(response.data)
        })
        .catch((error) => console.log(error));
    };

    const handleSearchInput = e => setInputSearch(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        const newSearch = inputSearch ;
        getRecipesByIngredients(newSearch)
        console.log("Submitted -----> ", newSearch);
        setInputSearch("")
    }

    return (
        <div>
            <TabMenu/>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={inputSearch} onChange={handleSearchInput} />
                <button type='submit'>+</button>
            </form>
            {/* <SearchBar handleSubmit={handleSubmit} /> */}
            {/* <RecipeDuration/> */}
        </div>
    )
}
