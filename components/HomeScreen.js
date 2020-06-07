import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Themes } from '../utils/Utils'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.appBar}>
                <View style={{ flex: 2 }}>
                    <TouchableOpacity onPress={() => props.navigate()}>
                        <Icon name="align-left" size={20} color={Themes.black} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Themes.mainColor,
    },
    appBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Themes.mainColor,
        height: 60,
        padding: 15
    },
})
