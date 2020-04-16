import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Media from 'react-media';
import Home from './Pages/Home';
import Visual from './components/Visualize';
import Skeleton from './components/Sketeton'
function App() {
  return (
    <div className="App">
      <Media queries={{ small: { maxWidth: 599 } }}>
        {matches =>
          matches.small ? (
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/countries/:slug" component={Skeleton} />
              </Switch>
            </Router>
          ) : (
              <Router>
                <Switch>
                  <Route path="/" exact component={Visual} />
                </Switch>
              </Router>
            )
        }
      </Media>
    </div>
  );
}

export default App;
