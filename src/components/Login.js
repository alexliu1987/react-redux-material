import React from 'react'
import {
	Dialog,
	FlatButton,
	TextField
} from 'material-ui'
import {
	grey200
} from 'material-ui/styles/colors'

class Login extends React.Component {
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
				height: 160,
				backgroundColor: grey200
			}
		}
		return (
			<div>
				<Dialog 
					title="登录"
					actions={[
						<FlatButton label="取消" primary={true} onTouchTap={this.props.close} />,
						<FlatButton label="登录" primary={true} />
					]}
					modal={true}
					open={this.props.isOpen}
				>
					<div style={styles.flex}>
						<div style={styles.div}>
							<TextField floatingLabelText="用户名" />
							<br />
							<TextField floatingLabelText="密码" type="password" />
						</div>
						<div style={styles.divider}></div>
						<div style={styles.div}>
							没有账号？<FlatButton label="立即注册" primary={true} onTouchTap={this.props.register} />
						</div>
					</div>
				</Dialog>
			</div>
		)
	}
}

Login.propTypes = {
	isOpen: React.PropTypes.bool.isRequired,
	close: React.PropTypes.func.isRequired,
	register: React.PropTypes.func.isRequired
}

export default Login