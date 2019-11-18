import React from 'react';
import SearchBarContainer from './containers/SearchBarContainer';
import ItemsContainer from './containers/ItemsContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <SearchBarContainer />
        <ItemsContainer />
      </div>
  );
}

export default App;
