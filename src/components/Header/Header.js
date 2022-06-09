import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import './Header.css'
const Header = () => {
    const activeStyle={
        fontWeight:'bold',
        color:'red',
        textDecoration: "none",
    }
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-light shadow p-3 mb-3 bg-body rounded sticky-top">
        <div className="container-fluid">
            
        <NavLink  className='text' to='/' style={
                ({ isActive }) =>isActive ? activeStyle : undefined
                }> <img className='w-50 ' src={logo} alt="" /> </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto me-5 px-5 mb-lg-0">
                <li className="nav-item px-3">
                <NavLink className='text' to='/home' style={
                ({ isActive }) =>isActive ? activeStyle : undefined
                } >Home</NavLink>
                </li>
                <li className="nav-item px-2">
                <NavLink  className='text' to='/service' style={
                ({ isActive }) =>isActive ? activeStyle : undefined
                }>Service</NavLink>
                </li>
                <li className="nav-item px-2">
                <NavLink  className='text'  to='/features' style={
                ({ isActive }) =>isActive ? activeStyle : undefined
                }>organization</NavLink>
                </li>

                <li className="nav-item px-2">
                <NavLink  className='text' to='/about' style={
                ({ isActive }) =>isActive ? activeStyle : undefined
                }>About</NavLink>
                </li>
                
            </ul>
            </div>
        </div>
        </nav>
        </div>
    );
};

export default Header;