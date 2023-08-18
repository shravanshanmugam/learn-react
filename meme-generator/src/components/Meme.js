import React from 'react';
import '../style/meme.css';
import memesData from '../memeData'

function randomNumber(length) {
    return Math.floor((Math.random() * length) + 1);
}

export default function Meme() {
    console.log("Render Meme component")
    const [meme, setMeme] = React.useState({
        topText: "One does not simply",
        bottomText: "walk into Mordor",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    });
    const memes = memesData.data.memes;
    // const [allMemes] = React.useState(memes);
    const [allMemes, setAllMemes] = React.useState([]);
    React.useEffect(() => {
        console.log("Meme effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    const [formData, setFormData] = React.useState({ topText: "", bottomText: ""});
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }));
    }
    function handleSubmit(e) {
        const randomIndex = randomNumber(allMemes.length);
        const pickedUrl = memes[randomIndex].url;
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
        {meme.randomImage && 
            <div className="meme">
                <img src={meme.randomImage} alt="meme-img" className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>}
        
    </main>
}