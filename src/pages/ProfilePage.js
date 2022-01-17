import React from 'react'
import ProfileHeader from '../components/ProfileHeader';
import ContentTabs from '../components/ContentTabs';
import {useContext} from "react"
import {AuthContext} from "./../context/auth.context"


export default function ProfilePage() {
    const {logOutUser} = useContext(AuthContext)
    return (
        <>      
            <ProfileHeader/>
            <ContentTabs/>
        </>
    )
}
