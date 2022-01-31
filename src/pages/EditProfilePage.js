import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './../context/auth.context'
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'

import TextField from '@mui/material/TextField'
import { Link } from "react-router-dom";
import axios from 'axios'
import '../index.css'
import { useHistory } from 'react-router-dom'

import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const theme = createTheme({
	components: {
	  MuiTextField: {
		defaultProps: {
		  variant: "outlined",
		  fullWidth: true,
		},
		styleOverrides: {
		  root: {
			"&.subvariant-hovered": {
			  "& fieldset": {
				border: "none"
			  },
			  "& .MuiInputBase-input:hover + fieldset": {
				border: "none"
			  },
			  "& .MuiInputBase-input:focus + fieldset": {
				border: "none"
			  }
			}
		  }
		}
	  }
	}
  });

export default function EditProfilePage() {
	const storedToken = localStorage.getItem('authToken')
	const [userData, setUserData] = useState({})
	const { user } = useContext(AuthContext)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const history = useHistory()

	useEffect(()=>{
		axios
			.get(`${REACT_APP_API_URI}/api/user/${user._id}`, {
				headers: { Authorization: `Bearer ${storedToken}` },
			})
			.then((res) => {
				setUserData(res.data)
				setName(res.data.name)
				setEmail(res.data.email)
				})
			.catch((error) => console.log(error));
	}, [])

	const updateUserData = () => {

		const newData = {
			"name": name,
			"email": email
		}

		axios
			.put(`${REACT_APP_API_URI}/api/profile/${user._id}`, newData, {
				headers: { Authorization: `Bearer ${storedToken}` }
			})
			.then((res) => {
				history.push(`/profile`)
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className='EditProfilePage'>
			<div className='EditProfilePic'>
				<img className='EditProfilePicUpload' 
					src={`${userData.avatarUrl}`} 
					alt=""
				/>
			</div>
			<Button sx={{ p: 0, marginTop: '10px' }} 
				variant='text'
			>
				Change Picture
			</Button>
			<div className='EditProfileContent'>
				<div style={{display: "flex", flexDirection: "column"}}>
					
					<ThemeProvider theme={theme}>
						<TextField
							sx={{my: -3}}
							className="subvariant-hovered"
							id="pseudo-variant-name"
							hiddenLabel
							defaultValue={name} 
							onChange={e => setName(e.target.value)}
							value={name}
							inputProps={{style: {fontSize: 32, textAlign: "center"}}}
						/>
						<TextField 
							className="subvariant-hovered"
							id="pseudo-variant-email"
							hiddenLabel
							defaultValue={email} 
							onChange={e => setEmail(e.target.value)}
							value={email}
							inputProps={{style: {fontSize: 16, textAlign: "center"}}}
						/>
					</ThemeProvider>

				</div>
				
			</div>
			<Button 
				component={Link} 
				to="/edit-profile"
				variant='contained'
				onClick={updateUserData}
				sx={{ width: '100%', height: '56px', marginTop: '20px' }}
				type='submit'>
				Accept
			</Button> 
		</div>
	)
}
