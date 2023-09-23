import React from 'react';
import { Link } from 'react-router-dom';


import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/places">Places</Link>
            <Link className="nav-link" to="/About">About</Link>
            <Link className="nav-link" to="/Contact">Contact</Link>
            <Link className="nav-link" to="/Details">Details</Link>
            <Link className="nav-link" to="/BookNow">BookNow</Link>
           

            <div className="nav-right">
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;