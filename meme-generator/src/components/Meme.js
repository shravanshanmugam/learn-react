import React from 'react';
import '../style/meme.css';
import memesData from '../memeData'

function randomNumber(length) {
    return Math.floor((Math.random() * length) + 1);
}

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });
    const memes = memesData.data.memes;
    const [allMemeImages] = React.useState(memes);
    function generateNewMeme(e) {
        console.log(e);
        const randomIndex = randomNumber(allMemeImages.length);
        const pickedUrl = memes[randomIndex].url;
        console.log(randomIndex, pickedUrl)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: pickedUrl
        }));
        e.preventDefault();
    }
    const [formData, setFormData] = React.useState({topText: "", bottomText: ""});
    function handleChange(e) {
        setFormData(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value   
            }

        });
    }

    return <main>
        <form className="form">
            <input type="text" placeholder="Shut up" className="form--input" onChange={handleChange} name="topText" value={formData.firstName}></input>
            <input type="text" placeholder="and take my money" className="form--input" onChange={handleChange} name="bottomText" value={formData.lastName}></input>
            <button type="submit" className="form--button" onClick={generateNewMeme}>Get a new meme image  🖼</button>
        </form>
        <section>
            <p>{formData.topText}</p>
            <img src={meme.randomImage} alt="meme-img" className="meme--image" />
            <p>{formData.bottomText}</p>
        </section>
    </main>
}