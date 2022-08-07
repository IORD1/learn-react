import React, { Component } from 'react';
import './App.css';
//import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initial: ' # Welcome to my React Markdown Previewer! ',
      max: 1,
      max1: 1,
      heightc: 200,
      heightp: 300
    }
  }


  func = () => {
    this.setState({ initial: document.getElementById('markdown').value });
    document.getElementById('content').innerHTML = window.marked.parse(this.state.initial);

  }

  func2 = () => {
    document.getElementById('content').innerHTML = window.marked.parse(document.getElementById('markdown').value);
  }

  func3 = () => {
    this.setState({ max: 1 });
    if (this.state.max == 1) {
      this.setState({ heightc: "80vh" });
      this.setState({ max: 2 });
    } else {
      this.setState({ heightc: "200px" });
      this.setState({ max: 1 });
    }

  }

  func4 = () => {
    this.setState({ max1: 1 });
    if (this.state.max1 == 1) {
      this.setState({ heightp: "80vh" });
      this.setState({ max1: 2 });
    } else {
      this.setState({ heightp: "300px" });
      this.setState({ max1: 1 });
    }

  }

  componentDidMount() {
    this.func2();
  }

  render() {

    return (

      <div className="App">

        <div id='mardkdown-cont'>
          <div id='markdown-box'>
            <div id='markdown-head'>
              (<i class="fa fa-fire"></i>)
              <p>Editor</p>
              <button id="markdown-but" onClick={this.func3}><i class="fa fa-expand"></i></button>
            </div>
            <div id='markdown-rest'>
              <textarea id="markdown" placeholder='Try Something like "# your-name" to preview it below' onChange={this.func2} style={{ minHeight: this.state.heightc }} >
              </textarea>
            </div>

          </div>

        </div>

        <div id='preview-cont'>
          <div id='preview-box'>
            <div id='preview-head'>
              (<i class="fa fa-fire"></i>)
              <p>Previewer</p>
              <button id="preview-but" onClick={this.func4}><i class="fa fa-expand"></i></button>
            </div>
            <div id='preview-rest'>
              <div id="content" style={{ minHeight: this.state.heightp }}>Your Preview will apear here</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
