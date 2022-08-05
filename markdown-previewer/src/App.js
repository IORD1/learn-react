import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='mardkdown-cont'>
          <div id='markdown-box'>
            <div id='markdown-head'>
            (<i class="fa fa-fire"></i>)
            <p>Editor</p>  
            </div>

          </div>

        </div>

        <div id='preview-cont'>
          <div id='preview-box'>
            <div id='preview-head'>
            (<i class="fa fa-fire"></i>)
            <p>Previewer</p> 
            </div>
            
            </div>
        </div>
      </div>
    );
  }
}

export default App;
