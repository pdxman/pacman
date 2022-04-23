import React, { useState } from 'react'
import Game from './Game'
import './App.css';

function App() {
const [pause, setPause] = useState(false)
const [direction, setDirection] = useState(false)
const [fast, setFast] = useState(7.5)

function togglePause(){
    setPause(!pause)
    console.log('Pause:', pause)
}

function toggleDirection(){
    setDirection(!direction)
    console.log('Direction:', direction)
}

function toggleSpeed(){
    setFast(fast - 1)
    console.log('Fast: ', fast )
}

  return (
    <div className="App">
     <h1>Pac Man</h1>
     <p>I'm not quite sure what's going to happen here!</p>
     <h2>Game One - Pause</h2>
     <Game 
      ghostColor="#46bfee" 
      buttonText="Pause Game"
      interactivity={togglePause}
      divName={!pause ? 'board' : 'board pause'}
      fast="7.5"
    />
     <h2>Game Two - Speed</h2>
     <Game 
      ghostColor="#FFB8FF"
      buttonText="Speed Up Game"
      interactivity={toggleSpeed}
      divName={!pause ? 'board' : 'board SpeedUp'}
      fast={fast}
    />
     <h2>Game Two - Change Direction </h2>
     <Game 
      ghostColor="#FF0000"
      buttonText="Change Game Direction"
      interactivity={toggleDirection}
      divName={!direction ? 'board' : 'board changeDirection'}
      fast="7.5"
    />
     <h2>Game Two - Dont Know yet- easter egg perhaps! </h2>
     <Game 
      ghostColor="#FFB852"
      buttonText="Not Sure Yet what this is going to do!"
      divName={!pause ? 'board' : 'board easterEgg'}
      fast="7.5"
    />
    </div>
  );
}

export default App;
