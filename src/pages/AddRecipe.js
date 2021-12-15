import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import BackButton from "../components/BackButton";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import FormInput from "../components/FormInput";
import FormSearchIngredient from "../components/FormSearchIngredient";
import Button from "@mui/material/Button";

export default function AddRecipe(props) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState();
  const [cuisine, setCuisine] = useState("");
  const [ingredient, setIngredient] = useState({});
  // const [ingredientArr,setIngredientArr] = useState([]);

  const handleNameInput = (e) => setName(e.target.value);
  const handleDurationInput = (e) => setDuration(e.target.value);
  const handleCuisineInput = (e) => setCuisine(e.target.value);
  const handleIngredientInput = (e) => setIngredient(e.target.value);

  const handleAdd = (e) => {
    axios
      .post(`http://localhost:5000/api/search-ingredient`, {
        ingredient,
      })
      .then((response) => {
        setIngredient(response.data);
        // ingredientArr.push(response.data)
      })
      .catch((error) => console.log(error));
    e.preventDefault();
  };

  console.log("///////////////////");
  console.log("NAME------->", name);
  console.log("DURATION------->", duration);
  console.log("CUISINE------->", cuisine);
  console.log("INGR------->", ingredient);
  // console.log("INGREDIENT ARR------->",ingredientArr)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = { name, duration, cuisine };

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

      <h1> {ingredient.name}</h1>
      <FormSearchIngredient
        ingredient={ingredient}
        updateIngredient={handleIngredientInput}
        onSubmit={handleAdd}
      />

      <button onClick={handleSubmit} type="submit">
        SUBMIT
      </button>
      <FormInput />
      {/* <button type="submit">SUBMIT</button> */}
      <Button
        sx={{ width: "100%", height: "56px" }}
        type="submit"
        variant="contained"
      >
        SUBMIT
      </Button>
    </div>
  );
}
