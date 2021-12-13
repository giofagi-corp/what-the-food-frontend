import React from 'react';
import axios from 'axios';
import FavIngredients from './FavIngredients';
import { Image } from "cloudinary-react"
import EditButton from './EditButton';
import { useState, useEffect } from "react";

export default function ProfileHeader() {

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
                <Image cloudName="dtu7oski7"
                publicId="https://res.cloudinary.com/dtu7oski7/image/upload/v1639396190/vqfyu9xh3vrzwakvsnrr.png" />
                <input 
                    type="file" 
                    onChange={(event)=> {
                    setImageSelected(event.target.files[0]);
                    }}
                />
                <button onClick={uploadImage}></button>
            </div>
            <div>
                <h3>Username</h3>
                <p>test@gmail.com</p>
                <FavIngredients/>
            </div>
        </div>
    )
}
