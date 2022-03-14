import React, { PureComponent } from 'react'
import { View, StyleSheet } from 'react-native'
import { Responsive, Color } from '../Helper'

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
    width: Responsive.width(100),
    height: Responsive.height(100)
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.black
  }
})
