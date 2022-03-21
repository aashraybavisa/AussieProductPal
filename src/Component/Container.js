import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Color } from '../Helper'

export default class Container extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>{this.props.children}</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white
  }
})
