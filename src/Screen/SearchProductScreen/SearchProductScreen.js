import React, { PureComponent } from 'react'
import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import LoadingImage from '../../Component/LoadingImage'
import { Images, Color, Screen, Loader } from '../../Helper'
import APICall from '../../Network/APICall'
import EndPoints from '../../Network/EndPoints'
import FilterModel from './FilterModel'
import { styles } from './SearchProductScreenStyle'

export default class SearchProductScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [],
      brand: [],
      category: [],
      filterModalVisible: false,
      searchText: '',
      filterBrand: [],
      filterCategory: []
    }
  }

  async componentDidMount() {
    const { searchText } = this.state
    const { params } = this.props.route
    const payload = {
      name: searchText,
      barcode_number: '',
      brand_id: '',
      sub_category_id: '',
      category_id: '',
      type_id: params?.typeId || ''
    }
    Loader.isLoading(true)
    const endPoint = `${EndPoints.productsList}?offset=${0}&take=100`
    const list = APICall('post', payload, endPoint, null, true)
    const brand = APICall('get', null, EndPoints.brand)
    const category = APICall('get', null, EndPoints.categoriesList)
    Promise.all([list, brand, category])
      .then((response) => {
        let listData = []
        let brand = []
        let category = []
        if (response[0].status === 200) {
          listData = response[0].data
        }
        if (response[1].status === 200) {
          brand = response[1].data
        }
        if (response[2].status === 200) {
          category = response[2].data
        }
        this.setState({ listData, brand, category })
        Loader.isLoading(false)
      })
      .catch(() => Loader.isLoading(false))
  }

  getProductList = () => {
    const { searchText, filterBrand, filterCategory } = this.state
    const { params } = this.props.route
    const payload = {
      name: searchText,
      barcode_number: '',
      brand_id: filterBrand[0]?.id || '',
      sub_category_id: '',
      category_id: filterCategory[0]?.id || '',
      type_id: params?.typeId || ''
    }
    Loader.isLoading(true)
    const endPoint = `${EndPoints.productsList}?offset=${0}&take=100`
    APICall('post', payload, endPoint, null, true)
      .then((response) => {
        Loader.isLoading(false)
        if (response.status === 200) {
          this.setState({ listData: response.data })
        }
      })
      .catch(() => Loader.isLoading(false))
  }

  onPressClose = (brand, category) => {
    this.setState(
      { filterModalVisible: false, filterBrand: brand, filterCategory: category },
      () => {
        this.getProductList()
      }
    )
  }

  onPressClear = () => {
    this.setState({ filterBrand: [], filterCategory: [] })
  }

  onPressFavorite = (index) => {
    if (!global.isLogin) {
      this.props.navigation.navigate(Screen.LoginScreen)
    }
  }

  product = ({ item, index }) => {
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
    return (
      <TouchableOpacity
        style={styles.listTouch}
        onPress={() => this.props.navigation.navigate(Screen.ProductDescriptionScreen, { item })}
      >
        <LoadingImage style={styles.mainImage} url={item.image} resizeMode="contain" />
        <View style={styles.mainTextView}>
          <Text style={styles.row1} numberOfLines={2}>
            {item.name}
          </Text>
          <Text style={styles.row2} numberOfLines={2}>
            {item.brand_name}
          </Text>
          <Text
            style={styles.row3}
            numberOfLines={2}
          >{`${item.category_name} > ${item.sub_category_name}`}</Text>
        </View>
        <View style={styles.categoryView}>
          <TouchableOpacity style={styles.heartView} onPress={() => this.onPressFavorite(index)}>
            <Image
              style={[styles.heartImage, { tintColor: color }]}
              source={item.isWishlist ? Images.filledHeart : Images.emptyHeart}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={[styles.categoryButton, { backgroundColor: color }]}>
            <Image style={styles.categoryButtonImage} source={icon} resizeMode="contain" />
            <Text style={styles.categoryButtonText}>{item.type_name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  search = () => {
    const { searchText } = this.state
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
            onChangeText={(searchText) => this.setState({ searchText })}
            underlineColorAndroid="transparent"
            returnKeyType="search"
            value={searchText}
            onSubmitEditing={() => this.getProductList()}
          />
        </View>
        <TouchableOpacity
          style={styles.filterView}
          onPress={() => {
            this.setState({ filterModalVisible: true })
          }}
        >
          <Image style={styles.filterImage} source={Images.filter} />
        </TouchableOpacity>
      </View>
    )
  }

  // renderFooter = () =>

  render() {
    const { filterModalVisible, brand, category, filterBrand, filterCategory } = this.state
    return (
      <Container>
        <AppHeader {...this.props} />
        <View style={styles.thinLine} />
        <View style={styles.mainView}>
          {this.search()}
          <FlatList
            data={this.state.listData}
            extraData={this.state}
            keyExtractor={(_, index) => `item-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={this.product}
          />
        </View>
        {filterModalVisible && (
          <FilterModel
            onPressClose={this.onPressClose}
            onPressClear={this.onPressClear}
            brand={brand}
            category={category}
            filterBrand={filterBrand}
            filterCategory={filterCategory}
          />
        )}
      </Container>
    )
  }
}
