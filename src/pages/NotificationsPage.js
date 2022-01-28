import React from 'react'
import { Link } from 'react-router-dom'
import GenericPageTitle from '../components/GenericPageTitle'
import BackButton from '../components/BackButton'
import Notification from '../components/Notification'

export default function NotificationsPage() {
	return (
		<div className='NotificationsPage'>
			<Link to='/'>
				<BackButton />
			</Link>
			<GenericPageTitle text='Notifications' />
			<Notification className='Notifications' text='Notifications' />
		</div>
	)
}
