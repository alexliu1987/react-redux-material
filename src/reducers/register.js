import {
	combineReducers
} from 'redux'
import {
	cr
} from '../utils'
import {
	SET_REGISTER_ISOPEN
} from 'actions/const'

export default combineReducers({
	isOpen: cr(false, {
		[SET_REGISTER_ISOPEN](state, {
			value
		}) {
			return value
		}
	})
})