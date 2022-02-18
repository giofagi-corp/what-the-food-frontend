import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../components/Hero'
import RecipeBody from '../components/RecipeBody'
import axios from 'axios'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RecipePageUser() {
	const storedToken = localStorage.getItem('authToken')

	const { id } = useParams()
	const [recipe, setRecipe] = useState([])
	const [editable, setEditable] = useState(true)
	const [open, setOpen] = useState(true)

	const handleClose = () => {
		setOpen(false)
	}

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
		<div>
			<Hero recipe={recipe} editable={editable} />
			<RecipeBody recipe={recipe} editable={editable}/>
			
		</div>
	)
}
