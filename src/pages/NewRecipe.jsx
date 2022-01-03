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
import { Chip } from '@mui/material'
import Stack from '@mui/material/Stack'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

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
          color: 'white',
          backgroundColor: 'DodgerBlue',
          height: '100px',
          width: '100vw',
     }

     const seeArr = () => {
          console.log('array of steps ----->', step)
     }

     const handleChange = (event) => {
          setValue(event.target.value)
     }

     const addStep = () => {
          setStep([...step, value])
          setValue("")
     }

     const steps = step.map((e) => (
          <li>{e}</li>
     ))

     useEffect(() => {
          axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               setAvailableIngredients(res.data)
          })
     }, [])

     return (
          <div>
               <Link to="/">
                    <BackButton />
               </Link>
               <GenericPageTitle text="Add a new recipe" />

               {/* RECIPE DESCRIPTION */}
               <GenericPagesSubtitle text="Recipe description" />
               <div style={addImageClass}>add image</div>
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

               {/* ADD INGREDIENT */}
               <GenericPagesSubtitle text="Recipe ingredients" />
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

               {/* ADD INGREDIENT */}
               <GenericPagesSubtitle text="Recipe steps" />
               {/* <Stack direction="row" spacing={1}>
                    {steps}
               </Stack> */}
               <ol>{steps}</ol>
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

               <Button type="button" variant="contained" onClick={seeArr}>
                    See array
               </Button>
          </div>
     )
}

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quo officia eum reprehenderit. Ullam nisi ipsam quasi cum odio. Repellendus adipisci eligendi ad iste iure.
