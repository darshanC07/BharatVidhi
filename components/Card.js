import React from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image } from 'react-native'
import { Text, View } from 'react-native'

export default function Card({ cardheight, cardwidth, title, eHeight, eWidth, type ,style}) {
    const styles = StyleSheet.create({
        container: {
            marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            height: cardheight,
            width: cardwidth,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'white'
        }
    })

    return (
        <View style={[style,styles.container]}>
            <Image source={require('../assets/card/emblem.png')} style={{
                height: eHeight,
                width: eWidth,

            }} />
            <Text style={{
                fontSize:20,
                color:"black"
            }}>{title}</Text>
        </View>
    )

}
