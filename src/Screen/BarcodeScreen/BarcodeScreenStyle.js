import { StyleSheet } from 'react-native'
import { Color, CommonStyles, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  qrContainer: {
    width: Responsive.width(100),
    height: Responsive.height(Responsive.isIPhoneX ? 98 : 93)
  },
  flex0: {
    flex: 0
  }
})
