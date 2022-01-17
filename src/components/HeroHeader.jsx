import React from 'react';
import { Link } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';

export default function HeroHeader (props) {
  const {recipe} = props
  return (
    <div className='HeroHeader'>
      <div className='HeroHeaderContent'>
        <div className='RecipeName'>
          <div style={{display: "flex", alignItems: "center"}}><h2>{recipe.name}</h2>{props.editable && <div><Link to={`/edit-recipe/${props.recipe._id}`}><EditIcon style={{marginLeft: "10px"}}/></Link></div>}</div>
        </div>
        <div className='RecipeFavSave'>
          <FavoriteBorderIcon />
          <BookIcon />
        </div>
      </div>
    </div>
  );
}

