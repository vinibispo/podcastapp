import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '@/pages/ListenNow'
import TabNavigator from './MainTabNavigator'

const StackNavigator = createStackNavigator()

const Router = () => {
    return (
        <StackNavigator.Navigator headerMode="none">
            <StackNavigator.Screen name="Home" component={TabNavigator}></StackNavigator.Screen>
        </StackNavigator.Navigator>
    )
}

export default Router