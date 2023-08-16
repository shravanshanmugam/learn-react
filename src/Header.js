import React from "react"

export default function Header() {
    const header = (
        <header>
            <nav className="nav">
                <img src="./react-logo.png" id="nav-logo"></img>
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