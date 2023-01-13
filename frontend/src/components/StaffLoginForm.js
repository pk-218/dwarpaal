import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const StudentLoginForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        passowrd: ''
    })

    const handleSubmit = () => {
        console.log(userData)
    }

    return (
        <>
            <div className='container'>
                <div className='login-container'>
                    <div className='form-container'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>VJTI Email Id</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="VJTI Email Id"
                                    value={userData.email}
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                                    required />
                                {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={userData.passowrd}
                                    onChange={(e) => setUserData({ ...userData, passowrd: e.target.value })}
                                    required />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleSubmit} className='form-button'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentLoginForm