import React, { PureComponent } from 'react'
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import { Images, Color, Utility } from '../../Helper'
import { styles } from './SearchProductScreenStyle'

export default class SearchProductScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          row1: 'Premium Chocolate',
          row2: 'Ferrero Rocher',
          row3: 'Snacks > Sweets',
          selectFav: true,
          color: Color.darkGreen,
          catImage: Images.heart,
          catText: '100% Aussie'
        },
        {
          image: 'https://i.ibb.co/StcK247/Coke-2x.png',
          row1: 'Coca-Cola',
          row2: 'Pepsico',
          row3: 'Beverages > Soft Drinks',
          selectFav: false,
          color: Color.skyBlue,
          catImage: Images.kangaroo,
          catText: 'Sky Blue'
        },
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          row1: 'Premium Chocolate',
          row2: 'Ferrero Rocher',
          row3: 'Snacks > Sweets',
          selectFav: true,
          color: Color.blackShade,
          catImage: Images.ship,
          catText: '100% Imported'
        },
        {
          image: 'https://i.ibb.co/StcK247/Coke-2x.png',
          row1: 'Coca-Cola',
          row2: 'Pepsico',
          row3: 'Beverages > Soft Drinks',
          selectFav: false,
          color: Color.yellow,
          catImage: Images.map,
          catText: 'Almost Aussie'
        },
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          row1: 'Premium Chocolate',
          row2: 'Ferrero Rocher',
          row3: 'Snacks > Sweets',
          selectFav: true,
          color: Color.darkGreen,
          catImage: Images.heart,
          catText: '100% Aussie'
        },
        {
          image: 'https://i.ibb.co/StcK247/Coke-2x.png',
          row1: 'Coca-Cola',
          row2: 'Pepsico',
          row3: 'Beverages > Soft Drinks',
          selectFav: false,
          color: Color.skyBlue,
          catImage: Images.kangaroo,
          catText: 'Sky Blue'
        },
        {
          image: 'https://i.ibb.co/V9DzVch/Ferrero-2x.png',
          row1: 'Premium Chocolate',
          row2: 'Ferrero Rocher',
          row3: 'Snacks > Sweets',
          selectFav: true,
          color: Color.blackShade,
          catImage: Images.ship,
          catText: '100% Imported'
        },
        {
          image: 'https://i.ibb.co/StcK247/Coke-2x.png',
          row1: 'Coca-Cola',
          row2: 'Pepsico',
          row3: 'Beverages > Soft Drinks',
          selectFav: false,
          color: Color.yellow,
          catImage: Images.map,
          catText: 'Almost Aussie'
        }
      ]
    }
  }

  onPressFavorite = (index) => {
    const tempData = this.state.listData
    tempData[index].selectFav = !tempData[index].selectFav
    this.setState({ listData: Utility.deepClone(tempData) })
  }

  category = (item) => {
    return (
      <View style={[styles.categoryButton, { backgroundColor: item.color }]}>
        <Image style={styles.categoryButtonImage} source={item.catImage} resizeMode="contain" />
        <Text style={styles.categoryButtonText}>{item.catText}</Text>
      </View>
    )
  }

  product = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.listTouch}>
        <Image style={styles.mainImage} source={{ uri: item.image }} resizeMode="contain" />
        <View style={styles.mainTextView}>
          <Text style={styles.row1}>{item.row1}</Text>
          <Text style={styles.row2}>{item.row2}</Text>
          <Text style={styles.row3}>{item.row3}</Text>
        </View>
        <View style={styles.categoryView}>
          <TouchableOpacity style={styles.heartView} onPress={() => this.onPressFavorite(index)}>
            <Image
              style={[styles.heartImage, { tintColor: item.color }]}
              source={item.selectFav ? Images.filledHeart : Images.emptyHeart}
              resizeMode="contain"
            />
          </TouchableOpacity>
          {this.category(item)}
        </View>
      </TouchableOpacity>
    )
  }

  search = () => {
    return (
      <View style={styles.searchMainView}>
        <View style={styles.searchView}>
          <View style={styles.searchIconView}>
            <Image style={styles.searchImage} source={Images.search} resizeMode="contain" />
          </View>
          <View style={styles.verticalLine} />
          <TextInput
            style={styles.searchTextInput}
            placeholder="Search your Product"
            placeholderTextColor={Color.darkGreen}
          />
        </View>
        <TouchableOpacity style={styles.filterView}>
          <Image style={styles.filterImage} source={Images.filter} />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <AppHeader {...this.props} />
        <View style={styles.thinLine} />
        <View style={styles.mainView}>
          {this.search()}
          <FlatList
            data={this.state.listData}
            extraData={this.state}
            keyExtractor={(item, index) => `item-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={this.product}
          />
        </View>
      </Container>
    )
  }
}
