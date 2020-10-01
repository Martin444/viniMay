import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Inicio from './Pages/inicio';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route path='/' component={Inicio}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
