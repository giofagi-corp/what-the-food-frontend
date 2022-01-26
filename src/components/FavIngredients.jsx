import React from 'react'
import Chip from '@mui/material/Chip'

export default function FavIngredients() {
	return (
		<div>
			<h4>FAV INGREDIENTS</h4>
			<div className='favIngredientsChips'>
				<Chip
					className='IngredientChip'
					label='Tomato'
					component='a'
				/>
				<Chip
					className='IngredientChip'
					label='Pasta'
					component='a'
				/>
				<Chip
					className='IngredientChip'
					label='Cheese'
					component='a'
				/>
				<Chip
					className='IngredientChip'
					label='Onion'
					component='a'
				/>
			</div>
		</div>
	)
}
