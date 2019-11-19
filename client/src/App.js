import React from 'react';
import NavButtonsContainer from './containers/NavButtonsContainer';
import AzeriteContainer from './containers/AzeriteContainer';
import WeaponsContainer from "./containers/WeaponsContainer";
import TrinketsContainer from "./containers/TrinketsContainer";
import AzeriteDisplay from "./components/Azerite/AzeriteDisplay";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Route path="/azerite/:id" component={AzeriteDisplay} />
              <Route exact path="/azerite" component={AzeriteContainer} />
              <Route exact path="/weapons" component={WeaponsContainer} />
              <Route exact path="/trinkets" component={TrinketsContainer} />
              <Route exact path="/" component={NavButtonsContainer} />
          </div>
      </Router>
  );
}

export default App;
