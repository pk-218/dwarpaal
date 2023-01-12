import React from 'react'
import { Form, Button } from 'react-bootstrap'

const RequestFormA = ({ nextStep, handleChange, values }) => {
    const handleOnClick = e => {
        e.preventDefault()
        nextStep()
    }

    return (
        <>
            <div className='py-3'>
                <h3>Request Access</h3>
            </div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your full name"
                        name='fullName'
                        value={values.fullName}
                        onChange={handleChange('fullName')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Year of Study</Form.Label>
                    <Form.Control type="text" placeholder="Enter year of study" name='yearOfStudy' />
                    {/* the boave field needs to be a dropdown */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prof. in Charge</Form.Label>
                    <Form.Control type="text" placeholder="Enter name of prof.in charge" name='profInCharge' />
                </Form.Group>

                {/* the below field needs to be a pop-up calendar with a from and to field */}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Period of Use</Form.Label>
                    <Form.Control type="date" name='period' />
                </Form.Group>

                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="primary" style={{ width: '100px' }} onClick={handleOnClick}>
                        Next
                    </Button>
                </div>
            </Form>
        </>
    )
}

export default RequestFormA