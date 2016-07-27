import React from 'react'
import {
	MenuItem
} from 'material-ui'
import {
	HardwareKeyboardArrowDown,
	HardwareKeyboardArrowUp
} from 'material-ui/svg-icons'

class Item extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}
	renderList() {
		if (this.props.children)
			return this.props.children.map((item, i) => {
				item.close = this.props.close
				return (<Item {...item} key={item.id} />)
			})
	}
	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	render() {
		let styles = {
			menuItem: {
				paddingLeft: this.props.level === 1 ? '10px' : '30px',
				cursor: 'pointer'
			},
			childItem: this.state.isOpen ? {} : {
				display: 'none'
			}
		}
		let props = this.props.children && this.props.children.length ? {
			rightIcon: this.state.isOpen ? <HardwareKeyboardArrowUp /> : <HardwareKeyboardArrowDown />,
			onTouchTap: this.toggleIsOpen.bind(this)
		} : {
			onTouchTap: this.props.close
		}
		return (
			<div>
				<MenuItem style={styles.menuItem} primaryText={this.props.name} {...props}></MenuItem>
				<div style={styles.childItem}>
					{this.renderList()}
				</div>
			</div>
		)
	}
}

Item.propTypes = {
	id: React.PropTypes.number.isRequired,
	name: React.PropTypes.string.isRequired,
	level: React.PropTypes.number.isRequired,
	link: React.PropTypes.string,
	children: React.PropTypes.array,
	close: React.PropTypes.func.isRequired
}

export default Item