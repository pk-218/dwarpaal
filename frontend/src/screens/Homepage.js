import React from 'react'
import Header from '../components/Header'
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import { Container } from 'react-bootstrap';
import Copyright from '../components/Copyright';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

const FormButtonContained = styled(Button)(() => ({
    backgroundColor: '#284b63',
    '&:hover': {
        backgroundColor: '#192f3e',
    },
}));

const Homepage = () => {
    const hasSubmitted = JSON.parse(localStorage.getItem('hasSubmitted'))

    return (
        <>
            <Header />

            {hasSubmitted ?
                <Container style={{ marginTop: '15px' }}>
                    <Card sx={{ minWidth: 275 }} elevation={3}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="#2e7d32" gutterBottom>
                                Access granted
                            </Typography>
                            <Typography variant="h5">
                                {`You requested access for the DGX server on {date}`}
                            </Typography>
                            <Typography sx={{ fontSize: 16, margin: '8px 0' }} color="text.secondary">
                                {`Project name:`}
                            </Typography>
                            <Typography sx={{ fontSize: 16, margin: '8px 0' }} color="text.secondary">
                                {`Working under:`}
                            </Typography>
                            <Typography sx={{ fontSize: 16, margin: '8px 0' }} color="text.secondary">
                                {`Period:`}
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
                :
                <Container style={{ marginTop: '15px' }}>
                    <Card sx={{ minWidth: 275 }} elevation={3}>
                        <CardContent>
                            <Typography variant="h5" color="text.secondary" textAlign="center" margin="8px 0">
                                No requests to show
                            </Typography>
                            <Typography sx={{ fontSize: 18, marginTop: 4 }} textAlign="center">
                                Start reaping the benefits of our high-performance DGX engine by connecting to the server. Request access now!
                            </Typography>
                        </CardContent>

                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Link to='/request-form'>
                                <FormButtonContained variant='contained' sx={{ my: 3 }}>Request Access</FormButtonContained>
                            </Link>
                        </Box>
                    </Card>
                </Container>
            }
            <Copyright />
        </>
    )
}

export default Homepage