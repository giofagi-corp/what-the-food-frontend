import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import BackButton from "../components/BackButton";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import FormInput from "../components/FormInput";
import FormSearchIngredient from "../components/FormSearchIngredient";

export default function AddRecipe(props) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState();
  const [cuisine, setCuisine] = useState("");
  const [ingredient, setIngredient] = useState([]);

  const handleNameInput = (e) => setName(e.target.value);
  const handleDurationInput = (e) => setDuration(e.target.value);
  const handleCuisineInput = (e) => setCuisine(e.target.value);
  const handleIngredientInput = (e) => setIngredient(e.target.value);

  const handleSubmit = (e) => {
    
    
    e.preventDefault();
    const newRecipe = { name, duration, cuisine };

    console.log("Submitted: ", newRecipe);
  };

//   const getAllRecipes = () => {
//     axios
//       .get(`http://localhost:5000/api/recipe/topCuisine`)
//       .then((response) => setRecipes(response.data))
//       .catch((error) => console.log(error));
//   };

//   useEffect(() => {
//     getAllRecipes();
//   }, []);


  
  const handleAdd = (e) => {
    
    e.preventDefault();
    const newIngredient = { ingredient };

    console.log("Submitted: ", newIngredient);
  };

  return (
    <div>
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
      <FormSearchIngredient
        ingredient={ingredient}
        updateIngredient={handleIngredientInput}
      />
      <button onSubmit={handleAdd} type="submit">Add</button>

      <button onSubmit={handleSubmit} type="submit">
        SUBMIT
      </button>
    </div>
  );
}
