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

/* const Input = styled('input')({
     display: 'none',
}) */

export default function NewRecipe() {
     const [formStep, setFormStep] = useState(1)

     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [value, setValue] = useState(null)
     //const [steps, setSteps] = useState([])
     //const [availableIngredients, setAvailableIngredients] = useState([])
     const [ingredients, setIngredients] = useState([])
     const [step, setStep] = useState([])

     const [newRecipe, setNewRecipe] = useState({})

     const storedToken = localStorage.getItem('authToken')

     const nextFormStep = () => {
          setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
          
          setNewRecipe({
               name: {name},
               time: {time},
               cuisine: {cuisine},
               ingredients: {ingredients},
               steps: {step}
          })
     }

     const prevFormStep = () => {
          setFormStep((formStep > 1 || formStep < 4) && formStep - 1)
     }

     const submit = () => {
          console.log('name----->', name)
          console.log('time----->', time)
          console.log('cuisine----->', cuisine)
          console.log('ingredients----->', ingredients)
          console.log('steps----->', step)

          console.log(newRecipe);
     }

     /* useEffect(() => {
          axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               setAvailableIngredients(res.data)
          })
     }, []) */

     return (
          <div>
               <div className="AddRecipeText">
                    <GenericPageTitle text="Add a new recipe" />
               </div>
               {formStep === 1 && (
                    <NewRecipeStep1
                         name={name}
                         setName={setName}
                         time={time}
                         setTime={setTime}
                         cuisine={cuisine}
                         setCuisine={setCuisine}
                    />
               )}
               {formStep === 2 && (
                    <NewRecipeStep2
                         ingredients={ingredients}
                         setIngredients={setIngredients}
                    />
               )}
               {formStep === 3 && (
                    <NewRecipeStep3 
                         step={step} 
                         setStep={setStep} 
                    />
               )}
               <div className="RecipeInputs">
                    <div>
                         {formStep > 1 && formStep < 4 && (
                              <Link>
                                   <Button
                                        sx={{ ml: 1, mr: 1 }}
                                        variant="contained"
                                        size="large"
                                        disableElevation
                                        onClick={prevFormStep}
                                   >
                                        Previous
                                   </Button>
                              </Link>
                         )}
                         {formStep > 0 && formStep < 3 && (
                              <Link>
                                   <Button
                                        sx={{ ml: 1, mr: 1 }}
                                        variant="contained"
                                        size="large"
                                        disableElevation
                                        onClick={nextFormStep}
                                   >
                                        Next
                                   </Button>
                              </Link>
                         )}

                         {formStep === 3 && (
                              <Button
                                   sx={{ ml: 1, mr: 1 }}
                                   variant="contained"
                                   size="large"
                                   disableElevation
                                   onClick={submit}
                              >
                                   Submit
                              </Button>
                         )}
                    </div>
               </div>
          </div>
     )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo officia eum reprehenderit. Ullam nisi ipsam quasi cum odio. Repellendus adipisci eligendi ad iste iure.
