// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Platform, StatusBar , Dimensions} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setComfirmPassword] = useState('')

  const [userResp, setUserResp] = useState("Proceed")
  async function handleProceed() {
    console.log('name = ', name)
    console.log('email = ', email)
    console.log('password = ', password)
    let response = await fetch("https://9tj0pwqw-5000.inc1.devtunnels.ms/signup", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: name,
        email: email,
        password: password
      })
    })
    let data = await response.json()
    setUserResp(data)
    // data = await response.json()
    console.warn(data)
  }

  return (
    <ScrollView style={styles.outerContainer}>
      <KeyboardAvoidingView>
        <View style={styles.container}>

          <Image source={require('../assets/signup/Rectangle_1.png')} style={styles.flag1}></Image>
          <Image source={require('../assets/signup/Rectangle_2.png')} style={styles.flag2}></Image>
          <Image source={require('../assets/signup/chakra2.png')} style={styles.bg1}></Image>
          <Image source={require('../assets/signup/chakra1.png')} style={styles.bg2}></Image>
          <Image source={require('../assets/signup/chakra3.png')} style={styles.bg3}></Image>
          <View style={styles.borderContainer}>
            <Text style={styles.text}>BHARAT VIDHI</Text>
            <Text style={styles.signUp}>SIGN UP</Text>;
            <View style={styles.rectangleView}>
              <TextInput style={styles.inputField} placeholder='Email-id' value={email} onChangeText={(text) => setEmail(text)} />
            </View>
            <View style={styles.rectangleView}>
              <TextInput style={styles.inputField} placeholder='Name' value={name} onChangeText={(text) => setName(text)} /></View>
            <View style={styles.rectangleView}>
              <TextInput style={styles.inputField} placeholder='Password' value={password} onChangeText={(text) => setPassword(text)} /></View>
            <View style={styles.rectangleView}>
              <TextInput style={styles.inputField} placeholder='Confirm Password' value={confirmPassword} onChangeText={(text) => setComfirmPassword(text)} /></View>
            <View style={styles.rectangleIcon} />;
            <TouchableWithoutFeedback onPress={handleProceed}><View style={styles.proceedBox}><Text style={styles.proceedText}>{userResp}</Text></View></TouchableWithoutFeedback>
            <View style={styles.google}><Text style={styles.googleText}>Sign Up using Google
              {/* <Image source={require('./assets/Search.png')} style={styles.googleImage}></Image> */}
            </Text>
            </View>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.toLogin}>Already have a account?
              <Text style={styles.logIn}>Log in!</Text></Text>


            </View>
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
    lineHeight: 70,
    fontFamily: "itim",
    color: "#a596ff",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 122,
    paddingTop: "8%"
  },
  rectangleView: {
    borderRadius: 15,
    backgroundColor: "#ffeedd",
    width: "90%",
    height: "8%",
    opacity: 0.5,
    paddingTop: 20,
    marginBottom: 20
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
    marginTop: "3%",
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
    top: 0,
    resizeMode: 'contain',
    opacity: 0.7
  },
  bg2: {
    position: 'absolute',
    right: 0,
    top: 70,
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
