import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './views/Home/home'
import About from './views/About/about'
import ClinicInfo from './views/ClinicInfo/clinicinfo'

import './App.css';

function App () {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" view={Home} />
        <Route exact path="/about" view={About} />
        <Route exact path="/clinicinfo" view={ClinicInfo} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
