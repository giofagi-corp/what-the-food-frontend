import React from "react";
import axios from "axios";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";


const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomePage() {

    debugger
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

    const [isFull, setIsFull] = useState(false)
    const [recipes, setRecipes] = useState(feedTops);
    const [isHome, setIsHome] = useState(true)

    const [newSearch, setNewSearch] = useState([])
    const [inputSearch, setInputSearch] = useState("");
    const [autocompleteValues, setAutocompleteValues] = useState();

    useEffect(()=>{
        console.log("recipes 02",recipes)
        console.log("es igual a feedTops", recipes === feedTops);
        recipes !== feedTops ? setIsHome(false) : setIsHome(true)
    }, [recipes])

    useEffect(()=>{
        console.log("newSearch---->",typeof newSearch);

        if (typeof newSearch === "string"){
            searchRecipeBycuisine(newSearch)
        }

    }, [newSearch])

    const searchRecipeByIngredients = () => {
        
        console.log("autocompleteValues", autocompleteValues);

        if(autocompleteValues){
            const arrIngId = autocompleteValues.map((e)=>e._id).join('+')

            if(arrIngId) {
                
                axios
                .get(`${REACT_APP_API_URI}/api/recipes?ingredients=${arrIngId}` , {
                    headers: { Authorization: `Bearer ${storedToken}` }
                })
                .then((response) => {
                    setRecipes(response.data)
                    setIsFull(true)
                    })
                    .catch((error) => console.log(error))
            }else{
                setRecipes(feedTops)
                setIsFull(false)
            }
        }else{
            console.log("There is not ingredients to search");
            setRecipes(feedTops)
        }
    }

    const searchRecipeBycuisine = (cuisine)=>{
        console.log("hola");
        axios
            .get(`${REACT_APP_API_URI}/api/recipe/recipeByCuisine?cuisine=${cuisine}` , {
            headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then((response) => {
                setRecipes(response.data)
                //setIsFull(true)
            })
            .catch((error) => console.log(error));
    }

    const handleSearchInput = (e) => setInputSearch(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputSearch("");
    };


    
    
    {console.log("isHome 02",isHome)}
    return (
        <div>
            <HomeSearchbar
                isFull={isFull}
                setIsFull={setIsFull}
                autocompleteValues={autocompleteValues}
                setAutocompleteValues={setAutocompleteValues}
                searchRecipeBycuisine={searchRecipeBycuisine}
                searchRecipeByIngredients={searchRecipeByIngredients}
                handleSearchInput={handleSearchInput}
                newSearch={newSearch}
                setNewSearch={setNewSearch}
                recipes={recipes}
                setRecipes={setRecipes}
                handleSubmit={handleSubmit}
                inputSearch={inputSearch}
            />
            {console.log("recipes 01",recipes)}
            {console.log("isHome 01",isHome)}
            {isHome ? <HomeContent recipes={feedTops} /> : <HomeContent recipes={recipes} /> }
            <Footer />
        </div>
    );
}
