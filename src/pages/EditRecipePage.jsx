import React from 'react'
import { useState, useEffect } from 'react'
import GenericPageTitle from '../components/GenericPageTitle'
import BackButton from '../components/BackButton'
import FormInput from '../components/FormInput'
import { CircularProgress, IconButton, TextField, Chip, Autocomplete, Stack, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import { Link, useParams } from 'react-router-dom'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import axios from 'axios'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI
const cloudinaryName = process.env.REACT_APP_CLOUDINARY_NAME

const Input = styled('input')({
    display: 'none',
})

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
}))

export default function EditRecipePage() {

    const [currentRecipe, setCurrentRecipe] = useState({})
    const [image, setImage] = useState(currentRecipe.imageUrl)
    const [deleteImage, setDeleteImage] = useState(false)
    const [name, setName] = useState('')
    const [time, setTime] = useState(null)
    const [cuisine, setCuisine] = useState('')
    const [loading, setLoading] = useState(false)
    const [availableIngredients, setAvailableIngredients] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [step, setStep] = useState([])
    const [ingredientsId, setIngredientsId] = useState([])
    const [value, setValue] = useState(null)
    const { id } = useParams();

    const handleImageInput = (e) => setImage(e.target.files)
    const handleNameInput = (e) => setName(e.target.value)
    const handleTimeInput = (e) => setTime(e.target.value)
    const handleCuisineInput = (e) => setCuisine(e.target.value)
    const handleDeleteImage = () => setDeleteImage(true)
    const handleChange = (e) => setValue(e.target.value)

    const storedToken = localStorage.getItem('authToken')

   useEffect(() => {
    axios.get(
        `${REACT_APP_API_URI}/api/recipe/${id}`,
        {},
        {
             headers: { Authorization: `Bearer ${storedToken}` },
        }
   )
        .then((response) => {
            setCurrentRecipe(response.data)
            setStep(response.data.description)
            const ing = currentRecipe.ingredients.map(e => e.name)
            setIngredients(ing) 
        })
        .catch((error) => console.log(error))
   }, [])

   useEffect(() => {
    axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
         headers: { Authorization: `Bearer ${storedToken}` },
    }).then((res) => {
         setAvailableIngredients(res.data)
    })
}, [])

   
   const deleteStep = (index) => {
       step.splice(index,1)
       setStep([...step])
    }
    
    const addStep = () => {
        setStep([...step, value])
        setValue('')
    }
    
    /* console.log("currentRecipe.ingredients------>", currentRecipe.ingredients)
    console.log("ingredients----->", ingredients)
    console.log("step----->", step) */
    console.log("currentRecipe.imageUrl----->", currentRecipe.imageUrl)
    console.log("CurrentRecipe----->", currentRecipe)
    const steps = step.map((currentStep, index) => (
        <div className="RecipeInputs" >
             <div className="RecipeStepBubble">
                  <div className="RecipeStepHeader">
                       <h3 className="RecipeStepNumber"> {index + 1}</h3>
                       <IconButton aria-label="delete">
                            <CloseIcon key={index} onClick={() => deleteStep(index)} />
                       </IconButton>
                  </div>
                  <p className="RecipeStepParagraph">{currentStep}</p>
             </div>
        </div>
   ))

    return (
        <div>
            <div className="AddRecipeText">
                {/* <BackButton/> */}
                <GenericPageTitle text="Edit recipe" /> 
                <GenericPagesSubtitle text="Recipe description" />
            </div>
            <div className="RecipeInputs">
                <Link
                    onClick={handleImageInput}
                    className="RecipeImage"
                >
                <IconButton aria-label="delete">
                    <CloseIcon
                            className="RecipeImageCloseIcon"
                            onClick={handleDeleteImage}
                    />
                </IconButton>
                    <img src={`${currentRecipe.imageUrl}`} />
                </Link>
               </div>
            <div>
                <FormInput
                name={currentRecipe.name}
                updateName={handleNameInput}
                time={currentRecipe.time}
                updateTime={handleTimeInput}
                cuisine={currentRecipe.cuisine}
                updateCuisine={handleCuisineInput}
               />
            </div>
            <div className="AddRecipeText">
                <GenericPagesSubtitle text="Recipe ingredients" />
            </div>
            <div className="RecipeInputs">
                    <Stack spacing={3} sx={{ width: '94%', mb: 2 }}>
                         <Autocomplete
                              multiple
                              id="tags-filled"
                              defaultValue={ingredients}
                              options={availableIngredients.map(
                                   (option) => option.name
                              )}
                              freeSolo
                              renderTags={(value, getTagProps) =>(
                                   setIngredients(value),
                                   value.map((option, index) => (
                                        <Chip
                                             variant="outlined"
                                             label={option}
                                             {...getTagProps({ index })}
                                        />
                                   )))
                              }
                              renderInput={(params) => (
                                   <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Add ingredients *"
                                        placeholder="Add ingredient *"
                                   />
                              )}
                         />
                    </Stack>
                </div>
                <div className="AddRecipeText">
                    <GenericPagesSubtitle text="Recipe steps" />
                </div>
                <div>{steps}</div>
                <div className="RecipeInputs">
                        <TextField
                        required
                            sx={{ width: '94%', mb: 2}}
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
                </div>
        </div>
    )
}
