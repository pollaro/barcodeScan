import axios from 'axios'

const apiUrl = 'http://18.188.19.80/upc'

export function apiRes(bool) {
	return { type: 'ITEMFOUND', response: bool }
}
export function resetSt() {
	return { type: 'RESET' }
}

export function checkBarCode(code) {
	return (dispatch) => {
		axios
			.get(apiUrl, {
				params: {
					upc: code
				}
			})
			.then(function(response) {
				if (response.data.found) {
					dispatch(apiRes(true))
					return true
				} else {
					dispatch(apiRes(false))
					return true
				}
			})
			.catch(function(err) {
				console.warn(err)
			})
	}
}
