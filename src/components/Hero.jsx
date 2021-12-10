import React from 'react';
import { Link } from "react-router-dom";
import HeroHeader from "./HeroHeader";
import HeroBackImage from "./HeroBackgroundImage";

function Hero () {
  
  return (
    <div className="Hero">
        <HeroBackImage/>
        <Link to="">
          <button><i class="bi bi-x"></i></button>
        </Link>
        <HeroHeader/>
    </div>
  );
}

export default Hero;