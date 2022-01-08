import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GenericPageTitle from '../components/GenericPageTitle'
import axios from 'axios'
import Button from '@mui/material/Button'
import NewRecipeStep3 from '../components/NewRecipeStep3'
import NewRecipeStep2 from '../components/NewRecipeStep2'
import NewRecipeStep1 from '../components/NewRecipeStep1'
import '../index.css'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function NewRecipe() {
     const [formStep, setFormStep] = useState(1)
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [ingredients, setIngredients] = useState([])
     const [step, setStep] = useState([])

     const [newRecipe, setNewRecipe] = useState({})

     const storedToken = localStorage.getItem('authToken')

     const nextFormStep = () => {
          setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
          setNewRecipe({
               imageUrl: '',
               name: name,
               ingredients: ingredients,
               time: time,
               description: step,
               cuisine: cuisine,
          })
     }

     const prevFormStep = () => {
          setFormStep((formStep > 1 || formStep < 4) && formStep - 1)
     }

     
     const submit = () => {

          console.log("step ------->",step)
          
          setNewRecipe({
               imageUrl: '',
               name: name,
               ingredients: ingredients,
               time: time,
               description: step,
               cuisine: cuisine, 
          })

          // no se actualiza el state
          console.log("what we're gonna create ---->", newRecipe)
          axios
               .post(`${REACT_APP_API_URI}/api/recipe/create/`, newRecipe, {
               headers: { Authorization: `Bearer ${storedToken}` },
             })
          .then((res) => {
               console.log("res data fron DB ------>",res.data)
          })
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