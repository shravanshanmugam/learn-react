import React from "react"
import Hero from "../../components/materialui/Hero"

export default function FunFacts() {
    const items = [
        "Was first released in 2013",
        "Was originally created by Jordan Walke",
        "Has well over 100K stars on Github",
        "Is maintained by Facebook",
        "Powers thousands of enterprise apps, including mobile apps"
    ];
    
    return <Hero title="Fun Facts about React" subtitle="Here are 5 things to know about React" items={items}/>
}