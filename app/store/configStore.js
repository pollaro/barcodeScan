import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { itemFound } from '../reducers/index'

export default function configStore() {
	let store = createStore(itemFound, applyMiddleware(thunk))
	return store
}
