import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from './components/Home'
import './App.css';

function App () {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={} />
        <Route exact path="/" component={} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;
