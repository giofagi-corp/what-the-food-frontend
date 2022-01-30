import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './../context/auth.context'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../index.css'

const Input = styled('input')({
	display: 'none',
})

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function EditProfilePage() {
	const { logOutUser } = useContext(AuthContext)
	const [availableIngredients, setAvailableIngredients] = useState([])
	const storedToken = localStorage.getItem('authToken')

	const [value, setValue] = useState('1')

	useEffect(() => {
		axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
			headers: { Authorization: `Bearer ${storedToken}` },
		}).then(res => {
			setAvailableIngredients(res.data)
			console.log('availabe ingredients ------>', availableIngredients)
		})
	}, [])

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className='EditProfilePage'>
			<div className='EditProfilePic'>
				<label
					htmlFor='icon-button-file'
					className='EditProfilePicUpload'>
					<Input
						accept='image/*'
						id='icon-button-file'
						type='file'
					/>
				</label>
			</div>
			<Button sx={{ p: 0, marginTop: '10px' }} variant='text'>
				Change Picture
			</Button>
			<div className='EditProfileContent'>
				<h1>Harold</h1>
				<p>harold@gmail.com</p>
				{/* <h5>FAV INGREDIENTS</h5> */}
				{/* <Autocomplete
					multiple
					id='tags-outlined'
					options={availableIngredients}
					getOptionLabel={option => option.name}
					filterSelectedOptions
					renderInput={params => (
						<TextField
							{...params}
							label='Select Ingredients'
							placeholder='Select Ingredients'
						/>
					)}
				/> */}
			</div>
			<Button 
				component={Link} 
				to="/edit-profile"
				variant='contained'
				onClick={logOutUser}
				sx={{ width: '100%', height: '56px', marginTop: '20px' }}
				type='submit'>
				Accept
			</Button>
			{/* <Button 
				onClick={logOutUser}
				sx={{ width: '100%', height: '56px', marginTop: '20px' }}
				type='submit'
				variant='text'>
				Log Out
			</Button> */}
		</div>
	)
}
