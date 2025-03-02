import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Lekton_400Regular } from '@expo-google-fonts/lekton';
import { LeagueSpartan_400Regular } from '@expo-google-fonts/league-spartan';

export default function Card({ cardheight, cardwidth, question, correctOption, eHeight, eWidth, title, options, style, handleCancel, handleOK }) {
    const [option, setOption] = useState(options != 0 ? options : [])
    // console.log(typeof(options))
    const [fontsLoaded] = useFonts({
        Lekton_400Regular,
        LeagueSpartan_400Regular
    });
    const styles = StyleSheet.create({
        container: {
            // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            height: cardheight,
            width: cardwidth,
            position: 'absolute',
            bottom: "10%",
            // right:10
            // left:
            // right:"10%"
            // alignItems: 'center',
            // justifyContent: 'center',
            //remove thi slater
            // marginTop : '30%',
            // alignSelf : 'center'
        },
        gradientBorder: {
            borderRadius: 12,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })
    return (
        <View style={[style, styles.container]}>
            <View style={{
                height: cardheight + 12,
                width: cardwidth + 12,
                backgroundColor: 'white',
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <LinearGradient
                    colors={['#E63946', '#B8B8FF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[styles.gradientBorder, { height: cardheight, width: cardwidth }]}
                >
                    <View style={{
                        borderRadius: 10,
                        backgroundColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: cardwidth - 12,
                        height: cardheight - 12,//make this dyanmic
                        shadowColor: '#000',
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 2, height: 2 },
                        shadowRadius: 5,
                        elevation: 5,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: '3%'
                        }}>
                            <View style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                width:125
                            }}>
                                <Image source={require('../assets/module.png')} style={{ height: '45%', width: '40%', alignSelf: 'center' }} />
                                <Text style={{ marginRight: '3%', fontFamily: 'Lekton_400Regular', color: '#B50714',fontSize:18}}>{title}</Text>
                            </View>
                            <Text style={{
                                fontSize: 15,
                                color: "black",
                                marginBottom: '5%',
                                fontFamily: 'LeagueSpartan_400Regular',
                                textAlign: 'justify',
                                backgroundColor: '#E0DDDD',
                                borderRadius: 5,
                                padding: 7,
                                width:240
                            }}>{question}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            // Allows items to wrap to the next row
                            justifyContent: 'space-around'
                        }}>
                            <View style={{
                                width: cardwidth,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}>
                                <TouchableWithoutFeedback onPress={handleCancel}>
                                    <View style={{
                                        height: 35,
                                        width: 100,
                                        borderRadius: 5,
                                        backgroundColor: 'rgba(255,9,9,0.3)',
                                        justifyContent: 'center',
                                        padding: 2,
                                        alignItems: 'center',
                                        borderWidth:1,
                                        borderColor:"rgb(255,9,9)"
                                    }}><Text style={{
                                        fontFamily: 'LeagueSpartan_400Regular',
                                        alignSelf: 'center',
                                        fontSize:16
                                    }}>Cancel</Text></View>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={handleOK}>
                                    <View style={{
                                        height: 35,
                                        width: 100,
                                        borderRadius: 5,
                                        backgroundColor: 'rgba(180,255,136,0.5)',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: 2,
                                        borderWidth:1,
                                        borderColor:'rgb(180,255,136)'

                                    }}><Text style={{
                                        fontFamily: 'LeagueSpartan_400Regular',
                                        alignSelf: 'center',
                                        fontSize:16
                                    }}>Play</Text></View>
                                </TouchableWithoutFeedback>

                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        </View>
    );

}
