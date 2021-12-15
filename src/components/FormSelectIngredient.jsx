import React from "react";

export default function FormSearchIngredient(props) {
  const { ingredients, onSelect } = props;

  return (
    <div>
        <select multiple onSelect={onSelect}>
          <option key="nonselectable" selected disabled value="">Select Ingredient</option>
          {ingredients.map(ingredient => (<option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>))}
        </select>
    </div>
  );
}
