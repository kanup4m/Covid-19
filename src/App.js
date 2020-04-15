import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Visual from './components/Visualize';
import Skeleton from './components/Sketeton'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Visual} />
          <Route path="/india" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
