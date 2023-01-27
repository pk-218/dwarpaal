import * as React from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import Copyright from './Copyright'


const CustomFormTextfield = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: "#284b63",
            borderWidth: "2px",
        },
    },
})

const FormButtonContained = styled(Button)(() => ({
    backgroundColor: '#284b63',
    '&:hover': {
        backgroundColor: '#192f3e',
    },
    padding: '8px',
}))

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm"
                sx={{
                    marginTop: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Paper
                    variant="outlined"
                    sx={{ p: { xs: 2, md: 3 } }}
                >

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#284b63' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <CustomFormTextfield
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                placeholder="jwdoe_b23@it.vjti.ac.in"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                InputLabelProps={{
                                    style: { color: '#284b63' },
                                }}
                            />
                            <CustomFormTextfield
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                placeholder="********"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                InputLabelProps={{
                                    style: { color: '#284b63' },
                                }}
                            />

                            <FormButtonContained
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </FormButtonContained>

                            {/* The following consists the Forgot password link */}
                            {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        </Box>
                    </Box>
                </Paper>
            </Container >
            <Copyright />
        </>
    );
}