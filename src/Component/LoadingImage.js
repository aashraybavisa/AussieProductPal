import React, { PureComponent } from 'react'
import { View, StyleSheet, ActivityIndicator, Image } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Color, Images } from '../Helper'

interface LoadingImageProps {
  style: Object;
  imageStyle: Object;
  url: String;
  resizeMode: String;
  isPlaceHolder: Boolean;
}

export default class LoadingImage extends PureComponent<LoadingImageProps> {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      loadingError: false
    }
  }

  render() {
    const { style, url, resizeMode, isPlaceHolder = true, imageStyle } = this.props
    const { isLoading, loadingError } = this.state
    return (
      <View style={style}>
        {url !== null && url !== '' && !loadingError ? (
          <FastImage
            style={[styles.imgSize, imageStyle]}
            source={{
              uri: url,
              priority: FastImage.priority.high
            }}
            resizeMode={resizeMode}
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
            <ActivityIndicator color={Color.darkGreen} size="small" />
          </View>
        )}
      </View>
    )
  }
}

LoadingImage.defaultProps = {
  style: {},
  imageStyle: {},
  url: null,
  resizeMode: 'contain',
  isPlaceHolder: true
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
  },
  imgSize: {
    width: '100%',
    height: '100%'
  }
})
