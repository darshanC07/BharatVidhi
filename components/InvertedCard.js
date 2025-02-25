import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, View } from 'react-native'

export default function Card({ cardheight, cardwidth, question, correctOption, eHeight, eWidth, title, options, style, handleCancel, handleOK }) {
    const [option, setOption] = useState(options != 0 ? options : [])
    // console.log(typeof(options))
    const styles = StyleSheet.create({
        container: {
            // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            height: cardheight,
            width: cardwidth,
            borderColor: 'black',
            borderWidth: 2,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white'
        }
    })
    return (
        <View style={[style, styles.container]}>
            <Text>Module : {title}</Text>
            <Text style={{
                fontSize: 10,
                color: "black"
            }}>{question}</Text>

            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap', // Allows items to wrap to the next row
                justifyContent: 'space-around'
            }}>
                <View style={{
                    width: cardwidth,
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <TouchableWithoutFeedback onPress={handleCancel}>
                        <View style={{
                            height: 20,
                            width: 50,
                            backgroundColor: 'lightblue',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text>Cancel</Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOK}>
                        <View style={{
                            height: 20,
                            width: 50,
                            backgroundColor: 'lightblue',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text>OK</Text></View>
                    </TouchableWithoutFeedback>

                </View>
            </View>

        </View>
    )

}
