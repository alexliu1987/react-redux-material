import React from 'react'
import {
	connect
} from 'react-redux'
import {
	Router,
	Route,
	browserHistory
} from 'react-router'
import routes from '../routes'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div>
					<Header history={browserHistory} />
					<Router history={browserHistory}>
						{routes}
					</Router>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default connect()(App)