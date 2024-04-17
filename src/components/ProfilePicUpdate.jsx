import React from 'react';
import { Image } from "cloudinary-react";
import { Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from './../context/auth.context'


export default function ProfilePicUpdate(props) {
    const {logOutUser} = useContext(AuthContext)

    return (
        <div>
            <div>
                <Image className='avatar' cloudName="dtu7oski7" publicId={props.data.avatarUrl}/>
                <Button component={Link} to="/edit-profile" sx={{ width: '100%', height: '36px' }} variant="contained">Edit profile</Button>
                <Button onClick={logOutUser} sx={{ width: '100%', height: '36px' }} type="submit" variant="text">Logout</Button>
            </div>
        </div>
    )
}


  
