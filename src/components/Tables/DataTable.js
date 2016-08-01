import React from 'react'
import {
	Paper,
	Toolbar,
	ToolbarGroup,
	ToolbarTitle,
	IconButton,
	RaisedButton,
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn
} from 'material-ui'
import {
	HardwareKeyboardArrowDown,
	HardwareKeyboardArrowUp
} from 'material-ui/svg-icons'

class DataTable extends React.Component {
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
	render() {
		let styles = {
			paper: {
				margin: 30
			},
			table: {
				padding: 30
			}
		}
		let icon = this.state.isOpen ? <HardwareKeyboardArrowUp /> : <HardwareKeyboardArrowDown />
		let children =
			<div>
				<Toolbar>
					<ToolbarGroup>
						<ToolbarTitle text="数据列表" />
					</ToolbarGroup>
					<ToolbarGroup>
						<RaisedButton label="新增" primary={true} style={{display:this.state.isOpen?'block':'none'}} /> 
						<IconButton style={{marginTop:4}} onTouchTap={this.toggleSearchForm.bind(this)}>{icon}</IconButton>
					</ToolbarGroup>
				</Toolbar>
				<div style={styles.table}>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHeaderColumn>ID</TableHeaderColumn>
								<TableHeaderColumn>Name</TableHeaderColumn>
								<TableHeaderColumn>Status</TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableRowColumn>1</TableRowColumn>
								<TableRowColumn>张三</TableRowColumn>
								<TableRowColumn>启用</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>2</TableRowColumn>
								<TableRowColumn>李四</TableRowColumn>
								<TableRowColumn>启用</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>3</TableRowColumn>
								<TableRowColumn>王五</TableRowColumn>
								<TableRowColumn>禁用</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
				</div>
				<div style={{clear:'both'}}></div>
			</div>

		return (
			<Paper zDepth={2} style={styles.paper} children={children} />
		)
	}
}

export default DataTable