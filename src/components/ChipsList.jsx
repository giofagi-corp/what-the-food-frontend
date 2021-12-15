import React from 'react'
import Chip from '@mui/material/Chip';

export default function ChipsList(props) {
    console.log("recipes inside chips ---->", props);

    const { recipes } = props;

    console.log("recipes inside chips ---->", recipes);
    return (
        <div>
            {recipes.map((recipe) => (
                <Chip className='IngredientChip' label={recipe} />
            ))}

        </div>
    )
}
