import React from 'react'
import '../style/boxes.css'
import boxData from '../boxData'
import Box from './Box'

export default function Boxes() {
    const [allBoxes, setAllBoxes] = React.useState(boxData);
    console.log('allBoxes', allBoxes)
    return <div className="boxes">
        Use Dark mode?
        {allBoxes.map((box) =>
            <Box {...box} />
        )}
    </div>
}
