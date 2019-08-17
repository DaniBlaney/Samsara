import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/home-page'
import About from './components/about-page'
import ClinicInfo from './components/clinic-page'

import './App.css';

function App () {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" components={HomePage} />
        <Route exact path="/about" components={About} />
        <Route exact path="/clinicinfo" components={ClinicInfo} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
