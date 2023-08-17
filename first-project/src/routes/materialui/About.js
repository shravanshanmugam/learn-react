import React from "react"
import Hero from "../../components/materialui/Hero"
export default function About() {
    const items = [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        "Aliquam tincidunt mauris eu risus.",
        "Vestibulum auctor dapibus neque.",
        "Nunc dignissim risus id metus.",
        "Cras ornare tristique elit."

    ]
    return <Hero title="Praesent dapibus" subtitle="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis" items={items}/>
}