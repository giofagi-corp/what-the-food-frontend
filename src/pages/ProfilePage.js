import React, {useEffect, useState, useContext} from 'react'
import ProfileHeader from '../components/ProfileHeader'
import ContentTabs from '../components/ContentTabs'
import { AuthContext } from './../context/auth.context'
import axios from 'axios'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function ProfilePage() {
	const { logOutUser } = useContext(AuthContext)
	const storedToken = localStorage.getItem('authToken')
	const [userData, setUserData] = useState({})
	const { user } = useContext(AuthContext)

	//console.log("user._id----->",user._id);

	useEffect(()=>{
		axios
      .get(`${REACT_APP_API_URI}/api/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((res) => {
		  //console.log("res user ------- ---- --->",res.data)
		  setUserData(res.data)
		})
      .catch((error) => console.log(error));
	}, [])

	return (
		<>
			<ProfileHeader userData={userData}/>
			<ContentTabs userData={userData}/>
		</>
	)
}
