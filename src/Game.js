import React, { useState } from 'react'
import { FaGhost } from 'react-icons/fa';
import { ImPacman } from 'react-icons/im';

export default function Game(props){
    const [pause, setPause] = useState(false)

    function togglePause(){
        setPause(!pause)
        console.log(pause)
    }
    
    // use props(?) to pass different interactive features 
    // Featues- 
    // - speed
    // - direction 
    // - easter egg- like text scrolling
    // figure out different buttons/ different functions
    // update color of ghosts - DONE
    
    
    return(
        <>
            <div className={!pause ? 'board' : 'board pause'}>
                <FaGhost style={{ color: `${props.ghostColor}` }} className="ghost"/>
                <ImPacman className="pac-man"/>
            </div>
            <button onClick={togglePause}>Pause</button>
        </>
       
    )
}