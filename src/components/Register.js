import React from 'react'
import {
	Dialog,
	FlatButton,
	TextField
} from 'material-ui'
import {
	grey200
} from 'material-ui/styles/colors'

class Register extends React.Component {
	render() {
		let styles = {
			flex: {
				display: 'flex',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
			},
			div: {
				flex: 1,
				textAlign: 'center'
			},
			divider: {
				flex: '0 0 1px',
				height: 220,
				backgroundColor: grey200
			}
		}
		return (
			<div>
				<Dialog 
					title="注册"
					actions={[
						<FlatButton label="取消" primary={true} onTouchTap={this.props.close} />,
						<FlatButton label="注册" primary={true} />
					]}
					modal={true}
					open={this.props.isOpen}
				>
					<div style={styles.flex}>
						<div style={styles.div}>
							<TextField floatingLabelText="用户名" />
							<br />
							<TextField floatingLabelText="密码" type="password" />
							<br />
							<TextField floatingLabelText="确认密码" type="password" />
						</div>
						<div style={styles.divider}></div>
						<div style={styles.div}>
							已有账号？<FlatButton label="立即登录" primary={true} onTouchTap={this.props.login} />
						</div>
					</div>
				</Dialog>
			</div>
		)
	}
}

Register.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	close: React.PropTypes.func.isRequired,
	login: React.PropTypes.func.isRequired
}

export default Register