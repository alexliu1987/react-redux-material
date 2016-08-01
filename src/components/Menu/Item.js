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
		if (this.props.childItem)
			return this.props.childItem.map((item, i) => {
				item.close = this.props.close
				return (<Item {...item} key={item.id} linkTo={this.props.linkTo} />)
			})
	}
	toggleIsOpen() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	linkTo() {
		if (this.props.link)
			this.props.linkTo(this.props.link)
		else
			this.props.linkTo('/')
		this.props.close()
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
		let props = this.props.childItem && this.props.childItem.length ? {
			rightIcon: this.state.isOpen ? <HardwareKeyboardArrowUp /> : <HardwareKeyboardArrowDown />,
			onTouchTap: this.toggleIsOpen.bind(this)
		} : {
			onTouchTap: this.linkTo.bind(this)
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
	childItem: React.PropTypes.array,
	close: React.PropTypes.func.isRequired,
	linkTo: React.PropTypes.func.isRequired
}

export default Item