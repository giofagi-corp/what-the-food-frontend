import React from 'react';
import { Link } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function HeroHeader () {
  
  return (
    <div className='HeroHeader'>
      <div className='HeroHeaderContent'>
        <div className='RecipeName'>
          <h2>Receta</h2>
        </div>
        <div className='RecipeFavSave'>
          <FavoriteBorderIcon />
          <BookIcon />
        </div>
      </div>
    </div>
  );
}

