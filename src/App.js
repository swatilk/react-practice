import './App.css';
import Product from './Product';

const Person = (props) => {
  return (
    <>
      <h1> Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}


const App = () => {

  return (
    // <div className="App">
    //  <Person name='John' lastname='Doe' age='25'/>
    //  <Person name='Jane' lastname='Doe' age='30'/>
    //  <Person name='Jason' lastname='Doe' age='2'/>
    // </div> 

    <div className='App'>
      <Product name='Macbook' description='Latest laptop for your computational needs' price='1200' />
      <Product name='Robot Vaccuum' description='Robot vaccuum to keep your house clean' price='200' />
      <Product name='Sit Stand Desk' description='Desk for your home office' price='800' />
    </div>
  );
}

export default App;
