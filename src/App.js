import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/js/Navbar';
import Events from './components/js/Events';
import Event from './components/js/Event';
import './App.css';

function App(props) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/">
          <Events />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
