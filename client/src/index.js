import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';

import AzeriteReducer from './reducers/AzeriteReducer';
import TrinketsReducer from './reducers/TrinketsReducer';

import { Provider } from 'react-redux';
import {applyMiddleware, createStore, compose, combineReducers } from 'redux';

const rootReducer = combineReducers({ azerite: AzeriteReducer, trinkets: TrinketsReducer });
const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
