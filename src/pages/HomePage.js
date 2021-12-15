import React from "react";
import axios from "axios";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import HomeSearchbar from "../components/HomeSearchbar";
import { useState, useEffect } from "react";


export default function HomePage() {

  const feedTops = [
    {name: "Top Recipes", link:"/top-recipes", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b45454981539.59714c1191971.png"},
    {name: "Top Ingredients",link:"/top-ingredients", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a13e454981539.59714c1191e21.png"},
    {name: "Top Cuisine", link:"/top-cuisine", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f712fd54981539.59714c1193342.png"}
  ]

  const [inputSearch, setInputSearch] = useState("")
  const [recipes, setRecipes] = useState(feedTops)
  //const [ingredientId, setIngredientId] = useState("")

  const getRecipesByIngredients = (name) => {
      axios
      .post(`http://localhost:5000/api/search/${name}`)
      .then((response) => {
          axios
          .get(`http://localhost:5000/api/recipes?ingredients=${response.data[0]._id}`)
          .then((response)=>{
            console.log("RESPONSE =======>",response.data)
            setRecipes(response.data)
          })
      })
      .catch((error) => console.log(error));
  };

  const handleSearchInput = e => setInputSearch(e.target.value);

  const handleSubmit = (e) => {
      e.preventDefault()
      const newSearch = inputSearch ;
      console.log("Submitted -----> ", newSearch);
      getRecipesByIngredients(newSearch)
      setInputSearch("")
  }

  return (
    <div>
      <HomeSearchbar handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} inputSearch={inputSearch}/>
      {/* <Header handleSearchInput={handleSearchInput} handleSubmit={handleSubmit} inputSearch={inputSearch}/> */}
      <HomeContent recipes = {recipes} />
    </div>
  );
}
