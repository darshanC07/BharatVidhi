import React from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image } from 'react-native'
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card({ cardheight, cardwidth, title, eHeight, eWidth, type ,style,other}) {
    const styles = StyleSheet.create({
        container: {
            alignItems : 'center',
            justifyContent : 'center',
        },
        gradientBorder: {
            borderRadius: 15,
            padding: 15,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    return (
        <View style={[style,styles.container]}>
        <View style={{height: cardheight + 10,
            width: cardwidth + 10,
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            padding : 10
        }}>
            <LinearGradient
                colors={['#8A2BE2', '#FFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.gradientBorder, { height: cardheight, width: cardwidth}]}
            >
            <View style={{
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                height: cardheight - 6,
                width: cardwidth - 6,
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 5,
                elevation: 5,
            }}>{
                other?<Image source={require('../assets/card/emblem.png')} style={{
                    marginTop:15,
                    height: 60,
                    width: 60, //change this later
                    resizeMode : 'contain'
                }} />:<Image source={require('../assets/card/emblem.png')} style={{
                    height: 90,
                    width: 100, //change this later
                    resizeMode : 'contain'
                }} />
            }
                
                <Text style={{
                    fontSize:16,
                    color:"black",
                    marginTop: 10,
                }}>{title}</Text>
            </View>
            </LinearGradient>
            </View>
        </View>
    )

}