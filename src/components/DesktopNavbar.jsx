import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export default function DesktopNavbar() {
	// Subscribe to the AuthContext to gain access to
	// the values from AuthContext.Provider `value` prop
	const [value, setValue] = React.useState(0)
	return (
		<Box>
			<BottomNavigation
				className='DesktopNavbar'
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}>
				<BottomNavigationAction component={Link} to='/' label='Home' value='home' icon={<HomeOutlinedIcon />} />
				<BottomNavigationAction
					component={Link}
					to='/add-recipe'
					label='Add'
					value='add-recipe'
					icon={<AddCircleOutlineOutlinedIcon />}
				/>
				<BottomNavigationAction component={Link} to='/profile' label='Profile' value='profile' icon={<AccountCircleOutlinedIcon />} />
			</BottomNavigation>
		</Box>
	)
}
