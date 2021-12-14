import React from 'react';
import axios from 'axios';
import { Image } from "cloudinary-react";
import { useState, useEffect } from "react";

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
            <Image className='avatar' cloudName="dtu7oski7" publicId="https://res.cloudinary.com/dtu7oski7/image/upload/v1639411188/k7n7zdidxq4wslkbyxqj.png"/>
            <input 
                type="file" 
                onChange={(event)=> {
                setImageSelected(event.target.files[0]);
                }}
            />
            {/* <button onClick={uploadImage}>Update</button> */}
        </div>
    )
}


  
