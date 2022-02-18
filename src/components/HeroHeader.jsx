import React from 'react'
import { Link } from 'react-router-dom'
import BookIcon from '@mui/icons-material/Book'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import EditIcon from '@mui/icons-material/Edit'

export default function HeroHeader(props) {
	console.log("props hero ------>",props)
	const { recipe } = props
	return (
		<div className='HeroHeader'>
			<div className='HeroHeaderContent'>
				<div className='RecipeName'>
					<div style={{ display: 'flex', alignItems: 'center' }}>
					</div>
				</div>
				<div className='RecipeFavSave'>
				</div>
			</div>
		</div>
	)
}
