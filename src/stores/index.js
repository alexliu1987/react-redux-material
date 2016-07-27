import {
	createStore,
	applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

module.exports = function(initialState) {
	let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
	let store = createStoreWithMiddleware(reducers, initialState)

	return store
}