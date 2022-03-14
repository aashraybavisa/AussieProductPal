import React, { Component } from 'react'
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Color, Images } from '../Helper'

export default class LoadingImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      loadingError: false
    }
  }

  render() {
    const { style, url, resizeMode, isPlaceHolder = true } = this.props
    const { isLoading, loadingError } = this.state
    return (
      <View style={style}>
        {url !== null && url !== '' && !loadingError ? (
          <FastImage
            style={style}
            source={{
              uri: url,
              priority: FastImage.priority.high
            }}
            resizeMode={resizeMode || FastImage.resizeMode.stretch}
            onLoadEnd={() => this.setState({ isLoading: false })}
            onError={() => this.setState({ loadingError: true })}
          />
        ) : isPlaceHolder ? (
          <Image style={style} source={Images.placeholder} resizeMode="contain" />
        ) : (
          <View style={style} />
        )}
        {url !== null && isLoading && url !== '' && (
          <View style={styles.loader}>
            <ActivityIndicator color={Color.themeGreen} size="small" />
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Color.themeBlack,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
