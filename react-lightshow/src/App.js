import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" id="canvas1">
    </div>
  );
}

export default App;



function Canvas() {

  const [canvasWidth, setcanvasWith] = useState(window.innerWidth);
  
  const [canvasHeight, setcanvasHeight] = useState(window.innerHeight);

  const [particleArray, setParticleArray] = useState(Array(2).fill(null));

  const [mouse, setMouse] = useState({
    x: null,
    y: null,
    radius: ((canvasHeight/80) * (canvasWidth/80))
  });

  window.addEventListener('mousemove',
    function(event){
      let copyMouse = {
        x : event.x,
        y : event.y
      }
    }  
  );

}