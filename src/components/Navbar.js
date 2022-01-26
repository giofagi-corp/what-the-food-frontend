import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react' // <== IMPORT
import { AuthContext } from '../context/auth.context' // <== IMPORT
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export default function Navbar() {
	const [value, setValue] = React.useState(0)
  
	return (
		<Box
			sx={{
				position: 'fixed',
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 1000,
			}}>
			<BottomNavigation
				className='BottomNavigation'
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}>
				<BottomNavigationAction
					component={Link}
					to='/'
					label='Home'
					value='home'
					icon={<HomeOutlinedIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					showLabels
					to='/add-recipe'
					label='Add'
					value='add-recipe'
					icon={<AddCircleOutlineOutlinedIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to='/profile'
					label='Profile'
					value='profile'
					icon={<AccountCircleOutlinedIcon />}
				/>
				<BottomNavigationAction
					component={Link}
					to='/edit-recipe/61e7ef85df99a70fe308284d'
					label='Edit'
					value='edit'
					icon={<AccountCircleOutlinedIcon />}
				/>
			</BottomNavigation>
		</Box>
	)
}
