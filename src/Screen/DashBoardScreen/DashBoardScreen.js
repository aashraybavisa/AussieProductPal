import React, { PureComponent } from 'react'
import { FlatList, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import { Images, Color, Utility } from '../../Helper'
import { styles } from './DashBoardScreenStyle'

export default class DashBoardScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          label: 'Ferrero Rocher',
          selectFav: true
        },
        { image: 'https://i.ibb.co/StcK247/Coke-2x.png', label: 'Coca-Cola', selectFav: false },
        { image: 'https://i.ibb.co/PZtLgVX/Granoro-2x.png', label: 'Granoro', selectFav: false },
        { image: 'https://i.ibb.co/9H3r4f4/Mantova-2x.png', label: 'Mantova', selectFav: true },
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          label: 'Ferrero Rocher',
          selectFav: true
        },
        { image: 'https://i.ibb.co/StcK247/Coke-2x.png', label: 'Coca-Cola', selectFav: false },
        { image: 'https://i.ibb.co/PZtLgVX/Granoro-2x.png', label: 'Granoro', selectFav: true }
      ]
    }
  }

  mainButton = (img, lable) => {
    return (
      <TouchableOpacity style={styles.mainButton}>
        <Image style={styles.mainButtonImage} source={img} resizeMode="contain" />
        <Text style={styles.mainButtonText}>{lable}</Text>
      </TouchableOpacity>
    )
  }

  categoryButton = (img, lable, color) => {
    return (
      <TouchableOpacity style={[styles.categoryButton, { backgroundColor: color }]}>
        <Image style={styles.categoryButtonImage} source={img} resizeMode="contain" />
        <Text style={styles.categoryButtonText}>{lable}</Text>
      </TouchableOpacity>
    )
  }

  onPressFavorite = (index) => {
    const tempData = this.state.listData
    tempData[index].selectFav = !tempData[index].selectFav
    this.setState({ listData: Utility.deepClone(tempData) })
  }

  latestProduct = ({ item, index }) => {
    const arrColor = [Color.darkGreen, Color.skyBlue, Color.yellow, Color.blackShade]
    const i = index % 4
    const bcolor = arrColor[i]
    return (
      <TouchableOpacity style={styles.latestProductButton}>
        <View style={[styles.productImageView, { borderColor: bcolor }]}>
          <Image style={styles.productImage} source={{ uri: item.image }} resizeMode="contain" />
        </View>
        <Text style={styles.productText}>{item.label}</Text>
        <TouchableOpacity style={styles.heartView} onPress={() => this.onPressFavorite(index)}>
          <Image
            style={[styles.heartImage, { tintColor: bcolor }]}
            source={item.selectFav ? Images.filledHeart : Images.emptyHeart}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <ScrollView>
          <View style={styles.thinLine} />
          <View style={styles.mainButtonView}>
            {this.mainButton(Images.qrCode, 'Scan Barcode')}
            {this.mainButton(Images.search, 'Search & Browse')}
            {this.mainButton(Images.product, 'Add Product')}
          </View>
          <View style={styles.thickLine} />
          <Text style={styles.bigText}>Product Categories</Text>
          <View style={styles.categoryMainView}>
            {this.categoryButton(Images.heart, '100% Aussie', Color.darkGreen)}
            {this.categoryButton(Images.kangaroo, 'True Blue', Color.skyBlue)}
          </View>
          <View style={styles.categoryMainView}>
            {this.categoryButton(Images.map, 'Almost Aussie', Color.yellow)}
            {this.categoryButton(Images.ship, '100% Imported', Color.blackShade)}
          </View>
          <View style={styles.thickLine} />
          <Text style={styles.bigText}>Latest Products</Text>
          <FlatList
            numColumns={2}
            data={this.state.listData}
            extraData={this.state}
            scrollEnabled={false}
            keyExtractor={(item, index) => `item-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={this.latestProduct}
            columnWrapperStyle={{ justifyContent: 'space-around', flex: 1 }}
          />
        </ScrollView>
      </Container>
    )
  }
}
