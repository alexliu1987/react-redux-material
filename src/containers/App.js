import React from 'react'
import {
	connect
} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {
	Router,
	Route,
	browserHistory
} from 'react-router'
import routes from '../routes'
import Header from './Header'

export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header />
					<Router history={browserHistory}>
						{routes}
					</Router>
				</div>
			</MuiThemeProvider>
		)
	}
}