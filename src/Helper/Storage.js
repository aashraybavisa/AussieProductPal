import AsyncStorage from '@react-native-community/async-storage'

const setUserData = async (userData) => {
  try {
    global.userData = userData
    global.isLogin = true
    AsyncStorage.setItem('@userData', JSON.stringify(userData))
  } catch (e) {
    console.log(e)
  }
}

const getUserData = async () => {
  try {
    global.userData = null
    global.isLogin = false
    const value = await AsyncStorage.getItem('@userData')
    if (value !== null) {
      global.isLogin = true
      global.userData = JSON.parse(value)
    }
    return null
  } catch (e) {
    console.log(e)
  }
}

const logout = async () => {
  try {
    global.userData = null
    global.isLogin = false
    AsyncStorage.removeItem('@userData')
  } catch (e) {
    console.log(e)
  }
}

const Storage = {
  setUserData,
  getUserData,
  logout
}

export default Storage
