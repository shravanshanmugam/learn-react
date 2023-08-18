import React from 'react';

export default function Box(props) {
    return <div className="box" key={props.id} onClick={props.toggle} style={props.on ? {
        backgroundColor: "white", color: "black"
    } : {
        backgroundColor: "black", color: "white"
    }}>{props.on ? "Yes" : "No"}</div>
}