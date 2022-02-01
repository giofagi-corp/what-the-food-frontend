import React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { AuthContext } from './../context/auth.context'

const Input = styled('input')({
    display: 'none',
});

export default function ProfilePicUpdate(props) {
    const [imageSelected, setImageSelected] = useState('');
    const storedToken = localStorage.getItem("authToken");

    const {logOutUser} = useContext(AuthContext)

/*     const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "rejs52lv")

        axios.post("https://api.cloudinary.com/v1_1/dtu7oski7/image/upload",formData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
        ).then((response)=>{
            console.log(response);
        });
    }; */



    return (
        <div>
            <div>
                <Image className='avatar' cloudName="dtu7oski7" publicId={props.data.avatarUrl}/>
                {/* <BottomNavigationAction
                component={Link}
                showLabels
                to="/edit-profile"
                label="Add"
                value="add-recipe"/> */}
                <Button component={Link} to="/edit-profile" sx={{ width: '100%', height: '36px' }} variant="contained">Edit profile</Button>
                <Button onClick={logOutUser} sx={{ width: '100%', height: '36px' }} type="submit" variant="text">Logout</Button>
            </div>
        </div>
    )
}


  
