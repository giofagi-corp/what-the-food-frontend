import React, { useEffect, useState } from 'react'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export default function NewRecipeStep3(props) {
     const handleChange = (e) => setValue(e.target.value)
     const [value, setValue] = useState(null)
     const [step, setStep] = useState([])

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

     return (
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
}
