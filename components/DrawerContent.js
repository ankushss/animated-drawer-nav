import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text, TouchableRipple } from 'react-native-paper'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import { Themes } from '../utils/Utils'

let initialRender = true;

export default class DrawerContent extends Component {
    render() {
        if (initialRender) {
            initialRender = false;
            return null;
        }          
        return ( 
                <DrawerContentScrollView showsVerticalScrollIndicator={false}> 
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <View style={{ width: Themes.drawerImageSize, height: Themes.drawerImageSize, borderRadius: Themes.drawerImageSize / 6 }}>
                                    <Image
                                        source={require('../assets/Ankush.jpg')}
                                        style={{ width: Themes.drawerImageSize, height: Themes.drawerImageSize, borderRadius: Themes.drawerImageSize / 6 }} />
                                </View>
                                <TouchableRipple
                                    borderless
                                    delayPressIn={0}
                                    onPress={() => { this.props.navigation.navigate('Account') }}
                                    style={{ borderRadius: 10 }}
                                    accessibilityComponentType="button"
                                    accessibilityRole="button">
                                    <View style={{ marginLeft: 15, flexDirection: 'column', overflow: 'scroll', flex: 1, marginRight: 45 }}>
                                        <Text style={styles.title}>Ankush S Sarvade</Text>
                                        <View>
                                            <Text style={styles.caption}>View and Edit profile</Text>
                                            <View style={styles.drawerLine}>
                                                <View style={styles.completedLine} />
                                                <View style={styles.uncompletedLine} />
                                            </View>
                                            <Text style={styles.caption2}>20% completed</Text>
                                        </View>
                                    </View>

                                </TouchableRipple>
                            </View>
                        </View>

                        <View style={styles.drawerSection}>
                            <Text style={styles.drawerTitle}>Services</Text>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { this.props.navigation.navigate('Appointments') }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Appointments</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Test Bookings</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Orders</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Consultations</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>My Doctors</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Medical Records</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                        <View style={styles.sectionSeperator} />
                        <View style={styles.drawerSection}>
                            <Text style={styles.drawerTitle}>Customer</Text>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>FAQ</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Payments &amp;  Healthcash</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Support</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                        <View style={styles.sectionSeperator} />
                        <View style={styles.drawerSection}>
                            <Text style={styles.drawerTitle}>Others</Text>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Read about health</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Help Center</Text>
                                </View>
                            </TouchableRipple>
                            <TouchableRipple
                                borderless
                                delayPressIn={0}
                                onPress={() => { }}
                                style={{ borderRadius: 10 }}
                                accessibilityComponentType="button"
                                accessibilityRole="button">
                                <View style={styles.drawerView}>
                                    <Text style={styles.drawerText}>Settings</Text>
                                </View>
                            </TouchableRipple>
                        </View>
                    </View>
                </DrawerContentScrollView>
        )
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingBottom: 5,
    },
    sectionSeperator: {
        height: 1,
        backgroundColor: '#354267',
        marginHorizontal: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 22,
        marginTop: 3,
        fontWeight: 'bold',
        color: Themes.mainColor
    },
    caption: {
        fontSize: 14,
        color: Themes.drawerAccentColor,
        marginTop: 5
    },
    caption2: {
        fontSize: 14,
        marginTop: 5,
        color: Themes.gray2
    },
    drawerLine: {
        marginTop: 5,
        backgroundColor: '#354267',
        flex: 1,//,
        height: 3,
        borderRadius: 2,
        flexDirection: 'row'
    },
    completedLine: {
        flex: 1,
        backgroundColor: Themes.drawerAccentColor
    },
    uncompletedLine: {
        flex: 5,
        backgroundColor: '#354267'
    },
    drawerView: {
        flexDirection: 'row', height: 40, alignItems: 'center', paddingHorizontal: 20, marginVertical: 6,
    },
    drawerText: {
        color: Themes.mainColor, fontSize: 16
    },
    drawerTitle: {
        color: Themes.drawerAccentColor, fontSize: 14, paddingHorizontal: 20
    },
    drawerSection: {
        marginTop: 15,
        color: Themes.drawerAccentColor
    },
});