import React from 'react';
import '../style/meme.css';
import memesData from '../memeData'

function randomNumber(length) {
    return Math.floor((Math.random() * length) + 1);
}

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });
    const memes = memesData.data.memes;
    const [allMemeImages] = React.useState(memes);
    const [formData, setFormData] = React.useState({ topText: "", bottomText: ""});
    console.log("meme formData", formData)
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }));
    }
    function handleSubmit(e) {
        console.log(e);
        const randomIndex = randomNumber(allMemeImages.length);
        const pickedUrl = memes[randomIndex].url;
        console.log(randomIndex, pickedUrl)
        setMeme({
            randomImage: pickedUrl,
            topText: formData.topText,
            bottomText: formData.bottomText
        });
        e.preventDefault();
    }

    return <main>
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Shut up" className="form--input" onChange={handleChange} name="topText" value={formData.firstName} />
            <input type="text" placeholder="and take my money" className="form--input" onChange={handleChange} name="bottomText" value={formData.lastName} />
            <button type="submit" className="form--button">Get a new meme image  🖼</button>
        </form>
        <div className="meme">
            <img src={meme.randomImage} alt="meme-img" className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
        
    </main>
}