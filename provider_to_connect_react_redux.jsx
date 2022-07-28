// Redux:
const ADD = 'ADD'; //the different states for react applications

const addMessage = (message) => { // actual function that returns states to store for changes
  return {
    type: ADD, // sending state type add and 
    message     // sending message along with type to have appropriate changes made to the store and applications
  }
};

const messageReducer = (state = [], action) => { //actual Reducer gives a new state for each previous state in cycle
  switch (action.type) {    // swtich case to handle different actions types
    case ADD: // what to return to cycle when a state type : add hits the store
      return [
        ...state,
        action.message  // returning state array and action's message which was sent as prop
      ];
    default:  //backup defualt state to be return when nothing is mentioned
      return state;
  }
};



const store = Redux.createStore(messageReducer); //creating redux store and assinging value to messageReducer

// React:

class DisplayMessages extends React.Component { //actual react component
  constructor(props) {  //constructor to handle initilisation
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this); //binding handlechange function to handlechange seems kindaa "why"
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) { //handlechagne function to be executed when called
    this.setState({  //setting state when called and what to input
      input: event.target.value
    });
  }
  submitMessage() {  //another function to handle things when submit button is clicked
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {  //acutal render function to render things on the screen 
    return ( //returing a html to render function to render it
      <div>  //it is necessary to return only one single html tag or single div
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>  //calling handlechagne function when values is changed
        <button onClick={this.submitMessage}>Submit</button> //calling submitmessage functoin when button is clicked
        <ul> //this ulist grows as the states are updated
          {this.state.messages.map( (message, idx) => {  //using mapping to render number of bullets form array message to screen as button is clicked
              return (
                 <li key={idx}>{message}</li>  //acutally what is to be renderend and how is to be rendered
              )
            })
          }
        </ul>
      </div>   //single due ended here
    );
  }
};

const Provider = ReactRedux.Provider;  //using react-redux package to use redux with react 
//React Redux provides a small API with two key features: Provider and connect. Another challenge covers connect. 
//The Provider is a wrapper component from React Redux that wraps your React app.
// This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree.
// Provider takes two props, the Redux store and the child components of your app.

class AppWrapper extends React.Component {  //parent wrapper to render every thing as we need 
  // Render the Provider below this line
  render(){
    return (
      <Provider store={store}> //provider function to have store connected 
        <DisplayMessages /> //child
        </Provider>
    )
  }
  // Change code above this line
};