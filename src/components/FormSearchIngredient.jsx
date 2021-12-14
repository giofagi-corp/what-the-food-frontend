import React from "react";

export default function FormSearchIngredient(props) {
  const { ingredient, updateIngredient } = props;

  return (
    <div>
      <form>
        <input
          type="text"
          name="search"
          value={ingredient}
          onChange={updateIngredient}
          placeholder="Add Ingredient"
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
