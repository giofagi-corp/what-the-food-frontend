import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import BackButton from "../components/BackButton";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import FormInput from "../components/FormInput";

export default function AddRecipe(props) {
  const [recipe, setRecipe] = useState("");

  return (
    <div>
      <Link to="/">
        <BackButton />
      </Link>
      <GenericPageTitle text="Add a new recipe" />
      <GenericPageSubtitle text="Recipe description" />
      <FormInput />
      <GenericPageSubtitle text="Recipe ingredients" />

      <button type="submit">SUBMIT</button>


    </div>
  );
}
