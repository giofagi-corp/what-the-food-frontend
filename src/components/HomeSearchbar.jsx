import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export default function CustomizedInputBase(props) {
    const {handleSubmit} = props
    const {handleSearchInput} = props
    const {inputSearch} = props
    return (
        <Box sx={{ p: '30px 24px 0 24px' }}>
        <Paper
        component="form"
        sx={{ p: '2px 8px', display: 'flex', alignItems: 'center', height: 50}}
        onSubmit={handleSubmit}
        >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Choose an ingredient"
            inputProps={{ 'aria-label': 'search google maps' }}
            value={inputSearch} 
            onChange={handleSearchInput}
        />
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <AddIcon />
        </IconButton>
        </Paper>
        </Box>
    );
}