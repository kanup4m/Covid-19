import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Visual from './components/Visualize';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Visual} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
