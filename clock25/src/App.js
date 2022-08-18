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
              <div id='break-label' className='edit-up-down'>Break Length</div>
                <div id='left-edit-down' className='edit-up-down'>
                  <div id='break-decrement' className='arrows'><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='break-length' className='arrows'>5</div>
                  <div id='break-increment'className='arrows'><span class="material-symbols-outlined">arrow_upward</span></div>
                </div>
            </div>
            <div id='right-edit'>
              <div id='session-label' className='edit-up-down'>Session Length</div>
                <div id='right-edit-down' className='edit-up-down'>
                  <div id='session-decrement' className='arrows'><span class="material-symbols-outlined">arrow_downward</span></div>
                  <div id='session-length' className='arrows'>25</div>
                  <div id='session-increment'className='arrows'><span class="material-symbols-outlined">arrow_upward</span></div>
              </div>
            </div>
          </div>
          <div id='main'>
            <div id='main-box'>
              <div id='timer-label'>
                Session
              </div>
              <div id='time-left'>
                25:00
              </div>
            </div>

          </div>
          <div id='button-box'>
            <div id='start_stop' className='buttons'><span class="material-symbols-outlined" id='play_pause-icon'>play_pause</span></div>
            <div id='reset' className='buttons'><span class="material-symbols-outlined">restart_alt</span></div>
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
