import React from "react";

export default function FormSearchIngredient(props) {
  const { ingredients, onSelect } = props;
console.log("ingredients form select ---------> ",ingredients);
  return (
    <div>
        <select multiple onChange={onSelect}>
          <option key="nonselectable" selected disabled value="">Select Ingredient</option>
          {ingredients && ingredients.map(ingredient => (<option key={ingredient._id} value={ingredient._id}>{ingredient.name}</option>))}
        </select>
    </div>
  );
}
