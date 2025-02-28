import React from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image } from 'react-native'
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Card({ cardheight, cardwidth, title, eHeight, eWidth, type ,style}) {
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
                style={[styles.gradientBorder, { height: cardheight, width: cardwidth, aspectRatio: 2/3 }]}
            >
            <View style={{
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                width: 300,
                height: 450, //make this dyanmic
                shadowColor: '#000',
                shadowOpacity: 0.2,
                shadowOffset: { width: 2, height: 2 },
                shadowRadius: 5,
                elevation: 5,
            }}>
                <Image source={require('./assets/emblem.png')} style={{
                    height: 300,
                    width: 150, //change this later
                    resizeMode : 'contain'
                }} />
                <Text style={{
                    fontSize:20,
                    color:"black",
                    marginTop: 10,
                }}>{title}</Text>
            </View>
            </LinearGradient>
            </View>
        </View>
    )

}