import React from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
    display: 'none',
});

export default function ProfilePicUpdate() {
    const [imageSelected, setImageSelected] = useState('');

    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "rejs52lv")

        axios.post(
            "https://api.cloudinary.com/v1_1/dtu7oski7/image/upload",
            formData
        ).then((response)=>{
            console.log(response);
        });
    };

    return (
        <div>
            <div>
                <Image className='avatar' cloudName="dtu7oski7" publicId="https://res.cloudinary.com/dtu7oski7/image/upload/v1639411188/k7n7zdidxq4wslkbyxqj.png"/>
            </div>
            {/* <input 
                type="file" 
                onChange={(event)=> {
                setImageSelected(event.target.files[0]);
                }}
            /> */}
            {/* <div>
            <div>
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
                </IconButton>
            </div> */}
            {/* <button onClick={uploadImage}>Update</button> */}
        </div>
    )
}


  
