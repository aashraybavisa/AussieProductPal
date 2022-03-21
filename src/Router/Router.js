import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
  DashBoardScreen,
  SideMenuScreen,
  AddProductScreen,
  SearchProductScreen,
  BarcodeScreen,
  FilterModel
} from '../Screen'
import { Color, Responsive, Screen } from '../Helper'
import ProductDescriptionScreen from '../Screen/ProductDescriptionScreen/ProductDescriptionScreen'


const RootDrawer = createDrawerNavigator()

const Router = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={Color.darkGreen} />
      <NavigationContainer>
        <RootDrawer.Navigator
          drawerStyle={{ width: Responsive.width(70) }}
          drawerContent={(props) => <SideMenuScreen {...props} />}
          headerMode="none"
        >
          <RootDrawer.Screen name={Screen.DashBoardScreen} component={DashBoardScreen} />
          <RootDrawer.Screen name={Screen.SearchProductScreen} component={SearchProductScreen} />
          <RootDrawer.Screen name={Screen.AddProductScreen} component={AddProductScreen} />
          <RootDrawer.Screen name={Screen.BarcodeScreen} component={BarcodeScreen} />
          <RootDrawer.Screen name={Screen.ProductDescriptionScreen} component={ProductDescriptionScreen} />
        </RootDrawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router
