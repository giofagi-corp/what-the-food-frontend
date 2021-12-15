import React from "react";
import axios from "axios";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";
import Chip from '@mui/material/Chip';
import ChipsList from "../components/ChipsList"

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomePage() {
    const feedTops = [
        {
            name: "Top Recipes",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b45454981539.59714c1191971.png",
        },
        {
            name: "Top Ingredients",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a13e454981539.59714c1191e21.png",
        },
        {
            name: "Top Cuisine",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f712fd54981539.59714c1193342.png",
        },
    ];

    const [inputSearch, setInputSearch] = useState("");
    const [recipes, setRecipes] = useState(feedTops);
    const [isFound, setIsFound] = useState(true);
    //const [chipIngredient, setChipIngredient] = useState("")
    const [listIngredients, setListIngredients] = useState([])
    //let listIngredients = ["tomato", "cheese"]
    let arrListIngredients = []

    const addIngArr = (newIng) => {
      arrListIngredients.push(newIng)
    }

    const getRecipesByIngredients = (name) => {
        
        axios
            .post(`${REACT_APP_API_URI}/api/search/${name}`)
            .then((response) => {
                if (response.data[0]) {
                    const id = response.data[0]._id;
                    axios
                        .get(
                            `${REACT_APP_API_URI}/api/recipes?ingredients=${id}`
                        )
                        .then((response) => {
                            setIsFound(true);
                            setRecipes(response.data);
                        });
                } else {
                    setIsFound(false);
                }
            })
            .catch((error) => console.log(error));
    };

    const handleSearchInput = (e) => setInputSearch(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        //const newSearch = inputSearch;
        //arrListIngredients.push(inputSearch)
        //console.log("arrListIngredients----->", arrListIngredients);
        console.log("Input Submitted -----> ", inputSearch);

        //arrListIngredients.push(inputSearch)
        addIngArr(inputSearch)
        // console.log("State listIngredients----->", listIngredients);
        
        getRecipesByIngredients(inputSearch);
        setListIngredients(arrListIngredients)
        console.log("State listIngredients----->", listIngredients);
        console.log("arrListIngredients----->", arrListIngredients);
        //setInputSearch("");
    };

    return (
        <div>
            <Header
                handleSearchInput={handleSearchInput}
                handleSubmit={handleSubmit}
                inputSearch={inputSearch}
            />
            <ChipsList recipes={listIngredients}/>
            {isFound === true ? <HomeContent recipes={recipes} /> : <NotFound />}
        </div>
    );
}
