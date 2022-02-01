import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import RecipeBody from '../components/RecipeBody'
import RelatedRecipes from '../components/RelatedRecipes'
import axios from 'axios'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RecipePage() {
	const storedToken = localStorage.getItem('authToken')
	const { id } = useParams()
	const [recipe, setRecipe] = useState([])

	const getRecipe = async () => {
		await axios
			.get(`${REACT_APP_API_URI}/api/recipe/${id}`, {
				headers: { Authorization: `Bearer ${storedToken}` },
			})
			.then(response => {
				setRecipe(response.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	useEffect(() => {
		getRecipe()
	}, [])

	return (
		<div className='RecipePage'>
			<Hero recipe={recipe} />
			<RecipeBody recipe={recipe} />
			<RelatedRecipes />
		</div>
	)
}
