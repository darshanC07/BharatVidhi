import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'

export default function Footer() {
    let defaultState = {
        icon1:false,
        icon2:false,
        icon3:false,
        icon4:false,
        icon5:false
    }
    const [tabBar,setTabBar] = useState(defaultState)


    function handlePress(i){
        let temp = defaultState
        let icon = "icon"+i
        temp[icon] = true
        setTabBar(temp)
        // console.log(tabBar)
    }
    return (
        <View style={{
            // flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 65,
            backgroundColor: '#FFD8BE',
            position: 'absolute',
            bottom: 0,
            // top:0,
            left: 0,
            right: 0,
            paddingLeft: 20,
            paddingRight: 20,
            borderTopColor : '#FFD7B0',
            borderTopLeftRadius : 10,
            borderTopRightRadius : 10
        }}>
            <TouchableWithoutFeedback onPress={()=>{handlePress(1)}} >
                <View style={tabBar.icon1? styles.onClickStyle:styles.highLightEffect}>
                    <Image source={require('./assets/icon1.png')} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{handlePress(2)}} >
            <View style={tabBar.icon2? styles.onClickStyle:styles.highLightEffect}>
                <Image source={require('./assets/icon2.png')} />
            </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{handlePress(3)}} >
            <View style={tabBar.icon3? styles.onClickStyle:styles.highLightEffect}>
                <Image source={require('./assets/icon3.png')}/>
            </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{handlePress(4)}} >
            <View style={tabBar.icon4? styles.onClickStyle:styles.highLightEffect}>
                <Image source={require('./assets/icon4.png')} />
            </View></TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={()=>{handlePress(5)}} >
            <View style={tabBar.icon5? styles.onClickStyle:styles.highLightEffect}>
                <Image source={require('./assets/icon5.png')} />
            </View></TouchableWithoutFeedback>


        </View>
    )

}

let styles = StyleSheet.create({
    highLightEffect: {
        height: 70,
        backgroundColor: '#FFD7B0',
        paddingTop: 5,
        width: 70,
        alignContent: 'center',
        alignItems: 'center',
    },
    onClickStyle: {
        bottom: 15,
        borderBottomLeftRadius: '50%',
        borderBottomRightRadius: '50%',
        borderTopLeftRadius: '50%',
        borderTopRightRadius: '50%',
        backgroundColor : '#FFD7B0',
        borderWidth : 15,
        borderColor : '#FFD7B0'
    }
})