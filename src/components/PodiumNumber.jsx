import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

export default function PodiumNumber(props) {
    const {number} = props
    return (
        <div className='PodiumNumber'>
            <Badge overlap="circular" color="secondary" sx={{ fontSize: '1rem', height: '35px', width: '35px', }} badgeContent={number} anchorOrigin={{ vertical: 'bottom', horizontal: 'right',}} />
        </div>
    )
}
