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
    const [image, setImage] = useState(currentRecipe.imageUrl)
    const [updateRecipe, setUpdateRecipe] = useState({})
    const [recipeReady, setRecipeReady] = useState(false)

    const handleImageInput = (e) => setImage(e.target.files)
    const handleNameInput = (e) => setName(e.target.value)
    const handleTimeInput = (e) => setTime(e.target.value)
    const handleCuisineInput = (e) => setCuisine(e.target.value)
    const handleDeleteImage = () => setDeleteImage(true)
    const handleChange = (e) => setValue(e.target.value)

    const storedToken = localStorage.getItem('authToken')

    const handleIngredientId = (ing) => {

        //console.log("handle ingredients");
        let arrId = []
        ing.map((e) => {  
            return axios.post(
                `${REACT_APP_API_URI}/api/search-ingredient/${e}`, {},
                {
                    headers: { Authorization: `Bearer ${storedToken}` },
                })
                .then((res) => {
                    //console.log("response data ---->" ,res.data[0]._id);
                    const ingId = res.data[0]._id
                    arrId.push(ingId)
                    //setIngredientsId([...ingredientsId, ingId])
                    //console.log("array ingredientes Id ---->" ,ingredientsId);
                })
                .catch((error) => console.log(error))
            })
            //console.log("ingredients Id on handleingredients ---->",ingredientsId);
            setIngredientsId(arrId)
            
        }

    useEffect(()=>{
        handleIngredientId(ingredients)
    }, [ingredients])


    const submit = () => {
        // console.log("hello submit");
        //console.log("ingredients Id",ingredientsId);
        //handleIngredientId(ingredients)
        setUpdateRecipe({
                // LA IMAGEN NO ESTÁ ACTUALIZADA <--------
                imageUrl: image,
                name: name,
                // HAY QUE BUSCAR LOS IDS DE LOS INGREDIENTES PARA CREAR LA RECETA <--------
                ingredients: ingredientsId,
                time: time,
                description: step,
                cuisine: cuisine,
        })
        setRecipeReady(true)
       
    }

    useEffect(()=>{

        console.log("updateRecipe------>",updateRecipe);
        //console.log("updateRecipe------>",updateRecipe.ingredients);

        // ACCESO AL ENDPOINT LISTO <--------

        /* recipeReady && (
            axios.put(`${REACT_APP_API_URI}/api/recipe/${id}`, updateRecipe, {
                headers: { Authorization: `Bearer ${storedToken}` },
            }).then((res) => {
                console.log(res.data);
            })
        ) */
    }, [recipeReady])

   useEffect(() => {
    axios.get(
        `${REACT_APP_API_URI}/api/recipe/${id}`,
        {
             headers: { Authorization: `Bearer ${storedToken}` },
        }
   )
        .then((res) => {
            setCurrentRecipe(res.data)
            setStep(res.data.description)
            setName(res.data.name)
            setTime(res.data.time)
            setCuisine(res.data.cuisine)
            const ing = res.data.ingredients.map(e => e.name)
            setIngredients([...ing]) 
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

        const form = (
            <div>
            <div className="AddRecipeText">
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
                <Box component="form" sx={{ 
                '& > :not(style)': { mb: 2, width: '94%' }, 
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',

                }} noValidate autoComplete="off">
                <TextField type="text"
                    required
                    name="search"
                    defaultValue="Name"
                    value={name}
                    onChange={handleNameInput}
                    placeholder="Name"
                    id="outlined-basic" label="Name" variant="outlined" />
                <TextField type="number"
                    required
                    name="search"
                    defaultValue={0}
                    value={time}
                    onChange={handleTimeInput}
                    placeholder="Duration"
                    id="outlined-basic" label="Duration" variant="outlined" />
                <TextField type="text"
                    required 
                    defaultValue="Cuisine" 
                    name="search"
                    value={cuisine}
                    onChange={handleCuisineInput}
                    placeholder="Cuisine"
                    id="outlined-basic" label="Cuisine" variant="outlined" />
                </Box>
            </div>
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
                            defaultValue={ingredients}
                            freeSolo
                            renderTags={(value, getTagProps) =>(
                                setIngredients(value),
                                value.map((option, index) => (   
                                        <Chip
                                            deleteIcon={<CloseIcon />}
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
                <div className="RecipeInputs">
                <Button
                    sx={{ ml: 1, mr: 1 }}
                    variant="contained"
                    size="large"
                    disableElevation
                    onClick={submit}
                >
                    Submit
                </Button>
            </div>
        </div>

        )

    return (
        <div>
            {ingredients.length ? form : 
                (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: "90vh" }}>
                    <CircularProgress />
                </Box>
                )
            }
        </div>
    )
}
