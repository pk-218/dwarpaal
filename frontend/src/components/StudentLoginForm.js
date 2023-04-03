import React, { useState } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { styled } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import Copyright from './Copyright'
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

const StudentLoginForm = () => {
    const [userData, setUserData] = useState({
        id: "",
        email: "",
    });
    const [isFormClicked, setIsFormClicked] = useState(false);
    const [otp, setOtp] = useState("");
    const [totp, setTotp] = useState("");
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [qrPath, setQrPath] = useState("");
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log("errors" + errors);

    const onSubmit = () => {
        console.log(userData);
        axios.post("/auth/sendcode/", userData);
        setIsFormClicked(true);
    };

    const onOtpSubmit = () => {
        console.log(otp);
        axios.post("/auth/verifycode/", {
            email: userData.email,
            code: otp,
        });
        setIsOtpVerified(true);
        axios
            .post("/auth/generateTOTPKey", {
                email: userData.email,
                id: userData.id,
            })
            .then((res) => {
                console.log(res);
                setQrPath(res.data.qrcode);
            });
    };

    const onTotpSubmit = () => {
        console.log("totp" + totp);
        axios
            .post("/auth/validateCode/", {
                email: userData.email,
                id: userData.id,
                code: totp,
            })
            .then((res) => {
                console.log("clientId", res.data.clientId);
                localStorage.setItem("clientId", res.data.clientId);
                localStorage.setItem("hasLoggedInAsStudent", "true");
                localStorage.setItem("hasSubmitted", "false");
            });
        navigate("/home");
        //   .then((res) => res.json())
        //   .then((res) => {
        //     if (res.isLoggedIn == true) {
        //       redirect("/request-form");
        //     }
        //   });
        console.log("redirect called?");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
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

                        <Box
                            component="form"
                            onSubmit={handleFormSubmit}
                            noValidate
                            sx={{ mt: 1 }}
                        >
                            <CustomFormTextfield
                                margin="normal"
                                required
                                fullWidth
                                id="regId"
                                name="regId"
                                label="Registration ID"
                                placeholder="123456789"
                                autoComplete="regId"
                                InputLabelProps={{
                                    style: { color: '#284b63' },
                                }}
                                {...register("regId", {
                                    required: "This is required.",
                                    minLength: {
                                        value: 9,
                                        message: "The registration id should be 9 digits.",
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: "The registration id should be 9 digits.",
                                    },
                                    pattern: /^[0-9]{1,9}$/,
                                })}
                                value={userData.id}
                                onChange={(e) =>
                                    setUserData({ ...userData, id: e.target.value })
                                }
                            />

                            <CustomFormTextfield
                                margin="normal"
                                required
                                fullWidth
                                id="vjti-mail"
                                name="vjti-mail"
                                label="VJTI Email Address"
                                placeholder="jwdoe_b23@it.vjti.ac.in"
                                type="email"
                                autoComplete="vjti-mail"
                                InputLabelProps={{
                                    style: { color: '#284b63' },
                                }}
                                {...register("vjti-mail", {
                                    required: "This is required.",
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._]+_[a-z][0-9]+@[a-z]{2,4}\.vjti\.ac\.in$/,
                                        message: "Please enter a valid VJTI email address!",
                                    },
                                })}
                                value={userData.email}
                                onChange={(e) =>
                                    setUserData({ ...userData, email: e.target.value })
                                }
                            />

                            {!isFormClicked && (
                                <FormButtonContained
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSubmit(onSubmit)}
                                >
                                    Submit
                                </FormButtonContained>
                            )}

                            {isFormClicked && (
                                <>
                                    <CustomFormTextfield
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="otp"
                                        name="otp"
                                        label="OTP"
                                        placeholder="123456"
                                        type="number"
                                        autoComplete="otp"
                                        InputLabelProps={{
                                            style: { color: '#284b63' },
                                        }}
                                        {...register("otp", {
                                            required: "This is required.",
                                            pattern: {
                                                value: /^[0-9]{1,6}$/,
                                                message:
                                                    "Please enter the 6-digit OTP sent to your VJTI email address",
                                            },
                                        })}
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                    />

                                    {!isOtpVerified && (
                                        <FormButtonContained
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={handleSubmit(onOtpSubmit)}
                                        >
                                            Verify OTP
                                        </FormButtonContained>
                                    )}
                                </>
                            )}

                            {isOtpVerified && (
                                <>
                                    <Container
                                        style={{ width: '260px', height: '260px' }}
                                        dangerouslySetInnerHTML={{ __html: qrPath }}
                                    ></Container>
                                    <CustomFormTextfield
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="totp"
                                        name="totp"
                                        label="TOTP"
                                        placeholder="123456"
                                        type="number"
                                        autoComplete="totp"
                                        InputLabelProps={{
                                            style: { color: '#284b63' },
                                        }}
                                        style={{ marginTop: '-35px' }}
                                        {...register("totp", {
                                            required: "This is required.",
                                            pattern: {
                                                value: /^[0-9]{1,6}$/,
                                                message:
                                                    "Please enter the 6-digit timed OTP which appears after scanning the QR code on your authenticator app",
                                            },
                                        })}
                                        value={totp}
                                        onChange={(e) => setTotp(e.target.value)}
                                    />
                                    <FormButtonContained
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={handleSubmit(onTotpSubmit)}
                                    >
                                        Complete 2FA
                                    </FormButtonContained>
                                </>
                            )}
                        </Box>
                    </Box>
                </Paper>
            </Container>
            <Copyright />
        </>
    )
}

export default StudentLoginForm