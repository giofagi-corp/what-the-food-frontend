import React from 'react'
import axios from 'axios'
import FavIngredients from './FavIngredients'
import { Image } from 'cloudinary-react'
import EditButton from './EditButton'
import ProfilePicUpdate from './ProfilePicUpdate'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function ProfileHeader(props) {

	console.log("props userDATA------>",props.userData);

	return (
		<div className='css-8atqhb'>
			<div className='ProfileHeader'>
				<div className='ProfileHeaderPic'>
					<ProfilePicUpdate data={props.userData} />
				</div>
				<div className='ProfileHeaderInfo'>
					<h3>{props.userData.name}</h3>
					<p>{props.userData.email}</p>
					{/* <FavIngredients /> */}
				</div>
			</div>
		</div>
	)
}
