import React from "react";
import { useState } from "react";

export default function FormSearchIngredient(props) {
  const [ingredient, setIngredient] = useState([]);

  const handleIngredientInput = (e) => setIngredient(e.target.value);

  const handleSubmit = (e) => {
    
    e.preventDefault();
    const newIngredient = { ingredient };

    console.log("Submitted: ", newIngredient);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={ingredient}
          onChange={handleIngredientInput}
          placeholder="Name"
        ></input>
      </form>
    </div>
  );
}
