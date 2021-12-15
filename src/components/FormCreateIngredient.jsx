import React from "react";

export default function FormSearchIngredient(props) {
  const { value, onChange, onSubmit } = props;

  return (
    <div>
      <form onSubmit={onSubmit} >
        <input
          type="text"
          name="name" // corresponds to DB shcema label
          value={value}
          onChange={onChange}
          placeholder="Add Ingredient"
        />
      <button type="submit">Add</button>
      </form>
    </div>
  );
}
