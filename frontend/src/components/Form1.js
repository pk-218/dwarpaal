import React from 'react'
import { Col, Row, Form, Button, Container } from 'react-bootstrap'
import './Forms.css'
import MySteps from './MySteps'

const Form1 = ({ nextStep, handleChange, values }) => {
    const handleOnClick = e => {
        e.preventDefault()
        nextStep()
    }

    console.log(values)

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
                                <Form.Group className="mb-3" controlId="formFullName">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your full name"
                                        name='fullName'
                                    // value={values.fullName}
                                    // onChange={handleChange('fullName')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formYearState">
                                    <Form.Label>Year of Study</Form.Label>
                                    <Form.Select
                                        // as='select'
                                        defaultValue="Choose..."
                                    // value={values.yearOfStudy}
                                    // onChange={handleChange('yearOfStudy')}
                                    >
                                        <option>Choose...</option>
                                        <option value="1">B.Tech First Year</option>
                                        <option value="2">B.Tech Second Year</option>
                                        <option value="3">B.Tech Third Year</option>
                                        <option value="4">B.Tech Fourth Year</option>
                                        <option value="1m">M.Tech First Year</option>
                                        <option value="2m">M.Tech Second Year</option>
                                        <option value="m">MCA</option>
                                        <option value="p">PhD</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formProf">
                                    <Form.Label>Prof. in Charge</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name of Prof. in charge"
                                        name='profInCharge'
                                    // value={values.profInCharge}
                                    // onChange={handleChange('profInCharge')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formPeriod">
                                    <Form.Label>Period of Use</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name='period'
                                        placeholder="Enter the time period for which you require access"
                                    // value={values.period}
                                    // onChange={handleChange('period')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formProjectTitle">
                                    <Form.Label>Project Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your project title"
                                        name='projectTitle'
                                    // value={values.projectTitle}
                                    // onChange={handleChange('projectTitle')}
                                    />
                                </Form.Group>
                            </Col>
                            <Col className='sm-12 md-6'>
                                <Form.Group className="mb-3" controlId="formProjectDomain">
                                    <Form.Label>Project Domain</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your project domain"
                                        name='domain'
                                    // value={values.domain}
                                    // onChange={handleChange('domain')}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className='py-3'>
                            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Button
                                    className='form-button'
                                    onClick={handleOnClick}
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

export default Form1