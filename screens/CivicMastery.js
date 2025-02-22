import React, { Component, useState, useEffect } from 'react'
import { Text, View, SafeAreaView, StatusBar, StyleSheet, Platform, Image, Dimensions, BackHandler, TouchableWithoutFeedback } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation';
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { io } from 'socket.io-client';

export default function CivicMastery() {
    const navigation = useNavigation()

    //for getting orientation in initial state and then rotating to landscape if it was portrait
    const [orientation, setOrientation] = useState()
    const [height, setHeight] = useState()
    const [width, setWidth] = useState()
    async function changeScreenOrientation() {
        let currentOrientation = await ScreenOrientation.getOrientationAsync();
        setOrientation(currentOrientation)
        if (orientation == 1) {
            await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
            console.log(Dimensions.get('window').height, Dimensions.get('window').width)
            Dimensions.get('window').height > Dimensions.get('window').width ? setHeight(Dimensions.get('window').width) : setHeight(Dimensions.get('window').height)
            setWidth(Dimensions.get('window').width)
        } else {
            console.log(Dimensions.get('window').height, Dimensions.get('window').width)
            setHeight(Dimensions.get('window').height)
            setWidth(Dimensions.get('window').width)
        }
    }
    changeScreenOrientation()

    //for changing orientation back to portrait if user press back button
    async function handleBackButton() {
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
        navigation.replace("Homepage")
    }
    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => backHandler.remove();
    }, []);

    const [serverState, setServerState] = React.useState('Loading...');
    const [messageText, setMessageText] = React.useState('');
    const [disableButton, setDisableButton] = React.useState(true);
    const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
    const [serverMessages, setServerMessages] = React.useState([]);

    //websocket connection
    let socket;
    const [messages, setMessages] = useState([])

    useEffect(() => {

        // create websocket
        socket = io('https://9tj0pwqw-5000.inc1.devtunnels.ms/');
        socket.on("connect",()=>{
            console.log("connected")
            socket.emit("message","hello from client")

        })

        socket.on("chat", (chat) => {
            setMessages(messages => [...messages, chat])
        })

        return (() => {
            socket.disconnect()
            console.log("disconnect")
        })
    }, [])


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar hidden />

            <View>
                <Image source={require('../assets/civicMastery/gameBg.png')} style={{
                    height: height + 10,
                    width: width + 55
                }}></Image>
                <TouchableWithoutFeedback ><Image source={require('../assets/civicMastery/bench.png')} style={styles.bench}></Image></TouchableWithoutFeedback>
                <Image source={require('../assets/civicMastery/rightBench.png')} style={{
                    position: 'absolute',
                    left: '80%',
                    bottom: '0.1%',
                    opacity: 0.7
                }}></Image>
                <Image source={require('../assets/civicMastery/leftBench.png')} style={{
                    position: 'absolute',
                    // left:'85%',
                    bottom: '0.1%',
                    opacity: 0.7
                }}></Image>
                <Image source={require('../assets/civicMastery/topBench.png')} style={{
                    position: 'absolute',
                    // left:'85%',
                    // justifyContent:'center',
                    top: 0,
                    left: '25%',
                    bottom: '0.1%',
                    opacity: 0.7
                }}></Image>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    gameBg: {
        height: Dimensions.get('window').height + 10,
        width: Dimensions.get('window').width + 55
    },
    bench: {
        position: 'absolute',
        bottom: 0,
        left: '7%'
    }
})