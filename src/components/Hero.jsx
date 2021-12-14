import React from 'react';
import { Link } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import BackButton from '../components/BackButton';

export default function Hero () {
  
  return (
    <div className="Hero">
        <BackButton/>
        <HeroHeader/>
    </div>
  );
}