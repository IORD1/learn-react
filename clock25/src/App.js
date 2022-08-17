import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='box'>
          <div id='box-head'>
            25 + 5 Clock
          </div>
          <div id='time-edit'>
            <div id='left-edit'>
              <div id='left-edit-up' className='edit-up-down'>Break Length</div>
              <div id='left-edit-down' className='edit-up-down'>2</div>
            </div>
            <div id='right-edit'>
              <div id='right-edit-up' className='edit-up-down'>Session Length</div>
              <div id='right-edit-down' className='edit-up-down'>4</div>
            </div>
          </div>
          <div id='main'>
            <div id='main-box'>
              <div id='main-head'>

              </div>
              <div id='main-time'>
                
              </div>
            </div>

          </div>
          <div id='button-box'>

          </div>
          <div id='by-box'>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
