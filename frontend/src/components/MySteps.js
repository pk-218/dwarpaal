import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = [
    {
        label: 'Personal Details',
    },
    {
        label: 'Project Details',
    },
    {
        label: 'System Requirements',
    },
];

export default function MySteps({ step }) {

    return (
        <Box>
            <Stepper activeStep={step - 1} orientation="vertical" style={{ fontSize: '24px' }}>
                {steps.map((currStep, index) => (
                    <Step key={currStep.label}
                        sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                                color: 'success.light', // circle color (COMPLETED)
                            },
                            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                            {
                                color: 'grey.500', // Just text label (COMPLETED)
                            },
                            '& .MuiStepLabel-root .Mui-active': {
                                color: 'common.white', // circle color (ACTIVE)
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                            {
                                color: 'common.white', // Just text label (ACTIVE)
                            },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                                fill: 'black', // circle's number (ACTIVE)
                            },
                            '& .MuiStepLabel-labelContainer span': {
                                fontSize: 'large',
                            }
                        }}
                    >
                        <StepLabel
                            // classes={{ color: 'white' }}
                            optional={
                                index === 2 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }
                        >
                            {currStep.label}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </Box>
    );
}