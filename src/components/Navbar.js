import React from 'react';
import logog from '../images/logog.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    // const handleClick = () => {

    // }
    return (
        <header>
            <div className="nav-logo">
                <Link to="/">
                    <img src={logog} />
                </Link>
            </div>
            <nav className="navbar">
                <div className="nav-links">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/vans">Vans</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar