import { useContext } from 'react'
import { AuthContext } from './../context/auth.context'
import { Redirect, Route } from 'react-router-dom'
import { LeapFrog } from '@uiball/loaders'

function AnonRoute(props) {
	const { to, exact, component: Component, ...restProps } = props

	const { isLoggedIn, isLoading } = useContext(AuthContext)

	// If the authentication is still loading ⏳
	if (!isLoading) return <div className='loading'><LeapFrog size={50} color="#28C699" />Loading</div>

	// If the user is already logged in, redirect him to home page
	if (isLoggedIn) return <Redirect to='/' />

	// If the user is not logged in yet, allow him to see the page
	return <Route to={to} exact={exact} component={Component} {...restProps} />
}

export default AnonRoute
