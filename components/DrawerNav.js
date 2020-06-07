import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Animated from 'react-native-reanimated'
import HomeScreen from './HomeScreen'
import DrawerContent from './DrawerContent'
import { Themes } from '../utils/Utils'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerScreens = ({ navigation, style }) => {

    return (
        <Animated.View animated style={[{ flex: 1, overflow: 'hidden' }, style]}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Home">
                    {props => <HomeScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen component={HomeScreen} name="Account" />
                <Stack.Screen component={HomeScreen} name="Appointments" />
                <Stack.Screen component={HomeScreen} name="TestBookings" />
                <Stack.Screen component={HomeScreen} name="Orders" />
                <Stack.Screen component={HomeScreen} name="Consultations" />
                <Stack.Screen component={HomeScreen} name="MyDoctors" />
                <Stack.Screen component={HomeScreen} name="MedicalRecords" />
                <Stack.Screen component={HomeScreen} name="FAQ" />
                <Stack.Screen component={HomeScreen} name="PaymentsNCash" />
                <Stack.Screen component={HomeScreen} name="Support" />
            </Stack.Navigator>
        </Animated.View>
    )
}


export default () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8]
    });
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 25]
    });
    const screenStyles = { transform: [{ scale }], borderRadius };
    return (
        <View style={{ flex: 1, backgroundColor: Themes.drawerColor }}>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerStyle={{ width: '82%', backgroundColor: "transparent" }}
                    overlayColor="transparent"
                    initialRouteName="Home"
                    drawerType="slide"
                    drawerContentOptions={{
                        activeBackgroundColor: 'transparent',
                        contentContainerStyle: {
                            flex: 1,
                        }
                    }}
                    sceneContainerStyle={{ backgroundColor: Themes.drawerColor }}
                    drawerContent={props => {
                        setProgress(props.progress);
                        return (<DrawerContent {...props} />)
                    }}>
                    <Drawer.Screen name="Home">
                        {props => <DrawerScreens {...props} style={screenStyles} />}
                    </Drawer.Screen>
                </Drawer.Navigator>
                </NavigationContainer>
        </View>
    )
}
