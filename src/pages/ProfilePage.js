import React from 'react'
import axios from 'axios';
import ProfileHeader from '../components/ProfileHeader';
import ContentTabs from '../components/ContentTabs';
import {useContext} from "react"
import {AuthContext} from "./../context/auth.context"


export default function ProfilePage() {
    const {logOutUser} = useContext(AuthContext)
    return (
        <>
            <ProfileHeader/>
            <button onClick={logOutUser}>Log out</button>
            <ContentTabs/>
        </>
    )
}
