import React from 'react'
import Chip from '@mui/material/Chip';

export default function FavIngredients() {
    return (
        <div>
            <h4>FAV INGREDIENTS</h4>
            <div className='favIngredientsChips'>
                <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
            </div>
        </div>
    )
}
