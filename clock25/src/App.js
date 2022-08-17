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
              <div id='left-edit-down' className='edit-up-down'>
                <div id='left-edit-inc' className='arrows'><span class="material-symbols-outlined">arrow_downward</span></div>
                <div id='left-edit-num' className='arrows'>5</div>
                <div id='left-edit-dec'className='arrows'><span class="material-symbols-outlined">arrow_upward</span></div>
                </div>
            </div>
            <div id='right-edit'>
              <div id='right-edit-up' className='edit-up-down'>Session Length</div>
              <div id='right-edit-down' className='edit-up-down'>
                <div id='right-edit-inc' className='arrows'><span class="material-symbols-outlined">arrow_downward</span></div>
                <div id='right-edit-num' className='arrows'>5</div>
                <div id='right-edit-dec'className='arrows'><span class="material-symbols-outlined">arrow_upward</span></div>
              </div>
            </div>
          </div>
          <div id='main'>
            <div id='main-box'>
              <div id='main-head'>
                Session
              </div>
              <div id='main-time'>
                25:00
              </div>
            </div>

          </div>
          <div id='button-box'>
            <div id='play' className='buttons'><span class="material-symbols-outlined">play_arrow</span></div>
            <div id='pause' className='buttons'><span class="material-symbols-outlined">pause</span></div>
            <div id='restart' className='buttons'><span class="material-symbols-outlined">restart_alt</span></div>
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
