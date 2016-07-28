import React from 'react'
import {
	AppBar,
	Drawer,
	MenuItem,
	FloatingActionButton
} from 'material-ui'
import {
	NavigationArrowBack
} from 'material-ui/svg-icons'
import {
	connect
} from 'react-redux'
import {
	fetchMenu
} from 'actions/menu'
import Item from './Item'

class Menu extends React.Component {
	componentWillMount() {
		this.props.dispatch(fetchMenu())
	}
	renderList() {
		if (this.props.list)
			return this.props.list.map((item, i) => {
				item.close = this.props.close
				return (<Item {...item} key={item.id} linkTo={this.props.linkTo} />)
			})
	}
	render() {
		let {
			isOpen,
			close
		} = this.props
		return (
			<Drawer docked={false} width={240} open={isOpen}>
				<div>
					<AppBar 
						title="Menu" 
						showMenuIconButton={false}
						iconElementLeft={
							<FloatingActionButton><NavigationArrowBack /></FloatingActionButton>
						}
					/>
					{this.renderList()}
				</div>
			</Drawer>
		)
	}
}

Menu.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	close: React.PropTypes.func.isRequired,
	linkTo: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return Object.assign({}, state.menu)
}
export default connect(mapStateToProps)(Menu);