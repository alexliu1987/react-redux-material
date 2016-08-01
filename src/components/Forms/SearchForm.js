import React from 'react'
import {
	Paper,
	Toolbar,
	ToolbarGroup,
	ToolbarTitle,
	IconButton,
	TextField,
	RaisedButton
} from 'material-ui'
import {
	HardwareKeyboardArrowDown,
	HardwareKeyboardArrowUp
} from 'material-ui/svg-icons'
import Control from './Control'

class SearchForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: true
		}
	}
	toggleSearchForm() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	setState(state) {
		this.setState(state)
	}
	render() {
		let styles = {
			paper: {
				margin: 30
			},
			searchForm: {
				padding: 30,
				display: this.state.isOpen ? 'flex' : 'none',
				flexFlow: 'row wrap',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center'
			}
		}
		let controlStyle = (flex) => {
			return {
				minWidth: '30%',
				flex: flex,
				marginLeft: 8,
				marginRight: 8
			}
		}
		let icon = this.state.isOpen ? <HardwareKeyboardArrowUp /> : <HardwareKeyboardArrowDown />
		let children =
			<div>
				<Toolbar>
					<ToolbarGroup>
						<ToolbarTitle text="筛选条件" />
					</ToolbarGroup>
					<ToolbarGroup>
						<RaisedButton label="查询" primary={true} style={{display:this.state.isOpen?'block':'none'}} /> 
						<IconButton style={{marginTop:4}} onTouchTap={this.toggleSearchForm.bind(this)}>{icon}</IconButton>
					</ToolbarGroup>
				</Toolbar>
				<div style={styles.searchForm}>
					<Control type="text" label="条件1" style={controlStyle(1)} />
					<Control type="select" label="条件2" style={controlStyle(1)} />
					<TextField style={controlStyle(1)} floatingLabelText="条件3" />
					<TextField style={controlStyle(2)} floatingLabelText="条件4" />
					<TextField style={controlStyle(1)} floatingLabelText="条件5" />
				</div>
			</div>

		return (
			<Paper zDepth={2} style={styles.paper} children={children} />
		)
	}
}

export default SearchForm