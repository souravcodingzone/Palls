import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './StackNavigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const RootNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default RootNavigator
