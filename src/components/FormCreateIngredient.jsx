import React from 'react'
import { Box } from '@mui/material'
import FormInput from '../components/FormInput'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'

export default function FormSearchIngredient(props) {
	const { value, onChange, onSubmit } = props
	return (
		<div>
			<Box
				component='form'
				sx={{ '& > :not(style)': { mb: 2, width: '100%' } }}
				noValidate
				autoComplete='off'>
				<TextField
					type='text'
					name='ingredient'
					value={value}
					onChange={onChange}
					placeholder='Add Ingredient'
					id='outlined-basic'
					label='Add Ingredient'
					variant='outlined'
				/>
			</Box>
			<Button
				onClick={onSubmit}
				type='submit'
				variant='outlined'
				sx={{
					width: '100%',
					height: '56px',
					marginBottom: '20px',
				}}>
				Add
			</Button>
		</div>
	)
}
