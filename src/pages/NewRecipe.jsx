import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import GenericPageTitle from '../components/GenericPageTitle'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import axios from 'axios'
import FormInput from '../components/FormInput'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import { Chip, IconButton } from '@mui/material'
import Stack from '@mui/material/Stack'
//import { AddCircleOutlineIcon, CloseIcon  } from '@mui/icons-material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import CloseIcon from '@mui/icons-material/Close'
//import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import "../index.css";
import { flexbox } from '@mui/system'


const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const Input = styled('input')({
     display: 'none',
   });

export default function NewRecipe(props) {
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [value, setValue] = useState(null)
     const [step, setStep] = useState([])
     const [availableIngredients, setAvailableIngredients] = useState([])

     const storedToken = localStorage.getItem('authToken')

     const handleNameInput = (e) => setName(e.target.value)
     const handleTimeInput = (e) => setTime(e.target.value)
     const handleCuisineInput = (e) => setCuisine(e.target.value)

     const addImageClass = {
          display: "flex",
          color: 'white',
          border: "solid 1px #1976d2",
          height: '100px',
          width: '94%',
     }

     const deleteStep = () =>{
          console.log("deleting Step");
     }

     const seeArr = () => {
          console.log('array of steps ----->', step)
     }

     const handleChange = (event) => {
          setValue(event.target.value)
     }

     const addStep = () => {
          setStep([...step, value])
          setValue('')
     }

     const steps = step.map((currentStep, index) => (
          <div className="RecipeInputs">
               <div className="RecipeStepBubble">
                    <div className="RecipeStepHeader">
                         <p className="RecipeStepNumber"> {index + 1}</p>
                         <IconButton aria-label="delete">
                              <CloseIcon onClick={deleteStep}/>
                         </IconButton>
                    </div>
                    <p>{currentStep}</p>
               </div>
          </div>
     ))

     useEffect(() => {
          axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               setAvailableIngredients(res.data)
          })
     }, [])

     return (
          <div >
               <Link to="/">
                    <BackButton />
               </Link>
               <GenericPageTitle text="Add a new recipe" />

               {/* RECIPE DESCRIPTION */}
               <GenericPagesSubtitle text="Recipe description" />
               {/* <div style={addImageClass}>
                    add image

               </div> */}
               <div className='RecipeInputs'>
                    <label htmlFor="icon-button-file" className='RecipePicUpload'>
                         <Input accept="image/*" id="icon-button-file" type="file" />
                         <IconButton color="primary" aria-label="upload picture" component="span">
                              <PhotoCamera />
                         </IconButton>
                    </label>
                    
                    <FormInput 
                         name={name}
                         updateName={handleNameInput}
                         time={time}
                         updateTime={handleTimeInput}
                         cuisine={cuisine}
                         updateCuisine={handleCuisineInput}
                    />

                    <Link>
                         <Button variant="contained" size="large" disableElevation>
                              Next
                         </Button>
                    </Link>
               </div>

               {/* ADD INGREDIENT */}
               <GenericPagesSubtitle text="Recipe ingredients" />
               <div className="RecipeInputs">
                    <Stack spacing={3} sx={{ width: '94%' }}>
                         <Autocomplete
                              multiple
                              id="tags-filled"
                              options={availableIngredients.map(
                                   (option) => option.name
                              )}
                              freeSolo
                              renderTags={(value, getTagProps) =>
                                   value.map((option, index) => (
                                        <Chip
                                             variant="outlined"
                                             label={option}
                                             {...getTagProps({ index })}
                                        />
                                   ))
                              }
                              renderInput={(params) => (
                                   <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Add ingredients"
                                        placeholder="Add ingredient"
                                   />
                              )}
                         />
                    </Stack>
               
               <Button variant="contained" size="large" disableElevation>
                    Next
               </Button>
               </div>
               {/* ADD STEPS */}
               <GenericPagesSubtitle text="Recipe steps" />
               <div>{steps}</div>
               <div className="RecipeInputs">
                    <TextField
                         sx={{ width: '94%' }}
                         id="outlined-textarea"
                         label="Steps"
                         placeholder="Next step"
                         multiline
                         value={value}
                         onChange={handleChange}
                    />
                    <Button
                         variant="text"
                         startIcon={<AddCircleOutlineIcon />}
                         onClick={addStep}
                    >
                         Add new step
                    </Button>

                    <Button variant="contained" size="large" disableElevation>
                         Submit
                    </Button>

                    <Button sx={{ marginTop: '10px' }} type="button" variant="outlined" onClick={seeArr}>
                         See array
                    </Button>
               </div>
          </div>
     )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo officia eum reprehenderit. Ullam nisi ipsam quasi cum odio. Repellendus adipisci eligendi ad iste iure.
