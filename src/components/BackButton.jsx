import React from 'react'
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useHistory} from "react-router-dom";
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';


export default function BackButton() {
    let history = useHistory();
    function handleClick() {
        history.goBack()
    }
    return (
        <div className='BackButton'>
            <Grid>
                <IconButton onClick={history.goBack} color="primary" aria-label="go back" sx={{ padding: 0, minWidth: '1px'}}>
                    <ArrowBackIcon sx={{ padding: 0 }}/>
                </IconButton>
            </Grid>
        </div>
    )
}


