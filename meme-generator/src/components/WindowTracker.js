import React from 'react'
import '../style/windowTracker.css'

export default function WindowTracker() {
    const [ windowWidth, setWindowWidth ] = React.useState(window.innerWidth)
    React.useEffect(() => {
        const watchWidth = () => {
            setWindowWidth(window.innerWidth)
        };
        window.addEventListener("resize", watchWidth)
        return () => window.removeEventListener("resize", watchWidth)
    }, [])
    return <main className="window-tracker" id="window-tracker"><h1>Window width: {windowWidth}</h1></main>
}