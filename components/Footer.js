import React, { useState } from 'react'
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { Text, View, Image, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'

export default function Footer() {
    const navigation = useNavigation()
    let defaultState = {
        icon1: false,
        icon2: false,
        icon3: false,
        icon4: false,
        icon5: false
    }
    let homeSelected = defaultState
    homeSelected.icon3 = true
    const [tabBar, setTabBar] = useState({
        icon1: false,
        icon2: false,
        icon3: true,
        icon4: false,
        icon5: false
    })

    function handlePress(i) {
        let temp = defaultState
        temp.icon3 = false
        let icon = "icon" + i
        temp[icon] = true
        setTabBar(temp)
        console.log(tabBar)
    }
    return (
        <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 60,
            backgroundColor: 'lightblue',
            position: 'absolute',
            bottom: 0,
            // top:0,
            left: 0,
            right: 0,
            paddingLeft: 20,
            paddingRight: 20,
        }}>
            <TouchableWithoutFeedback onPress={() => { handlePress(1) 
                navigation.navigate('CivicMastery')
             }} >
                <View style={tabBar.icon1 ? styles.onClickStyle : styles.highLightEffect}>
                    <Image source={require('../assets/icon1.png')} style={styles.imageSize} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { handlePress(2) }} >
                <View style={tabBar.icon2 ? styles.onClickStyle : styles.highLightEffect}>
                    <Image source={require('../assets/icon2.png')} style={styles.imageSize} />
                </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { handlePress(3) }} >
                <View style={tabBar.icon3 ? styles.onClickStyle : styles.highLightEffect}>
                    <Image source={require('../assets/icon3.png')} style={styles.imageSize} />
                </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { handlePress(4) }} >
                <View style={tabBar.icon4 ? styles.onClickStyle : styles.highLightEffect}>
                    <Image source={require('../assets/icon4.png')} style={styles.imageSize} />
                </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { handlePress(5) }} >
                <View style={tabBar.icon5 ? styles.onClickStyle : styles.highLightEffect}>
                    <Image source={require('../assets/icon5.png')} style={styles.imageSize} />
                </View></TouchableWithoutFeedback>


        </View>
    )

}

let styles = StyleSheet.create({
    highLightEffect: {
        height: 60,
        backgroundColor: 'lightblue',
        paddingTop: 5,
        alignContent: 'center',
        alignItems: 'center',
    },
    onClickStyle: {
        bottom: 15,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        backgroundColor: 'lightblue',
    },
    imageSize: {
        height: 52,
        width: 52
    }
})