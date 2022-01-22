import React from 'react';
import { Link } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import BackButton from '../components/BackButton';

export default function Hero (props) {
  const {recipe} = props
  return (
    <div className="MobileHero" style={{backgroundImage: `url(${recipe.imageUrl})`}} >
        <BackButton/>
        <HeroHeader recipe={recipe} editable={props.editable}/>
    </div>
  );
}