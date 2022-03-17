import * as React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './SideMenuScreenStyle'
import Container from '../../Component/Container'
import { Images } from '../../Helper'
import SearchProductScreen from '../SearchProductScreen/SearchProductScreen'
import DashBoardScreen from '../DashBoardScreen/DashBoardScreen'

export default class SideMenuScreen extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      listData: [
        { image: Images.dhome, label: 'Home' },
        { image: Images.dshopping, label: 'Shopping List' },
        { image: Images.dbarcode, label: 'Scan Barcode' },
        { image: Images.dsearch, label: 'Search & Browse' },
        { image: Images.dproduct, label: 'Add Product' },
        { image: Images.dlogout, label: 'Logout' }
      ]
    }
  }

  list = ({ item }) => {
    return (
      <TouchableOpacity style={styles.flatlistMainView}>
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
            renderItem={this.list}
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
