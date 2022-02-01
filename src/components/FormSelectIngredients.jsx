import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function FormSearchIngredient(props) {
	const { ingredients, onSelect } = props
	console.log('ingredients form select ---------> ', ingredients)
	return (
		<div>
			<select multiple onChange={onSelect}>
				<option key='nonselectable' selected disabled value=''>
					Select Ingredient
				</option>
				{ingredients &&
					ingredients.map(ingredient => (
						<option
							key={ingredient._id}
							value={ingredient._id}>
							{ingredient.name}
						</option>
					))}
			</select>
		</div>
	)
}
