import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Hero from "../components/Hero"
import RecipeBody from "../components/RecipeBody"
import axios from 'axios';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RecipePage() {

    const {id} = useParams()
    console.log(id);
    const [recipe, setRecipe] = useState([])

    const getRecipe = async () => {  
        await axios.get(`${REACT_APP_API_URI}/api/recipe/${id}`)  
        .then((response) => {
            console.log("RESPONSE ------> ",response.data);
            setRecipe(response.data)
        })
        .catch(err => {  
          console.log(err)  
        });  
      }  

    useEffect(() => {
        getRecipe()
    }, [])

    return (
        <div>
            <Hero recipe={recipe}/>
            <RecipeBody description={recipe.description} ingredients={recipe.ingredients}/>
        </div>
    )
    }

