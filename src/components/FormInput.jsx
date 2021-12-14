import React from "react";
import { useState } from "react";

export default function FormInput(props) {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState();
  const [cuisine, setCuisine] = useState("");

  const handleNameInput = (e) => setName(e.target.value);

  const handleDurationInput = (e) => setDuration(e.target.value);

  const handleCuisineInput = (e) => setCuisine(e.target.value);

  const handleSubmit = (e) => {
    // <==  ADD
    e.preventDefault();
    const newRecipe = { name, duration, cuisine };

    console.log("Submitted: ", newRecipe);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={name}
          onChange={handleNameInput}
          placeholder="Name"
        ></input>
        <br />
        <input
          type="number"
          name="search"
          value={duration}
          onChange={handleDurationInput}
          placeholder="Duration"
        ></input>
        <br />
        <input
          type="text"
          name="search"
          value={cuisine}
          onChange={handleCuisineInput}
          placeholder="Cuisine"
        ></input>
        <br />
      </form>
    </div>
  );
}
