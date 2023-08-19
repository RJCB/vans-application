import React from 'react'
import { Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const HostLayout = () => {
    return (
        <>
            <nav className="host-nav nav-links">
                <NavLink to="/host" end>Dashboard</NavLink>
                <NavLink to="/host/income">Income</NavLink>
                <NavLink to="/host/reviews">Reviews</NavLink>
                <NavLink to="/host/vans">Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}

export default HostLayout