import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='cal-box'>
          <div id='display-box'>

          </div>
          <div id='buttons'>
            <div id='a' className='button-row'>
              <div id='clear' className='btn'>
                AC
              </div>
              <div id='divide' className='btn'>
                /
              </div>
              <div id='multiply' className='btn'>
                *
              </div>

            </div>
            <div id='b' className='button-row'>

            </div>
            <div id='c' className='button-row'>

            </div>
            <div id='d' className='button-row'>

            </div>
            <div id='e' className='button-row'>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
