import AsyncStorage from '@react-native-community/async-storage'

const setUserData = async (userData) => {
  try {
    await AsyncStorage.setItem('@userData', JSON.stringify(userData))
  } catch (e) {
    console.log(e)
  }
}

const getUserData = async () => {
  try {
    const value = await AsyncStorage.getItem('@userData')
    if (value !== null) {
      return JSON.parse(value)
    }
    return null
  } catch (e) {
    console.log(e)
  }
}

const logout = async () => {
  try {
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
