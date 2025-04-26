import React from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='navbar-container'>
                <div className="nav-left">
                    <img src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png" alt="logo" className='logo' />
                </div>
                <div className="nav-right">
                    <NavLink to="/signup" className='btn signup-btn'>Sign Up</NavLink>
                    <NavLink to="/login" className='btn login-btn'>Log In</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar