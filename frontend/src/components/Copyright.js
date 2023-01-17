import React from 'react'
import Typography from '@mui/material/Typography';

const Copyright = () => {
    return (
        <>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
                {'Copyright © Dwarpaal '}
                {new Date().getFullYear()}
            </Typography>
        </>
    )
}

export default Copyright