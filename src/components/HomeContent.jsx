import React from 'react'
import RecipesList from './RecipesList';
import { useState, useEffect } from "react";
import HomeTopList from "../components/HomeTopList"

export default function HomeContent(props) {
    const {recipes} = props


    return (
        <div>     
            <HomeTopList recipes={recipes}/>
        </div>
    )
}
