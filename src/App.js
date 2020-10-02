import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Follow from './Components/Follow'
import Inicio from './Pages/inicio';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route path='/' component={Inicio}/>
        </Switch>
        <Follow/>
        <Footer/>
    </div>
  );
}

export default App;
