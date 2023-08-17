import React from "react";
import '../style/header.css'
import worldIcon from '../images/world-icon.svg'

export default function Header() {
    return <header className="header">
        <div className="header-content">
            <div className="header-icon">
                <img src={worldIcon} alt="world-icon" />
            </div>
            <div className="header-text">
                my travel journal.
            </div>
        </div>


    </header>
}