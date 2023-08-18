import React from 'react'
import Image from '../images/troll-face.png'
import '../style/header.css'

export default function Header() {
    return <header className="header">
        <img src={Image} alt="take-my-money" className="header--image"/>
        <h2 className="header--title">Meme generator</h2>
        <a href="#boxes"><h4 className="header--text">Boxes</h4></a>
        <a href="#forms"><h4 className="header--text">Forms</h4></a>
        <a href="#star-wars"><h4 className="header--text">Star Wars</h4></a>
        <a href="#window-tracker"><h4 className="header--text">Window width</h4></a>
        <h4 className="header--project">React Course - Project 3</h4>
    </header>
}