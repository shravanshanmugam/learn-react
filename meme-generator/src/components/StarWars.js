import React from 'react'
import '../style/starWars.css'

export default function StarWars() {
    const [starWarsData, setStarWarsData] = React.useState([]);
    const [count, setCount] = React.useState(1);
    console.log('Render Star Wars')
    React.useEffect(function() {
        console.log('Fetch Star Wars data')
        fetch("https://swapi.dev/api/people/" + count)
            .then(res => res.json())
            .then(data => setStarWarsData(prevState => {
                return [...prevState, data];
            }))
    }, [count])

    function handleChange(e) {
        setCount(prevCount => prevCount + 1);
    }

    return <section className="star-wars" id="star-wars" onClick={handleChange}>
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
            {starWarsData.map(person => {
                return <div key={person["name"]}><p key="name">Name: {person["name"]}</p>
                <p key="height">Height: {person["height"]}</p>
                <p key="mass">Mass: {person["mass"]}</p>
                <p key="hair_color">Hair color: {person["hair_color"]}</p>
                <p key="eye_color">Eye color: {person["eye_color"]}</p>
                <p key="birth_year">Birth year: {person["birth_year"]}</p>
                <p key="gender">Gender: {person["gender"]}</p></div>
            })}
        </div>

    </section>

}