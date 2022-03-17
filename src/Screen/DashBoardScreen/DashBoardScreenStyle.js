import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  thinLine: {
    height: 5,
    width: Responsive.width(100)
  },
  mainButtonView: {
    flexDirection: 'row',
    width: Responsive.width(100),
    backgroundColor: Color.themeGreen,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20
  },
  mainButton: {
    width: Responsive.width(27.5),
    aspectRatio: 1,
    backgroundColor: Color.darkGreen,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  mainButtonImage: {
    height: Responsive.height(5),
    aspectRatio: 1,
    marginBottom: 15
  },
  mainButtonText: {
    color: Color.white,
    fontSize: Responsive.font(2.8)
  },
  thickLine: {
    height: 20,
    width: Responsive.width(100)
  },
  bigText: {
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold',
    color: Color.blackShade,
    marginHorizontal: 12,
    marginBottom: 8
  },
  categoryMainView: {
    width: Responsive.width(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 7
  },
  categoryButton: {
    flexDirection: 'row',
    width: Responsive.width(46.5),
    height: Responsive.height(10),
    borderRadius: 5,
    alignItems: 'center'
  },
  categoryButtonImage: {
    width: Responsive.width(12.5),
    aspectRatio: 1,
    margin: 8
  },
  categoryButtonText: {
    fontWeight: 'bold',
    fontSize: Responsive.font(3.5),
    color: Color.white
  },
  latestProductMainView: {
    width: Responsive.width(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  latestProductButton: {
    width: Responsive.width(46.5),
    height: Responsive.height(20)
  },
  productImageView: {
    width: Responsive.width(46.5),
    height: Responsive.height(13),
    borderWidth: 1,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productImage: {
    width: Responsive.width(20),
    height: Responsive.height(9)
  },
  productText: {
    color: Color.darkBrown,
    fontWeight: 'bold',
    fontSize: Responsive.font(4),
    margin: 5
  },
  heartView: {
    height: Responsive.width(10),
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    position: 'absolute',
    right: 0,
    top: 0
  },
  heartImage: {
    height: Responsive.width(7),
    aspectRatio: 1
  }
})
