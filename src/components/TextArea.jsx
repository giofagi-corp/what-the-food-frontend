import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea(props) {
    const { description, updateDescription } = props;

    return (
        <div>
            <TextField
                id="standard-multiline-flexible"
                label="Steps"
                multiline
                maxRows={38}
                value={description}
                onChange={updateDescription}
                placeholder="Name"
                variant="outlined"
            />
        </div>
    )
}
