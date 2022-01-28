import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'
import GenericPageTitle from '../components/GenericPageTitle'
import BackButton from '../components/BackButton'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RecipeListPage(props) {
	const storedToken = localStorage.getItem('authToken')
	const [recipesIng, setRecipesIng] = useState([])
	const [recipesCuisine, setRecipesCuisine] = useState([])
	const [ingredientName, setIngredientName] = useState("")

	const id = props.match.params.id

	useEffect(() => {
		axios.get(`${REACT_APP_API_URI}/api/recipe?ingredients=${id}`, {
			headers: { Authorization: `Bearer ${storedToken}` },
		})
			.then(response => setRecipesIng(response.data))
			.catch(error => console.log(error))

		axios.get(
			`${REACT_APP_API_URI}/api/recipe/recipeByCuisine?cuisine=${id}`,
			{
				headers: { Authorization: `Bearer ${storedToken}` },
			}
		)
			.then(response => {
				setRecipesCuisine(response.data)
			})
			.catch(error => console.log(error))

		axios.get(
			`${REACT_APP_API_URI}/api/ingredient/${id}`,
			{
				headers: { Authorization: `Bearer ${storedToken}` },
			}
		)
			.then(response => {
				setIngredientName(response.data.name)
			})
			.catch(error => console.log(error))
	}, [])

	return (
		<div className='NotificationsPage'>
			<Link to='/'>
				<BackButton />
			</Link>
			{console.log("recipesIng----->",recipesIng)}
			<GenericPageTitle text={ingredientName ? ingredientName : recipesCuisine[0].cuisine}/>
			{recipesIng &&
				recipesIng.map(recipe => (
					<Link to={`/recipe/${recipe._id}`}>
						<RecipeCard key={recipe._id} {...recipe} />
					</Link>
				))}
			{recipesCuisine &&
				recipesCuisine.map(recipe => (
					<Link to={`/recipe/${recipe._id}`}>
						<RecipeCard key={recipe._id} {...recipe} />
					</Link>
				))}
		</div>
	)
}
