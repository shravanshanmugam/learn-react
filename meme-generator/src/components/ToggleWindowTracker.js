import React from 'react'
import '../style/windowTracker.css'
import WindowTracker from './WindowTracker'

export default function ToggleWindowTracker() {
    const [ show, setShow ] = React.useState(true)
    function toggle() {
        setShow(prevState => !prevState)
    }
    return <main className="toggle-window-tracker" id="toggle-window-tracker">
        <button className="toggle-button" onClick={toggle}>Toggle window tracker</button>
        {show && <WindowTracker/>}
    </main>
}