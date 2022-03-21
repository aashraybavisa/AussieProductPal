import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import AppHeader from '../../Component/AppHeader'
import { styles } from './BarcodeScreenStyle'
import QRCodeScanner from 'react-native-qrcode-scanner'
import BarcodeMask from 'react-native-barcode-mask'
import { Color, Responsive } from '../../Helper'
import Container from '../../Component/Container'

export default class BarcodeScreen extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSuccess = (e) => {
    console.log(e)
    this.scanner.reactivate()
  }

  render() {
    return (
      <Container>
        <AppHeader backButton {...this.props} />
        <View style={styles.container}>
          <QRCodeScanner
            ref={(node) => {
              this.scanner = node
            }}
            onRead={this.onSuccess}
            checkAndroid6Permissions
            cameraStyle={styles.qrContainer}
            showMarker
            customMarker={
              <BarcodeMask
                edgeColor={Color.darkGreen}
                showAnimatedLine={true}
                width={Responsive.width(60)}
                height={Responsive.width(60)}
                lineAnimationDuration={900}
                useNativeDriver={true}
              />
            }
            topViewStyle={styles.flex0}
            bottomViewStyle={styles.flex0}
          />
        </View>
      </Container>
    )
  }
}
