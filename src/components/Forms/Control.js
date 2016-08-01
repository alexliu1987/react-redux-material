import React from 'react'
import {
	TextField,
	SelectField,
	MenuItem,
	Checkbox
} from 'material-ui'

class Control extends React.Component {
	render() {
		let {
			type
		} = this.props
		if (type === 'text') {
			return (
				<TextField floatingLabelText={this.props.label} style={this.props.style} value={this.props.value} />
			)
		} else if (type === 'select') {
			return (
				<SelectField floatingLabelText={this.props.label} style={this.props.style} value={this.props.value}>
					<MenuItem value={1} primaryText="选项1" />
					<MenuItem value={2} primaryText="选项2" />
					<MenuItem value={3} primaryText="选项3" />
					<MenuItem value={4} primaryText="选项4" />
				</SelectField>
			)
		} else {
			return (<div></div>)
		}
	}
}

export default Control