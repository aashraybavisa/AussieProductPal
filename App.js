import React, { PureComponent } from 'react'
import Router from './src/Router/Router'
import SplashScreen from 'react-native-splash-screen'

export default class App extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)
  }

  render() {
    return <Router />
  }
}
