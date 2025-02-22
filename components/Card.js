import React from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image } from 'react-native'
import { Text, View } from 'react-native'

export default function Card({ height, width, title, eHeight, eWidth }) {
    const styles = StyleSheet.create({
        container: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            height: height,
            width: width,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center'
        }
    })

    return (
        <View style={styles.container}>
            <Image source={require('../assets/card/emblem.png')} style={{
                height: eHeight,
                width: eWidth,

            }} />
        </View>
    )

}
