import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  thinLine: {
    height: 5,
    width: Responsive.width(100)
  },
  mainScrollView: {
    width: Responsive.width(95),
    alignSelf: 'center'
  },
  titleView: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleText: {
    fontSize: Responsive.font(6.5),
    flex: 1,
    fontWeight: 'bold',
    color: Color.black
  },
  heartView: {
    width: Responsive.width(7),
    height: Responsive.width(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  heartImage: {
    width: Responsive.width(6),
    height: Responsive.width(6)
  },
  smallTitleText: {
    fontSize: Responsive.font(3.5),
    color: Color.brown
  },
  swiperView: {
    height: Responsive.height(25),
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  swiperImage: {
    height: Responsive.width(30),
    width: Responsive.width(30),
    marginBottom: 30
  },
  typeText: {
    fontSize: Responsive.font(3.5),
    color: Color.black
  },
  mainButton: {
    width: Responsive.width(95),
    height: Responsive.height(7.5),
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  mainButtonImage: {
    height: Responsive.width(10),
    width: Responsive.width(10),
    marginRight: 10
  },
  mainButtonText: {
    color: Color.white,
    fontSize: Responsive.font(4)
  },
  desTitleText: {
    fontWeight: 'bold',
    color: Color.black,
    fontSize: Responsive.font(5)
  },
  shortLineUpper: {
    width: Responsive.width(10),
    height: 2,
    backgroundColor: Color.darkGreen
  },
  desText: {
    fontSize: Responsive.font(3.5),
    marginTop: 5,
    color: Color.black,
    marginBottom: 20
  },
  mt20: {
    marginTop: 20
  }
})
