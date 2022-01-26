import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { Link } from 'react-router-dom'

export default function RecipesList(props) {
	const { recipes } = props
	return (
		<div className='CardContainer'>
			{recipes.map(recipe => (
				<Link to={`/recipe/${recipe._id}`}>
					<RecipeCard key={recipe._id} {...recipe} />
				</Link>
			))}
		</div>
	)
}
