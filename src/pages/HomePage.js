import React from "react";
import axios from "axios";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";


const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomePage() {

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
    
    const [newSearch, setNewSearch] = useState([]);
    const [isCuisine, setIsCuisine] = useState();
    const [recipes, setRecipes] = useState(feedTops);
    const [isHome, setIsHome] = useState(true)

    const storedToken = localStorage.getItem("authToken");


    useEffect(()=>{
        console.log("newSearch", newSearch);
        console.log("isCuisine", isCuisine);

        if(isCuisine){
            setIsHome(false)

            axios
            .get(`${REACT_APP_API_URI}/api/recipe/recipeByCuisine?cuisine=${newSearch}` , {
            headers: { Authorization: `Bearer ${storedToken}` }
            })
            .then((response) => {
                console.log("response.data cuisine",response.data)
                setRecipes(response.data)
                // !response.data  && setIsHome(true)
            })
            .catch((error) => console.log(error));

        }else {
            setIsHome(false)
            const arrIngId = newSearch.map((e)=>e._id).join('+')

            if(arrIngId) {

                axios
                    .get(`${REACT_APP_API_URI}/api/recipes?ingredients=${arrIngId}` , {
                        headers: { Authorization: `Bearer ${storedToken}` }
                    })
                    .then((response) => {
                        console.log("response.data ingredientes",response.data)
                        setRecipes(response.data)
                    })
                        .catch((error) => console.log(error))
            }
        }

    }, [newSearch])

    return (
        <div>
            <HomeSearchbar
                newSearch={newSearch}
                setNewSearch={setNewSearch}

                isCuisine={isCuisine}
                setIsCuisine={setIsCuisine}
                isHome={isHome}
                setIsHome={setIsHome}
            />
            {console.log("isHome", isHome)}
            {isHome ? <HomeContent recipes={feedTops} /> : <HomeContent recipes={recipes} /> } 
            <Footer />
        </div>
    );
}
