import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Notifications(props) {
    const {text} = props
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert icon={false} severity="success">
            This is a success alert — check it out!
            </Alert>
            <Alert icon={false} severity="success">
            This is a success alert — check it out!
            </Alert>
            <Alert icon={false} severity="success">
            This is a success alert — check it out!
            </Alert>
        </Stack>
  );
}