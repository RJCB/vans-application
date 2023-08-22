import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const HostLayout = () => {
    return (
        <>
            <nav className="host-nav nav-links">
                <NavLink to="/host" end>Dashboard</NavLink>
                <NavLink to="income">Income</NavLink>
                <NavLink to="reviews">Reviews</NavLink>
                <NavLink to="vans">Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout