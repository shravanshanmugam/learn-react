import React from 'react';
import '../style/meme.css';

export default function Meme() {
    return <main>
        <form class="form">
            <input type="text" placeholder="Shut up" className="form--input"></input>
            <input type="text" placeholder="and take my money" className="form--input"></input>
            <button type="submit" className="form--button">Get a new meme image  🖼</button>
        </form>
    </main>
}