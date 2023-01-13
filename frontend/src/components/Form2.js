import React from 'react'
import { Col, Row, Form, Button, Container } from 'react-bootstrap'
import './Forms.css'
import MySteps from './MySteps'

const Form2 = ({ prevStep, nextStep, handleChange, values }) => {
    const handlePrevClick = e => {
        e.preventDefault()
        prevStep()
    }

    const handleNextClick = e => {
        e.preventDefault()
        nextStep()
    }

    return (
        <>
            <Container className='main-container'>
                <div className='centered-div'>
                    <div style={{ float: 'left', width: '30%' }}>

                        <MySteps step={values.step} />
                    </div>
                    <div style={{ float: 'right', width: '70%' }}>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formReqGPU">
                                    <Form.Label>No. of GPUs required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter No. of GPUs required"
                                        name='reqGPU'
                                    // value={values.reqGPU}
                                    // onChange={handleChange('reqGPU')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formMemGPU">
                                    <Form.Label>GPU Memory Required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter GPU memory required"
                                        name='reqGPUMem'
                                    // value={values.reqGPUMem}
                                    // onChange={handleChange('reqGPUMem')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formReqCPU">
                                    <Form.Label>No. of CPUs required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter No. of CPUs required"
                                        name='reqCPU'
                                    // value={values.reqCPU}
                                    // onChange={handleChange('reqCPU')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formReqCC">
                                    <Form.Label>No. of Cuda Cores required</Form.Label>
                                    <Form.Control
                                        type="date"
                                        placeholder="Enter No. of Cuda Cores required"
                                        name='reqCudaCores'
                                    // value={values.reqCudaCores}
                                    // onChange={handleChange('reqCudaCores')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formTensorC">
                                    <Form.Label>No.of Tensor Cores required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter No.of Tensor Cores required"
                                        name='reqTensorCores'
                                    // value={values.reqTensorCores}
                                    // onChange={handleChange('reqTensorCores')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formSysMem">
                                    <Form.Label>System Memory Required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter System Memory Required"
                                        name='reqSysMem'
                                    // value={values.reqSysMem}
                                    // onChange={handleChange('reqSysMem')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='py-3'>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button
                                    className='form-button'
                                    onClick={handlePrevClick}
                                >
                                    Previous
                                </Button>
                                <Button
                                    className='form-button'
                                    onClick={handleNextClick}
                                >
                                    Next
                                </Button>
                            </div>
                        </Row>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default Form2