import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  DashBoardScreen,
  SideMenuScreen,
  AddProductScreen,
  SearchProductScreen,
  BarcodeScreen,
  ProductDescriptionScreen,
  LoginScreen
} from '../Screen'
import { Color, Loader, Responsive, Screen } from '../Helper'
import AppLoader from '../Component/AppLoader'

const RootDrawer = createDrawerNavigator()
const RootStack = createStackNavigator()

export default class Router extends PureComponent {
  renderStack = () => {
    return (
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name={Screen.DashBoardScreen} component={DashBoardScreen} />
        <RootStack.Screen name={Screen.SearchProductScreen} component={SearchProductScreen} />
        <RootStack.Screen name={Screen.AddProductScreen} component={AddProductScreen} />
        <RootStack.Screen name={Screen.BarcodeScreen} component={BarcodeScreen} />
        <RootStack.Screen
          name={Screen.ProductDescriptionScreen}
          component={ProductDescriptionScreen}
        />
        <RootStack.Screen name={Screen.LoginScreen} component={LoginScreen} />
      </RootStack.Navigator>
    )
  }

  render() {
    return (
      <SafeAreaProvider>
        <AppLoader ref={(ref) => Loader.setLoader(ref)} />
        <StatusBar barStyle="light-content" backgroundColor={Color.darkGreen} />
        <NavigationContainer>
          <RootDrawer.Navigator
            drawerStyle={{ width: Responsive.width(70) }}
            drawerContent={(props) => <SideMenuScreen {...props} />}
            headerMode="none"
          >
            <RootDrawer.Screen name={Screen.MainStack} component={this.renderStack} />
          </RootDrawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    )
  }
}
