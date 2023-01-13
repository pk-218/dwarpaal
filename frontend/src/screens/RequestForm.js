import React, { Component } from 'react'
import Confirmation from '../components/Confirmation';
import Form1 from '../components/Form1';
import Form2 from '../components/Form2';
import Form3 from '../components/Form3';
import Success from '../components/Success';

export default class RequestForm extends Component {
    state = {
        step: 1,
        fullName: '',
        yearOfStudy: '',
        profInCharge: '',
        period: '',
        projectTitle: '',
        domain: '',
        reqGPU: '',
        reqGPUMem: '',
        reqCPU: '',
        reqCudaCores: '',
        reqTensorCores: '',
        reqSysMem: '',
        reqOS: '',
        OSVersion: '',
        DGXDrivers: '',
        reqContainers: '',
        containerVersions: ''
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {

        // const { step } = this.state
        const { step, fullName, yearOfStudy, profInCharge, projectTitle, domain, reqGPU, reqGPUMem, reqCPU, reqCudaCores, reqTensorCores, reqSysMem, reqOS, OSVersion, DGXDrivers, reqContainers, containerVersions } = this.state

        const values = { step, fullName, yearOfStudy, profInCharge, projectTitle, domain, reqGPU, reqGPUMem, reqCPU, reqCudaCores, reqTensorCores, reqSysMem, reqOS, OSVersion, DGXDrivers, reqContainers, containerVersions }

        switch (step) {
            case 1:
                return (<Form1
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 2:
                return (<Form2
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 3:
                return (<Form3
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 4:
                return (<Confirmation
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 5:
                return (<Success />)
            default:
                break;
        }
    }
}
