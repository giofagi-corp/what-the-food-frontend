import React from "react";

export default function FormSearchIngredient(props) {
  const { ingredient, updateIngredient,onSubmit } = props;

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
      </form>
      <button onClick={onSubmit} type="submit">Add</button><br></br>

    </div>
  );
}
