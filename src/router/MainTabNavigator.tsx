import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ListenNowScreen from '@/pages/ListenNow'
import { createStackNavigator } from '@react-navigation/stack'
import LibraryScreen from '@/pages/Library'
import SearchScreen from '@/pages/Search'

const BottomTab = createBottomTabNavigator()


const ListenNowStack = createStackNavigator()
const ListenNowStackNavigator = () => {
    return (
        <ListenNowStack.Navigator>
            <ListenNowStack.Screen options={{
                title: "Listen Now"
            }}
            name="Listen Now" component={ListenNowScreen} />
        </ListenNowStack.Navigator>
    )
}

const Library = createStackNavigator()
const LibraryNavigator = () => {
    return (
        <Library.Navigator>
            <Library.Screen options={{
                title: "Listen Now"
            }}
            name="Listen Now" component={LibraryScreen} />
        </Library.Navigator>
    )
}

const Search = createStackNavigator()
const SearchNavigator = () => {
    return (
        <Search.Navigator>
            <Search.Screen options={{
                title: "Listen Now"
            }}
            name="Listen Now" component={SearchScreen} />
        </Search.Navigator>
    )
}




const TabNavigator = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Listen Now" component={ListenNowStackNavigator} />
            <BottomTab.Screen name="Library" component={LibraryNavigator} />
            <BottomTab.Screen name="Search" component={SearchNavigator} />
        </BottomTab.Navigator>
    )
}

export default TabNavigator