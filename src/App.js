import './App.css';
import Product from './Product';
import { useState, useEffect } from 'react';



// const Person = (props) => {
//   return (
//     <>
//       <h1> Name: {props.name}</h1>
//       <h2>Last Name: {props.lastname}</h2>
//       <h2>Age: {props.age}</h2>
//     </>
//   )
// }


const App = () => {
  const [counter, setCounter] = useState(0);
  
  //useEffect demo (this runs as soon as this component renders)
  useEffect(() => {
    // counter = 100; // WRONG never mutate state manually like this, only do it using setter function like next line)
    setCounter(100)
  }, []);


  return (
  //useState demo
    <div className='App'>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>


    //For Person component
    // <div className="App">
    //  <Person name='John' lastname='Doe' age='25'/>
    //  <Person name='Jane' lastname='Doe' age='30'/>
    //  <Person name='Jason' lastname='Doe' age='2'/>
    // </div> 

    // <div className='App'>
    //   <Product name='Macbook' description='Latest laptop for your computational needs' price='1200' />
    //   <Product name='Robot Vaccuum' description='Robot vaccuum to keep your house clean' price='200' />
    //   <Product name='Sit Stand Desk' description='Desk for your home office' price='800' />
    // </div>
  );
}

export default App;
