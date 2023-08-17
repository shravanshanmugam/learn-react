import React from 'react'
import Image from '../images/troll-face.png'
import '../style/header.css'

export default function Header() {
    return <header className="header">
        <img src={Image} alt="take-my-money" className="header--image"/>
        <h2 className="header--title">Meme generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
    </header>
}