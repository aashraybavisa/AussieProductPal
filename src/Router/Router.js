import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DashBoardScreen } from '../Screen'
import { Color, Responsive, Screen } from '../Helper'
import { StatusBar } from 'react-native'
import SideMenuScreen from '../Screen/SideMenu/SideMenuScreen'
import SearchProductScreen from '../Screen/SearchProductScreen/SearchProductScreen'

const RootDrawer = createDrawerNavigator()

const Router = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle='light-content' backgroundColor={Color.darkGreen} />
      <NavigationContainer>
        <RootDrawer.Navigator drawerStyle={{ width: Responsive.width(70) }} drawerContent={props => <SideMenuScreen {...props}/>} headerMode="none">
          {/* <RootDrawer.Screen name={Screen.DashBoardScreen} component={DashBoardScreen} /> */}
          <RootDrawer.Screen name={Screen.SearchProduct} component={SearchProductScreen} />
        </RootDrawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router
