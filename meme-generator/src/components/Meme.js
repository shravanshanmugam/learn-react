import React from 'react';
import '../style/meme.css';
import memesData from '../data'

function randomNumber(length) {
    return Math.floor((Math.random() * length) + 1);
}

export default function Meme() {
    const [meme, setMeme] = React.useState({});
    function generateNewMeme(e) {
        const memes = memesData.data.memes;
        const randomIndex = randomNumber(memes.length);
        const picked = memes[randomIndex];
        console.log(randomIndex, picked)
        setMeme(picked);
        e.preventDefault();
    }

    return <main>
        <form className="form">
            <input type="text" placeholder="Shut up" className="form--input"></input>
            <input type="text" placeholder="and take my money" className="form--input"></input>
            <button type="submit" className="form--button" onClick={generateNewMeme}>Get a new meme image  🖼</button>
        </form>
        <section>
            {meme.url && <img src={meme.url} alt="meme-img" className="meme--image" />}
        </section>
    </main>
}