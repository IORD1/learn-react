import React, { Component } from 'react';
import './App.css';
//import $ from 'jquery';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: ' # Welcome to my React Markdown Previewer! '

    }
  }

 



  func = () => {
    this.setState({initial : document.getElementById('markdown').value}); 
    document.getElementById('content').innerHTML = window.marked.parse(this.state.initial);  
        
  }

  componentDidMount(){
    this.func();
  } 



  render() {



    return (
      
      <div className="App">

        <div id='mardkdown-cont'>
          <div id='markdown-box'>
            <div id='markdown-head'>
            (<i class="fa fa-fire"></i>)
            <p>Editor</p>  
            <button id="markdown-but"><i class="fa fa-expand"></i></button>
            </div>
            <div id='markdown-rest'>
              <textarea id="markdown" onChange={this.func} >{this.state.initial}</textarea>
            </div>

          </div>

        </div>

        <div id='preview-cont'>
          <div id='preview-box'>
            <div id='preview-head'>
              (<i class="fa fa-fire"></i>)
              <p>Previewer</p> 
              <button id="preview-but"><i class="fa fa-expand"></i></button>
            </div>
            <div id='preview-rest'>
              <div id="content"></div>
            </div>

            
            </div>
        </div>
      </div>
    );
  }
}

export default App;



{/* 
<script>
  document.getElementById('content').innerHTML =
    marked.parse('# Marked in the browser\n\nRendered by **marked**.');
</script> */

// document.getElementById('marked').innerText
}