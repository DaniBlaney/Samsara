import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home/home'
import About from './components/About/about'
import ClinicInfo from './components/ClinicInfo/clinicinfo'

import './App.css';

function App () {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" components={Home} />
        <Route exact path="/about" components={About} />
        <Route exact path="/clinicinfo" components={ClinicInfo} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
