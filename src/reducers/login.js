import {
	combineReducers
} from 'redux'
import {
	cr
} from '../utils'
import {
	SET_LOGIN_ISOPEN,
	DO_LOGIN
} from 'actions/const'

export default combineReducers({
	isOpen: cr(false, {
		[SET_LOGIN_ISOPEN](state, {
			value
		}) {
			return value
		}
	}),
	login: cr(false, {
		[SET_LOGIN_ISOPEN](state, {
			value
		}) {
			return value
		}
	})
})