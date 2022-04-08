import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, LogBox } from 'react-native'
import Router from './src/Router/Router'
import SplashScreen from 'react-native-splash-screen'
import { Storage } from './src/Helper'

LogBox.ignoreAllLogs()
console.reportErrorsAsExceptions = false
Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false
TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {}
TouchableOpacity.defaultProps.activeOpacity = 0.8

export default class App extends PureComponent {
  componentDidMount() {
    Storage.getUserData()
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }

  render() {
    return (
      <>
        <Router />
      </>
    )
  }
}
