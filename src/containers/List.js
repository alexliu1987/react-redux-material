import React from 'react'
import SearchForm from 'components/Forms/SearchForm'
import DataTable from 'components/Tables/DataTable'

class List extends React.Component {
	render() {
		return (
			<div>
				<SearchForm />
				<DataTable />
			</div>
		)
	}
}

export default List