import 'tachyons/css/tachyons.min.css';
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//create-react-app assumes there is an index.js and is the root file of the application

import App from './components/App';

const store = createStore(reducers,{},applyMiddleware());

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	document.querySelector('#root')
);