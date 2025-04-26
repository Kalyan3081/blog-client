import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './feature/Home'
import Login from './feature/auth/Login'
import Signup from './feature/auth/Signup'
import Navbar from './nav/Navbar'

// this route will be visible only to the user who is logged in
const PrivateRoutes = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

const App = () => {
    const loggedIn = false;
    if (loggedIn) {
        return <PrivateRoutes />;
    }
    return (
        <>
            {/* login and signup page will be visible to the user who is not logged in */}
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>

    )
}

export default App
