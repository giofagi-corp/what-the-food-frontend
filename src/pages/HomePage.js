import React from "react"
import axios from "axios";
import Header from "../components/Header"
import ProfileFeed from "../components/ProfileFeed";

import { useState, useEffect } from "react";


export default function HomePage() {
<<<<<<< HEAD
  const [recipes, setRecipes] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`http://localhost:5000/api/recipe/topCuisine`)
      .then((response) => setRecipes(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllProjects();
  }, []);

=======
>>>>>>> main
  return (
    <div>
      <Header/>
      <ProfileFeed/>
    </div>
  );
}
