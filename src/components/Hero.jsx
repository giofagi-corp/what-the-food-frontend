import React from 'react';
import { Link } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import BackButton from '../components/BackButton';

export default function Hero (props) {
  const {recipe} = props
  return (
    <div className="Hero" style={{backgroundImage: `url(${recipe.imageUrl})`}} >
        <BackButton/>
        <HeroHeader recipe={recipe}/>
    </div>
  );
}