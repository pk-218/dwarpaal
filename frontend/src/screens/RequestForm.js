import React, { Component } from 'react'
import Confirmation from '../components/Confirmation';
import RequestFormA from '../components/RequestFormA';
import RequestFormB from '../components/RequestFormB';
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
        reqOS: '',
        OSVersion: '',
        DGXDrivers: '',
        reqContainers: '',
        ContainerVersions: ''
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

        const { step } = this.state
        const { fullName, yearOfStudy, profInCharge, projectTitle, domain, reqGPU, reqGPUMem, reqCPU, reqCudaCores, reqTensorCores, reqOS, OSVersion, DGXDrivers, reqContainers, ContainerVersions } = this.state

        const values = { fullName, yearOfStudy, profInCharge, projectTitle, domain, reqGPU, reqGPUMem, reqCPU, reqCudaCores, reqTensorCores, reqOS, OSVersion, DGXDrivers, reqContainers, ContainerVersions }

        switch (step) {
            case 1:
                return (<RequestFormA
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 2:
                return (<RequestFormB
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 3:
                return (<Confirmation
                    prevStep={this.prevStep}
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />)
            case 4:
                return (<Success />)
            default:
                break;
        }
    }
}
