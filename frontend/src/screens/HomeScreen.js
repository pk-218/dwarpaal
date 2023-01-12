import React from 'react'
import './HomeScreen.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <>
            <h1 className='py-3 typewriter'>Welcome to Dwarpaal</h1>

            <div className='btn-main-container'>
                <div className='btn-container'>
                    <Link to='/login/student' className='btn btn-primary btn-lg'>Login for Students</Link>
                </div>
                <div className='btn-container'>
                    <Link to='/login/staff' className='btn btn-primary btn-lg'>Login for Staff</Link>
                </div>
                <div className='btn-container'>
                    <Link to='/request-form' className='btn btn-primary btn-lg'>Request Form</Link>
                </div>
            </div>
        </>
    )
}

export default HomeScreen