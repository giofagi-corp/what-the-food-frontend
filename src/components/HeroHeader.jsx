import React from 'react';
import { Link } from "react-router-dom";

export default function HeroHeader () {
  
  return (
    <div className=''>
      <div className=''>
        <h3>Receta</h3>
      </div>
      <div className=''>
        <Link to="">
          <button>LIKE</button>
        </Link>
        <Link to="">
          <button>MARCADORES</button>
        </Link>
      </div>
    </div>
  );
}

