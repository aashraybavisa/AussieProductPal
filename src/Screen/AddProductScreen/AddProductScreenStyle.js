import { StyleSheet } from 'react-native'
import { Color, Responsive } from '../../Helper'

export const styles = StyleSheet.create({
  mainView: {
    width: Responsive.width(95),
    alignSelf: 'center'
  },
  title: {
    fontSize: Responsive.font(6.5),
    fontWeight: 'bold',
    margin: 5
  },
  scanButtonView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: Responsive.width(95),
    height: Responsive.height(6),
    borderColor: Color.darkGreen,
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1
  },
  scanImage: {
    width: Responsive.width(10),
    height: Responsive.width(10),
    marginRight: 8
  },
  scanText: {
    color: Color.darkGreen,
    fontSize: Responsive.font(4.5)
  },
  addImageMainView: {
    backgroundColor: Color.darkWhite,
    width: Responsive.width(95),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  addImageButton: {
    width: Responsive.width(27),
    height: Responsive.height(16),
    alignItems: 'center',
    justifyContent: 'center'
  },
  addImageView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: Responsive.width(27),
    height: Responsive.width(22.5),
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Color.darkGreen,
    borderRadius: 5
  },
  addImageImage: {
    height: Responsive.height(2.5),
    width: Responsive.width(5)
  },
  addImageText: {
    fontSize: Responsive.font(4.5)
  },
  secondTitle: {
    color: Color.brown,
    fontSize: Responsive.font(5),
    fontWeight: 'bold',
    marginVertical: 10
  },
  categoryMainView: {
    width: Responsive.width(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 5
  },
  categoryButton: {
    flexDirection: 'row',
    width: Responsive.width(45),
    height: Responsive.height(6.5),
    borderRadius: 5,
    alignItems: 'center'
  },
  categoryFirstView: {
    width: Responsive.width(37.5),
    height: Responsive.height(6.5),
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryButtonImage: {
    width: Responsive.width(10),
    aspectRatio: 1,
    margin: 8
  },
  categoryButtonText: {
    fontWeight: 'bold',
    fontSize: Responsive.font(3),
    color: Color.white
  },
  tickMarkView: {
    width: Responsive.width(10)
  },
  tickMark: {
    height: Responsive.width(5),
    width: Responsive.width(5)
  },
  tagView: {
    backgroundColor: Color.grayShadeE8,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },
  closeImageView: {
    width: Responsive.width(6),
    height: Responsive.width(6),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -5,
    top: -5
  },
  closeImg: {
    width: Responsive.width(5),
    height: Responsive.width(5)
  },
  fromDropDownMainView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  brandTouch: {
    flexDirection: 'row',
    backgroundColor: Color.darkWhite,
    width: Responsive.width(95),
    height: Responsive.height(6),
    marginVertical: 5,
    borderRadius: 5
  },
  brandView: {
    flex: 1
  },
  brandTextInput: {
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold'
  },
  triangle: {
    height: Responsive.width(3),
    width: Responsive.width(3),
    marginRight: 10,
    alignSelf: 'center'
  },
  productNameView: {
    backgroundColor: Color.darkWhite,
    width: Responsive.width(95),
    height: Responsive.height(6),
    marginVertical: 5,
    borderRadius: 5,
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold'
  },
  productDiscriptionView: {
    backgroundColor: Color.darkWhite,
    width: Responsive.width(95),
    height: Responsive.height(15),
    marginVertical: 5,
    borderRadius: 5,
    fontSize: Responsive.font(4.5),
    fontWeight: 'bold'
  },
  submitButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.darkGreen,
    width: Responsive.width(95),
    height: Responsive.height(6),
    marginVertical: 5,
    borderRadius: 5
  },
  submitButtonText: {
    color: Color.white,
    fontSize: Responsive.font(5)
  }
})
