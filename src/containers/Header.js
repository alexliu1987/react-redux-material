import React from 'react'
import {
	AppBar,
	Badge,
	IconButton
} from 'material-ui'
import {
	SocialNotifications,
	SocialPerson
} from 'material-ui/svg-icons'
import {
	red50,
	blue50
} from 'material-ui/styles/colors'
import {
	connect
} from 'react-redux'
import {
	setMenuIsOpen
} from 'actions/menu'
import {
	setLoginIsOpen
} from 'actions/login'
import {
	setRegisterIsOpen
} from 'actions/register'
import Login from 'components/Login'
import Register from 'components/Register'
import Menu from 'components/Menu/Menu'

class Header extends React.Component {
	openMenu() {
		this.props.dispatch(setMenuIsOpen(true))
	}
	closeMenu() {
		this.props.dispatch(setMenuIsOpen(false))
	}
	openLogin() {
		this.props.dispatch(setLoginIsOpen(true))
		this.props.dispatch(setRegisterIsOpen(false))
	}
	closeLogin() {
		this.props.dispatch(setLoginIsOpen(false))
	}
	openRegister() {
		this.props.dispatch(setRegisterIsOpen(true))
		this.props.dispatch(setLoginIsOpen(false))
	}
	closeRegister() {
		this.props.dispatch(setRegisterIsOpen(false))
	}
	render() {
		return (
			<header className="header">
				<Login isOpen={this.props.loginIsOpen} close={this.closeLogin.bind(this)} register={this.openRegister.bind(this)} />
				<Register isOpen={this.props.registerIsOpen} close={this.closeRegister.bind(this)} login={this.openLogin.bind(this)} />
				<Menu isOpen={this.props.menuIsOpen} close={this.closeMenu.bind(this)} />
				<AppBar 
					title="Boilerplate"
					onLeftIconButtonTouchTap={this.openMenu.bind(this)}
					iconElementRight={
						<div>
							<Badge badgeContent="5" primary={true} style={{padding:0}}>
								<IconButton><SocialNotifications color={red50} /></IconButton>
							</Badge>
							<IconButton onTouchTap={this.openLogin.bind(this)}><SocialPerson color={blue50} /></IconButton>
						</div>
					}
				/>
			</header>
		)
	}
}

function mapStateToProps(state) {
	return {
		loginIsOpen: state.login.isOpen,
		registerIsOpen: state.register.isOpen,
		menuIsOpen: state.menu.isOpen
	}
}
export default connect(mapStateToProps)(Header);