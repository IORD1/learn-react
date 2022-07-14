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


