import React, { useState } from 'react';
import ColorChangeButton from './ColorChangeButton';
import './App.css';

function App() {
  const [color, setColor] = useState("")
  console.log(color, setColor)
  return (
    <div className={"react-root " + color}>
      <div className="centered">
        <h1>Colour Picker</h1>
        <ColorChangeButton color="pink" setColor={setColor}/>
        <ColorChangeButton color="blue" setColor={setColor}/>
        <ColorChangeButton color="yellow" setColor={setColor}/>

      </div>

    </div>

  );
}

export default App;
