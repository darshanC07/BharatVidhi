import { StyleSheet, Text, View, Image, Platform, StatusBar, TouchableOpacity,ScrollView, Alert } from 'react-native';
import Footer from '../components/Footer';
import React, { useState } from 'react';
// import { } from 'react-native-gesture-handler';
import { useFonts, PatrickHandSC_400Regular } from '@expo-google-fonts/patrick-hand-sc';
import { LexendGiga_400Regular } from "@expo-google-fonts/lexend-giga";
import { Lexend_800ExtraBold } from "@expo-google-fonts/lexend";
import { Itim_400Regular } from "@expo-google-fonts/itim";

const ProgressBar = ({ progress }) => {
    return (
    <View style={{
        marginBottom : '5%',
        alignItems: 'center'
        }}>
        <View style={{
            width: '90%',
            height: 5,
            backgroundColor: '#C9C0FF',
            borderRadius: 5,
            overflow: 'hidden',
            marginTop : '5%',
        }}>
        <View style={{ 
            width: `${progress}%`,
            height : '100%',
            backgroundColor : '#9381FF',
        }}/>
      </View>
      </View>
    );
  };


export default function Option({text, index, isCorrect, handleCorrect,currentCardIndex}) {
    const [fontsLoaded] = useFonts({
        LexendGiga_400Regular,
        Lexend_800ExtraBold
    });
    return (
        <TouchableOpacity style={{
            width : '80%',
            backgroundColor : '#8FDAFF',
            alignItems : 'center',
            alignSelf : 'center',
            flexDirection : 'row',
            borderRadius : 15,
            marginBottom : '5%',
            padding : 12,
            flexWrap : 'wrap'
        }} onPress={() => {
            console.log(index)
            console.log("correct : ",isCorrect)
            if (index  == isCorrect) {
                console.log("correct answer")
                // setIndex(index=>index+1)
                Alert.alert("Hurraayyy!!!","Correct Answer")
                handleCorrect(currentCardIndex+1)
            } else {
                console.log("wrong answer")
                Alert.alert("Hard Luck!!Try Better")
            }
        }}
        >
            <View style={{
                marginLeft : '2%',
            }}><Text style={{
                fontSize : 12,
                fontWeight : '800',
                color : '#1D3557',
                fontFamily : 'Lexend_800ExtraBold'
            }}>{index}</Text>
            </View>
            <Text style={{
                fontSize : 12,
                color : '#1D3557',
                textAlign : 'justify',
                marginLeft : '6%',
                flexShrink : 1,
                maxWidth : '80%',
                fontFamily : 'LexendGiga_400Regular'
            }}>{text}</Text>
        </TouchableOpacity>
    );
};

 

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow : 1,
        padding : 15,
    },
    resultMessage : {
        fontSize : 12,
        color : '#1d3557',
        textAlign : 'center',
        fontFamily : 'Itim_400Regular'
    },
    resultContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 6,
        borderRadius: 20,
        marginHorizontal: 20,
        width: '90%',
        alignSelf: 'center',
        marginBottom : '5%'
    },
    correctBg: {
        backgroundColor: 'rgba(25, 255, 0, 0.15)',
    },
    wrongBg: {
        backgroundColor: 'rgba(255, 9, 9, 0.15)',
    },
});