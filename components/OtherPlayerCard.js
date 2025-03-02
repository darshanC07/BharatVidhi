import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Lekton_400Regular } from '@expo-google-fonts/lekton';
import * as ScreenOrientation from "expo-screen-orientation";
import { useNavigation } from "@react-navigation/native";

export default function Card({ cardheight, cardwidth, question, correctOption, eHeight, eWidth, title, options, style, handleOptionClick }) {
    const [option, setOption] = useState(options != 0 ? options : [])
    // console.log(typeof(options))
    const [fontsLoaded] = useFonts({
        Lekton_400Regular,
    });
    const styles = StyleSheet.create({
        container: {
            // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            alignSelf: 'center',
            height: cardwidth,
            width: cardheight,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
            marginBottom: -55
            // marginTop : '5%'
            // position:'absolute',
            // top:"1%"
        },
        gradientBorder: {
            borderRadius: 12,
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
    return (
        <View style={[style, styles.container]}>
            <View style={{
                height: cardwidth + 20,
                width: cardheight + 20,
                backgroundColor: 'white',
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <LinearGradient
                    colors={['#8A2BE2', '#FFFFFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.gradientBorder, { height: cardwidth - 5, width: cardheight - 5 }]}
                >
                    <View style={{
                        borderRadius: 10,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: cardheight - 18,
                        height: cardwidth - 18, //make this dyanmic
                        shadowColor: '#000',
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius: 5,
                        elevation: 5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '3%',
                            // padding:3
                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '3%',
                                width: '50%'
                            }}>
                                <Image source={require('../assets/module.png')} style={{ height: '30%', width: '40%', alignSelf: 'center' }} />
                                <View style={{
                                    marginBottom: '10%',
                                    alignSelf: 'center'
                                }}>
                                    <Text style={{ fontFamily: 'Lekton_400Regular', color: '#B50714', fontSize: 18, textAlign: 'center', }}>{title}</Text>
                                    <Text style={{
                                        fontSize: 12,
                                        color: "black",
                                        fontFamily: 'LeagueSpartan_400Regular',
                                        textAlign: 'center',
                                        backgroundColor: '#E0DDDD',
                                        borderRadius: 5,
                                        padding: 7
                                    }}>{question}</Text>
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                marginRight: 10
                            }}>
                                {options != 0 ?
                                    options.map((item, i) => {
                                        // console.log(item);
                                        return (
                                            < TouchableWithoutFeedback onPress={()=>handleOptionClick(i+1)}>
                                            <View key={i} style={{
                                                height: 40,
                                                width: 160,
                                                borderRadius: 10,
                                                backgroundColor: "#425B7F",
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: 20
                                            }}>
                                                <Text key={i} style={{
                                                    fontSize: 10,
                                                    fontFamily: 'Lekton_400Regular',
                                                    color: "white"
                                                }}>{item}</Text>
                                            </View></TouchableWithoutFeedback>)
                                    }) : <View></View>}
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View >
        </View >
    )
}
