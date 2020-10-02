import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Follow from './Components/Follow'
import Inicio from './Pages/inicio';
import Comunity from './Pages/Comunity';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Switch>
            <Route exact path='/' component={Inicio}/>
            <Route exact path='/comunidad' component={Comunity}/>
            <Route exact path='/contacto' component={Contact}/>
        </Switch>
        <Follow/>
        <Footer/>
    </div>
  );
}

export default App;
