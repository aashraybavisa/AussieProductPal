import React, { PureComponent } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, Modal } from 'react-native'
import Container from '../../Component/Container'
import { Color, Images, Responsive, Utility } from '../../Helper'

export default class FilterModel extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      buttonActive: 'Brand',
      list1: [
        { name: 'Coca cola', type: '200', selected: false },
        { name: 'Lays', type: '400', selected: true },
        { name: 'Coca cola', type: '200', selected: false },
        { name: 'Lays', type: '400', selected: true },
        { name: 'Coca cola', type: '200', selected: false },
        { name: 'Lays', type: '400', selected: true },
        { name: 'Coca cola', type: '200', selected: false },
        { name: 'Lays', type: '400', selected: true }
      ],
      list2: [
        { name: 'Wafers', type: '100', selected: false },
        { name: 'Drinks', type: '300', selected: true },
        { name: 'Wafers', type: '100', selected: true },
        { name: 'Drinks', type: '300', selected: false },
        { name: 'Wafers', type: '100', selected: false },
        { name: 'Drinks', type: '300', selected: true },
        { name: 'Wafers', type: '100', selected: true },
        { name: 'Drinks', type: '300', selected: false },
        { name: 'Wafers', type: '100', selected: false },
        { name: 'Drinks', type: '300', selected: true },
        { name: 'Wafers', type: '100', selected: true },
        { name: 'Drinks', type: '300', selected: false }
      ]
    }
  }

  onPress = (index) => {
    const { buttonActive } = this.state
    if (buttonActive === 'Brand') {
      const tempData = this.state.list1
      tempData[index].selected = !tempData[index].selected
      this.setState({ list1: Utility.deepClone(tempData) })
    } else if (buttonActive === 'Category') {
      const tempData = this.state.list2
      tempData[index].selected = !tempData[index].selected
      this.setState({ list2: Utility.deepClone(tempData) })
    }
  }

  listItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.itemTouch} onPress={() => this.onPress(index)}>
        <Image
          style={[
            styles.itemImage,
            item.selected === true
              ? { tintColor: Color.darkGreen }
              : { tintColor: Color.grayShadeBF }
          ]}
          source={Images.rightSign}
        />
        <Text
          style={[
            styles.itemTextName,
            item.selected === true ? { color: Color.black } : { color: Color.backgroundTextColor }
          ]}
        >
          {item.name}
        </Text>
        <Text style={styles.itemTextType}>{item.type}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { buttonActive } = this.state
    const {onPressClose} = this.props
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
            <TouchableOpacity style={styles.clearAllUpView}>
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
                    buttonActive === 'Brand' ? { color: Color.darkGreen } : { color: Color.fonty }
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
              data={buttonActive === 'Brand' ? this.state.list1 : this.state.list2}
            />
          </View>
          <View style={styles.lastButtonView}>
            <TouchableOpacity style={styles.lastCloseTouch} onPress={() => onPressClose()}>
              <Text style={styles.lastCloseText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.lastCloseTouch}>
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
