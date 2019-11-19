import React from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import ItemsContainer from './containers/ItemsContainer';
import NavButtonsContainer from './containers/NavButtonsContainer';
import AzeriteContainer from './containers/AzeriteContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
          <div className="App">
              <Route exact path="/" component={NavButtonsContainer} />
              <Route path="/azerite" component={AzeriteContainer} />
          </div>
      </Router>
  );
}

export default App;
