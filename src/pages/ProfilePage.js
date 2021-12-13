import React from 'react'
import axios from 'axios';
import ProfileHeader from '../components/ProfileHeader';
import ProfileFeed from '../components/ProfileFeed';


export default function ProfilePage() {
    return (
        <>
            <ProfileHeader/>
            <ProfileFeed/>
        </>
    )
}
