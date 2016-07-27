import {
	combineReducers
} from 'redux'
import {
	cr
} from '../utils'
import {
	SET_MENU_ISOPEN,
	RECEIVE_MENU_LIST
} from 'actions/const'

export default combineReducers({
	isOpen: cr(false, {
		[SET_MENU_ISOPEN](state, {
			value
		}) {
			return value
		}
	}),
	list: cr([], {
		[RECEIVE_MENU_LIST](state, {
			data
		}) {
			return data.data
		}
	})
})