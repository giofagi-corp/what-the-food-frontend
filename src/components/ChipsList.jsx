import React from 'react'
import Chip from '@mui/material/Chip';

export default function ChipsList(props) {
    const { recipes } = props;
    return (
        <div>
            {recipes.map((recipe) => (
                <Chip className='IngredientChip' label={recipe} />
            ))}

        </div>
    )
}
