import React from "react"
import logo from "./react-logo.png"

export default function Header() {
    const header = (
        <header>
            <nav className="nav">
                <img src={logo} id="nav-logo" className="App-logo" alt="logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
    return header;
}