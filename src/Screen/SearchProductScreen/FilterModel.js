import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, Modal } from 'react-native'
import Container from '../../Component/Container'
import { Color, Images, Responsive, Utility } from '../../Helper'
import _ from 'lodash'

export default class FilterModel extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      buttonActive: 'Brand',
      brand: [],
      category: []
    }
  }

  componentDidMount() {
    this.setFilterData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setFilterData()
    }
  }

  setFilterData = () => {
    const { brand, category, filterBrand, filterCategory } = this.props
    let tempBrand = _.map(brand, (item) => ({ ...item, isSelect: false }))
    let tempCategory = _.map(category, (item) => ({ ...item, isSelect: false }))
    tempBrand = _.orderBy([...tempBrand, ...filterBrand], 'name')
    tempCategory = _.orderBy([...tempCategory, ...filterCategory], 'name')
    this.setState({
      brand: [...tempBrand],
      category: tempCategory
    })
  }

  onPress = (index) => {
    const { buttonActive, brand, category } = this.state
    if (buttonActive === 'Brand') {
      const tempData = _.map(brand, (item) => ({ ...item, isSelect: false }))
      tempData[index].isSelect = !tempData[index].isSelect
      this.setState({ brand: Utility.deepClone(tempData) })
    } else if (buttonActive === 'Category') {
      const tempData = _.map(category, (item) => ({ ...item, isSelect: false }))
      tempData[index].isSelect = !tempData[index].isSelect
      this.setState({ category: Utility.deepClone(tempData) })
    }
  }

  onClearSelection = () => {
    const { onPressClear } = this.props
    const { brand, category } = this.state
    const tempBrand = _.map(brand, (item) => ({ ...item, isSelect: false }))
    const tempCategory = _.map(category, (item) => ({ ...item, isSelect: false }))
    this.setState({
      brand: tempBrand,
      category: tempCategory
    })
    onPressClear()
  }

  onPressClose = () => {
    const { onPressClose } = this.props
    const { brand, category } = this.state
    const tempBrand = _.filter(brand, { isSelect: true })
    const tempCategory = _.filter(category, { isSelect: true })
    onPressClose(tempBrand, tempCategory)
  }

  listItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemTouch} onPress={() => this.onPress(index)}>
        <Image
          style={[
            styles.itemImage,
            { tintColor: item.isSelect ? Color.darkGreen : Color.grayShadeBF }
          ]}
          source={Images.rightSign}
        />
        <Text
          style={[
            styles.itemTextName,
            { color: item.isSelect ? Color.black : Color.backgroundTextColor }
          ]}
        >
          {item.name}
        </Text>
        <Text style={styles.itemTextType}>{item.type}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { buttonActive, brand, category } = this.state
    return (
      <Modal visible={true} transparent={true}>
        <Container>
          <View style={styles.container}>
            <View style={styles.backButtonView}>
              <Image style={styles.logoImage} source={Images.logo} resizeMode="contain" />
            </View>
          </View>
          <View style={styles.thinLine} />
          <View style={styles.titleView}>
            <View style={styles.filterView}>
              <Image style={styles.filterImage} source={Images.filter} />
            </View>
            <Text style={styles.title}>Filter</Text>
            <TouchableOpacity style={styles.clearAllUpView} onPress={this.onClearSelection}>
              <Text style={styles.clearAllUpText}>Clear All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainView}>
            <View style={styles.brandView}>
              <TouchableOpacity
                style={styles.brandTouch}
                onPress={() => {
                  this.setState({ buttonActive: 'Brand' })
                }}
              >
                <Text
                  style={[
                    styles.brandText,
                    { color: buttonActive === 'Brand' ? Color.darkGreen : Color.fonty }
                  ]}
                >
                  Brand
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.brandTouch}
                onPress={() => {
                  this.setState({ buttonActive: 'Category' })
                }}
              >
                <Text
                  style={[
                    styles.brandText,
                    buttonActive === 'Category'
                      ? { color: Color.darkGreen }
                      : { color: Color.fonty }
                  ]}
                >
                  Category
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              style={styles.listView}
              extraData={this.state}
              keyExtractor={(item, index) => `item-${index}`}
              showsVerticalScrollIndicator={false}
              renderItem={this.listItem}
              data={buttonActive === 'Brand' ? brand : category}
            />
          </View>
          <View style={styles.lastButtonView}>
            <TouchableOpacity style={styles.lastCloseTouch} onPress={this.onPressClose}>
              <Text style={styles.lastCloseText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lastCloseTouch} onPress={this.onClearSelection}>
              <Text style={styles.lastClearAllText}>ClearAll</Text>
            </TouchableOpacity>
          </View>
        </Container>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: Responsive.height(6.5),
    width: Responsive.width(100),
    backgroundColor: Color.white,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButtonView: {
    height: Responsive.height(6.5),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: Responsive.height(6.175),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  thinLine: {
    height: 5,
    width: Responsive.width(100),
    backgroundColor: Color.themeGreen
  },
  titleView: {
    height: Responsive.height(7.5),
    width: Responsive.width(100),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15
  },
  title: {
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold',
    flex: 1
  },
  filterView: {
    height: Responsive.height(5.5),
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.darkGreen,
    marginRight: 15
  },
  filterImage: {
    height: Responsive.height(3),
    aspectRatio: 1
  },
  clearAllUpView: {
    height: Responsive.height(5.5),
    width: Responsive.width(15),
    alignItems: 'center',
    justifyContent: 'center'
  },
  clearAllUpText: {
    color: Color.darkGreen
  },
  mainView: {
    flex: 1,
    flexDirection: 'row'
  },
  brandView: {
    marginTop: 30,
    width: Responsive.width(35)
  },
  brandTouch: {
    height: Responsive.height(5),
    justifyContent: 'center',
    marginLeft: 15
  },
  brandText: {
    fontSize: Responsive.font(4)
  },
  listView: {
    width: Responsive.width(65),
    backgroundColor: Color.darkWhite
  },
  itemTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    height: Responsive.height(6)
  },
  itemImage: {
    width: Responsive.width(4),
    height: Responsive.width(4),
    marginHorizontal: 10
  },
  itemTextName: {
    flex: 1,
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold'
  },
  itemTextType: {
    marginRight: 15
  },
  lastButtonView: {
    flexDirection: 'row',
    width: Responsive.width(95),
    height: Responsive.height(6)
  },
  lastCloseTouch: {
    width: Responsive.width(47.5),
    height: Responsive.height(6),
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastCloseText: {
    fontSize: Responsive.font(3.5),
    color: Color.black
  },
  lastClearAllText: {
    fontSize: Responsive.font(3.5),
    color: Color.red
  }
})
