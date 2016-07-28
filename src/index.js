import React from 'react';
import {
	render
} from 'react-dom';
import {
	Provider
} from 'react-redux';
import configureStore from './stores';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './containers/App'

const store = configureStore();
injectTapEventPlugin();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);