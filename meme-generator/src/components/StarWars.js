import React from 'react'
import '../style/starWars.css'

export default function StarWars() {
    const [starWarsData, setStarWarsData] = React.useState({});
    const [count, setCount] = React.useState(0);
    console.log('Render Star Wars')
    React.useEffect(function() {
        console.log('Fetch Star Wars data')
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    return <section className="star-wars" id="star-wars">
        {/* <div hide>
            {JSON.stringify(starWarsData, null, 2)}
        </div> */}
        <div className="crawl">

            <div className="title">
                <p>Episode IV</p>
                <h1>A New Hope</h1>
            </div>

            {/* <p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p> */}
            {/* <p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p> */}
            {/* <p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…</p> */}
            <p key="name">Name: {starWarsData["name"]}</p>
            <p key="height">Height: {starWarsData["height"]}</p>
            <p key="mass">Mass: {starWarsData["mass"]}</p>
            <p key="hair_color">Hair color: {starWarsData["hair_color"]}</p>
            <p key="eye_color">Eye color: {starWarsData["eye_color"]}</p>
            <p key="birth_year">Birth year: {starWarsData["birth_year"]}</p>
            <p key="gender">Gender: {starWarsData["gender"]}</p>
        </div>

    </section>

}