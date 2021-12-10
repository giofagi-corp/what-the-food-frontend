import React from 'react';
import { Link } from "react-router-dom";

export default function HeroHeader () {
  
  return (
    <div className="HeroHeader">
        <Link to="">
          <button><i class="bi bi-heart"></i></button>
        </Link>
        <Link to="">
          <button><i class="bi bi-journal-bookmark"></i></button>
        </Link>
    </div>
  );
}

