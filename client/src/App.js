import React from 'react';
import NavButtonsContainer from './containers/NavButtonsContainer';
import AzeriteContainer from './containers/AzeriteContainer';
import WeaponsContainer from "./containers/WeaponsContainer";
import TrinketsContainer from "./containers/TrinketsContainer";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Route exact path="/" component={NavButtonsContainer} />
              <Route path="/azerite" component={AzeriteContainer} />
              <Route path="/weapons" component={WeaponsContainer} />
              <Route path="/trinkets" component={TrinketsContainer} />
          </div>
      </Router>
  );
}

export default App;
