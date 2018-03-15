import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { connect } from 'react-redux'
import Camera from 'react-native-camera'
import { checkBarCode } from '../actions/index'

class Scanner extends Component {
	readCode(code) {
		this.props.checkCode(parseInt(code.data))
		if (typeof this.props.found != 'undefined') {
			if (!this.alertpresent) {
				this.alertpresent = true
				this.camera.stopPreview()
				if (this.props.found) {
					let this.alertTxt = 'Found'
				} else {
					let this.alertTxt = 'Not Found'
				}
				Alert.alert({this.alertTxt},
					[
						{'OK',onPress:()=>{
							this.alertpresent = false
							this.camera.startPreview()
							this.props.resetSt()
						}}
					])
			}
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Camera
					style={styles.camera}
					ref={(ref) => (this.camera = ref)}
					onBarCodeRead={this.readCode.bind(this)}
					aspect={Camera.constants.Aspect.fill}
					keepAwake={true}
					onFocusChanged={() => {}}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return { found: state.found }
}

const mapDispatchToProps = (dispatch) => {
	return {
		checkCode: (code) => dispatch(checkBarCode(code))
		resetSt: () => dispatch(resetSt())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		backgroundColor: 'white'
	},
	camera: {
		flex: 1,
		justifyContent: 'center',
		flexDirection: 'row',
		alignItems: 'center'
	}
})
