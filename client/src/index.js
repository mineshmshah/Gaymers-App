import 'tachyons/css/tachyons.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
//create-react-app assumes there is an index.js and is the root file of the application

import App from './components/App';
const store = createStore(
    reducers,
	{},
    compose(
        applyMiddleware(reduxThunk,reduxLogger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

console.log('store', store.getState())

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);