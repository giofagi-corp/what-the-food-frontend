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

export default function ProfilePicUpdate() {
    const [imageSelected, setImageSelected] = useState('');
    const storedToken = localStorage.getItem("authToken");

    const {logOutUser} = useContext(AuthContext)

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "rejs52lv")

        axios.post("https://api.cloudinary.com/v1_1/dtu7oski7/image/upload",formData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
        ).then((response)=>{
            console.log(response);
        });
    };

    return (
        <div>
            <div>
                <Image className='avatar' cloudName="dtu7oski7" publicId="https://res.cloudinary.com/dtu7oski7/image/upload/v1639653273/avatar_xzu7es.png"/>
                <Button onClick={logOutUser} sx={{ width: '100%', height: '36px' }} type="submit" variant="contained">Log Out</Button>
            </div>
        </div>
    )
}


  
