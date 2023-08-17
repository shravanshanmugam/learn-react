import React from "react"
import Hero from "../../components/materialui/Hero"

export default function Reasons() {
    const items = [
        "It's a popular library, so I'll be able to fit in with the cool kids!",
        "I'm more likely to get a job as a developer if I know React"
    ];
    
    return <Hero title="Reasons I like React" subtitle="Do you agree?" items={items}/>
}