import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'
import GenericPageTitle from '../components/GenericPageTitle'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import axios from 'axios'
import FormInput from '../components/FormInput'

import TextField from '@mui/material/TextField'
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import Button from '@mui/material/Button'

import { Chip } from '@mui/material'
import Stack from '@mui/material/Stack'

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

const filter = createFilterOptions();

export default function NewRecipe(props) {
     const [name, setName] = useState('')
     const [time, setTime] = useState()
     const [cuisine, setCuisine] = useState('')
     const [value, setValue] = useState(null);
     const [chipIng, setChipIng] = React.useState([])

     const [availableIngredients, setAvailableIngredients] = useState([])
     const storedToken = localStorage.getItem('authToken')

     const seeArr = () => {
          console.log('array of chips ----->', chipIng)
     }

     const handleDelete = (e) => () => {
          setChipIng((chip) => chipIng.filter((c) => c !== e))
     }

     const handleAdd = () => {
          setChipIng([...chipIng, value.name])
     }

     const chips = chipIng.map((e) => (
          <div>
               <Chip label={e} variant="outlined"  onDelete={handleDelete(e)} />
          </div>
          
     ))

     const addImageClass = {
          color: 'white',
          backgroundColor: 'DodgerBlue',
          height: '100px',
          width: '100vw',
     }

          useEffect(() => {
          axios.get(`${REACT_APP_API_URI}/api/search-all-ing`, {
               headers: { Authorization: `Bearer ${storedToken}` },
          }).then((res) => {
               setAvailableIngredients(res.data)
          })
     }, [])

     /* useEffect(() => {
          (async () => {
               const res = await axios.get(
                    `${REACT_APP_API_URI}/api/search-all-ing`,
                    { headers: { Authorization: `Bearer ${storedToken}` } }
               )
               setAvailableIngredients(res.data)
          })()
     }, []) */

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
                    value={value}
                    onChange={(event, newValue) => {
                         if (typeof newValue === 'string') {
                              setValue({ name: newValue })
                         } else if (newValue && newValue.inputValue) {
                              // Create a new value from the user input
                              setValue({
                                   name: newValue.inputValue,
                              })
                         } else {
                              setValue(newValue)
                         }
                    }}
                    filterOptions={(options, params) => {
                         const filtered = filter(options, params)

                         const { inputValue } = params
                         // Suggest the creation of a new value
                         const isExisting = options.some(
                              (option) => inputValue === option.name
                         )
                         if (inputValue !== '' && !isExisting) {
                              filtered.push({
                                   inputValue,
                                   name: `Add "${inputValue}"`,
                              })
                         }

                         return filtered
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    id="free-solo-with-text-demo"
                    options={availableIngredients}
                    getOptionLabel={(option) => {
                         // Value selected with enter, right from the input
                         if (typeof option === 'string') {
                              return option
                         }
                         // Add "xxx" option created dynamically
                         if (option.inputValue) {
                              return option.inputValue
                         }
                         // Regular option
                         return option.name
                    }}
                    renderOption={(props, option) => (
                         <li {...props}>{option.name}</li>
                    )}
                    sx={{ width: 300 }}
                    freeSolo
                    renderInput={(params) => (
                         <TextField
                              {...params}
                              label="Select ingredient"
                         />
                    )}
               />
               <button type="button" onClick={handleAdd}>
                    Add
               </button>
               <button type="button" onClick={seeArr}>
                    See array
               </button>
               <Stack direction="row" spacing={3} sx={{ width: 500 }}>
                    {chips}
               </Stack>
          </div>
     )
}
