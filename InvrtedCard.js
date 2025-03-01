import React, { useEffect, useState } from 'react'
import { Dimensions, Platform, StyleSheet, StatusBar, Image, TouchableWithoutFeedback } from 'react-native'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Lekton_400Regular } from '@expo-google-fonts/lekton';
import { LeagueSpartan_400Regular } from '@expo-google-fonts/league-spartan';

export default function Card({ cardheight=250, cardwidth=150, question='....question....?', correctOption=2, eHeight=20, eWidth=20, title='MODULE', options, style, handleCancel, handleOK }) {
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
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf : 'center'
        },
      gradientBorder: {
          borderRadius: 15,
          padding: 15,
          alignItems: 'center',
          justifyContent: 'center',
      },
    })
    return (
        <View style={[style, styles.container]}>
          <View style={{height: cardheight + 12,
                      width: cardwidth + 12,
                      backgroundColor: 'white',
                      borderRadius: 15,
                      alignItems: 'center',
                      justifyContent: 'center',
                  }}>
                      <LinearGradient
                          colors={['#E63946', '#B8B8FF']}
                          start={{ x: 0, y: 0 }}
                          end={{ x: 1, y: 1 }}
                          style={[styles.gradientBorder, { height: cardheight, width: cardwidth}]}
                      >
                      <View style={{
                          borderRadius: 12,
                          backgroundColor: 'white',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: cardwidth-12,
                          height: cardheight-12,//make this dyanmic
                          shadowColor: '#000',
                          shadowOpacity: 0.2,
                          shadowOffset: { width: 2, height: 2 },
                          shadowRadius: 5,
                          elevation: 5,
                      }}>
            <Image source={require('./assets/module.png')} style={{height : '20%', width : '35%', alignSelf : 'center'}}/>
            <Text style={{margin:'5%', fontFamily:'Lekton_400Regular', color : '#B50714'}}>{title}</Text>
            <Text style={{
                fontSize: 12,
                color: "black",
                marginBottom : '5%',
                fontFamily : 'LeagueSpartan_400Regular',
                textAlign : 'justify'
            }}>{question}</Text>

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
                            height: 20,
                            width: 50,
                            borderRadius : 5,
                            backgroundColor: '#E0DDDD',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}><Text style={{
                            fontFamily:'LeagueSpartan_400Regular'
                        }}>cancel</Text></View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleOK}>
                        <View style={{
                            height: 20,
                            width: 50,
                            borderRadius : 5,
                            backgroundColor: '#E0DDDD',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}><Text style={{
                            fontFamily:'LeagueSpartan_400Regular'
                        }}>ok</Text></View>
                    </TouchableWithoutFeedback>

                </View>
            </View>
            </View>
          </LinearGradient>
          </View>
        </View>
    );

}
