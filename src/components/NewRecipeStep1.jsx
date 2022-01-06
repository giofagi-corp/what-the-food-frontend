import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GenericPagesSubtitle from './GenericPageSubtitle'
import FormInput from './FormInput'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/material/styles'
import '../index.css'

const Input = styled('input')({
     display: 'none',
})

export default function NewRecipeStep1(props) {

     console.log("props----->",props);
     //const [name, setName] = useState('')
     // const [time, setTime] = useState()
     // const [cuisine, setCuisine] = useState('')

     const handleNameInput = (e) => props.setName(e.target.value)
     const handleTimeInput = (e) => props.setTime(e.target.value)
     const handleCuisineInput = (e) => props.setCuisine(e.target.value)

     return (
          <div>
               <div className="AddRecipeText">
                    <GenericPagesSubtitle text="Recipe description" />
               </div>
               
               <div className="RecipeInputs">
                    <label
                         htmlFor="icon-button-file"
                         className="RecipePicUpload"
                    >
                         <Input
                              accept="image/*"
                              id="icon-button-file"
                              type="file"
                         />
                         <IconButton
                              color="primary"
                              aria-label="upload picture"
                              component="span"
                         >
                              <PhotoCamera />
                         </IconButton>
                    </label>
               </div>
               <FormInput
                    name={props.name}
                    updateName={handleNameInput}
                    time={props.time}
                    updateTime={handleTimeInput}
                    cuisine={props.cuisine}
                    updateCuisine={handleCuisineInput}
               />
               
               {/* <div className="RecipeInputs">
                    <Link>
                         <Button
                              variant="contained"
                              size="large"
                              disableElevation
                              onClick={props.func(name, time, cuisine)}
                         >
                              Next
                         </Button>
                    </Link>
               </div> */}
          </div>
     )
}
