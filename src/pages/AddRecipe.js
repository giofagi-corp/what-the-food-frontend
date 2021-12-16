import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import BackButton from "../components/BackButton";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import FormInput from "../components/FormInput";
import FormSelectIngredients from "../components/FormSelectIngredients";
import FormCreateIngredient from "../components/FormCreateIngredient";
import Button from '@mui/material/Button';
import TextArea from "../components/TextArea"

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function AddRecipe(props) {
  const [name, setName] = useState("");
  const [time, setTime] = useState();
  const [cuisine, setCuisine] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [availableIngredients, setAvailableIngredients] = useState([
    {
      _id:"61b38c3f6c4723633cbc4749",
      img:"https://static5.depositphotos.https://cdn.shopify.com/s/files/1/1061/1...",
      type: "vegetable",
      rating: 15,
      name: "egg"
      },
      {
      _id: "61b38c566c4723633cbc474b",
  img:"https://static5.depositphotos.https://cdn.shopify.com/s/files/1/1061/1...",
  type: "vegetable",
  rating: 10,
  name: "pepper"
  }
      ]);

  useEffect(() => {
    axios
    .get(`${REACT_APP_API_URI}/api/search-all-ing`)
    .then(res => {
      setAvailableIngredients(res.data);
      //console.log("AvailableIngredients", res.data);
    })
    }, []);

  const handleNameInput = (e) => setName(e.target.value);
  const handleTimeInput = (e) => setTime(e.target.value);
  const handleCuisineInput = (e) => setCuisine(e.target.value);
  const handleNewIngredientInput = (e) => setNewIngredient(e.target.value);
  const handleDescriptionInput = (e) => setDescription(e.target.value);
  const handleIngredientsInput = (e) => {
    console.log("onSelect ->", e.target)
    setIngredients(Array.from(e.target.selectedOptions, option => option.value))
  };

 /*  const handleAvailableIngredientsQuery = (e) => {
    e.preventDefault();
    axios
    .get("http://localhost:5000/api/ingredient", {
      params: {
        q: e.target.value
      }
    })
    .then(res => {
      setAvailableIngredients(res.data);
    })
  } */

  const handleCreateIngredient = (e) => {
    e.preventDefault();
    axios
      .post(`${REACT_APP_API_URI}/api/search-ingredient/${newIngredient}`)
      .then((response) => {
        setIngredients([...ingredients, response.data]);
        setAvailableIngredients([response.data, ...availableIngredients]);//<--------------------------- Si se activa No se renderizacomponente hijo
        console.log("AvailableIngredients", response.data);

        setNewIngredient("");
      })
      .catch((error) => console.log(error));
  } ;
  
  console.log("///////////////////")
  console.log("NAME------->",name)
  console.log("DURATION------->",time)
  console.log("CUISINE------->",cuisine)
  console.log("INGR------->",ingredients)
  // console.log("INGREDIENT ARR------->",ingredientArr)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, time, cuisine, ingredients, description };
    console.log("Submitted: ", newRecipe);
    axios
      .post(`${REACT_APP_API_URI}/api/recipe/create/`, newRecipe)
      .then((response) => {
        console.log("response --------->", response);
      })
      .catch((error) => console.log(error));

  };

  return (
    <div className="NotificationsPage">
      <Link to="/"><BackButton /></Link>
      <GenericPageTitle text="Add a new recipe" />
      <GenericPageSubtitle text="Recipe description" />
      <FormInput
        name={name}
        updateName={handleNameInput}
        time={time}
        updateTime={handleTimeInput}
        cuisine={cuisine}
        updateCuisine={handleCuisineInput}
      />
      <GenericPageSubtitle text="Recipe ingredients" />

      {/* <h1> {ingredients.map(el=>name)}</h1> 
      <br/>*/}

      <FormCreateIngredient
        value={newIngredient}
        onChange={handleNewIngredientInput}
        onSubmit={handleCreateIngredient}
      />

      {/* <input type="text" name="query" onChange={handleAvailableIngredientsQuery} /> */}

      <FormSelectIngredients
        ingredients={availableIngredients}
        onSelect={handleIngredientsInput}
      />

      <GenericPageSubtitle text="Recipe description" />

      <TextArea 
        description={description}
        updateDescription={handleDescriptionInput}
      />
     
      {/* <button type="submit">SUBMIT</button> */}
      <Button  sx={{ width: '100%', height: '56px' }} onClick={handleSubmit} type="submit" variant="contained">SUBMIT</Button>
    </div>
  );
}
