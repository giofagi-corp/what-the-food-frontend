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

const Div = styled('div')(({ theme }) => ({
     ...theme.typography.button,
}))

export default function NewRecipeStep1(props) {
     const handleImageInput = (e) => props.setImage(e.target.files)
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
                              onChange={handleImageInput}
                         />
                         <div className="RecipePicUploadButtons">
                              <PhotoCamera sx={{ mr: 0.5 }}/>
                              <Div sx={{ ml: 0.5 }}>{'Upload Image'}</Div>
                         </div>
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
