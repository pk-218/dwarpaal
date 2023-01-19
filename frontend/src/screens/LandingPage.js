import React from 'react'
import Typewriter from 'typewriter-effect';
import { styled } from '@mui/material/styles';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/logo-no-background.png'

const FormButtonContained = styled(Button)(() => ({
    backgroundColor: '#ffffff',
    color: '#284b63',
    width: '250px',
    margin: '15px 0',
    '&:hover': {
        backgroundColor: '#d0e1ec',
    },
}));

const LandingPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={8} className='hero-section lhs-hero-section'>
                        <div className='lhs-hero'>
                            <div style={{ flexDirection: 'column' }}>
                                <Typography variant='h1' fontWeight='medium'>
                                    <img
                                        src={logo}
                                        alt='dwarpaal-logo'
                                        width="120px"
                                        style={{ marginRight: '12px', verticalAlign: 'text-top' }} />
                                    Dwarpaal
                                </Typography>
                                <Typography variant='h4'>A digital gatekeeper for DGX</Typography>
                                <Typography variant='body1' fontWeight='light' marginTop='10px'>CoE has an Nvidia DGX system in our college. Dwarpaal acts as a gateway for accessing the DGX server.<br /> It has digitized the hassle involved in requesting and granting access to the system.</Typography>
                                <div className='lhs-btn-container-column'>
                                    <Link to='/login/student'>
                                        <FormButtonContained variant='contained' className='lhs-btn'>Login as Student</FormButtonContained>
                                    </Link>
                                    <p style={{ marginBottom: 0, width: '250px', textAlign: 'center' }}>OR</p>
                                    <Link to='/login/staff'>
                                        <FormButtonContained variant='contained'>Login as Staff</FormButtonContained>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={4} className='hero-section rhs-hero-section'></Grid>

                    <div style={{ width: '100%', margin: '20px 0 0 0' }} className='footer-link'>
                        <a href='https://github.com/pk-218/dwarpal' target='_blank'>
                            <Typography variant='h6' textAlign='center'>Project by Team Navnavtihi++</Typography>
                        </a>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ my: 1 }}>
                            {'Copyright © Dwarpaal '}
                            {new Date().getFullYear()}
                        </Typography>
                    </div>
                </Grid>
            </Box>
        </>
    )
}

export default LandingPage