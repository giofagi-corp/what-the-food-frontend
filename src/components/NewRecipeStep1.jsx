import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GenericPagesSubtitle from './GenericPageSubtitle'
import FormInput from './FormInput'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/material/styles'
import '../index.css'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

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

     const handleDeleteImage = () => props.setDeleteImage(true)

     return (
          <div>
               <div className="AddRecipeText">
                    <GenericPagesSubtitle text="Recipe description" />
               </div>

               <div className="RecipeInputs">
                    {props.image !== '' ? (
                         <div>
                              {!props.loading ? 
                              (
                                   <div className="RecipePicUpload">
                                   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <CircularProgress />
                                   </Box>
                                   </div>
                              ) 
                              : 
                              (<Link
                                   onClick={handleImageInput}
                                   className="RecipeImage"
                              >
                                   <IconButton aria-label="delete">
                                        <CloseIcon
                                             className="RecipeImageCloseIcon"
                                             onClick={handleDeleteImage}
                                        />
                                   </IconButton>
                                   <img src={`${props.image}`} />
                              </Link>)
                              }
                         </div>
                    ) : (
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
                                   <PhotoCamera sx={{ mr: 0.5 }} />
                                   <Div sx={{ ml: 0.5 }}>{'Upload Image*'}</Div>
                              </div>
                         </label>
                    )}
               </div>
               <FormInput
                    name={props.name}
                    updateName={handleNameInput}
                    time={props.time}
                    updateTime={handleTimeInput}
                    cuisine={props.cuisine}
                    updateCuisine={handleCuisineInput}
               />
          </div>
     )
}
