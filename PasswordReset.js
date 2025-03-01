// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Platform, StatusBar , Dimensions, Alert} from 'react-native';

export default function App() {

  return (
    <ScrollView style={styles.outerContainer}>
      <KeyboardAvoidingView>
        <View style={styles.container}>

          <Image source={require('./assets/Rectangle_1.png')} style={styles.flag1}></Image>
          <Image source={require('./assets/Rectangle_2.png')} style={styles.flag2}></Image>
          <Image source={require('./assets/chakra2.png')} style={styles.bg1}></Image>
          <Image source={require('./assets/chakra1.png')} style={styles.bg2}></Image>
          <Image source={require('./assets/chakra3.png')} style={styles.bg3}></Image>
          <View style={styles.borderContainer}>
            <Text style={styles.text}>BHARAT VIDHI</Text>
            <Text style={styles.logIn}>CHANGE PASSWORD</Text>;
            <View style={styles.rectangleView}>
              <TextInput style={styles.inputField} placeholder='Email-id'/>
            </View>
            <TouchableWithoutFeedback onPress={handleProceed}><View style={styles.proceedBox}><Text style={styles.proceedText}>SEND LINK</Text></View></TouchableWithoutFeedback>
          </View>
        </View></KeyboardAvoidingView>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginTop:Platform.OS == "android" ? StatusBar.currentHeight:0
  
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  borderContainer: {
    width: '90%',
    height: '93%',
    borderWidth: 5,
    borderColor: '#FFDCB9',
    borderRadius: 10,
    padding: 20,
    paddingTop:0,
    marginTop: "10%",
    marginBottom: "5%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 45,
    paddingTop: "18%",
    display: "flex",
    width: 200,
    fontWeight: "bold",
    color: '#232ED1',
    textAlign: "center",
    lineHeight: 50,
    textAlignVertical: "center",
    fontFamily: "monospace",
  },
  logIn: {
    fontSize: 24,
    fontFamily: "itim",
    color: "#a596ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    paddingTop: "8%",
    marginTop : '10%',
    marginBottom : '50%'
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "8%",
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: '30%'
  },
  fieldText: {
    fontSize: 15,
    color: "#242424",
    textAlign: "left",
    paddingLeft: 20,
    paddingBottom: 5,
    display: "flex",
    alignItems: "center"
  },
  proceedBox: {
    height: "5%",
    width: "30%",
    backgroundColor: "#B8B8FF",
    marginTop: "15%",
    opacity: 0.5,
    borderRadius: 10,
    borderColor: "#B8B8FF",
    borderWidth: 2,
  },
  proceedText: {
    textAlign: "center",
    color: "#232ED1",
    paddingTop: "8%",
    fontWeight: "bold"
  },
  google: {
    backgroundColor: "rgba(189, 184, 179, 0.25)",
    width: "70%",
    height: "4.5%",
    marginTop: "8%",
    opacity: 0.5,
    borderWidth: 0.5,
    borderRadius: 5
  },
  googleText: {
    textAlign: "center",
    verticalAlign: 'middle'
  },
  googleImage: {
    alignSelf: 'flex-end',
    verticalAlign: 'middle',
    opacity: 1
  },
  toSignUp: {
    marginTop: 20
  },
  signUp: {
    textDecorationLine: "underline"
  },
  flag1: {
    top: '13%',
    position: 'absolute',
    resizeMode: 'contain'
  },
  flag2: {
    top: '20%',
    position: 'absolute',
    resizeMode: 'contain'
  },
  bg1: {
    position: 'absolute',
    right: 0,
    top: 70,
    resizeMode: 'contain',
    opacity: 0.7
  },
  bg2: {
    position: 'absolute',
    right: 0,
    top: 0,
    resizeMode: 'contain',
    opacity: 0.95
  },
  bg3: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    resizeMode: 'contain',
    opacity: 0.8
  }
});