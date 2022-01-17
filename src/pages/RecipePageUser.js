import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Hero from "../components/Hero"
import RecipeBody from "../components/RecipeBody"
import axios from 'axios';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RecipePageUser() {
    const storedToken = localStorage.getItem("authToken");

    const {id} = useParams()
    console.log(id);
    const [recipe, setRecipe] = useState([])
    const [editable, setEditable] = useState(true)
    const [open, setOpen] = useState(true)

    const handleClose = () => {
      setOpen(false);
    };

    const getRecipe = async () => {  
        await axios.get(`${REACT_APP_API_URI}/api/recipe/${id}`, {
            headers: { Authorization: `Bearer ${storedToken}` }
          })  
        .then((response) => {
            console.log("RESPONSE ------> ",response.data);
            setRecipe(response.data)
        })
        .catch(err => {  
          console.log(err)  
        });  
      }  

    useEffect(() => {
        getRecipe()
    }, [])

    return (
        <div>
            <Hero recipe={recipe} editable={editable}/>
            <RecipeBody recipe={recipe}/>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              {/* <DialogTitle sx={{mx: 'auto'}} id="alert-dialog-title">
                {"Título"}
              </DialogTitle> */}
              <DialogContent sx={{width: '90%'}} >
                <DialogContentText sx={{textAlign: 'center'}} id="alert-dialog-description">
                  <div style={{display: "flex", justifyContent: "center"}}><img style={{width: "120px", padding: "35px"}} src="https://res.cloudinary.com/dtgwzogvc/image/upload/v1642365840/images/3d-hands-fun-and-wild-213_xkx9l6.png" alt="" /></div>
                  <h1>Congrats!</h1>
                  <h2> You have created a new recipe</h2> 
                  
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* <Button onClick={handleClose}>Disagree</Button> */}
                <Button sx={{mx: 'auto'}} onClick={handleClose} autoFocus>
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
        </div>
    )
    }

