/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

import Autocomplete from '@mui/material/Autocomplete'
import { Chip } from '@mui/material'
import Stack from '@mui/material/Stack'
import '../index.css'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function NewRecipeStep2(props) {
	const [availableIngredients, setAvailableIngredients] = useState([])

	const storedToken = localStorage.getItem('authToken')

	useEffect(() => {
		axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
			headers: { Authorization: `Bearer ${storedToken}` },
		}).then(res => {
			setAvailableIngredients(res.data)
		})
	}, [])

	return (
		<div>
			<div className='AddRecipeText'>
				<GenericPagesSubtitle text='Recipe ingredients' />
			</div>
			<div className='RecipeInputs'>
				<Stack spacing={3} sx={{ width: '94%', mb: 2 }}>
					<Autocomplete
						multiple
						id='tags-filled'
						defaultValue={props.ingredients}
						options={availableIngredients.map(
							option => option.name
						)}
						freeSolo
						renderTags={(value, getTagProps) => (
							props.setIngredients(value),
							value.map((option, index) => (
								<Chip
									sx={{backgroundColor: '#28c69927'}}
									deleteIcon={<CloseIcon />}
									label={option}
									{...getTagProps({ index })}
								/>
							))
						)}
						renderInput={params => (
							<TextField
								{...params}
								variant='outlined'
								label='Add ingredients *'
								placeholder='Add ingredient *'
							/>
						)}
					/>
				</Stack>
			</div>
		</div>
	)
}
