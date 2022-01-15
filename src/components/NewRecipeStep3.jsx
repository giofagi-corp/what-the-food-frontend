import React, { useState } from 'react'
import GenericPagesSubtitle from '../components/GenericPageSubtitle'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import TextField from '@mui/material/TextField'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

export default function NewRecipeStep3(props) {
     
     const [value, setValue] = useState(null)

     const handleChange = (e) => setValue(e.target.value)

     const deleteStep = (index) => {
          props.step.splice(index,1)
          props.setStep([...props.step])
     }

     const addStep = () => {
          props.setStep([...props.step, value])
          setValue('')
     }

     const steps = props.step.map((currentStep, index) => (
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
