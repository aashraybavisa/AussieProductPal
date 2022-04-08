import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  mainOuterView: {
    flex: 1
  },
  mainContainer: {
    height: Responsive.height(15),
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 20
  },
  profileView: {
    backgroundColor: Color.white,
    height: Responsive.height(15),
    paddingLeft: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  fbProfileImg: {
    width: Responsive.width(15),
    height: Responsive.width(15),
    backgroundColor: Color.modalOverlay,
    borderRadius: 200,
    overflow: 'hidden'
  },
  profileImage: {
    width: Responsive.width(18),
    height: Responsive.width(18)
  },
  profileText: {
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 20,
    color: Color.black
  },
  flatlistMainView: {
    flexDirection: 'row',
    height: Responsive.height(6),
    alignItems: 'center',
    paddingLeft: 15
  },
  flatlistImage: {
    height: Responsive.height(4),
    width: Responsive.width(10)
  },
  flatlistText: {
    fontSize: Responsive.font(3.5),
    fontWeight: 'bold',
    marginLeft: 10
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
    width: Responsive.height(6)
  },
  fbText: {
    fontSize: Responsive.font(3),
    marginLeft: 10,
    color: Color.white
  }
})
