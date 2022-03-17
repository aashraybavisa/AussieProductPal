import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  thinLine: {
    height: 5,
    width: Responsive.width(100)
  },
  mainView: {
    flex: 1,
    backgroundColor: Color.themeGreen
  },
  searchMainView: {
    height: Responsive.height(12),
    width: Responsive.width(100),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  searchView: {
    height: Responsive.height(6),
    width: Responsive.width(80),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Color.white
  },
  searchIconView: {
    height: Responsive.height(6),
    width: Responsive.width(10),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchImage: {
    width: Responsive.width(6),
    height: Responsive.height(5),
    tintColor: Color.darkGreen
  },
  verticalLine: {
    height: Responsive.height(4),
    width: 1,
    backgroundColor: Color.darkGreen
  },
  searchTextInput: {
    padding: 10,
    fontSize: Responsive.font(4.5),
    color: Color.darkGreen
  },
  filterView: {
    height: Responsive.height(6),
    aspectRatio: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.darkGreen
  },
  filterImage: {
    height: Responsive.height(3),
    aspectRatio: 1
  },
  listTouch: {
    flexDirection: 'row',
    height: Responsive.height(11),
    width: Responsive.width(95),
    borderRadius: 5,
    backgroundColor: Color.white,
    margin: 4,
    padding: 5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainImage: {
    height: Responsive.height(8),
    width: Responsive.width(18),
    margin: 10
  },
  mainTextView: {
    flex: 1
  },
  row1: {
    color: Color.black,
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold'
  },
  row2: {
    color: Color.brown,
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold'
  },
  row3: {
    color: Color.black,
    fontSize: Responsive.font(3)
  },
  categoryView: {
    height: Responsive.height(10),
    width: Responsive.width(22),
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  heartView: {
    height: Responsive.width(8),
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1
  },
  heartImage: {
    height: Responsive.width(7),
    aspectRatio: 1
  },
  categoryButton: {
    flexDirection: 'row',
    width: Responsive.width(22.5),
    height: Responsive.height(3.5),
    backgroundColor: Color.darkGreen,
    borderRadius: 5,
    alignItems: 'center'
  },
  categoryButtonImage: {
    width: Responsive.width(6),
    aspectRatio: 1,
    margin: 3
  },
  categoryButtonText: {
    fontWeight: 'bold',
    fontSize: Responsive.font(2),
    color: Color.white
  }
})
