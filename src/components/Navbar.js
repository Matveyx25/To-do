import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = props => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="container">
            <div className="navbar-brand">
                TO-DO
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
            </ul>
        </div>
    </nav>
)