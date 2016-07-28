import React from 'react'
import {
	Route,
	IndexRoute
} from 'react-router'
import App from './containers/App'
import Index from './containers/Index'
import List from './containers/List'

export default (
	<Route path="/">
	    <IndexRoute component={Index} />
	    <Route path="list" component={List} />
	</Route>
)