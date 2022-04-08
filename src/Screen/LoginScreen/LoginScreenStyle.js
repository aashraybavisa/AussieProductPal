import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  backgroundImg: {
    width: Responsive.width(100),
    height: Responsive.height(75)
  },
  bearImg: {
    width: Responsive.width(25),
    height: Responsive.width(20),
    alignSelf: 'center'
  },
  fbView: {
    marginTop: -10,
    marginBottom: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Color.fb,
    height: Responsive.height(6),
    width: Responsive.width(45),
    alignItems: 'center'
  },
  fbImage: {
    height: Responsive.height(3),
    width: Responsive.height(6)
  },
  fbText: {
    fontSize: Responsive.font(3),
    marginLeft: 10,
    color: Color.white
  },
  arrowImg: {
    width: Responsive.width(4),
    height: Responsive.width(5),
    marginLeft: 5
  },
  skipBtn: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 15,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  skipText: {
    fontSize: Responsive.font(3.5),
    color: Color.darkGreen
  }
})
