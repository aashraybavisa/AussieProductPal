import React, { PureComponent } from 'react'
import { FlatList, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import _ from 'lodash'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import { Images, Color, Utility } from '../../Helper'
import { styles } from './ProductDescriptionScreenStyle'

export default class ProductDescriptionScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: '100% Aussie',
      isFavourite: true,
      arrImage: [Images.p2, Images.p1, Images.p2, Images.p1, Images.p2]
    }
  }

  render() {
    const { selectedCategory, isFavourite, arrImage } = this.state
    return (
      <Container>
        <AppHeader backButton {...this.props} />
        <View style={styles.thinLine} />
        <ScrollView style={styles.mainScrollView}>
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Colavita Cut Fusilli</Text>
            <TouchableOpacity
              style={styles.heartView}
              onPress={() => this.setState({ isFavourite: !isFavourite })}
            >
              <Image
                style={[styles.heartImage, { tintColor: Color.redHeart }]}
                source={isFavourite ? Images.filledHeart : Images.emptyHeart}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.smallTitleText}>Colavita</Text>
          <Swiper style={styles.swiperView} activeDotColor={Color.darkGreen}>
            {_.map(arrImage, (item, index) => (
              <View style={styles.imageView} key={index.toString()}>
                <Image style={styles.swiperImage} source={item} resizeMode="contain" />
              </View>
            ))}
          </Swiper>
          <Text style={styles.typeText}>{'Snacks > Pasta'}</Text>
          <TouchableOpacity style={styles.mainButton}>
            <Image style={styles.mainButtonImage} source={Images.heart} resizeMode="contain" />
            <Text style={styles.mainButtonText}>{selectedCategory}</Text>
          </TouchableOpacity>
          <Text style={styles.desTitleText}>Description</Text>
          <View style={styles.shortLineUpper} />
          <Text style={styles.desText}>
            {
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
            }
          </Text>
          <View style={styles.shortLineLower} />
          <Text style={styles.codeText}>{'SKU: A8U9SS76IE5'}</Text>
        </ScrollView>
      </Container>
    )
  }
}
