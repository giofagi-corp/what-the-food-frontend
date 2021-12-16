import React from "react";
import axios from "axios";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";


const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomePage() {
  const storedToken = localStorage.getItem("authToken");

    const feedTops = [
        {
            name: "Top Recipes",
            link: "/top-recipes",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b45454981539.59714c1191971.png",
        },
        {
            name: "Top Ingredients",
            link: "/top-ingredients",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a13e454981539.59714c1191e21.png",
        },
        {
            name: "Top Cuisine",
            link: "/top-cuisine",
            imageUrl:
                "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f712fd54981539.59714c1193342.png",
        },
    ];

    const [inputSearch, setInputSearch] = useState("");
    const [recipes, setRecipes] = useState(feedTops);
    const [isFound, setIsFound] = useState(true);

    const getRecipesByIngredients = (name) => {
        
        axios
            .post(`${REACT_APP_API_URI}/api/search/${name}`, {},
            {
              headers: { Authorization: `Bearer ${storedToken}` }, 
            })
            .then((response) => {
                if (response.data[0]) {
                    const id = response.data[0]._id;
                    axios
                        .get(
                            `${REACT_APP_API_URI}/api/recipes?ingredients=${id}`, {
                              headers: { Authorization: `Bearer ${storedToken}` },
                            }
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
        getRecipesByIngredients(inputSearch);
        setInputSearch("");
    };
    
    return (
        <div>
            <HomeSearchbar
                handleSearchInput={handleSearchInput}
                handleSubmit={handleSubmit}
                inputSearch={inputSearch}
            />
            {isFound === true ? <HomeContent recipes={recipes} /> : <NotFound />}
            
        </div>
    );
}
