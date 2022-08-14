import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input : 0,
      string : "",
      result : 0,
      bit : 1

    }
  }

  func = (key) =>{
      if(key == 'a'){
        this.setState({input : 0});
        this.setState({string : ""})
      }else if(key == "+" || key == '-' || key == '*' || key == '/'){
        this.setState({string : this.state.string + key});
        this.setState({input : key});
        this.setState({bit : 0});
      }else if(key == '='){
          var b = eval(this.state.string);
          this.setState({input : b});
          this.setState({string : ""});
      }else{
        if(this.state.string == ""){
          this.setState({input : key});
          this.setState({string : key});
        }else{
          if(this.state.bit){
            this.setState({input : this.state.input + key});
            this.setState({string : this.state.string + key}); 
            this.setState({bit : 0});
          }else{
            this.setState({input : key});
            this.setState({string : this.state.string + key}); 

          }
        }

      }


  }




  render() {
    return (
      <div className="App">
        <div id='cal-box'>
          <div id='display-box'>
            <div id='result'>
              {this.state.string}
            </div>
            <div id='display'>
              {this.state.input}
            </div>
          </div>
          <div id='buttons'>
            <div id='a' className='button-row'>

              <div id='clear' className='btn'   onClick={() => this.func("a")}>
                AC
              </div>
              <div id='divide' className='btn btn3'  onClick={() => this.func("/")}>
                /
              </div>
              <div id='multiply' className='btn btn3'  onClick={() => this.func("*")}>
                *
              </div>

            </div>
            <div id='b' className='button-row'>

              <div id='seven' className='btn'  onClick={() => this.func("7")}>
                7
              </div>
              <div id='eight' className='btn'  onClick={() => this.func("8")}>
                8
              </div>
              <div id='nine' className='btn'  onClick={() => this.func("9")}>
                9
              </div>
              <div id='subtract' className='btn btn3' onClick={() => this.func("-")}>
                -
              </div>

            </div>
            <div id='c' className='button-row'>

              <div id='four' className='btn'  onClick={() => this.func("4")}>
                4
              </div>
              <div id='five' className='btn'   onClick={() => this.func("5")}>
                5
              </div>
              <div id='six' className='btn'   onClick={() => this.func("6")}>
                6
              </div>
              <div id='add' className='btn btn3'   onClick={() => this.func("+")}>
                +
              </div>

            </div>
            <div id='d' className='button-row'>
              <div id='d-left'>
                <div id='e' className='button-row'>
                  <div id='one' className='btn btn2'  onClick={() => this.func("1")}>
                    1
                  </div>
                  <div id='two' className='btn btn2'   onClick={() => this.func("2")}>
                    2
                  </div>
                  <div id='three' className='btn btn2'  onClick={() => this.func("3")}>
                    3
                  </div>
                </div>
                <div id='f' className='button-row'>
                  <div id='zero' className='btn'  onClick={() => this.func("0")}>
                    0
                  </div>
                  <div id='decimal' className='btn'  onClick={() => this.func(".")}>
                    .
                  </div>
                  
                </div>
              </div>
              <div id='d-right'>
                <div id='equals' className='btn'   onClick={() => this.func("=")}>
                  =
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
