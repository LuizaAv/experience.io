import React from 'react'
import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'
import './header.css'
import {
    NavLink
  } from "react-router-dom";
  

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Logo />
            <NavLink to="/">       
                <span>DevCamper</span>
            </NavLink>
            </div>
            <Navbar/>
        </header>
    )
}

export default Header
