import React, { PureComponent } from 'react'
import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import _ from 'lodash'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import { Images, Color } from '../../Helper'
import { styles } from './ProductDescriptionScreenStyle'
import LoadingImage from '../../Component/LoadingImage'
import HTML from 'react-native-render-html'

export default class ProductDescriptionScreen extends PureComponent {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      isFavourite: false
    }
  }

  onPressFav = () => {
    if (!global.isLogin) {
      this.props.navigation.navigate(Screen.LoginScreen)
    }
  }

  render() {
    const { isFavourite } = this.state
    const { item } = this.props.route.params
    const color =
      item.type_id === 22
        ? Color.darkGreen
        : item.type_id === 21
        ? Color.yellow
        : item.type_id === 20
        ? Color.skyBlue
        : Color.blackShade
    const icon =
      item.type_id === 22
        ? Images.ship
        : item.type_id === 21
        ? Images.map
        : item.type_id === 20
        ? Images.kangaroo
        : Images.heart
    const arrImage = [item.image, ...item.other_image]
    return (
      <Container>
        <AppHeader backButton {...this.props} />
        <View style={styles.thinLine} />
        <ScrollView style={styles.mainScrollView} showsVerticalScrollIndicator={false}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>{item.name}</Text>
            <TouchableOpacity style={styles.heartView} onPress={this.onPressFav}>
              <Image
                style={[styles.heartImage, { tintColor: Color.redHeart }]}
                source={isFavourite ? Images.filledHeart : Images.emptyHeart}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.smallTitleText}>{item.brand_name}</Text>
          <Swiper style={styles.swiperView} activeDotColor={Color.darkGreen}>
            {_.map(arrImage, (item, index) => (
              <View style={styles.imageView} key={index.toString()}>
                <LoadingImage style={styles.swiperImage} url={item} resizeMode="contain" />
              </View>
            ))}
          </Swiper>
          <Text style={styles.typeText}>{`${item.category_name} > ${item.sub_category_name}`}</Text>
          <View style={[styles.mainButton, { backgroundColor: color }]}>
            <Image style={styles.mainButtonImage} source={icon} resizeMode="contain" />
            <Text style={styles.mainButtonText}>{item.type_name}</Text>
          </View>
          <Text style={styles.desTitleText}>Description</Text>
          <View style={styles.shortLineUpper} />
          <HTML
            source={{ html: item.detail }}
            baseFontStyle={styles.desText}
            containerStyle={styles.mt20}
          />
        </ScrollView>
      </Container>
    )
  }
}
