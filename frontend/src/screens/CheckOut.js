import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { alpha, styled } from '@mui/material/styles';
import PersonalDetail from "../components/Student/RequestForm/PersonalDetail";
import PaymentForm from "../components/Student/RequestForm/SystemRequirement";
import Review from "../components/Student/RequestForm/Review";
import { useState } from "react";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Dwarpal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = ["Project Details", "System Requirements", "Form Confirmation"];

const FormButtonContained = styled(Button)(() => ({
  backgroundColor: '#284b63',
  '&:hover': {
    backgroundColor: '#192f3e',
  },
}));

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    yearOfStudy: "",
    profInCharge: "",
    fromDate: "",
    toDate: "",
    projectTitle: "",
    domain: "",
    reqGPU: "",
    reqGPUMem: "",
    reqCPU: "",
    reqCudaCores: "",
    reqTensorCores: "",
    reqSysMem: "",
    reqOS: "",
    OSVersion: "",
    DGXDrivers: "",
    reqContainers: "",
    containerVersions: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false)

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonalDetail formData={formData} setFormData={setFormData} />;
      case 1:
        return <PaymentForm formData={formData} setFormData={setFormData} />;
      case 2:
        return <Review formData={formData} setFormData={setFormData} />;
      default:
        throw new Error("Unknown step");
    }
  }

  // const formSubmission = () => {
  //   setFormSubmitted(true)
  //   return (
  //     <React.Fragment>
  //       <Typography variant="h5" gutterBottom>
  //         Your access form has been submitted.
  //       </Typography>
  //       <Typography variant="subtitle1">
  //         You will receive your credentials within 3-5 working days. Do check the notifications for an early announcement.
  //       </Typography>
  //     </React.Fragment>
  //   )
  // }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep == steps.length -1) {
      console.log("form submitted successfully ! ");
      // axios.interceptors.request.use(config=>{
      //   const clientId = localStorage.getItem('clientId');
      //   console.log("Locala client",clientId);
      //   config.headers['client-id'] = clientId;
      //   return config;
      // })
      axios.post("http://localhost:8000/request-form/",formData );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            DGX Application
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#284b63', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'common.white', // Just text label (COMPLETED)
                  },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: '#8c8c8c', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'common.white', // Just text label (ACTIVE)
                  },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'white', // circle's number (ACTIVE)
                  },
                  '& .MuiStepLabel-labelContainer span': {
                    fontSize: 'large',
                  }
                }}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                You have successfully submitted the Form.
              </Typography>
              <Typography variant="subtitle1">
                We will send you an email if your request has any update.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1, color: '#284b63' }}>
                    Back
                  </Button>
                )}

                <FormButtonContained
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Submit Form" : "Next"}
                </FormButtonContained>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ >
  );
}
