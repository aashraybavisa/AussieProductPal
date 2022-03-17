import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1
  },
  profileView: {
    height: Responsive.height(15),
    width: Responsive.width(70),
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    height: Responsive.height(7.5),
    aspectRatio: 1,
    margin: '4%',
    borderRadius: 70
  },
  profileText: {
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold',
    color: Color.black
  },
  shadow: {
    height: Responsive.height(2),
    margin: 5,
    elevation: 5
  },
  flatlistMainView: {
    flexDirection: 'row',
    height: Responsive.height(6),
    alignItems: 'center',
    padding: '3%'
  },
  flatlistImage: {
    height: Responsive.height(4),
    width: Responsive.width(10),
    margin: '1%'
  },
  flatlistText: {
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold'
  },
  fbView: {
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: Color.fb,
    height: Responsive.height(6),
    width: Responsive.width(45),
    alignItems: 'center'
  },
  fbImage: {
    height: Responsive.height(3),
    width: Responsive.height(6),
    backgroundColor: Color.fb,
    alignSelf: 'center'
  },
  fbText: {
    fontSize: Responsive.font(3),
    marginLeft: 10,
    color: Color.white
  }
})
