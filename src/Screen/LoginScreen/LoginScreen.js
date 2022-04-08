import React, { PureComponent } from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import Container from '../../Component/Container'
import { Emitter, Images, Loader, Storage } from '../../Helper'
import { styles } from './LoginScreenStyle'
import { AccessToken, GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import APICall from '../../Network/APICall'
import EndPoints from '../../Network/EndPoints'

export default class LoginScreen extends PureComponent {
  onPressSkip = () => {
    this.props.navigation.goBack()
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
          Storage.setUserData(response)
          Emitter.emit('@isLogin', true)
          this.props.navigation.goBack()
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
    return (
      <Container>
        <Image source={Images.background} resizeMode="stretch" style={styles.backgroundImg} />
        <TouchableOpacity style={styles.fbView} onPress={this.onPressFB}>
          <Image style={styles.fbImage} source={Images.fb} resizeMode="contain" />
          <Text style={styles.fbText}>
            Login with <Text style={{ fontWeight: 'bold' }}>Facebook</Text>
          </Text>
        </TouchableOpacity>
        <Image source={Images.bear} resizeMode="contain" style={styles.bearImg} />
        <TouchableOpacity style={styles.skipBtn} onPress={this.onPressSkip}>
          <Text style={styles.skipText}>Skip</Text>
          <Image style={styles.arrowImg} source={Images.arrow} resizeMode="contain" />
        </TouchableOpacity>
      </Container>
    )
  }
}
