class Car {
    constructor(name) {
      this.brand = name;
    }
  
    present() {
      return 'I have a ' + this.brand;
    }
  }
  
  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }  
    show() {
        return this.present() + ', it is a ' + this.model
    }
  }
  const mycar = new Model("Ford", "Mustang");
  mycar.show();

//>>>>>>>>>>using classes<<<<<<<<<<<<<<<<<

hello = () => {
    return "Hello World!";
  }

hello = () => "Hello World!";

hello = (val) => "Hello " + val;

hello = val => "Hello " + val;

//>>>>>>>>>>>>>>functions<<<<<<<<<<<<<<<<<

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

//>>>>>>>>>>>functions>>>>>>>>>>>>>>>>>>>>
const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
  
  ReactDOM.render(myelement, document.getElementById('root'));
<body>
  <div id="root"></div>
</body>

//>>>>>>>>>>>>>>Render html<<<<<<<<<<<<<<<<<<<<<

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

//JSX 

const x = 5;
let text = "Goodbye";
if (x < 10) {
  text = "Hello";
}

const myElement = <h1>{text}</h1>;
//OR
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

//>>>>>>>>>>>>JSX<<<<<<<<<<<<<<<<<<<<<<<<<

function Car() {
    return <h2>Hi, I am a Car!</h2>;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);  

//>>>>>>>>>>>>components<<<<<<<<<<<<<<<<<<<<<<<<

function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red" />);

//>>>>>>>>>>PROPS<<<<<<<<<<<<<<<<<<<<<<<<<<<

function Car() {
    return <h2>I am a Car!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);

//>>>>>>>>>>>COMPONENT INSIDE A COMPONENT<<<<<<<<<<<<<<<<<<<<<<<
//car.js inside 
function Car() {
    return <h2>Hi, I am a Car!</h2>;
}

export default Car;


//next file 

import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

//>>>>>>>>>>>>>>>>>COMPONENT IN FILES<<<<<<<<<<<<<<<<<<<<<<<<<<<

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  
function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);

//>>>>>>>>>>>>>> Pass props using functions;>>>>>>>>>>>>>>

function Car(props) {
    return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={carInfo} />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);


//>>>>>>>>>>>>>>>>>MULITPLE PROPS OR PROPS OF PROPS<<<<<<<<<<<<<<<<<<<<<


function Football(){
    const shoot = (a) => {
      alert(a);
    }
  
    return (
        <button onClick={() => shoot("GOAL!")}>Take the shot!</button>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

//EVENTS

function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>Goal!</h1>;
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal />;
    }
    return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);

//>>>>>>>>>>>>>>>> IF STATEEMENT <<<<<<<<<<<<<<<<<<

function Garage(props) {
    const cars = props.cars;
    return (
      <>
        <h1>Garage</h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }
      </>
    );
  }
  
  const cars = ['Ford', 'BMW', 'Audi'];
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage cars={cars} />);

// >>>>>>>>>>>>>> && <<<<<<<<<<<<<<<<<<<

function Goal(props) {
    const isGoal = props.isGoal;
    return (
      <>
        { isGoal ? <MadeGoal/> : <MissedGoal/> }
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Goal isGoal={false} />);

// >>>>>>>>>>>>>> TERNARY OPERATOR <<<<<<<<<<<<<<<<<<

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Garage() {
    const cars = [
      {id: 1, brand: 'Ford'},
      {id: 2, brand: 'BMW'},
      {id: 3, brand: 'Audi'}
    ];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
        </ul>
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />);

  // >>>>>>>>>>>>>>>>>>>>>> MAPS AND LIST WITH KEYS <<<<<<<<<<<<<<<<<<<<<<

  import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
//>>>>>>>>>>>>>>>>  MULITPLE INPUTS <<<<<<<<<<<<<<<<<<<

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }

// >>>>>>>>>>>>>>>>>>>> SELECTIOJNS <<<<<<<<<<<<<<<<<<


  