import * as React from 'react';
import { Link } from "react-router-dom";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const REACT_APP_API_URI = process.env.REACT_APP_API_URI

export default function RelatedRecipes(props) {
    const { recipe } = props

  return (
    <div className='RecipeBody'>
            <div>
                <h3>You may also like</h3>
            </div>
            <Stack sx={{paddingBottom: '40px'}} direction="row" spacing={1}>
                <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
                <Chip
                    label="Clickable Link"
                    component="a"
                    href="#basic-chip"
                    variant="outlined"
                    clickable
                />
            </Stack>
    </div>
  );
}
