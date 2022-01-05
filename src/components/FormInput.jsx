import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormInput(props) {
  const { name, updateName } = props;
  const { time, updateTime } = props;
  const { cuisine, updateCuisine } = props;
  return (
    <div>
        <Box component="form" sx={{ 
          '& > :not(style)': { mb: 2, width: '94%' }, 
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',

         }} noValidate autoComplete="off">
          <TextField type="text"
            name="search"
            value={name}
            onChange={updateName}
            placeholder="Name"
            id="outlined-basic" label="Name" variant="outlined" />
          <TextField type="number"
            name="search"
            value={time}
            onChange={updateTime}
            placeholder="Duration"
            id="outlined-basic" label="Duration" variant="outlined" />
          <TextField type="text"
            name="search"
            value={cuisine}
            onChange={updateCuisine}
            placeholder="Cuisine"
            id="outlined-basic" label="Cuisine" variant="outlined" />
        </Box>
    </div>
  );
}
