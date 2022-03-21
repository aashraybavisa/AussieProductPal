import React, { PureComponent } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import BottomSheet from 'react-native-bottomsheet'
import ImagePicker from 'react-native-image-crop-picker'
import _ from 'lodash'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import AppHeader from '../../Component/AppHeader'
import Container from '../../Component/Container'
import { Images, Color, Utility, Screen } from '../../Helper'
import { styles } from './AddProductScreenStyle'
import { TextInput } from 'react-native-gesture-handler'

export default class AddProductScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedCategory: '100% Aussie',
      imageList: []
    }
  }

  scanBarcode = () => {
    return (
      <TouchableOpacity
        style={styles.scanButtonView}
        onPress={() => this.props.navigation.navigate(Screen.BarcodeScreen)}
      >
        <Image style={styles.scanImage} source={Images.scan} resizeMode="contain" />
        <Text style={styles.scanText}>Scan Barcode</Text>
      </TouchableOpacity>
    )
  }

  onPressDeleteTag = (index) => {
    const { imageList } = this.state
    const tempList = Utility.deepClone(imageList)
    tempList.splice(index, 1)
    console.log(tempList)
    this.setState({ imageList: tempList })
  }

  onPressAddImageButton = () => {
    const { imageList } = this.state
    BottomSheet.showBottomSheetWithOptions(
      {
        options: ['Select from Gallery', 'Open Camera', 'Cancel'],
        title: 'Select Option',
        cancelButtonIndex: 2
      },
      (value) => {
        if (value === 0) {
          ImagePicker.openPicker({
            multiple: true,
            mediaType: 'photo'
          }).then((image) => {
            let tempData = [...imageList, ...image]
            if (tempData.length > 6) {
              tempData = tempData.slice(0, 6)
              this.setState({ imageList: tempData })
            } else {
              this.setState({ imageList: tempData })
            }
          })
        } else if (value === 1) {
          ImagePicker.openCamera({
            mediaType: 'photo'
          }).then((image) => {
            let tempData = [...imageList, image]
            if (tempData.length > 6) {
              tempData = tempData.slice(0, 6)
              this.setState({ imageList: tempData })
            } else {
              this.setState({ imageList: tempData })
            }
          })
        }
      }
    )
  }

  addImage = () => {
    const { imageList } = this.state
    return (
      <View style={styles.addImageMainView}>
        {_.map(imageList, (item, index) => (
          <View style={styles.tagView} key={index.toString()}>
            <Image style={styles.addImageButton} source={{ uri: item.path }} resizeMode="contain" />
            <TouchableOpacity
              onPress={() => this.onPressDeleteTag(index)}
              style={styles.closeImageView}
            >
              <Image resizeMode="contain" source={Images.close} style={styles.closeImg} />
            </TouchableOpacity>
          </View>
        ))}
        {imageList.length !== 6 && (
          <TouchableOpacity
            style={styles.addImageButton}
            onPress={() => {
              this.onPressAddImageButton()
            }}
          >
            <View style={styles.addImageView}>
              <Image style={styles.addImageImage} source={Images.plus} resizeMode="contain" />
            </View>
            <Text style={styles.addImageText}>Add Images</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  categoryButton = (img, lable, color) => {
    const { selectedCategory } = this.state
    const isSelect = selectedCategory === lable
    return (
      <TouchableOpacity
        style={[styles.categoryButton, { backgroundColor: color }]}
        onPress={() => this.setState({ selectedCategory: lable })}
      >
        <View style={styles.categoryFirstView}>
          <Image style={styles.categoryButtonImage} source={img} resizeMode="contain" />
          <Text style={styles.categoryButtonText}>{lable}</Text>
        </View>
        <TouchableOpacity style={styles.tickMarkView}>
          <Image style={styles.tickMark} source={isSelect ? Images.checked : Images.unchecked} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }

  fromDropDown = () => {
    return (
      <View style={styles.fromDropDownMainView}>
        <TouchableOpacity style={styles.brandTouch}>
          <View style={styles.brandView} pointerEvents='none'>
            <TextInput style={styles.brandTextInput} placeholder='Brand' />
          </View>
          <Image style={styles.triangle} source={Images.dropDownIcon} resizeMode='contain' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.brandTouch}>
          <View style={styles.brandView} pointerEvents='none'>
            <TextInput style={styles.brandTextInput} placeholder='Product Category' />
          </View>
          <Image style={styles.triangle} source={Images.dropDownIcon} resizeMode='contain' />
        </TouchableOpacity>
        <TextInput style={styles.productNameView} placeholder='Product Name' />
        <TextInput style={styles.productDiscriptionView} placeholder='Product Description' multiline={true} textAlignVertical='top' />
        <TouchableOpacity style={styles.submitButtonView}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <Container>
        <AppHeader backButton {...this.props} />
        <KeyboardAwareScrollView style={styles.mainView}>
          <Text style={styles.title}>Add Product</Text>
          {this.scanBarcode()}
          {this.addImage()}
          <Text style={styles.secondTitle}>Choose Category</Text>
          <View style={styles.categoryMainView}>
            {this.categoryButton(Images.heart, '100% Aussie', Color.darkGreen)}
            {this.categoryButton(Images.kangaroo, 'True Blue', Color.skyBlue)}
          </View>
          <View style={styles.categoryMainView}>
            {this.categoryButton(Images.map, 'Almost Aussie', Color.yellow)}
            {this.categoryButton(Images.ship, '100% Imported', Color.blackShade)}
          </View>
          {this.fromDropDown()}
        </KeyboardAwareScrollView>
      </Container>
    )
  }
}
