//import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './styles/main.css';
import App from './components/App';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk, loggerMiddleware)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
