import Game from './Game'
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Pac Man</h1>
     <p>I'm not quite sure what's going to happen here!</p>
     <h2>Game One - Pause</h2>
     <Game ghostColor="#46bfee" />
     <h2>Game Two - Speed</h2>
     <Game ghostColor="#FFB8FF"/>
     <h2>Game Two - Change Direction </h2>
     <Game ghostColor="#FF0000"/>
     <h2>Game Two - Dont Know yet- easter egg perhaps! </h2>
     <Game ghostColor="#FFB852"/>
    </div>
  );
}

export default App;
