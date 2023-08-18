import React from 'react'
import '../style/boxes.css'
import boxData from '../boxData'
import Box from './Box'

export default function Boxes() {
    const [allBoxes, setAllBoxes] = React.useState(boxData);
    function toggle(id) {
        setAllBoxes(prevBox => {
            return prevBox.map(box => {
                return box.id === id ? {...box, on: !box.on} : box
            })
            /* const newBox = [];
            for (let i = 0; i < prevBox.length; i++) {
                let currBox = prevBox[i];
                if (id - 1 === i) {
                    newBox.push({
                        ...currBox,
                        on: !currBox.on
                    })
                } else {
                    newBox.push(currBox)
                }
            }
            return newBox; */
        })
    }
    
    return <div className="boxes" id="boxes">
        Use Dark mode?
        {allBoxes.map((box) =>
            <Box key={box.id} on={box.on} toggle={() => toggle(box.id)} />
        )}
    </div>
}
