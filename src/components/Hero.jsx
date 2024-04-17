import React from 'react'
import BackButton from '../components/BackButton'

export default function Hero(props) {
	const { recipe } = props
	return (
		<div
			className='MobileHero'
			style={{ backgroundImage: `url(${recipe.imageUrl})` }}>
			<BackButton />
		</div>
	)
}
