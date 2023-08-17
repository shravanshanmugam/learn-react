import React from "react"
import { Link } from "react-router-dom"
import logo from "../images/react-logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <Link to="/">
                    <img src={logo} id="nav-logo" className="App-logo" alt="logo" />
                </Link>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>
                        {/* <a href="/about">About</a> */}
                        <Link to="/about">About</Link>
                    </li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}