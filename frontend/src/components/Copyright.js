import React from 'react'
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 3 }}>
                {'Copyright © Dwarpaal '}
                {new Date().getFullYear()}
            </Typography>
        </>
    )
}

export default Copyright