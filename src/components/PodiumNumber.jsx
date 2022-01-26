import React from 'react'
import Badge from '@mui/material/Badge'

export default function PodiumNumber(props) {
	const { number } = props
	return (
		<div className='PodiumNumber'>
			<Badge
				overlap='circular'
				color='secondary'
				sx={{ fontSize: '1rem', height: '35px', width: '35px' }}
				badgeContent={number}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			/>
		</div>
	)
}
