import React from 'react'
import Grid from '@mui/material/Grid'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {  useHistory } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'

export default function BackButton() {
	let history = useHistory()
	function handleClick() {
		history.goBack()
	}
	return (
		<div className='BackButton'>
			<Grid>
				<IconButton
					onClick={handleClick}
					color='primary'
					aria-label='go back'
					sx={{ minWidth: '1px'}}>
					<ArrowBackIcon sx={{ padding: 0, color: 'white' }} />
				</IconButton>
			</Grid>
		</div>
	)
}
