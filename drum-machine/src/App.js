import React, { Component } from 'react';
import { useEffect } from "react";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      power: "1px auto auto 1px",
      ispower : 1,
      switch : "1px auto auto 1px",
      isswitch : 1,
      display : "",
      bgc : "",
      vol : 1

    }

    this.func = this.func.bind(this);
  }




  func = (key) => {
    let aud = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-" + key + ".mp3");
    aud.play();
    if(this.state.ispower == 1){
      this.setState({display : "Power : Off"});
    }else{

      let aud4 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3");
      let aud5 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3");
      let aud6 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3");
      let aud7 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3");
      let aud8 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3");
      let aud9 = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3");
      aud.volume = this.state.vol;
      aud4.volume = this.state.vol;
      aud5.volume = this.state.vol;
      aud6.volume = this.state.vol;
      aud7.volume = this.state.vol;
      aud8.volume = this.state.vol;
      aud9.volume = this.state.vol;
      if(key == 1 || event.key == 'Enter'){
        this.setState({display : "Heater 1"});
        
        aud.play();
      }else if(key == 2){
        this.setState({display : "Heater 2"});
        aud.play();
      }else if(key == 3){
        this.setState({display : "Heater 3"});
        aud.play();
      }else if(key == 4){
        this.setState({display : "Heater 4"});
        aud4.play();
      }else if(key == 5){
        this.setState({display : "Clap"});
        aud5.play();
      }else if(key == 6){
        this.setState({display : "Open HH"});
        aud6.play();
      }else if(key == 7){
        this.setState({display : "Kick n' Hat"});
        aud7.play();
      }else if(key == 8){
        this.setState({display : "Kick"});
        aud8.play();
      }else if(key == 9){
        this.setState({display : "Closed HH"});  
        aud9.play();
      }

   }
  }


  power = () => {
    
    if(this.state.ispower == 1){
      this.setState({display : "Power : On"});
      this.setState({ power: "1px 1px auto auto"});
      this.setState({ispower : 0});
    }else{
      this.setState({display : "Power : Off"});
      this.setState({power : "1px auto auto 1px"});
      this.setState({ispower : 1});
    }
  }

  switch = () => {
    this.func(1);
    if(this.state.isswitch == 1){
      this.setState({display : "Smooth Paino Kit"});
      this.setState({ switch: "1px 1px auto auto"});
      this.setState({isswitch : 0});
    }else{
      this.setState({display : "Heater Kit"});
      this.setState({switch : "1px auto auto 1px"});
      this.setState({isswitch : 1});
    }
  }

  setvol = () => {
    this.setState({display : "Vol : " + document.getElementById('slider').value * 10})
    this.setState({vol : document.getElementById('slider').value})
  }


  componentDidMount() {
    window.addEventListener('keyup', function(event) {
      if (event.key === 'q') {
        alert('q was pressed!');
      }
    });
    this.func(1);

  }

  
  render() {



    return (
      <div className="App">
        <div id='box'>
          <div id='keys'>
            <div id='q' className='buttons row1' onClick={() => this.func(1)} >
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
                <p id='display'>{this.state.display}</p>

              </div>
              <div id='slider-cont' className='panel-mem'>
                <input  id='slider' type="range" min="0" max="1" step="0.1" onChange={this.setvol}></input>
              </div>
              <div id='switch-cont' className='panel-mem'>
              <div id='switch-head'>
                  <p>Bank</p>
                </div>
                <div id='switch-box'>
                  <div id='switch'>
                    <div id='switch-slider' onClick={this.switch} style={{ margin : this.state.switch }}>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
