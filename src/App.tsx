import 'react-native-gesture-handler'
import React from 'react'

import { UtilityThemeProvider, Box, Text } from 'react-native-design-utility'
import { theme } from './constants/theme'
import { NavigationContainer } from '@react-navigation/native'
import Router from './router/MainStackNavigator'
const App = () => {
  return <UtilityThemeProvider theme={theme}>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  </UtilityThemeProvider>
}

export default App
