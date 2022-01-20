import React from 'react'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import BookIcon from '@mui/icons-material/Book';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import BackButton from './BackButton';

export default function RecipeBody(props) {
    const { recipe } = props

    return (
        <div className='RecipeBody'>
            <div className="DesktopHero" style={{backgroundImage: `url(${recipe.imageUrl})`}} >
            <BackButton/>
            </div>
            <div>
                <div style={{display: "flex", alignItems: "center"}}>
                    <h2>{recipe.name}</h2>
                    {props.editable && 
                        <div>
                        <Link to='/'><EditIcon style={{marginLeft: "10px"}}/></Link>
                        </div>
                    }
                </div>
                <hr className='Separator'/>
                <div style={{width: '100%', display: 'flex'}}>
                    <div style={{width: '50%', marginBottom: '20px'}}>
                        <h3 style={{marginBottom: '0px'}}>Duration</h3>
                        <p style={{margin: '0px'}}>{recipe.time}min</p>
                    </div>
                    <div className='CuisineType' style={{width: '50%', marginBottom: '20px'}}>
                        <h3 style={{marginBottom: '0px'}}>Cuisine</h3>
                        <p style={{margin: '0px'}}>{recipe.cuisine}</p>
                    </div>
                </div>
                <hr className='Separator'/>
                <h3>Ingredients</h3>
                <ul>              
                    {recipe.ingredients && recipe.ingredients.map((el) => (
                        <li>{el.name}</li>
                    ))}
                </ul>
                <hr className='Separator'/>
                <h3>Steps</h3>
                <ol>
                    {recipe.description && recipe.description.map((el) => (
                        <li>{el}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}


