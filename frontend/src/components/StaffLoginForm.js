import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
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
                <Copyright />
            </Container>
        </>
    );
}