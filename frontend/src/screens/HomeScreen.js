import React from 'react'
import './HomeScreen.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <>
            <h1 className='py-3'>Welcome to Dwarpaal</h1>

            <div className='btn-main-container'>
                <div className='btn-container'>
                    <Link to='/login/student' className='btn btn-lg btn-custom'>Login for Students</Link>
                </div>
                <div className='btn-container'>
                    <Link to='/login/staff' className='btn btn-lg btn-custom'>Login for Staff</Link>
                </div>
                <div className='btn-container'>
                    <Link to='/request-form' className='btn btn-lg btn-custom'>Request Form</Link>
                </div>
            </div>
        </>
    )
}

export default HomeScreen