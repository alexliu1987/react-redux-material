import {
	SET_LOGIN_ISOPEN,
	DO_LOGIN
} from 'actions/const'
import {
	cac
} from '../utils'

export const setLoginIsOpen = cac(SET_LOGIN_ISOPEN, 'value')
export const doLogin = cac(DO_LOGIN, 'user')