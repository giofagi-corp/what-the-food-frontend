import React from 'react';
import FavIngredients from './FavIngredients';
import EditButton from './EditButton';
import AddProfileImage from './AddProfileImage';

export default function ProfileHeader() {
    return (
        <>
            <div>
                <AddProfileImage/>
                <EditButton/>
            </div>
            <div>
                <h3>Username</h3>
                <p>email@email.com</p>
                <FavIngredients/>
            </div>
        </>
    )
}
