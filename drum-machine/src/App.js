import React, { Component } from 'react';
import { useState } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      power: "1px auto auto 1px",
      ispower : 1

    }
  }


  func = (key) => {
    let aud = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-" + key + ".mp3");
    let aud4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
    let aud5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
    let aud6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
    let aud7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
    let aud8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
    let aud9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
    aud.play();



    if(key == 1){
      aud.play();
    }else if(key == 2){
      aud.play();
    }else if(key == 3){
      aud.play();
    }else if(key == 4){
      aud4.play();
    }else if(key == 5){
      aud5.play();
    }else if(key == 6){
      aud6.play();
    }else if(key == 7){
      aud7.play();
    }else if(key == 8){
      aud8.play();
    }else if(key == 9){
      aud9.play();
    }
  }


  power = () => {
    if(this.state.ispower == 1){
      this.setState({ power: "1px 1px auto auto"});
      this.setState({ispower : 0});
    }else{
      this.setState({power : "1px auto auto 1px"});
      this.setState({ispower : 1});
    }
  }

  render() {
    return (
      <div className="App">
        <div id='box'>
          <div id='keys'>
            <div id='q' className='buttons row1' onClick={() => this.func(1)}>
              Q
              </div>
            <div id='w' className='buttons row1' onClick={() => this.func(2)}>W</div>
            <div id='e' className='buttons row1' onClick={() => this.func(3)}>E</div>

            <div id='a' className='buttons row2' onClick={() => this.func(4)}>A</div>
            <div id='s' className='buttons row2' onClick={() => this.func(5)}>S</div>
            <div id='d' className='buttons row2' onClick={() => this.func(6)}>D</div>

            <div id='z' className='buttons row3' onClick={() => this.func(7)}>Z</div>
            <div id='x' className='buttons row3' onClick={() => this.func(8)}>X</div>
            <div id='c' className='buttons row3' onClick={() => this.func(9)}>C</div>

          </div>
          <div id='panel'>
            <div id='panel-cont'>
              <div id='power-cont' className='panel-mem'>
                <div id='power-head'>
                  <p>Power</p>
                </div>
                <div id='power-box'>
                  <div id='power'>
                    <div id='power-slider' onClick={this.power} style={{ margin : this.state.power }}>

                    </div>
                  </div>
                </div>
              </div>
              <div id='display-cont' className='panel-mem'>

              </div>
              <div id='slider-cont' className='panel-mem'>

              </div>
              <div id='switch-cont' className='panel-mem'>

              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
