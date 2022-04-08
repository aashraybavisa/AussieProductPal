import * as React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './SideMenuScreenStyle'
import Container from '../../Component/Container'
import { Emitter, Images, Loader, Screen, Storage } from '../../Helper'
import DropShadow from 'react-native-drop-shadow'
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import APICall from '../../Network/APICall'
import EndPoints from '../../Network/EndPoints'
import LoadingImage from '../../Component/LoadingImage'

const sideMenuData = [
  { image: Images.dhome, label: 'Home', screen: Screen.DashBoardScreen },
  { image: Images.dshopping, label: 'Shopping List', screen: Screen.DashBoardScreen },
  { image: Images.dbarcode, label: 'Scan Barcode', screen: Screen.BarcodeScreen },
  { image: Images.dsearch, label: 'Search & Browse', screen: Screen.SearchProductScreen },
  { image: Images.dproduct, label: 'Add Product', screen: Screen.AddProductScreen },
  { image: Images.dlogout, label: 'Logout', screen: 'logout' }
]

export default class SideMenuScreen extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false,
      name: null,
      profileImage: null
    }
  }

  componentDidMount() {
    this.setState({
      isLogin: !!global.userData,
      name: global.userData?.username,
      profileImage: global.userData?.user_image
    })
    Emitter.addListener('@isLogin', (isLogin) => {
      this.setState({
        isLogin,
        name: global.userData?.username,
        profileImage: global.userData?.user_image
      })
    })
  }

  onPressScreen = (screen) => {
    this.props.navigation.closeDrawer()
    if (screen === 'logout') {
      this.setState({ isLogin: false, name: null, profileImage: null })
      Storage.logout()
      LoginManager.logOut()
      this.props.navigation.navigate(Screen.DashBoardScreen)
    } else {
      this.props.navigation.navigate(screen)
    }
  }

  renderList = ({ item }) => {
    const { isLogin } = this.state
    if (!isLogin && item.screen === 'logout') {
      return
    }
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

  getInfoFromToken = (token) => {
    const PROFILE_REQUEST_PARAMS = {
      fields: {
        string: 'email, id, name, picture'
      }
    }
    const profileRequest = new GraphRequest(
      '/me',
      { token, parameters: PROFILE_REQUEST_PARAMS },
      (error, result) => {
        if (error) {
          Loader.isLoading(false)
        } else {
          console.log(result)
          this.onLoginUser(result)
        }
      }
    )
    new GraphRequestManager().addRequest(profileRequest).start()
  }

  onLoginUser = (params) => {
    const payload = {
      email: params.email,
      username: params.name,
      social_id: params.id,
      image_url: params.picture.data.url
    }
    APICall('post', payload, EndPoints.login, null, true)
      .then((response) => {
        Loader.isLoading(false)
        if (response.status === 200) {
          this.setState({
            name: response.username,
            isLogin: true,
            profileImage: response.user_image
          })
          Storage.setUserData(response)
        }
      })
      .catch(() => Loader.isLoading(false))
  }

  onPressFB = () => {
    this.props.navigation.closeDrawer()
    LoginManager.setLoginBehavior('native_with_fallback')
    LoginManager.logInWithPermissions(['public_profile']).then(
      (result) => {
        if (!result.isCancelled) {
          Loader.isLoading(true)
          AccessToken.getCurrentAccessToken()
            .then((data) => {
              const accessToken = data.accessToken.toString()
              this.getInfoFromToken(accessToken)
            })
            .catch(() => Loader.isLoading(false))
        }
      },
      (error) => {
        console.log('Login fail with error: ' + error)
      }
    )
  }

  render() {
    const { isLogin, name, profileImage } = this.state
    return (
      <Container>
        <View style={styles.mainOuterView}>
          <DropShadow style={styles.mainContainer}>
            <View style={styles.profileView}>
              {profileImage ? (
                <LoadingImage
                  url={profileImage}
                  resizeMode="stretch"
                  style={styles.fbProfileImg}
                  isPlaceHolder={true}
                />
              ) : (
                <Image style={styles.profileImage} source={Images.logo} resizeMode="cover" />
              )}
              <Text style={styles.profileText}>{name || 'Welcome to\nAussie Product Pal'}</Text>
            </View>
          </DropShadow>
          <FlatList
            data={sideMenuData}
            extraData={this.state}
            scrollEnabled={false}
            keyExtractor={(item, index) => `item-${index}`}
            showsVerticalScrollIndicator={false}
            renderItem={this.renderList}
          />
          {!isLogin && (
            <TouchableOpacity style={styles.fbView} onPress={this.onPressFB}>
              <Image style={styles.fbImage} source={Images.fb} resizeMode="contain" />
              <Text style={styles.fbText}>
                Login with <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Container>
    )
  }
}
