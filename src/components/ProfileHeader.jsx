import React from 'react';
import axios from 'axios';
import FavIngredients from './FavIngredients';
import { Image } from "cloudinary-react";
import EditButton from './EditButton';
import ProfilePicUpdate from './ProfilePicUpdate'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function ProfileHeader() {

    return (
        <div className='ProfileHeader'>
                <div className='ProfileHeaderPic'>
                        <ProfilePicUpdate/>
                    </div>
                    <div className='ProfileHeaderInfo'>
                        <h3>Harold</h3>
                        <p>haroldmeme@gmail.com</p>
                        <FavIngredients/>
                </div>
        </div>
    )
}



