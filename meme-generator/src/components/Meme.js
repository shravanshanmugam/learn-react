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
    const [formData, setFormData] = React.useState({topText: "", bottomText: "", comments: "", isFriendly: false, employment: "", favoriteColor: ""});
    console.log("formData", formData)
    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        });
    }

    return <main>
        <form className="form">
            <input type="text" placeholder="Shut up" className="form--input" onChange={handleChange} name="topText" value={formData.firstName}/>
            <input type="text" placeholder="and take my money" className="form--input" onChange={handleChange} name="bottomText" value={formData.lastName}/>
            <textarea placeholder="How are you feeling today?" className="form--input" onChange={handleChange} name="comments" value={formData.comments}/>
            <label htmlFor="isFriendly" id="isFriendly-label">
                <input type="checkbox" id="isFriendly" className="form--input" onChange={handleChange} name="isFriendly" value={formData.isFriendly}/>
                Are you friendly?
            </label>
            <fieldset className="form--input">
                <legend>Current employment status</legend>
                <label htmlFor="unemployed">
                    <input type="radio" id="unemployed" name="employment" value="unemployed" checked={formData.employment === "unemployed"} onChange={handleChange}/>
                    Unemployed
                </label>    
                <label htmlFor="part-time">
                    <input type="radio" id="part-time" name="employment" value="part-time" checked={formData.employment === "part-time"} onChange={handleChange}/>
                    Part time
                </label>
                <label htmlFor="full-time">
                    <input type="radio" id="full-time" name="employment" value="full-time" checked={formData.employment === "full-time"} onChange={handleChange}/>
                    Full time
                </label>
            </fieldset>    
            <label htmlFor="favorite-color" id="favorite-color-label">What is your favorite color?
                <select id="favorite-color" className="form--input" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
            <button type="submit" className="form--button" onClick={generateNewMeme}>Get a new meme image  🖼</button>
        </form>
        <section>
            <p>{formData.topText}</p>
            <img src={meme.randomImage} alt="meme-img" className="meme--image" />
            <p>{formData.bottomText}</p>
        </section>
    </main>
}