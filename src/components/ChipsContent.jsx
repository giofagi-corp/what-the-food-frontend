import React from 'react'
import Chip from '@mui/material/Chip';

export default function ChipsContent() {
    return (
        <div>
            <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
        </div>
    )
}
