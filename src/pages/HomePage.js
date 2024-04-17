/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import axios from 'axios'
import HomeContent from '../components/HomeContent'
import HomeSearchbar from '../components/HomeSearchbar'
import { useState, useEffect } from 'react'
import Footer from '../components/Footer'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function HomePage() {
	const feedTops = [
		{
			name: 'Latest Recipes',
			link: '/top-recipes',
			imageUrl:
				'https://res.cloudinary.com/dtgwzogvc/image/upload/v1652952373/images/Last-Recipes_ecj2ti.png',
		},
		{
			name: 'Top Ingredients',
			link: '/top-ingredients',
			imageUrl:
				'https://res.cloudinary.com/dtgwzogvc/image/upload/v1652952328/images/Top-ingredienets_yj95gb.png',
		},
		{
			name: 'Top Cuisine',
			link: '/top-cuisine',
			imageUrl:
				'https://res.cloudinary.com/dtgwzogvc/image/upload/v1652952227/images/cuisine_n2hpnk.png',
		},
	]

	const [newSearch, setNewSearch] = useState([])
	const [isCuisine, setIsCuisine] = useState()
	const [recipes, setRecipes] = useState(feedTops)
	const [isHome, setIsHome] = useState(true)

	const storedToken = localStorage.getItem('authToken')

	useEffect(() => {
		if (isCuisine) {
			setIsHome(false)

			axios.get(
				`${REACT_APP_API_URI}/api/recipe/recipeByCuisine?cuisine=${newSearch}`,
				{
					headers: { Authorization: `Bearer ${storedToken}` },
				}
			)
				.then(response => {
					setRecipes(response.data)
					response.data.length === 0 && setIsHome(true)
				})
				.catch(error => console.log(error))
		} else {
			setIsHome(false)
			const arrIngId = newSearch.map(e => e._id).join('+')

			if (arrIngId) {
				axios.get(
					`${REACT_APP_API_URI}/api/recipes?ingredients=${arrIngId}`,
					{
						headers: {
							Authorization: `Bearer ${storedToken}`,
						},
					}
				)
					.then(response => {
						setRecipes(response.data)
					})
					.catch(error => console.log(error))
			} else {
				setIsHome(true)
			}
		}
	}, [newSearch])

	return (
		<div>
			<HomeSearchbar
				newSearch={newSearch}
				setNewSearch={setNewSearch}
				isCuisine={isCuisine}
				setIsCuisine={setIsCuisine}
				isHome={isHome}
				setIsHome={setIsHome}
			/>
			{isHome ? (
				<HomeContent isHome={isHome} recipes={feedTops} />
			) : (
				<HomeContent recipes={recipes} />
			)}
			<Footer />
		</div>
	)
}
