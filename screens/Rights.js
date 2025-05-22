import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView, Image, Platform, PixelRatio, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Footer from '../components/Footer';
import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect } from "react";

export default function Rights() {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        height: 50,
        flexDirection: "row",
        verticalAlign: 'top',
        marginTop: '13%',
        paddingRight: 20,
        paddingLeft: 20
      }}>
        <Text style={{
          fontSize: 25,
          color: '#232ED1',
          fontWeight: 'bold',
          textAlign: 'left',
        }}>BHARAT VIDHI</Text>

        <View style={{
          flex: 1,
          justifyContent: 'space-around',
          flexDirection: "row",
          alignSelf: "stretch",
          marginLeft: '16%'
        }}>
          <Image source={require('../assets/notification.png')} styles={styles.icon}></Image>
          <Image source={require('../assets/coins.png')} styles={styles.icon}></Image>
          <Image source={require('../assets/profile.png')} styles={[styles.icon, { height: 40, width: 40 }]}></Image>
        </View>
      </View>
      <ScrollView style={styles.scroll} ref={scrollViewRef}>
        <ImageBackground source={require('../assets/R8.png')} style={styles.each}>

          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 12
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 374, left: 207, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 11
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 600, left: 130, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/R7.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 10
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 574, left: 98, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 9
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 170, left: 175, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/R6.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 8
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 252, left: 205, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 7
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 490, left: 100, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/R5.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 6
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 620, left: 120, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 5
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 245, left: 200, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/R4.png')} style={styles.each}><TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "rights",
              node: 4
            })
          }}>
          <Image source={require('../assets/play.png')} style={{ top: 415, left: 230, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
        </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/R3.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 3
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 255, left: 128, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/rights2.png')} style={styles.each}>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 2
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: 465, left: 125, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              console.log("clicked"); navigation.navigate('Learning', {
                map: "rights",
                node: 1
              })
            }}>
            <Image source={require('../assets/play.png')} style={{ top: -56, left: 199, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
          </TouchableOpacity>
        </ImageBackground>
        <ImageBackground source={require('../assets/rights1.png')} style={styles.each}><TouchableOpacity onPress={() => {
            console.log("clicked"); navigation.navigate('Learning', {
              map: "rights",
              node: 0
            })
          }}>
          <Image source={require('../assets/play.png')} style={{ top: 220, left: 40, zIndex: 1, width: 40, height: 40, zIndex: 1 }} ></Image>
        </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
      <Footer></Footer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  point: {
    height: 40,
    width: 40,
    backgroundColor: 'pink',
    borderRadius: 50,

  },
  icon: {
    height: 100,
    width: 100,
  },
  each: {
    width: 340,
    height: 669,
    resizeMode: 'cover',
    zIndex: 0
  },
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  scroll: {
    width: 340,
    borderRadius: 10,
    marginTop: '5%',
    marginBottom: '22%',

  }
});