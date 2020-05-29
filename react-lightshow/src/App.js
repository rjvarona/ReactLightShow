import React, { useState } from 'react';
import './App.css';
import { deflateRaw } from 'zlib';


debugger


// to do turn this into a class and update where necessary.

function App() {
  return (
    <div id="canvas1">
        <Canvas></Canvas>
    </div>
  );
}

export default App;



function Canvas() {

  const canvas = document.getElementById("canvas1");

  const [ctx, setCtx] = canvas.getContext('2d');

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
  
  const draw = () => {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#8C5523';
    ctx.fill() 
  }

  return(
    <div className="App">
        <button onClick={draw()}> create particle</button>
    </div>
  );
}