import React from "react"
import axios from "axios";
import Header from "../components/Header"
import HomeContent from "../components/HomeContent"
import { useState, useEffect } from "react";


export default function HomePage() {

  const feedTops = [
    {name: "Top Recipes", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b45454981539.59714c1191971.png"},
    {name: "Top Ingredients", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/3a13e454981539.59714c1191e21.png"},
    {name: "Top Cuisine", imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f712fd54981539.59714c1193342.png"}
  ]

  const [recipes, setRecipes] = useState(feedTops)

  return (
    <div>
      <Header/>
      <HomeContent recipes = {recipes} />
    </div>
  );
}
