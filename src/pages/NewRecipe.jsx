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

import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function NewRecipe(props) {
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     let [chipIng, setChipIng] = useState('ingredient')

     const [availabeIngredients, setAvailableIngredients] = useState([])
     const storedToken = localStorage.getItem('authToken')

     const handleDelete = () => {
          console.info('You clicked the delete icon.')
          
     }

     const handleAddIngredient = (ing) =>{
          console.info(`You clicked add the ingredient ${ing}`)
          
     }

     //const testingChipMultiline = "In a large bowl, sift together the flour, baking powder, salt and sugar. "

     const addImageClass = {
          color: 'white',
          backgroundColor: 'DodgerBlue',
          height: '100px',
          width: '100vw',
     }

     /*      useEffect(() => {
          axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               setAvailableIngredients(res.data)
          })
     }, []) */

     useEffect(() => {
          ;(async () => {
               const res = await axios.get(
                    `${REACT_APP_API_URI}/api/search-all-ing`,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
               )
               setAvailableIngredients(res.data)
          })()
     }, [])

     const handleNameInput = (e) => setName(e.target.value)
     const handleTimeInput = (e) => setTime(e.target.value)
     const handleCuisineInput = (e) => setCuisine(e.target.value)

     return (
          <div>
               <Link to="/">
                    <BackButton />
               </Link>
               <GenericPageTitle text="Add a new recipe" />
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

               <Autocomplete
                    freeSolo
                    disablePortal
                    clearOnBlur
                    handleHomeEndKeys
                    id="combo-box-demo"
                    options={availabeIngredients}
                    getOptionLabel={(option) => option.name }
                    sx={{ width: '100%' }}
                    renderInput={(params) => (
                         <TextField {...params} label="Ingredient" />
                    )}
                    onChange={handleAddIngredient}
               />

               <Stack direction="row" spacing={1}>
                    {/* <Chip label={testingChipMultiline} onDelete={handleDelete} /> */}
                    <Chip
                         label={chipIng}
                         variant="outlined"
                         onDelete={handleDelete}
                    />
               </Stack>
          </div>
     )
}
