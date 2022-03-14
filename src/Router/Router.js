import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DashBoardScreen } from '../Screen'
import { Color, Screen } from '../Helper'
import { StatusBar } from 'react-native'

const RootStack = createStackNavigator()

const Router = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={Color.blue} />
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name={Screen.DashBoardScreen} component={DashBoardScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Router
