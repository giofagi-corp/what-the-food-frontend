import { useState, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from './../context/auth.context'
import LoginPageTitle from '../components/LoginPageTitle'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Collapse from '@mui/material/Collapse'
import Fade from '@mui/material/Fade'

const API_URI = process.env.REACT_APP_API_URI

function LoginPage(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errorMessage, setErrorMessage] = useState(undefined)
	const [open, setOpen] = useState(true)
  
	const { logInUser } = useContext(AuthContext)

	const handleEmail = e => setEmail(e.target.value)
	const handlePassword = e => setPassword(e.target.value)

	const handleLoginSubmit = e => {
		e.preventDefault()
		const requestBody = { email, password }
		const storedToken = localStorage.getItem('authToken')

		axios.post(`${API_URI}/auth/login`, requestBody, {
			headers: { Authorization: `Bearer ${storedToken}` },
		})
			.then(response => {
				const JWTToken = response.data.authToken
				logInUser(JWTToken)
				props.history.push('/')
			})
			.catch(error => {
				const errorDescription = error.response.data.message
				setErrorMessage(errorDescription)
			})
	}

	return (
		<>
			<div className='NotificationsPage'>
				<LoginPageTitle text='Login' />
				<Box
					component='form'
					sx={{ '& > :not(style)': { mb: 2, width: '100%' } }}
					noValidate
					autoComplete='off'>
					<TextField
						type='text'
						name='email'
						value={email}
						onChange={handleEmail}
						placeholder='Email'
						id='outlined-basic'
						label='Email'
						variant='outlined'
					/>
					<TextField
						type='password'
						name='password'
						value={password}
						onChange={handlePassword}
						placeholder='Password'
						id='outlined-basic'
						label='Password'
						variant='outlined'
					/>
				</Box>

				<Button
					onClick={handleLoginSubmit}
					sx={{ width: '100%', height: '56px' }}
					type='submit'
					variant='contained'>
					Login
				</Button>

				<div className='TagLine'>
					<p>
						Don't have an account yet?{' '}
						<Link to={'/signup'}> Sign Up</Link>
					</p>
				</div>

				{errorMessage && (
					<Collapse in={open}>
						<Fade in={errorMessage}>
							<Alert
								color='error'
								severity='error'
								sx={{
									m: '20px',
									display: 'flex',
									justifyContent: 'center',
								}}>
								{errorMessage}
							</Alert>
						</Fade>
					</Collapse>
				)}
			</div>
		</>
	)
}

export default LoginPage
