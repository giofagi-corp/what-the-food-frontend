import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import GenericPageTitle from '../components/GenericPageTitle'
import axios from 'axios'
import Button from '@mui/material/Button'
import NewRecipeStep3 from '../components/NewRecipeStep3'
import NewRecipeStep2 from '../components/NewRecipeStep2'
import NewRecipeStep1 from '../components/NewRecipeStep1'
import '../index.css'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME

export default function NewRecipe() {
     const [formStep, setFormStep] = useState(1)
     const [image, setImage] = useState('')
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [ingredients, setIngredients] = useState([])
     const [step, setStep] = useState([])
     const [ingredientsId, setIngredientsId] = useState([])

     const [newRecipe, setNewRecipe] = useState({})

     const storedToken = localStorage.getItem('authToken')

     const handleIngredientId = (ing) => {
          ing.map((e) => {
               
               return axios.post(
                    `${REACT_APP_API_URI}/api/search-ingredient/${e}`,
                    {},
                    {
                         headers: { Authorization: `Bearer ${storedToken}` },
                    }
               )
                    .then((response) => {
                         setIngredientsId([...ingredientsId, response.data[0]._id,])
                    })
                    .catch((error) => console.log(error))
          })
     }

     const createNewRecipe = (recipe) => {

          axios.post(`${REACT_APP_API_URI}/api/recipe/create/`, recipe, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               console.log('res data fron DB ------>', res.data)
          })
     }

     const nextFormStep = () => {
          setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
          console.log("image on next form Step----->",image)
          setNewRecipe({
               imageUrl: image,
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
          console.log("image on submit----->",image)
          setNewRecipe({
               imageUrl: image,
               name: name,
               ingredients: ingredientsId,
               time: time,
               description: step,
               cuisine: cuisine,
          })
     }
     useEffect(() => {

          console.log("cloudinaryName---------------------->",cloudinaryName)
          console.log("REACT_APP_API_URI---------------------->",REACT_APP_API_URI)
          const formData = new FormData()
          formData.append("file", image[0])
          formData.append("upload_preset", "images")

          //console.log("image------->", image[0])
          if(image !== "") {
               //console.log("----->", image[0])
               axios
                    .post(`https://api.cloudinary.com/v1_1/${cloudinaryName}/upload`, formData)
                    .then((res) =>{
                         console.log("res----->", res)
                    })
          }
     }, [image])

     useEffect(() => {
          if (step.length !== 0) {
               createNewRecipe(newRecipe)
          }
     }, [newRecipe])

     useEffect(() => {
          if (ingredients.length !== 0) {
               handleIngredientId(ingredients)
          }
     }, [ingredients])

     return (
          <div>
               <div className="AddRecipeText">
                    <GenericPageTitle text="Add a new recipe" />
               </div>
               {formStep === 1 && (
                    <NewRecipeStep1
                         image={image}
                         setImage={setImage}
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
                    <NewRecipeStep3 step={step} setStep={setStep} />
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
