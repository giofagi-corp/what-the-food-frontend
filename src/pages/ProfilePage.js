import React from 'react'
import axios from 'axios';
import ProfileHeader from '../components/ProfileHeader';
import ContentTabs from '../components/ContentTabs';


export default function ProfilePage() {
    return (
        <>
            <ProfileHeader/>
            <ContentTabs/>
        </>
    )
}
