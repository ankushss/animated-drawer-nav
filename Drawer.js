import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import HomeScreen from './components/HomeScreen';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return (
        <Drawer.Navigator
        drawerType="slide">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Appointment" component={HomeScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav

const styles = StyleSheet.create({})
