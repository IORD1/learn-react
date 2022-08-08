import React, { Component } from 'react';
import { useState } from "react";
import './App.css';

class App extends Component {

  onc = (event, source) => {
    // Do something with event
    console.log(event);
    alert(event);

    // Use the passed parameter
    alert(source);
  }


  func = () => {
    let aud1 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
    aud1.play();
  }

  render() {
    return (
      <div className="App">
        <div id='box'>
          <div id='keys'>
            <div id='q' className='buttons row1' onClick={(event) => onc(event, "1")}>
              Q
              </div>
            <div id='w' className='buttons row1'>W</div>
            <div id='e' className='buttons row1'>E</div>

            <div id='a' className='buttons row2'>A</div>
            <div id='s' className='buttons row2'>S</div>
            <div id='d' className='buttons row2'>D</div>

            <div id='z' className='buttons row3'>Z</div>
            <div id='x' className='buttons row3'>X</div>
            <div id='c' className='buttons row3'>C</div>

          </div>
          <div id='panel'>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
