import React, { Component } from 'react';
import logo from './logo.svg';
import sharingan from './sharigan.png';
import quotonquot from './qotonqot.svg';
import './App.css';

class App extends Component {

  getdata(){
    alert("yo");
    // $getJSON("https://www.colr.org/json/colors/random/1", function(data) {})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="logoheader">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className='welcomeheader'>
            <h2>Welcome to React</h2>
          </div>
          <div className="logoheader2">
            <img src={sharingan} className="App-logo" alt="logo" />
          </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </div>

        <div className='app-base'  >
          <div className='main-box'>
            <div className='quote-box'>
              <div className='quote-container'>
                <i class="fa fa-quote-left">
                  
                </i>
                <p className='quote'>
                  Build you own dreams, or someone else will hire you to build theirs.
                </p>
              </div>
              <div className='by-container'>
                <p>-</p>
                <p className='by'>Farrah Gray</p>
              </div>
              <div className='quote-share-container'>
                <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp" target="_blank" className="footer-button">
                  <i class="fa fa-twitter"></i>
                </a> 
                
                <a href="https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Farrah%20Gray&content=Build%20your%20own%20dreams%2C%20or%20someone%20else%20will%20hire%20you%20to%20build%20theirs.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button" className="footer-button" id='tumblr-button'>
                  <i class="fa fa-tumblr"></i>
                </a> 
                
                <div id='newq' className="footer-button-holder">
                  <button className='footer-button' id='foot-button' onClick={this.getdata}>New quote</button>
                </div>

              </div>
            </div>
            <div className='by-box'>
                <p class="by-footer">by </p>
                <p className='by-pratham'>pratham-_-</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
