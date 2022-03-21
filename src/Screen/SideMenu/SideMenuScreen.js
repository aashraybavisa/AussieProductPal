import * as React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './SideMenuScreenStyle'
import Container from '../../Component/Container'
import { Images, Screen } from '../../Helper'
import SearchProductScreen from '../SearchProductScreen/SearchProductScreen'
import DashBoardScreen from '../DashBoardScreen/DashBoardScreen'
import AddProductScreen from '../AddProductScreen/AddProductScreen'

export default class SideMenuScreen extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        { image: Images.dhome, label: 'Home', screen: Screen.DashBoardScreen },
        { image: Images.dshopping, label: 'Shopping List', screen: Screen.DashBoardScreen },
        { image: Images.dbarcode, label: 'Scan Barcode', screen: Screen.BarcodeScreen },
        { image: Images.dsearch, label: 'Search & Browse', screen: Screen.SearchProductScreen },
        { image: Images.dproduct, label: 'Add Product', screen: Screen.AddProductScreen },
        { image: Images.dlogout, label: 'Logout', screen: 'logout' }
      ]
    }
  }

  onPressScreen = (screen) => {
    this.props.navigation.closeDrawer()
    if (screen === 'logout') {
      this.props.navigation.navigate(Screen.DashBoardScreen)
    } else {
      this.props.navigation.navigate(screen)
    }
  }

  renderList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.flatlistMainView}
        onPress={() => this.onPressScreen(item.screen)}
      >
        <Image source={item.image} style={styles.flatlistImage} resizeMode="contain" />
        <Text style={styles.flatlistText}>{item.label}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Container>
        <View style={styles.mainOuterView}>
          <View style={styles.profileView}>
            <Image
              style={styles.profileImage}
              source={{
                uri:
                  'https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg'
              }}
              resizeMode="contain"
            />
            <Text style={styles.profileText}>John Doe</Text>
          </View>
          <View style={styles.shadow} />
          <FlatList
            data={this.state.listData}
            extraData={this.state}
            scrollEnabled={false}
            keyExtractor={(item, index) => `item-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderList}
          />
          <TouchableOpacity style={styles.fbView}>
            <Image style={styles.fbImage} source={Images.fb} resizeMode="contain" />
            <Text style={styles.fbText}>
              Login with <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}
