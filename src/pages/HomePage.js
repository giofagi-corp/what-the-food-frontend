import React from "react";
import axios from "axios";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";
import Chip from '@mui/material/Chip';
import ChipsList from "../components/ChipsList"

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
    //const [listIngredients, setListIngredients] = useState([])
    //let listIngredients = ["tomato", "cheese"]
    let listIngredients = []

    const getRecipesByIngredients = (name) => {

        axios
            .post(`http://localhost:5000/api/search/${name}`)
            .then((response) => {
                if (response.data[0]) {
                    const id = response.data[0]._id;
                    axios
                        .get(
                            `http://localhost:5000/api/recipes?ingredients=${id}`
                        )
                        .then((response) => {
                            setIsFound(true);
                            //console.log("RESPONSE ------>", response.data);
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
        listIngredients.push(inputSearch)
        console.log("Submitted -----> ", inputSearch);
        console.log("listIngredients----->", listIngredients);
        getRecipesByIngredients(inputSearch);
        setInputSearch("");
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
