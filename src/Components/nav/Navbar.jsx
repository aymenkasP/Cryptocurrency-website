import React from 'react'
import Logo from './Logo'
import "./Nav.css"

import hamburger from './menu.png'


export default function NavBar() {
    return (
        <>
            <nav className="nav">
                <div className="nav-logo" >
                    <Logo />
                </div>
            <div className="nav-" >
                <div className="nav-links">
                    <ul>
                        <li>Products</li>
                        <li>Features</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="nav-btn" >
                    <button className="nav-btn-login" >
                         Login
                    </button>
                    <hr/>
                    <button className="nav-btn-Register" >
                       Register
                    </button>
                </div>
            </div>

            <div className="nav-hamburger" >
                <img src={hamburger} className="" />

            </div>

            </nav>
        </>
    )
}
