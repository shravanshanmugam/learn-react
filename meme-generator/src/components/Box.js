import React from 'react';

export default function Box(props) {
    console.log('box props', props)
    const [darkMode, setDarkMode] = React.useState(props.on);
    function changeFill() {
        setDarkMode(prevDarkMode => !prevDarkMode)
        
    }
    return <div className="box" key={props.id} onClick={changeFill} style={darkMode ? {
        backgroundColor: "white", color: "black"
    } : {
        backgroundColor: "black", color: "white"
    }}>{darkMode ? "Yes" : "No"}</div>
}