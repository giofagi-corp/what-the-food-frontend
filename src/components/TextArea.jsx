import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea(props) {
    const { description, updateDescription } = props;
    return (
        <div>
            <TextField sx={{ width: '100%', marginBottom: '30px' }}
                id="outlined-multiline"
                label="Steps"
                multiline
                rows={4}
                maxRows={38}
                value={description}
                onChange={updateDescription}
                defaultValue="Default Value"
                placeholder="Steps"
            />
        </div>
    )
}
