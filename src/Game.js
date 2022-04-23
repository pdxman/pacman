import React, { useState } from 'react'
import { FaGhost } from 'react-icons/fa';
import { ImPacman } from 'react-icons/im';

export default function Game(props){
    const [pause, setPause] = useState(false)

    return(
        <>
            <div className={props.divName}>
                <FaGhost style={{ color: `${props.ghostColor}` }} className="ghost"/>
                <ImPacman className="pac-man"/>
            </div>
            <button onClick={props.interactivity}>{props.buttonText}</button>
        </>
       
    )
}