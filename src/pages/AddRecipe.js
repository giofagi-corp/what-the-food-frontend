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

export default function AddRecipe(props) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState();
  const [cuisine, setCuisine] = useState("");
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
    .get("http://localhost:5000/api/search-ingredient")
    .then(res => {
      //setAvailableIngredients(res.data);
      console.log("AvailableIngredients", res.data);
    })
    }, []);

  const handleNameInput = (e) => setName(e.target.value);
  const handleDurationInput = (e) => setDuration(e.target.value);
  const handleCuisineInput = (e) => setCuisine(e.target.value);
  const handleNewIngredientInput = (e) => setNewIngredient(e.target.value);
  const handleIngredientsInput = (e) => {
    console.log("onSelect ->", e.target)
    setIngredients(Array.from(e.target.selectedOptions, option => option.value))
  };

  const handleAvailableIngredientsQuery = (e) => {
    e.preventDefault();
    axios
    .get("http://localhost:5000/api/ingredients", {
      params: {
        q: e.target.value
      }
    })
    .then(res => {
      setAvailableIngredients(res.data);
    })
  }

  const handleCreateIngredient = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/api/ingredients`, {
        newIngredient
      })
      .then((response) => {
        setIngredients([...ingredients, response.data]);
        setNewIngredient("");
      })
      .catch((error) => console.log(error));
  } ;
  
  console.log("///////////////////")
  console.log("NAME------->",name)
  console.log("DURATION------->",duration)
  console.log("CUISINE------->",cuisine)
  console.log("INGR------->",ingredients)
  // console.log("INGREDIENT ARR------->",ingredientArr)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, duration, cuisine, ingredients };

    console.log("Submitted: ", newRecipe);
  };

  return (
    <div className="NotificationsPage">
      <Link to="/">
        <BackButton />
      </Link>
      <GenericPageTitle text="Add a new recipe" />
      <GenericPageSubtitle text="Recipe description" />
      <FormInput
        name={name}
        updateName={handleNameInput}
        duration={duration}
        updateDuration={handleDurationInput}
        cuisine={cuisine}
        updateCuisine={handleCuisineInput}
      />
      <GenericPageSubtitle text="Recipe ingredients" />

      <h1> {ingredients.map(el=>name)}</h1>
      <br/>

      <FormCreateIngredient
        value={newIngredient}
        onChange={handleNewIngredientInput}
        onSubmit={handleCreateIngredient}
      />

      <input type="text" name="query" onChange={handleAvailableIngredientsQuery} />

      <FormSelectIngredients
        ingredients={availableIngredients}
        onSelect={handleIngredientsInput}
      />

      <button onClick={handleSubmit} type="submit">
        REAL SUBMIT
      </button>
      <FormInput />
      {/* <button type="submit">SUBMIT</button> */}
      <Button  sx={{ width: '100%', height: '56px' }} type="submit" variant="contained">FAKE SUBMIT</Button>
    </div>
  );
}
