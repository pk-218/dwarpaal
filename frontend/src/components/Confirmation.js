import React from 'react'
import { Button } from 'react-bootstrap'

const Confirmation = ({ prevStep, nextStep, handleChange, values }) => {
    const handlePrevClick = e => {
        e.preventDefault()
        prevStep()
    }

    const handleNextClick = e => {
        e.preventDefault()
        nextStep()
    }

    return (
        <div className='py-3'>
            <h2>Confirmation</h2>

            <div style={{ display: 'flex', justifyContent: 'space-around' }} className='py-3'>
                <Button variant="primary" onClick={handlePrevClick} style={{ width: '100px' }}>
                    Previous
                </Button>
                <Button variant="primary" onClick={handleNextClick} style={{ width: '100px' }}>
                    Next
                </Button>
            </div>
        </div>
    )
}

export default Confirmation