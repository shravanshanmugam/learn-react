import React from "react"

function H1({ text }) {
    return <h1 color="red" style={{ color: "blue" }}>{text}</h1>
}

export default function Body() {
    const main = (
        <div>
            <H1 text="Fun Facts about React"></H1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <H1 text="Reasons I like React"></H1>
            <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
            </ol>
        </div>
    )
    return main;
}