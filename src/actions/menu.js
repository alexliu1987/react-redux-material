import {
	SET_MENU_ISOPEN,
	RECEIVE_MENU_LIST
} from 'actions/const'
import {
	cac
} from '../utils'
import axios from 'axios'

export const setMenuIsOpen = cac(SET_MENU_ISOPEN, 'value')
const receiveMenuList = cac(RECEIVE_MENU_LIST, 'data')

export function fetchMenu() {
	return (dispatch) => {
		axios.request({
				url: '/data/menu.json',
				responseType: 'json'
			})
			.then((data) => {
				if (data)
					return dispatch(receiveMenuList(data))
			})
	}
}