import { combineReducers } from 'redux'

const initState = {}

export function itemFound(state = initState, action) {
	switch (action.type) {
		case 'ITEMFOUND':
			return { found: action.response }
		case 'RESET':
			return {}
		default:
			return state
	}
}
