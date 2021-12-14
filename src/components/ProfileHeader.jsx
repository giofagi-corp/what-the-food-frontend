import React from 'react';
import axios from 'axios';
import FavIngredients from './FavIngredients';
import { Image } from "cloudinary-react";
import EditButton from './EditButton';
import ProfilePicUpdate from './ProfilePicUpdate'
import { useState, useEffect } from "react";

export default function ProfileHeader() {

    return (
        <div>
            <div>
                <ProfilePicUpdate/>
            </div>
            <div>
                <h3>Username</h3>
                <p>test@gmail.com</p>
                <FavIngredients/>
            </div>
        </div>
    )
}



