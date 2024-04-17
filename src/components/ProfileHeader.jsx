import React from 'react'
import ProfilePicUpdate from './ProfilePicUpdate'

export default function ProfileHeader(props) {

	return (
		<div className='css-8atqhb'>
			<div className='ProfileHeader'>
				<div className='ProfileHeaderPic'>
					<ProfilePicUpdate data={props.userData} />
				</div>
				<div className='ProfileHeaderInfo'>
					<h3>{props.userData.name}</h3>
					<p>{props.userData.email}</p>
				</div>
			</div>
		</div>
	)
}
