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
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { styled } from '@mui/material/styles'
import NewRecipeStep3 from '../components/NewRecipeStep3'
import NewRecipeStep2 from '../components/NewRecipeStep2'
import NewRecipeStep1 from '../components/NewRecipeStep1'
import '../index.css'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const Input = styled('input')({
     display: 'none',
})

export default function NewRecipe(props) {
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [value, setValue] = useState(null)
     const [step, setStep] = useState([])
     const [availableIngredients, setAvailableIngredients] = useState([])
     const [formStep, setFormStep] = useState(1)

     const storedToken = localStorage.getItem('authToken')

     const handleNameInput = (e) => setName(e.target.value)
     const handleTimeInput = (e) => setTime(e.target.value)
     const handleCuisineInput = (e) => setCuisine(e.target.value)
     const handleChange = (e) => setValue(e.target.value)

     const nextFormStep = () => {
          setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
     }

     const prevFormStep = () => {
          setFormStep((formStep > 1 || formStep < 4) && formStep - 1)
     }

     const deleteStep = () => {
          console.log('deleting Step')
     }

     const seeArr = () => {
          console.log('array of steps ----->', step)
     }

     const addStep = () => {
          console.log('value ------>', value)
          setStep([...step, value])
          //console.log('array of steps on add steps ----->', step)
          setValue('')
     }

     const steps = step.map((currentStep, index) => (
          <div className="RecipeInputs">
               <div className="RecipeStepBubble">
                    <div className="RecipeStepHeader">
                         <h3 className="RecipeStepNumber"> {index + 1}</h3>
                         <IconButton aria-label="delete">
                              <CloseIcon onClick={deleteStep} />
                         </IconButton>
                    </div>
                    <p className="RecipeStepParagraph">{currentStep}</p>
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

     const recipeDescription = () => (
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
                    name={name}
                    updateName={handleNameInput}
                    time={time}
                    updateTime={handleTimeInput}
                    cuisine={cuisine}
                    updateCuisine={handleCuisineInput}
               />
               <div className="RecipeInputs">
                    <Link>
                         <Button
                              variant="contained"
                              size="large"
                              disableElevation
                         >
                              Next
                         </Button>
                    </Link>
               </div>
          </div>
     )

     const recipeIngredients = () => (
          <div>
               <div className="AddRecipeText">
                    <GenericPagesSubtitle text="Recipe ingredients" />
               </div>
               <div className="RecipeInputs">
                    <Stack spacing={3} sx={{ width: '94%', mb: 2 }}>
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
          </div>
     )

     const recipeSteps = () => (
          <div>
               <div className="AddRecipeText">
                    <GenericPagesSubtitle text="Recipe steps" />
               </div>
               <div>{steps}</div>
               <div className="RecipeInputs">
                    <TextField
                         sx={{ width: '94%', mb: 2 }}
                         id="outlined-textarea"
                         label="Steps"
                         placeholder="Next step"
                         multiline
                         onChange={handleChange}
                         value={value}
                    />
                    <Button
                         sx={{ mb: 2 }}
                         variant="text"
                         startIcon={<AddCircleOutlineIcon />}
                         onClick={addStep}
                    >
                         Add new step
                    </Button>

                    <Button
                         sx={{ mb: 2 }}
                         variant="contained"
                         size="large"
                         disableElevation
                    >
                         Submit
                    </Button>

                    <Button type="button" variant="outlined" onClick={seeArr}>
                         See array
                    </Button>
               </div>
          </div>
     )

     return (
          <div>
               <div className="AddRecipeText">
                    <GenericPageTitle text="Add a new recipe" />
               </div>
               {/* RECIPE DESCRIPTION */}
               {formStep === 1 && <NewRecipeStep1 />}
               {formStep === 2 && <NewRecipeStep2 />}
               {formStep === 3 && <NewRecipeStep3 />}
               {/* <NewRecipeStep1/> */}

               {formStep > 1 && formStep < 4 && (
                    <div className="RecipeInputs">
                         <Link>
                              <Button
                                   variant="contained"
                                   size="large"
                                   disableElevation
                                   onClick={prevFormStep}
                              >
                                   Previous
                              </Button>
                         </Link>
                    </div>
               )}
               {formStep > 0 && formStep < 3 && (
                    <div className="RecipeInputs">
                         <Link>
                              <Button
                                   variant="contained"
                                   size="large"
                                   disableElevation
                                   onClick={nextFormStep}
                              >
                                   Next
                              </Button>
                         </Link>
                    </div>
               )}
               
               {formStep === 3 && (
                    <div className="RecipeInputs">
                         <Button
                              sx={{ mb: 2 }}
                              variant="contained"
                              size="large"
                              disableElevation
                         >
                              Submit
                         </Button>
                    </div>
               )}
               {/* RECIPE INGREDIENTS */}
               {/* RECIPE STEPS */}
          </div>
     )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo officia eum reprehenderit. Ullam nisi ipsam quasi cum odio. Repellendus adipisci eligendi ad iste iure.
