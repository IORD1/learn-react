// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const myfirstElement = <h1>Hello there react!</h1>

// //const root = ReactDOM.createRoot(document.getElementById('root'));
// //root.render(myfirstElement);

// function Football(){
//   const shoot = (a) => {
//     alert(a);
//   }

//   return (
//       <button onClick={() => shoot("GOAL!")}>Take the shot!</button>
//   );
// }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Football />);


// import { useState } from 'react';


// function MyForm() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(inputs);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//       <input 
//         type="text" 
//         name="username" 
//         value={inputs.username || ""} 
//         onChange={handleChange}
//       />
//       </label>
//       <br></br>
//       <label>Enter your age:
//         <input 
//           type="number" 
//           name="age" 
//           value={inputs.age || ""} 
//           onChange={handleChange}
//         />
//         </label>
//         <input type="submit" />
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);

import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <div>
    <h1 style={myStyle}>Hello Style!</h1>
    <p>Add a little style!</p>+
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
