import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Color, Images, Responsive } from '../Helper'

export default class AppHeader extends PureComponent {
  render() {
    const { backButton } = this.props
    return (
      <View style={styles.container}>
        {backButton ? (
          <TouchableOpacity style={styles.backButtonView} onPress={() => this.props.navigation.goBack()} >
            <Image style={styles.backButtonImage} source={Images.backButton} resizeMode="contain" />
          </TouchableOpacity>
        ) : (
          <View style={styles.backButtonView} />
        )}

        <View style={styles.backButtonView}>
          <Image style={styles.logoImage} source={Images.logo} resizeMode="contain" />
        </View>
        <TouchableOpacity
          style={styles.backButtonView}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Image style={styles.menuButtonImage} source={Images.menuButton} resizeMode="contain" />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Responsive.height(6.5),
    width: Responsive.width(100),
    backgroundColor: Color.themeGreen,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButtonView: {
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButtonImage: {
    height: '50%',
    aspectRatio: 1
  },
  logoImage: {
    height: '95%',
    aspectRatio: 1
  },
  menuButtonImage: {
    height: '50%',
    aspectRatio: 1
  }
})
