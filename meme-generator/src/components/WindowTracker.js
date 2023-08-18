import React from 'react'
import '../style/windowTracker.css'

export default function WindowTracker() {
    const [ windowWidth, setWindowWidth ] = React.useState(window.innerWidth)
    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
    }, [])
    return <main id="window-tracker"><h1>Window width: {windowWidth}</h1></main>
}