import Color from './Color'
import { StyleSheet } from 'react-native'

const CommonStyles = StyleSheet.create({
  shadow: {
    shadowColor: Color.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  },
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CommonStyles
