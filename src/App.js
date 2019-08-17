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
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/clinicinfo" component={ClinicInfo} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
