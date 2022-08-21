import React, { Component } from 'react';
import './App.css';
import {useEffect} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      min : 25,
      sec : "00",
      blen : 5,
      mlen : 25,
      power: 0
    }
  }

 timeout() {
    return new Promise( res => setTimeout(res, 1000) );
  }

  bdec = () => {
    if(this.state.blen != 0){
      this.setState({blen : this.state.blen - 1});
    }
    
  }

  binc = () => {
    if(this.state.blen != 60){
      this.setState({blen : this.state.blen + 1});
    }
    
  }

  mdec = () => {
    if(this.state.mlen != 0){
      this.setState({mlen : this.state.mlen - 1});
    }
    if(this.state.min != 0){
      this.setState({min : this.state.mlen - 1});
    }
  }

  minc = () => {
    if(this.state.mlen != 60){
      this.setState({mlen : this.state.mlen + 1});
    }
    if(this.state.min != 60){
      this.setState({min : this.state.mlen + 1});
    }
  }

  onpower=()=>{
    this.setState({power : 1});

  }

  checker=()=>{
    if(this.state.sec[0] == 0){
      return true;
    }
    return String(Math.abs(this.state.sec)).charAt(0) == this.state.sec;
  }
  
  start = () => {
    if(this.state.power == 1){
      if(this.state.sec == '00'){
        this.setState({min : this.state.min - 1});
        this.setState({sec : 59});
      }else if(this.state.sec != 0){
        if(this.checker()){
          this.setState({sec : "0" + (this.state.sec - 1)});
        }else{
          this.setState({sec : this.state.sec - 1});
        }
      }
    }
 
  }

  restart = () => {
    this.setState({sec : '00'});
    this.setState({min : this.state.mlen});
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.start(), 1000);
    
  // }
  // () => this.setState({ sec: this.state.sec - 1 })
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div id='box'>
          <div id='box-head'>
            25 + 5 Clock
          </div>
          <div id='time-edit'>
            <div id='left-edit'>
              <div id='break-label' className='edit-up-down'>Break Length</div>
                <div id='left-edit-down' className='edit-up-down'>
                  <div id='break-decrement' className='arrows' onClick={this.bdec}><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='break-length' className='arrows'>{this.state.blen}</div>
                  <div id='break-increment'className='arrows' onClick={this.binc}><span class="material-symbols-outlined">arrow_upward</span></div>
                </div>
            </div>
            <div id='right-edit'>
              <div id='session-label' className='edit-up-down'>Session Length</div>
                <div id='right-edit-down' className='edit-up-down'>
                  <div id='session-decrement' className='arrows' onClick={this.mdec}><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='session-length' className='arrows'>{this.state.mlen}</div>
                  <div id='session-increment'className='arrows' onClick={this.minc}><span class="material-symbols-outlined">arrow_upward</span></div>
              </div>
            </div>
          </div>
          <div id='main'>
            <div id='main-box'>
              <div id='timer-label'>
                Session
              </div>
              <div id='time-left'>
                {this.state.min}:{this.state.sec}
              </div>
            </div>

          </div>
          <div id='button-box'>
            <div id='start_stop' className='buttons' onClick={this.onpower}><span class="material-symbols-outlined" id='play_pause-icon'>play_pause</span></div>
            <div id='reset' className='buttons' onClick={this.restart}><span class="material-symbols-outlined">restart_alt</span></div>
          </div>
          <div id='by-box'>
          Designed and Coded by Pratham-_-
          </div>
        </div>
      </div>
    );
  }
}

export default App;
