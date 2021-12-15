import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import BackButton from "../components/BackButton";
import GenericPageTitle from "../components/GenericPageTitle";
import GenericPageSubtitle from "../components/GenericPageSubtitle";
import FormInput from "../components/FormInput";
import Button from '@mui/material/Button';

export default function AddRecipe(props) {
  const [recipe, setRecipe] = useState("");

  return (
    <div className="NotificationsPage">
      <Link to="/">
        <BackButton />
      </Link>
      <GenericPageTitle text="Add a new recipe" />
      <GenericPageSubtitle text="Recipe description" />
      <FormInput />
      {/* <button type="submit">SUBMIT</button> */}
      <Button  sx={{ width: '100%', height: '56px' }} type="submit" variant="contained">SUBMIT</Button>
    </div>
  );
}
