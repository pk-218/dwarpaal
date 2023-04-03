import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material';
import Copyright from '../components/Copyright';
import TeamMemberInfo from '../components/TeamMemberInfo';


const AboutUs = () => {
    return (
        <>
            <Box style={{ height: '40vh', backgroundColor: '#284b63', color: 'white' }}>
                <Container>
                    <Typography component="h2" variant="h2" textAlign="center" paddingTop="36px" fontWeight='medium'>About Us</Typography>
                </Container>
            </Box>
            <div className='picture'></div>
            <Box style={{ color: 'black', marginTop: '172px' }}>
                <Container style={{ width: '80vw' }}>
                    <Typography variant='h4'>Blandit cursus risus at ultrices</Typography>
                    <Typography variant="body1" color='#353535' marginTop='14px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    <Typography variant="body1" color='#353535' marginTop='14px'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                </Container>
            </Box>
            <Box style={{ marginTop: '60px', marginBottom: '30px' }}>
                <Container style={{ width: '80vw' }}>
                    <Typography variant='h4' textAlign='center' marginY='15px' color='#284b63'>Team Information</Typography>
                    <Grid container spacing={4}>
                        <TeamMemberInfo />
                    </Grid>
                </Container>
            </Box >

            <Copyright />
        </>
    )
}

export default AboutUs