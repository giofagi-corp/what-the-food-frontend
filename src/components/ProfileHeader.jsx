import React from 'react';
import axios from 'axios';
import FavIngredients from './FavIngredients';
import { Image } from "cloudinary-react";
import EditButton from './EditButton';
import ProfilePicUpdate from './ProfilePicUpdate'
import { useState, useEffect } from "react";

export default function ProfileHeader() {

    return (
        <div className='ProfileHeader'>
            <div className='ProfileHeaderPic'>
                <ProfilePicUpdate/>
            </div>
            <div className='ProfileHeaderInfo'>
                <h3>Username</h3>
                <p>test@gmail.com</p>
                <FavIngredients/>
            </div>
        </div>
    )
}



