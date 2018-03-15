import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Scanner from './app/components/scanner'
import thunk from 'redux-thunk'
import configStore from './app/store/configStore'

const store = configStore()

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Scanner />
			</Provider>
		)
	}
}
