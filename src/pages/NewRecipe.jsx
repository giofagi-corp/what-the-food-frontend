import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import GenericPageTitle from '../components/GenericPageTitle'
import axios from 'axios'
import Button from '@mui/material/Button'
import NewRecipeStep3 from '../components/NewRecipeStep3'
import NewRecipeStep2 from '../components/NewRecipeStep2'
import NewRecipeStep1 from '../components/NewRecipeStep1'
import '../index.css'
import Alert from '@mui/material/Alert';

import Collapse from '@mui/material/Collapse';
import Fade from '@mui/material/Fade';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME

export default function NewRecipe() {
     const [formStep, setFormStep] = useState(1)
     const [image, setImage] = useState('')
     const [deleteImage, setDeleteImage] = useState(false)
     const [name, setName] = useState('')
     const [time, setTime] = useState(null)
     const [cuisine, setCuisine] = useState('')
     const [ingredients, setIngredients] = useState([])
     const [step, setStep] = useState([])
     const [ingredientsId, setIngredientsId] = useState([])
     const [newRecipe, setNewRecipe] = useState({})
     const [loading, setLoading] = useState(false)
     const [fieldEmpty, setFieldEmpty] = useState(false)
     const [open, setOpen] = React.useState(true);
     const [recipeReady, setRecipeReady] = useState(false)
     const history = useHistory();

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
                 history.push(`/recipe-user/${res.data._id}`);
          }).catch((error) => console.log(error))
     }

     const nextFormStep = () => {

          if(formStep === 1){
               
               if(image === "" || name === "" || time === null || cuisine === "") {
                    setFieldEmpty(true)
               } else {
                    setFieldEmpty(false)
               setNewRecipe({
                    imageUrl: image,
                    name: name,
                    ingredients: ingredientsId,
                    time: time,
                    description: step,
                    cuisine: cuisine,
               })
               setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
               }
          }else if(formStep === 2){
               console.log("ingredients----->", ingredients)
               
               if(ingredients.length === 0) {
                    console.log("entra en ingredients----->", ingredients)
                    setFieldEmpty(true)
               } else {
                    setFieldEmpty(false)
               setNewRecipe({
                    imageUrl: image,
                    name: name,
                    ingredients: ingredientsId,
                    time: time,
                    description: step,
                    cuisine: cuisine,
               })
               setFormStep((formStep > 0 || formStep < 4) && formStep + 1)
               }
          }
     }

     const prevFormStep = () => {
          setFormStep((formStep > 1 || formStep < 4) && formStep - 1)
          setRecipeReady(false)
     }

     const submit = () => {

          if(step.length === 0) {
               setFieldEmpty(true)
          } else {
               setFieldEmpty(false)
               setNewRecipe({
                    imageUrl: image,
                    name: name,
                    ingredients: ingredientsId,
                    time: time,
                    description: step,
                    cuisine: cuisine,
               })
               setRecipeReady(true)
          }
     }

     useEffect(()=>{
          setImage("")
     }, [deleteImage])

     useEffect(() => {
          if (!deleteImage){
               const formData = new FormData()
                    formData.append("file", image[0])
                    formData.append("upload_preset", "images") 
                    
               if(image !== "") {
                    axios
                         .post(`https://api.cloudinary.com/v1_1/${cloudinaryName}/upload`, formData)
                         .then((res) =>{
                              setImage(res.data.url)
                              setLoading(true)
                         }).catch((error) => console.log(error))
               } 
          } else {
               setImage("")
               setDeleteImage(false)
               setLoading(false)
          }
     }, [image])

     useEffect(() => {
          if (recipeReady && !fieldEmpty) {
               createNewRecipe(newRecipe)
          }
     }, [newRecipe, recipeReady])

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
                    <div>
                         <NewRecipeStep1 
                              loading={loading}
                              image={image}
                              setImage={setImage}
                              deleteImage={deleteImage}
                              setDeleteImage={setDeleteImage}
                              name={name}
                              setName={setName}
                              time={time}
                              setTime={setTime}
                              cuisine={cuisine}
                              setCuisine={setCuisine}
                         />
                    </div>
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
               <div>{fieldEmpty ? (
                    <Collapse in={open}>
                    <Fade in={fieldEmpty}>
                         <Alert color="error" severity="error" sx={{m: "20px", display: "flex", justifyContent: "center"}}>There are fields empty — check it out!</Alert>
                    </Fade>
                    </Collapse>) : <div></div> 
                    }
               </div>
          </div>
     )
}
