import { useContext } from 'react';
import './App.css';
import Login from './components/Login';
import { Context } from './components/MyContext';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Signout from './components/Signout';
import HocDecrement from './hoc/HocDecrement';
import HocIncrement from './hoc/HocIncrement';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from './components/Cards';
import Counter from './components/Counter';

const App = () => {
  const { state } = useContext(Context);
  // console.log(state, 'state')

  return (
    <div className="App">
      {/* <Router>
        <switch> */}
      {/* <Route exact path='/'> */}
      <Counter />
      <Cards />
      <HocDecrement />
      <HocIncrement />
      <Signout />
      <Login />
      {/* <CreateContext /> */}
      {/* </Route> */}
      {/* </switch>
      </Router> */}
    </ div>
  );
}

export default App;
