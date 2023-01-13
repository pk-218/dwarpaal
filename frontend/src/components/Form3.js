import React from 'react'
import { Col, Row, Form, Button, Container } from 'react-bootstrap'
import './Forms.css'
import MySteps from './MySteps'

const Form3 = ({ prevStep, nextStep, handleChange, values }) => {
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
                                <Form.Group className="mb-3" controlId="formReqOS">
                                    <Form.Label>OS required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter OS required"
                                        name='reqOS'
                                    // value={values.reqOS}
                                    // onChange={handleChange('reqOS')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formReqOSVer">
                                    <Form.Label>Version of OS required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Version of OS required"
                                        name='OSVersion'
                                    // value={values.OSVersion}
                                    // onChange={handleChange('OSVersion')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formDGXDriver">
                                    <Form.Label>DGX drivers required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter DGX drivers required"
                                        name='DGXDrivers'
                                    // value={values.DGXDrivers}
                                    // onChange={handleChange('DGXDrivers')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formContain">
                                    <Form.Label>Containers required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Containers required"
                                        name='reqContainers'
                                    // value={values.reqContainers}
                                    // onChange={handleChange('reqContainers')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formContainVer">
                                    <Form.Label>Version of containers required</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Version of containers required"
                                        name='containerVersions'
                                    // value={values.containerVersions}
                                    // onChange={handleChange('containerVersions')}
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

export default Form3